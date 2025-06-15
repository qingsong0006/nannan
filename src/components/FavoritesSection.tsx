
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const FavoritesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const favorites = {
    food: [
      { name: '喜茶杨枝甘露', emoji: '🍫', description: '永远的经典' },
      { name: '芒芒甘露', emoji: '🥭', description: '奶茶界的Top1' },
      { name: '比利时黑松露巧克力', emoji: '🍫', description: '入口即化的甜蜜' },
      { name: '原汁原味辣咖喱', emoji: '🍛', description: '不要改良版！' },
      { name: '青柠味薯片', emoji: '🍟', description: '清新的味道' },
      { name: '榴莲面包', emoji: '🥖', description: '爱面包不爱榴莲' },
      { name: '草莓味 & 芒果味', emoji: '🍓', description: '最爱的水果味道' },
    ],
    characters: [
      { name: '玲娜贝儿全套', emoji: '🦊', description: '可爱到爆炸' },
      { name: '三丽鸥家族', emoji: '🐰', description: '卡哇伊的朋友们' },
      { name: '黄油小熊', emoji: '🧸', description: '软萌的小可爱' },
      { name: 'HelloKitty', emoji: '🐱', description: '永远的经典' },
    ],
    lifestyle: [
      { name: '紫色布依族服饰', emoji: '👘', description: '最美的民族风' },
      { name: '蓝色系搭配', emoji: '💙', description: '最爱的颜色' },
      { name: '12色矮脚蓝金渐层', emoji: '🐾', description: '最可爱的猫咪' },
      { name: '2岁的汤圆', emoji: '🍡', description: '抖音上的小天使' },
      { name: '北海流浪记', emoji: '🌊', description: '有趣的旅行日记' },
    ]
  };

  const categories = [
    { id: 'all', name: '全部', emoji: '✨' },
    { id: 'food', name: '美食天地', emoji: '🍽️' },
    { id: 'characters', name: '可爱角色', emoji: '🦊' },
    { id: 'lifestyle', name: '生活喜好', emoji: '💫' },
  ];

  const getFilteredFavorites = () => {
    if (selectedCategory === 'all') {
      return [...favorites.food, ...favorites.characters, ...favorites.lifestyle];
    }
    return favorites[selectedCategory as keyof typeof favorites] || [];
  };

  return (
    <section className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-dancing font-bold text-white mb-4">
            楠楠的最爱收藏馆 💖
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            这里收藏着楠楠所有的喜好，每一样都是楠楠独特品味的体现
          </p>
        </div>

        {/* 分类按钮 */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "ghost"}
              onClick={() => setSelectedCategory(category.id)}
              className={`text-white hover:bg-white/20 ${
                selectedCategory === category.id ? 'bg-white/30' : ''
              }`}
            >
              <span className="mr-2">{category.emoji}</span>
              {category.name}
            </Button>
          ))}
        </div>

        {/* 收藏品网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredFavorites().map((item, index) => (
            <Card
              key={index}
              className="bg-white/20 backdrop-blur-md border-white/30 card-hover floating-hearts"
            >
              <CardHeader className="text-center">
                <div className="text-6xl mb-2">{item.emoji}</div>
                <CardTitle className="text-white font-bold text-lg">
                  {item.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/80">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 特别禁忌区 */}
        <Card className="bg-red-500/20 backdrop-blur-md border-red-300/30 mt-8 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-white text-center flex items-center justify-center">
              <span className="mr-2">⚠️</span>
              绝对不能碰的禁忌
              <span className="ml-2">⚠️</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl mb-2">🥕</div>
                <p className="text-white font-bold">胡萝卜</p>
                <p className="text-white/70 text-sm">完全不能接受</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl mb-2">🧊</div>
                <p className="text-white font-bold">冰水</p>
                <p className="text-white/70 text-sm">特殊时期绝对禁止</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FavoritesSection;
