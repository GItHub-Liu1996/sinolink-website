# Notion API 集成设置指南

## 概述

智能咨询问卷系统现在支持将数据保存到Notion数据库中，就像邮件订阅功能一样。

## 环境变量配置

在您的 `.env.local` 文件中添加以下环境变量：

```bash
# Notion API Configuration
NOTION_API_KEY=your_notion_api_key_here
NOTION_DATABASE_ID=your_newsletter_database_id_here
NOTION_CONSULTATION_DATABASE_ID=your_consultation_database_id_here
```

## 设置步骤

### 1. 获取Notion API Key

1. 访问 [Notion Developers](https://www.notion.so/my-integrations)
2. 创建新的集成 (Integration)
3. 复制生成的API Key

### 2. 创建Notion数据库

#### 邮件订阅数据库 (可选，如果使用相同的数据库)
- 数据库名称：`Newsletter Subscriptions`
- 字段：
  - `Email` (Title)
  - `Name` (Rich Text)
  - `Source` (Select)
  - `Status` (Select)
  - `Date` (Date)

#### 咨询问卷数据库 (推荐单独创建)
- 数据库名称：`Consultation Leads`
- 字段：
  - `Company Name` (Title)
  - `Contact Name` (Rich Text)
  - `Email` (Email)
  - `Phone` (Rich Text)
  - `Industry` (Select)
  - `Company Size` (Select)
  - `Entity Type` (Select)
  - `Timeline` (Select)
  - `Priority` (Select)
  - `Recommended Services` (Rich Text)
  - `Analysis Summary` (Rich Text)
  - `Next Steps` (Rich Text)
  - `Source` (Select)
  - `Status` (Select)
  - `Date` (Date)
  - `Full Answers` (Rich Text)

### 3. 获取数据库ID

1. 在Notion中打开您的数据库
2. 复制URL中的数据库ID (32位字符串)
3. 将ID添加到环境变量中

### 4. 分享数据库给集成

1. 在数据库页面点击右上角的 "Share"
2. 选择您创建的集成
3. 给予 "Can edit" 权限

## 数据字段说明

### 咨询问卷保存的数据包括：

- **基本信息**：公司名称、联系人、邮箱、电话
- **业务信息**：行业、公司规模、实体类型、时间线
- **智能分析**：优先级、推荐服务、分析摘要、下一步行动
- **完整答案**：所有问卷答案的JSON格式
- **元数据**：来源、状态、日期

### Select字段的选项值：

- **Industry**: 科技/互联网, 制造业, 金融服务, 零售/电商, 咨询服务, 其他
- **Company Size**: 初创企业 (1-10人), 小型企业 (11-50人), 中型企业 (51-200人), 大型企业 (200+人)
- **Entity Type**: 外商独资企业 (WFOE), 合资企业, 代表处, 不确定，需要咨询
- **Timeline**: 3个月内 (紧急), 3-6个月, 6-12个月, 1年以上 (规划阶段)
- **Priority**: high, medium, low
- **Source**: Consultation Quiz
- **Status**: New Lead

## 测试

配置完成后，您可以通过以下方式测试：

1. 访问网站首页
2. 点击右下角的浮动咨询按钮
3. 完成问卷
4. 检查Notion数据库是否收到新记录

## 故障排除

### 如果没有配置Notion API：
- 数据会保存到服务器控制台日志
- API仍然返回成功响应
- 不会影响用户体验

### 常见错误：
- **401 Unauthorized**: 检查API Key是否正确
- **404 Not Found**: 检查数据库ID是否正确
- **403 Forbidden**: 确保数据库已分享给集成

## 数据管理

### 在Notion中管理咨询线索：
1. 查看所有提交的咨询请求
2. 根据优先级和行业筛选
3. 更新状态跟踪跟进进度
4. 导出数据用于CRM系统

### 自动化工作流建议：
1. 设置Notion自动化规则
2. 高优先级线索自动发送通知
3. 定期生成咨询报告
4. 与CRM系统集成
