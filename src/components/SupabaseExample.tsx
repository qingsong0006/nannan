import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// 收藏夹项目类型定义
interface Favorite {
  id: string;
  name: string;
  category: string;
  description: string;
  image_url: string;
}

const SupabaseExample = () => {
  // 状态管理
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 从Supabase获取数据
  const fetchFavorites = async () => {
    try {
      setLoading(true);
      
      // 从favorites表获取所有记录
      const { data, error } = await supabase
        .from('favorites')
        .select('*');
      
      // 处理错误
      if (error) {
        console.error('获取数据错误:', error);
        setError('无法加载数据。请检查数据库连接。');
        return;
      }
      
      // 更新状态
      setFavorites(data || []);
      setError(null);
    } catch (err) {
      console.error('发生异常:', err);
      setError('发生意外错误。请稍后再试。');
    } finally {
      setLoading(false);
    }
  };

  // 组件加载时获取数据
  useEffect(() => {
    fetchFavorites();
  }, []);

  // 添加新收藏
  const addFavorite = async () => {
    // 示例数据
    const newFavorite = {
      name: '新收藏项',
      category: '其他',
      description: '这是一个测试项目',
      image_url: 'https://example.com/image.jpg'
    };

    try {
      // 插入新记录到favorites表
      const { data, error } = await supabase
        .from('favorites')
        .insert(newFavorite)
        .select();
      
      if (error) {
        console.error('添加数据错误:', error);
        setError('添加数据失败。请检查数据库权限。');
        return;
      }
      
      // 更新本地状态
      if (data && data.length > 0) {
        setFavorites(prev => [...prev, data[0]]);
      }
      
    } catch (err) {
      console.error('添加时发生异常:', err);
      setError('添加数据时发生错误。');
    }
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="bg-white/20 backdrop-blur-md border-white/30">
        <CardHeader>
          <CardTitle className="text-white">Supabase 数据示例</CardTitle>
        </CardHeader>
        <CardContent>
          {/* 错误提示 */}
          {error && (
            <div className="bg-red-500/20 text-white p-4 rounded-md mb-4">
              {error}
            </div>
          )}
          
          {/* 加载状态 */}
          {loading ? (
            <div className="text-white text-center p-4">加载中...</div>
          ) : (
            <>
              {/* 数据列表 */}
              <div className="grid gap-4 mb-4">
                {favorites.length === 0 ? (
                  <p className="text-white/80 text-center">暂无数据。请添加一些收藏。</p>
                ) : (
                  favorites.map((item) => (
                    <div 
                      key={item.id}
                      className="bg-white/10 p-4 rounded-md flex justify-between items-center"
                    >
                      <div>
                        <h3 className="text-white font-medium">{item.name}</h3>
                        <p className="text-white/70 text-sm">{item.description}</p>
                        <span className="bg-white/20 text-xs text-white px-2 py-1 rounded-full mt-1 inline-block">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
              
              {/* 操作按钮 */}
              <Button 
                onClick={addFavorite}
                className="bg-gradient-to-r from-dream-blue to-dream-purple text-white"
              >
                添加示例数据
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SupabaseExample; 