# 品牌标识和Favicon更新指南

## 📱 推荐的图片尺寸和格式

### Favicon 文件
- **favicon.ico**: 16x16, 32x32, 48x48 像素 (多尺寸ICO文件)
- **apple-icon.png**: 180x180 像素 (Apple设备)
- **icon.png**: 192x192 像素 (Android设备)
- **icon-512.png**: 512x512 像素 (高分辨率)

### 格式要求
- **ICO**: 用于favicon.ico (支持多尺寸)
- **PNG**: 用于所有其他图标 (透明背景)
- **SVG**: 用于矢量图标 (可选)

## 🎨 设计建议

### 颜色方案
- **主色**: 青色 (#00D4FF) - 与网站主题一致
- **辅色**: 洋红色 (#FF006E) - 渐变效果
- **背景**: 深色 (#0B1120) - 与网站背景一致

### 设计元素
- 简洁的几何形状
- 可识别的字母组合 (如 "CB" 或 "CBS")
- 现代商务风格
- 在小尺寸下仍然清晰可见

## 📁 文件放置位置

### 当前结构
```
src/app/
├── favicon.ico (已存在)
└── ...

public/
├── images/
└── ...
```

### 推荐结构
```
src/app/
├── favicon.ico
├── apple-icon.png
├── icon.png
└── icon-512.png

public/
├── images/
├── apple-icon.png
├── icon.png
├── icon-512.png
└── manifest.json (PWA支持)
```

## 🔧 实施步骤

### 步骤1: 准备图标文件
1. 使用设计工具 (Figma, Adobe Illustrator, 或在线工具) 创建图标
2. 确保图标在不同尺寸下都清晰可见
3. 导出为所需格式和尺寸

### 步骤2: 替换现有文件
```bash
# 替换favicon.ico
cp your-favicon.ico src/app/favicon.ico

# 添加Apple图标
cp your-apple-icon.png src/app/apple-icon.png
cp your-apple-icon.png public/apple-icon.png

# 添加Android图标
cp your-icon.png src/app/icon.png
cp your-icon.png public/icon.png

# 添加高分辨率图标
cp your-icon-512.png src/app/icon-512.png
cp your-icon-512.png public/icon-512.png
```

### 步骤3: 更新manifest.json
创建或更新 `public/manifest.json`:
```json
{
  "name": "ChinaBiz Solutions",
  "short_name": "ChinaBiz",
  "description": "Your Gateway to the China Market",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0B1120",
  "theme_color": "#00D4FF",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### 步骤4: 更新layout.tsx
在 `src/app/layout.tsx` 中添加图标链接:
```tsx
export const metadata: Metadata = {
  // ... 其他元数据
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};
```

## 🎯 在线工具推荐

### Favicon生成器
- [Favicon.io](https://favicon.io/) - 免费favicon生成器
- [RealFaviconGenerator](https://realfavicongenerator.net/) - 专业favicon生成
- [Favicon Generator](https://www.favicon-generator.org/) - 多格式支持

### 图标设计
- [Figma](https://figma.com) - 专业设计工具
- [Canva](https://canva.com) - 简单易用的设计平台
- [IconFinder](https://iconfinder.com) - 图标素材库

## ✅ 验证清单

- [ ] favicon.ico 已更新
- [ ] Apple图标 (180x180) 已添加
- [ ] Android图标 (192x192, 512x512) 已添加
- [ ] 所有图标在不同设备上显示正常
- [ ] manifest.json 已配置
- [ ] layout.tsx 元数据已更新
- [ ] 图标与网站品牌一致

## 🚀 测试方法

### 浏览器测试
1. 清除浏览器缓存
2. 访问网站首页
3. 检查浏览器标签页图标
4. 检查书签图标

### 移动设备测试
1. 在手机浏览器中访问网站
2. 添加到主屏幕
3. 检查主屏幕图标显示

### 在线验证
- [Favicon Checker](https://realfavicongenerator.net/favicon_checker)
- [Web App Manifest Validator](https://manifest-validator.appspot.com/)

## 📝 注意事项

1. **缓存问题**: 更新favicon后可能需要清除浏览器缓存
2. **文件大小**: 保持图标文件尽可能小以提高加载速度
3. **兼容性**: 确保图标在不同浏览器和设备上正常显示
4. **品牌一致性**: 图标应与网站整体设计风格保持一致
