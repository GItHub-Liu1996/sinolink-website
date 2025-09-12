#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 图片优化配置
const OPTIMIZATION_CONFIG = {
  hero: {
    widths: [640, 768, 1024, 1280, 1920],
    quality: 75,
    formats: ['webp', 'avif'],
    sizes: '(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw'
  },
  blog: {
    widths: [400, 600, 800],
    quality: 80,
    formats: ['webp', 'avif'],
    sizes: '(max-width: 400px) 100vw, (max-width: 600px) 100vw, (max-width: 800px) 100vw, 100vw'
  },
  logo: {
    widths: [32, 64, 128, 256],
    quality: 90,
    formats: ['webp', 'png'],
    sizes: '(max-width: 32px) 32px, (max-width: 64px) 64px, (max-width: 128px) 128px, 256px'
  }
};

async function optimizeImage(inputPath, outputDir, config) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  
  console.log(`优化图片: ${inputPath}`);
  
  for (const width of config.widths) {
    for (const format of config.formats) {
      const outputPath = path.join(outputDir, `${filename}-${width}w.${format}`);
      
      try {
        let pipeline = sharp(inputPath).resize(width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        });

        if (format === 'webp') {
          pipeline = pipeline.webp({ quality: config.quality });
        } else if (format === 'avif') {
          pipeline = pipeline.avif({ quality: config.quality });
        } else if (format === 'png') {
          pipeline = pipeline.png({ quality: config.quality });
        }

        await pipeline.toFile(outputPath);
        console.log(`  ✓ 生成: ${outputPath}`);
      } catch (error) {
        console.error(`  ✗ 错误: ${outputPath}`, error.message);
      }
    }
  }
}

async function optimizeHeroImage() {
  const inputPath = path.join(__dirname, '../public/images/hero-background.webp');
  const outputDir = path.join(__dirname, '../public/images/optimized');
  
  // 确保输出目录存在
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  if (fs.existsSync(inputPath)) {
    await optimizeImage(inputPath, outputDir, OPTIMIZATION_CONFIG.hero);
  } else {
    console.log(`警告: 找不到文件 ${inputPath}`);
  }
}

async function main() {
  console.log('🚀 开始图片优化...');
  
  try {
    await optimizeHeroImage();
    console.log('✅ 图片优化完成!');
  } catch (error) {
    console.error('❌ 图片优化失败:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { optimizeImage, OPTIMIZATION_CONFIG };
