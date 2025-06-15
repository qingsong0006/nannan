
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const FutureAdventures = () => {
  const [completedPlans, setCompletedPlans] = useState<number[]>([]);

  const futurePlans = [
    {
      id: 1,
      title: '百变小樱蛋糕',
      description: '一起制作可爱的百变小樱生日蛋糕，享受烘焙的乐趣',
      emoji: '🍰',
      category: '甜蜜时光',
      difficulty: '⭐⭐⭐'
    },
    {
      id: 2,
      title: '寻找最正宗的辣咖喱',
      description: '探索城市里的每一家正宗印度/泰式餐厅，找到你最爱的那一款',
      emoji: '🍛',
      category: '美食探险',
      difficulty: '⭐⭐'
    },
    {
      id: 3,
      title: '玲娜贝儿主题写真',
      description: '和你心爱的玲娜贝儿一起拍一套超可爱的主题写真',
      emoji: '📸',
      category: '回忆收集',
      difficulty: '⭐⭐'
    },
    {
      id: 4,
      title: '猫咪咖啡馆约会',
      description: '去有12色矮脚蓝金渐层的猫咪咖啡馆，和小可爱们一起度过午后时光',
      emoji: '🐾',
      category: '可爱治愈',
      difficulty: '⭐'
    },
    {
      id: 5,
      title: '紫色布依族服饰写真',
      description: '穿上美丽的紫色布依族服饰，在最美的地方留下最美的回忆',
      emoji: '👘',
      category: '民族风情',
      difficulty: '⭐⭐⭐'
    },
    {
      id: 6,
      title: '喜茶新品品鉴师',
      description: '成为喜茶的忠实粉丝，一起品尝每一款新上市的饮品',
      emoji: '🍫',
      category: '甜蜜时光',
      difficulty: '⭐'
    },
    {
      id: 7,
      title: '三丽鸥主题乐园',
      description: '去日本的三丽鸥乐园，在HelloKitty的世界里尽情玩耍',
      emoji: '🎡',
      category: '梦想旅行',
      difficulty: '⭐⭐⭐⭐'
    },
    {
      id: 8,
      title: '巧克力品尝',
      description: '学习制作你最爱的黑松露巧克力',
      emoji: '🍫',
      category: '甜蜜时光',
      difficulty: '⭐⭐⭐⭐'
    }
  ];

  const toggleComplete = (planId: number) => {
    setCompletedPlans(prev =>
      prev.includes(planId)
        ? prev.filter(id => id !== planId)
        : [...prev, planId]
    );
  };

  const categories = [...new Set(futurePlans.map(plan => plan.category))];

  return (
    <section className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-dancing font-bold text-white mb-4">
            我们的未来冒险清单 🌟
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            那些我想和你一起完成的美好计划，等待着我们去实现
          </p>
        </div>

        {/* 进度统计 */}
        <Card className="bg-white/20 backdrop-blur-md border-white/30 mb-8 max-w-md mx-auto">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="text-white font-bold text-xl mb-2">完成进度</h3>
            <div className="text-2xl font-bold text-white mb-2">
              {completedPlans.length} / {futurePlans.length}
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500"
                style={{
                  width: `${(completedPlans.length / futurePlans.length) * 100}%`
                }}
              ></div>
            </div>
            <p className="text-white/70 text-sm mt-2">
              {completedPlans.length === 0 ? '让我们开始第一个冒险吧！' :
               completedPlans.length === futurePlans.length ? '哇！我们完成了所有计划！' :
               '继续加油，更多美好等着我们！'}
            </p>
          </CardContent>
        </Card>

        {/* 分类展示 */}
        {categories.map(category => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                {category}
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {futurePlans
                .filter(plan => plan.category === category)
                .map(plan => (
                  <Card
                    key={plan.id}
                    className={`backdrop-blur-md border-white/30 card-hover transition-all duration-300 ${
                      completedPlans.includes(plan.id)
                        ? 'bg-green-500/20 border-green-300/40'
                        : 'bg-white/20'
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-4xl">{plan.emoji}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-white/70 text-sm">{plan.difficulty}</span>
                          <Button
                            size="sm"
                            variant={completedPlans.includes(plan.id) ? "default" : "ghost"}
                            onClick={() => toggleComplete(plan.id)}
                            className={`w-8 h-8 p-0 ${
                              completedPlans.includes(plan.id)
                                ? 'bg-green-500 hover:bg-green-600'
                                : 'text-white hover:bg-white/20'
                            }`}
                          >
                            {completedPlans.includes(plan.id) ? '✅' : '○'}
                          </Button>
                        </div>
                      </div>
                      <CardTitle className="text-white font-bold text-lg">
                        {plan.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {plan.description}
                      </p>
                      {completedPlans.includes(plan.id) && (
                        <div className="mt-3 text-center">
                          <span className="bg-green-500/30 text-green-100 px-3 py-1 rounded-full text-sm font-medium">
                            ✨ 已完成 ✨
                          </span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}

        {/* 新增计划提示 */}
        <Card className="bg-white/20 backdrop-blur-md border-white/30 max-w-2xl mx-auto mt-8">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-3">💡</div>
            <h3 className="text-white font-bold text-xl mb-2">更多冒险等待中...</h3>
            <p className="text-white/80">
              这只是开始！随着我们一起度过更多时光，
              这个清单还会不断增加更多有趣的计划。
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FutureAdventures;
