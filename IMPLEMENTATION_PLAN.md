# 网站功能扩展实施计划

## 🌍 多语言支持实施

### 阶段1：基础配置（1-2天）

#### 1.1 安装和配置 next-intl
```bash
npm install next-intl
```

#### 1.2 创建语言配置文件
```typescript
// src/i18n/config.ts
export const locales = ['en', 'de', 'es', 'fr', 'ja', 'ko', 'zh'] as const;
export const defaultLocale = 'en' as const;
export type Locale = typeof locales[number];
```

#### 1.3 创建翻译文件结构
```
src/messages/
├── en.json          # 英语（默认）
├── de.json          # 德语
├── es.json          # 西班牙语
├── fr.json          # 法语
├── ja.json          # 日语
├── ko.json          # 韩语
└── zh.json          # 中文
```

#### 1.4 配置中间件
```typescript
// src/middleware.ts
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed'
});
```

### 阶段2：内容翻译（3-5天）

#### 2.1 翻译优先级
1. **高优先级**：导航、按钮、表单标签
2. **中优先级**：服务描述、博客标题
3. **低优先级**：详细内容、案例研究

#### 2.2 翻译工具推荐
- **DeepL API**：高质量机器翻译
- **Google Translate API**：成本效益高
- **专业翻译服务**：关键内容人工翻译

### 阶段3：SEO优化（1-2天）

#### 3.1 多语言URL结构
```
https://sinolink.monster/           # 英语（默认）
https://sinolink.monster/de/        # 德语
https://sinolink.monster/es/        # 西班牙语
https://sinolink.monster/fr/        # 法语
https://sinolink.monster/ja/        # 日语
https://sinolink.monster/ko/        # 韩语
https://sinolink.monster/zh/        # 中文
```

#### 3.2 hreflang 标签配置
```html
<link rel="alternate" hreflang="en" href="https://sinolink.monster/" />
<link rel="alternate" hreflang="de" href="https://sinolink.monster/de/" />
<link rel="alternate" hreflang="es" href="https://sinolink.monster/es/" />
```

---

## 📅 在线预约系统实施

### 阶段1：第三方集成（推荐，1-2天）

#### 1.1 Calendly 集成
```typescript
// src/components/BookingWidget.tsx
export default function BookingWidget() {
  return (
    <div className="calendly-inline-widget" 
         data-url="https://calendly.com/your-username/consultation"
         style={{ minWidth: '320px', height: '700px' }}>
    </div>
  );
}
```

#### 1.2 多语言预约页面
- 为每种语言创建独立的Calendly页面
- 配置服务类型和时长
- 设置时区和可用时间

### 阶段2：自建系统（可选，1-2周）

#### 2.1 数据库设计
```sql
-- 预约表
CREATE TABLE bookings (
  id UUID PRIMARY KEY,
  service_type VARCHAR(50),
  client_name VARCHAR(100),
  client_email VARCHAR(100),
  client_phone VARCHAR(20),
  preferred_date DATE,
  preferred_time TIME,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);

-- 服务类型表
CREATE TABLE services (
  id UUID PRIMARY KEY,
  name_en VARCHAR(100),
  name_de VARCHAR(100),
  name_es VARCHAR(100),
  duration_minutes INTEGER,
  price DECIMAL(10,2)
);
```

#### 2.2 API 端点
```typescript
// src/app/api/bookings/route.ts
export async function POST(request: Request) {
  const booking = await request.json();
  // 保存预约信息
  // 发送确认邮件
  // 同步到CRM
}
```

---

## 🎯 CRM系统集成

### 阶段1：HubSpot集成（推荐，1天）

#### 1.1 安装HubSpot SDK
```bash
npm install @hubspot/api-client
```

#### 1.2 配置集成
```typescript
// src/lib/hubspot.ts
import { Client } from '@hubspot/api-client';

const hubspotClient = new Client({
  accessToken: process.env.HUBSPOT_ACCESS_TOKEN
});

export async function createContact(contactData: any) {
  return await hubspotClient.crm.contacts.basicApi.create({
    properties: contactData
  });
}
```

#### 1.3 表单集成
```typescript
// src/components/ContactForm.tsx
const handleSubmit = async (data: FormData) => {
  // 保存到数据库
  await saveToDatabase(data);
  
  // 同步到HubSpot
  await createContact({
    email: data.email,
    firstname: data.firstName,
    lastname: data.lastName,
    company: data.company,
    phone: data.phone
  });
};
```

### 阶段2：自建CRM（可选，2-3周）

#### 2.1 技术栈
- **数据库**：Supabase PostgreSQL
- **认证**：Supabase Auth
- **管理界面**：React Admin
- **实时同步**：Supabase Realtime

#### 2.2 核心功能
- 客户信息管理
- 预约记录跟踪
- 邮件营销
- 销售漏斗
- 报告分析

---

## 📊 性能影响评估

### 多语言支持
- **包大小增加**：每种语言约 +50-100KB
- **首次加载**：几乎无影响（按需加载）
- **切换语言**：< 200ms
- **SEO影响**：正面（多语言URL）

### 预约系统
- **第三方集成**：无性能影响
- **自建系统**：+100-200KB
- **数据库查询**：< 100ms

### CRM集成
- **HubSpot集成**：+50KB
- **自建CRM**：+200-500KB
- **API调用**：< 500ms

---

## 💰 成本估算

### 开发成本
- **多语言支持**：$2,000-5,000
- **预约系统**：$1,000-3,000（第三方）或 $5,000-10,000（自建）
- **CRM集成**：$1,000-2,000（HubSpot）或 $8,000-15,000（自建）

### 运营成本（月）
- **翻译服务**：$50-200
- **Calendly Pro**：$8-16
- **HubSpot**：$0-50（免费版可用）
- **数据库**：$25-100

---

## 🎯 推荐实施顺序

### 第一阶段（立即开始）
1. **多语言支持**：使用 next-intl
2. **预约系统**：集成 Calendly
3. **CRM集成**：使用 HubSpot 免费版

### 第二阶段（1-2个月后）
1. 优化多语言内容
2. 添加更多预约选项
3. 升级CRM功能

### 第三阶段（3-6个月后）
1. 考虑自建系统
2. 添加高级功能
3. 集成更多工具

---

## 🚀 立即开始

您希望我先帮您实施哪个功能？我建议从**多语言支持**开始，因为：
1. 对现有网站影响最小
2. 可以立即提升用户体验
3. 为后续功能奠定基础
4. 实施成本相对较低

需要我为您创建具体的实施代码吗？
