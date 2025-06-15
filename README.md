# 楠楠的奇妙世界

## 项目信息

**URL**: https://lovable.dev/projects/5a0a3501-6ebe-4d14-982f-a056411c43de

## 如何在本地运行

要在本地运行这个项目，您需要遵循以下步骤：

```sh
# 步骤1：克隆仓库
git clone <项目Git地址>

# 步骤2：进入项目目录
cd <项目名称>

# 步骤3：安装必要的依赖
npm i

# 步骤4：创建环境变量文件
# 在项目根目录创建一个名为.env.local的文件，添加以下内容：
# VITE_SUPABASE_URL=你的Supabase项目URL
# VITE_SUPABASE_ANON_KEY=你的Supabase匿名密钥

# 步骤5：启动开发服务器
npm run dev
```

## Supabase数据库配置

1. 访问 [Supabase](https://supabase.com/) 并创建一个账户
2. 创建一个新项目
3. 在项目设置中找到项目URL和匿名密钥（anon key）
4. 将这些值添加到`.env.local`文件中
5. 使用`src/lib/supabase.ts`文件中的supabase客户端连接数据库

## 数据库表结构示例

为了让网站正常工作，您需要创建以下表：

1. `favorites` - 存储喜好信息
   - id: uuid (主键)
   - name: text
   - category: text
   - description: text
   - image_url: text

2. `stories` - 存储故事信息
   - id: uuid (主键)
   - title: text
   - date: timestamp
   - description: text
   - image_url: text

## 项目技术栈

本项目使用以下技术构建：

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Supabase

## 如何部署

可以通过[Lovable](https://lovable.dev/projects/5a0a3501-6ebe-4d14-982f-a056411c43de)平台分享和发布。

## 自定义域名

可以为Lovable项目连接自定义域名。

导航到项目 > 设置 > 域名，然后点击连接域名。

更多信息请访问：[设置自定义域名](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
