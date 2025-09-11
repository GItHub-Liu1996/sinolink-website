# Google Analytics 4 (GA4) 配置指南

## 📊 环境变量配置

### 本地开发环境

1. **创建 `.env.local` 文件**（如果不存在）：
```bash
# 在项目根目录创建
touch .env.local
```

2. **添加GA4环境变量**：
```env
# Google Analytics 4 Configuration
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 生产环境 (Vercel)

1. **登录Vercel控制台**：
   - 访问 [vercel.com](https://vercel.com)
   - 选择您的项目

2. **添加环境变量**：
   - 进入 **Settings** → **Environment Variables**
   - 点击 **Add New**
   - **Name**: `NEXT_PUBLIC_GA_ID`
   - **Value**: `G-XXXXXXXXXX`（您的实际GA4衡量ID）
   - **Environment**: 选择 `Production`, `Preview`, `Development`

## 🔧 获取GA4衡量ID

1. **访问Google Analytics**：
   - 登录 [analytics.google.com](https://analytics.google.com)

2. **创建或选择属性**：
   - 点击 **"管理"** (Admin)
   - 选择或创建 **"数据流"** (Data Stream)
   - 选择 **"网站"** (Web)

3. **获取衡量ID**：
   - 在数据流详情页面找到 **"衡量ID"**
   - 格式：`G-XXXXXXXXXX`

## ✅ 验证配置

### 本地测试
```bash
# 启动开发服务器
npm run dev

# 检查环境变量
echo $NEXT_PUBLIC_GA_ID
```

### 生产环境测试
1. 部署到Vercel
2. 打开网站
3. 使用浏览器开发者工具检查Network标签
4. 查找 `gtag/js` 请求

## 📈 功能特性

- ✅ **生产环境专用**：只在生产环境加载，避免开发时发送测试数据
- ✅ **异步加载**：使用 `next/script` 的 `afterInteractive` 策略
- ✅ **性能优化**：不阻塞页面渲染
- ✅ **自动页面跟踪**：自动跟踪页面浏览
- ✅ **与GTM兼容**：与现有Google Tag Manager共存

## 🚀 部署步骤

1. **配置环境变量**（如上所述）
2. **提交代码**：
```bash
git add .
git commit -m "feat: 添加Google Analytics 4集成"
git push origin main
```
3. **等待Vercel自动部署**
4. **验证GA4数据接收**

## 📊 预期结果

配置完成后，您将在Google Analytics中看到：
- 实时用户数据
- 页面浏览量
- 用户行为分析
- 流量来源
- 设备信息
- 地理位置数据
