const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeHeroImage() {
  const inputPath = path.join(__dirname, '../public/images/hero-background.webp');
  const outputPath = path.join(__dirname, '../public/images/hero-background-optimized.webp');
  
  if (!fs.existsSync(inputPath)) {
    console.log('❌ 找不到原始图片文件');
    return;
  }

  try {
    console.log('🚀 开始优化hero-background.webp...');
    
    // 获取原始图片信息
    const originalStats = fs.statSync(inputPath);
    console.log(`📊 原始文件大小: ${(originalStats.size / 1024).toFixed(2)} KB`);
    
    // 优化图片 - 针对移动端和桌面端的不同需求
    await sharp(inputPath)
      .resize({
        width: 1920,
        height: 1080,
        fit: 'cover',
        position: 'center'
      })
      .webp({
        quality: 60, // 降低质量以减小文件大小
        effort: 6,   // 提高压缩效率
        lossless: false,
        nearLossless: false,
        smartSubsample: true
      })
      .toFile(outputPath);
    
    // 检查优化后的文件大小
    const optimizedStats = fs.statSync(outputPath);
    const savings = ((originalStats.size - optimizedStats.size) / originalStats.size * 100).toFixed(1);
    
    console.log(`✅ 优化完成!`);
    console.log(`📊 优化后文件大小: ${(optimizedStats.size / 1024).toFixed(2)} KB`);
    console.log(`💰 节省空间: ${savings}% (${((originalStats.size - optimizedStats.size) / 1024).toFixed(2)} KB)`);
    
    // 备份原文件并替换
    const backupPath = path.join(__dirname, '../public/images/hero-background-original.webp');
    fs.copyFileSync(inputPath, backupPath);
    fs.copyFileSync(outputPath, inputPath);
    
    console.log(`🔄 已替换原文件，备份保存至: hero-background-original.webp`);
    
  } catch (error) {
    console.error('❌ 优化失败:', error);
  }
}

// 运行优化
optimizeHeroImage();
