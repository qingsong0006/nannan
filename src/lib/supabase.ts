import { createClient } from '@supabase/supabase-js'

// Supabase客户端配置
// 请替换为您自己的Supabase项目URL和匿名密钥
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// 创建Supabase客户端实例
export const supabase = createClient(supabaseUrl, supabaseKey) 