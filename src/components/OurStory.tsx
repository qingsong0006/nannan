
import { Card,CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const OurStory = () => {
  const timeline = [
    {
      date: '2024.8.1',
      title: '我们的开始',
      description: '这一天，我们的故事正式开始了。从那时起，你就成了我生活中最重要的人。',
      emoji: '💕',
      color: 'from-pink-400 to-red-400'
    },
    {
      date: '每一天',
      title: '用心记录',
      description: '我开始记录你的每一个喜好，每一个小习惯，因为对我来说，关于你的一切都很重要。',
      emoji: '📝',
      color: 'from-blue-400 to-purple-400'
    },
    {
      date: '特殊的日子',
      title: '贴心守护',
      description: '学会在你需要的时候给你最温暖的关怀，即使是最细微的身体变化也要用心照顾。',
      emoji: '🤗',
      color: 'from-green-400 to-blue-400'
    },
    {
      date: '今天',
      title: '生日快乐',
      description: '在这个特别的日子里，我想告诉你，遇见你是我最大的幸运。',
      emoji: '🎂',
      color: 'from-yellow-400 to-pink-400'
    },
    {
      date: '未来',
      title: '永远在一起',
      description: '我们还有无数个明天要一起度过，还有很多美好等着我们去创造。',
      emoji: '∞',
      color: 'from-purple-400 to-pink-400'
    }
  ];

  return (
    <section className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-dancing font-bold text-white mb-4">
            我们的故事 💝
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            从第一天到现在，每一个时刻都值得被珍藏
          </p>
        </div>

        {/* 时间轴 */}
        <div className="relative">
          {/* 中心线 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-400 via-purple-400 to-blue-400 rounded-full"></div>

          {timeline.map((event, index) => (
            <div key={index} className="relative mb-12">
              {/* 时间轴节点 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                <span className="text-lg">{event.emoji}</span>
              </div>

              {/* 内容卡片 */}
              <div className={`${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'} w-1/2`}>
                <Card 
                  className={`bg-gradient-to-r ${event.color} bg-opacity-20 backdrop-blur-md border-white/30 card-hover`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white font-bold text-xl">
                        {event.title}
                      </CardTitle>
                      <span className="text-white/70 font-medium text-sm bg-white/20 px-3 py-1 rounded-full">
                        {event.date}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/90 leading-relaxed">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* 特殊回忆卡片 */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white/20 backdrop-blur-md border-white/30 card-hover">
            <CardHeader>
              <CardTitle className="text-white text-center">
                <span className="text-2xl mr-2">🦊</span>
                玲娜贝儿情缘
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-white/80">
                从知道你喜欢玲娜贝儿的那一刻起，我就想要收集全套送给你，
                因为看到你开心的笑容，是我最大的快乐。
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/20 backdrop-blur-md border-white/30 card-hover">
            <CardHeader>
              <CardTitle className="text-white text-center">
                <span className="text-2xl mr-2">🍫</span>
                奶茶约会
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-white/80">
                每次路过喜茶，都会想起你对杨枝甘露和芒芒甘露的喜爱。
                下次一起去品尝更多口味吧！
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
