const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeHeroForLCP() {
  const inputPath = path.join(__dirname, '../public/images/hero-background-original.webp');
  const outputPath = path.join(__dirname, '../public/images/hero-background-lcp.webp');
  
  if (!fs.existsSync(inputPath)) {
    console.log('❌ 找不到原始图片文件');
    return;
  }

  try {
    console.log('🚀 开始LCP优化...');
    
    // 获取原始图片信息
    const originalStats = fs.statSync(inputPath);
    console.log(`📊 原始文件大小: ${(originalStats.size / 1024).toFixed(2)} KB`);
    
    // 创建多个尺寸的图片用于响应式加载
    const sizes = [
      { width: 640, height: 360, suffix: '-mobile', quality: 50 },
      { width: 1024, height: 576, suffix: '-tablet', quality: 55 },
      { width: 1920, height: 1080, suffix: '-desktop', quality: 60 }
    ];
    
    for (const size of sizes) {
      const sizeOutputPath = path.join(__dirname, `../public/images/hero-background${size.suffix}.webp`);
      
      await sharp(inputPath)
        .resize({
          width: size.width,
          height: size.height,
          fit: 'cover',
          position: 'center'
        })
        .webp({
          quality: size.quality,
          effort: 6,
          lossless: false,
          nearLossless: false,
          smartSubsample: true,
          alphaQuality: 80
        })
        .toFile(sizeOutputPath);
      
      const sizeStats = fs.statSync(sizeOutputPath);
      const savings = ((originalStats.size - sizeStats.size) / originalStats.size * 100).toFixed(1);
      
      console.log(`✅ ${size.suffix} 优化完成: ${(sizeStats.size / 1024).toFixed(2)} KB (节省 ${savings}%)`);
    }
    
    // 创建主图片 - 更激进的压缩
    await sharp(inputPath)
      .resize({
        width: 1920,
        height: 1080,
        fit: 'cover',
        position: 'center'
      })
      .webp({
        quality: 45, // 更激进的压缩
        effort: 6,
        lossless: false,
        nearLossless: false,
        smartSubsample: true,
        alphaQuality: 70
      })
      .toFile(outputPath);
    
    // 检查优化后的文件大小
    const optimizedStats = fs.statSync(outputPath);
    const savings = ((originalStats.size - optimizedStats.size) / originalStats.size * 100).toFixed(1);
    
    console.log(`✅ LCP优化完成!`);
    console.log(`📊 主图片大小: ${(optimizedStats.size / 1024).toFixed(2)} KB`);
    console.log(`💰 节省空间: ${savings}% (${((originalStats.size - optimizedStats.size) / 1024).toFixed(2)} KB)`);
    
    // 替换主文件
    fs.copyFileSync(outputPath, path.join(__dirname, '../public/images/hero-background.webp'));
    
    console.log(`🔄 已替换主文件`);
    
  } catch (error) {
    console.error('❌ LCP优化失败:', error);
  }
}

// 运行优化
optimizeHeroForLCP();
