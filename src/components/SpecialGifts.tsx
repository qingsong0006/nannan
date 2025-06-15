
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const SpecialGifts = () => {
  const [isBoxOpened, setIsBoxOpened] = useState(false);
  const [revealedGifts, setRevealedGifts] = useState<number[]>([]);

  const gifts = [
    {
      id: 1,
      name: '蝴蝶镜片',
      emoji: '🔮',
      description: '每天看到它都能想到我的爱',
      category: '日常陪伴',
      delay: 0
    },
    {
      id: 2,
      name: '美丽的花束',
      emoji: '💐',
      description: '永远不会凋谢，代表我对你的爱也永远不会',
      category: '浪漫惊喜',
      delay: 200
    },
    {
      id: 3,
      name: '情侣围巾',
      emoji: '🧣',
      description: '以后会有的，冬天的时候，让我们的温暖相互传递',
      category: '温暖守护',
      delay: 400
    },
    {
      id: 4,
      name: '暖宫贴',
      emoji: '🌡️',
      description: '在你需要的时候，给你最贴心的关怀',
      category: '温暖守护',
      delay: 600
    },
    {
      id: 5,
      name: '暖身贴',
      emoji: '🔥',
      description: '让温暖随时陪伴着你',
      category: '温暖守护',
      delay: 800
    },
    {
      id: 6,
      name: '玲娜贝儿陶瓷挂件',
      emoji: '🦊',
      description: '当我不在身边时，让它陪伴你',
      category: '温暖守护',
      delay: 1000
    },
    {
      id: 7,
      name: '急救包',
      emoji: '🏥',
      description: '你的专属超人，随时待命保护你',
      category: '贴心照护',
      delay: 1200
    },
    {
      id: 8,
      name: '手写情书',
      emoji: '💌',
      description: '用最传统的方式，写下最真挚的话语',
      category: '浪漫惊喜',
      delay: 1400
    }
  ];

  const openGiftBox = () => {
    setIsBoxOpened(true);
    // 逐个显示礼物
    gifts.forEach((gift) => {
      setTimeout(() => {
        setRevealedGifts(prev => [...prev, gift.id]);
      }, gift.delay);
    });
  };

  const categories = [...new Set(gifts.map(gift => gift.category))];

  const categoryColors = {
    '日常陪伴': 'from-blue-400 to-purple-400',
    '浪漫惊喜': 'from-pink-400 to-red-400',
    '温暖守护': 'from-orange-400 to-yellow-400',
    '贴心照护': 'from-green-400 to-blue-400'
  };

  return (
    <section className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-dancing font-bold text-white mb-4">
            神秘礼物盒 🎁
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            为你精心准备的每一份礼物，都藏着我满满的爱意
          </p>
        </div>

        {/* 礼物盒动画 */}
        {!isBoxOpened ? (
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <div className="text-8xl animate-bounce-gentle cursor-pointer hover:scale-110 transition-transform duration-300">
                🎁
              </div>
              <div className="absolute -top-2 -right-2 text-2xl animate-float">✨</div>
              <div className="absolute -bottom-2 -left-2 text-2xl animate-bounce-gentle">💖</div>
            </div>
            <div className="mt-6">
              <Button
                onClick={openGiftBox}
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="mr-2">🎉</span>
                点击开启惊喜
                <span className="ml-2">🎉</span>
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🎊</div>
            <h3 className="text-2xl font-bold text-white mb-2">惊喜揭晓！</h3>
            <p className="text-white/80">每一份礼物都代表着我对你的爱 💕</p>
          </div>
        )}

        {/* 礼物展示 */}
        {isBoxOpened && (
          <div className="space-y-12">
            {categories.map(category => (
              <div key={category} className="space-y-6">
                <h3 className="text-2xl font-bold text-white text-center">
                  <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                    {category}
                  </span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gifts
                    .filter(gift => gift.category === category)
                    .map(gift => (
                      <Card
                        key={gift.id}
                        className={`backdrop-blur-md border-white/30 transition-all duration-700 ${
                          revealedGifts.includes(gift.id)
                            ? `opacity-100 translate-y-0 bg-gradient-to-br ${categoryColors[category as keyof typeof categoryColors]}/20`
                            : 'opacity-0 translate-y-8'
                        } card-hover`}
                        style={{
                          transitionDelay: `${gift.delay}ms`
                        }}
                      >
                        <CardHeader className="text-center">
                          <div className="text-6xl mb-3 animate-bounce-gentle">
                            {gift.emoji}
                          </div>
                          <CardTitle className="text-white font-bold text-lg">
                            {gift.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                          <p className="text-white/90 leading-relaxed">
                            {gift.description}
                          </p>
                          {revealedGifts.includes(gift.id) && (
                            <div className="mt-4">
                              <div className="inline-flex items-center bg-white/20 rounded-full px-3 py-1">
                                <span className="text-white/80 text-sm">充满爱意 💕</span>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 特别的话 */}
        {isBoxOpened && revealedGifts.length === gifts.length && (
          <Card className="bg-white/20 backdrop-blur-md border-white/30 max-w-3xl mx-auto mt-12 animate-fade-in">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-2xl font-dancing font-bold text-white mb-4">
                写给最珍贵的你
              </h3>
              <div className="text-white/90 leading-relaxed space-y-4">
                <p>
                  这些礼物只是我爱你的一小部分表达。真正珍贵的，
                  是我们一起度过的每一个平凡却美好的日子。
                </p>
                <p>
                  从记住你不喜欢胡萝卜和火腿肠，到知道你生理期的时候绝对不能喝冰水；
                  从玲娜贝儿到三丽鸥，从杨枝甘露到芒芒甘露...
                </p>
                <p className="font-bold text-xl">
                  我想要了解关于你的一切，因为你就是我的整个世界。
                </p>
                <p className="text-2xl font-dancing mt-6">
                  生日快乐，我最爱楠楠！🎂💖
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default SpecialGifts;
