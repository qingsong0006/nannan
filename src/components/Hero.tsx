// 确保在文件顶部导入React Hooks
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface HeroProps {
  onNavigate?: (section: string) => void;
  isPlaying?: boolean; // 添加是否正在播放的状态
  onPlayToggle?: () => void; // 添加控制播放/暂停的回调函数
}

const Hero = ({ onNavigate, isPlaying = false, onPlayToggle }: HeroProps) => {
  const handleNavigation = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16 md:pt-0">
      <div className="text-center max-w-4xl mx-auto">
        {/* 主标题 */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-dancing font-bold text-white mb-2 md:mb-4 animate-bounce-gentle">
            生日快乐！
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-noto text-white/90 mb-4 md:mb-6">
            欢迎来到为你打造的专属世界 ✨
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed px-2">
            这里收藏着你所有的喜好，记录着我们的美好时光，
            也藏着我想要和你一起体验的所有未来...
          </p>
        </div>

        {/* 导航卡片 - 使用响应式网格 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8">
          <Card 
            className="bg-white/20 backdrop-blur-md border-white/30 card-hover cursor-pointer"
            onClick={() => handleNavigation('favorites')}
          >
            <CardContent className="p-3 md:p-6 text-center">
              <div className="text-2xl md:text-4xl mb-1 md:mb-3">💖</div>
              <h3 className="text-white font-bold text-sm md:text-base mb-1 md:mb-2">她的最爱</h3>
              <p className="text-white/80 text-xs md:text-sm">所有你喜欢的美好事物</p>
            </CardContent>
          </Card>

          <Card 
            className="bg-white/20 backdrop-blur-md border-white/30 card-hover cursor-pointer"
            onClick={() => handleNavigation('story')}
          >
            <CardContent className="p-3 md:p-6 text-center">
              <div className="text-2xl md:text-4xl mb-1 md:mb-3">📖</div>
              <h3 className="text-white font-bold text-sm md:text-base mb-1 md:mb-2">我们的故事</h3>
              <p className="text-white/80 text-xs md:text-sm">珍贵回忆的时光轨迹</p>
            </CardContent>
          </Card>

          <Card 
            className="bg-white/20 backdrop-blur-md border-white/30 card-hover cursor-pointer"
            onClick={() => handleNavigation('future')}
          >
            <CardContent className="p-3 md:p-6 text-center">
              <div className="text-2xl md:text-4xl mb-1 md:mb-3">🌟</div>
              <h3 className="text-white font-bold text-sm md:text-base mb-1 md:mb-2">未来计划</h3>
              <p className="text-white/80 text-xs md:text-sm">等待我们一起实现的美好</p>
            </CardContent>
          </Card>

          <Card 
            className="bg-white/20 backdrop-blur-md border-white/30 card-hover cursor-pointer"
            onClick={() => handleNavigation('gifts')}
          >
            <CardContent className="p-3 md:p-6 text-center">
              <div className="text-2xl md:text-4xl mb-1 md:mb-3">🎁</div>
              <h3 className="text-white font-bold text-sm md:text-base mb-1 md:mb-2">神秘礼物</h3>
              <p className="text-white/80 text-xs md:text-sm">为你准备的惊喜</p>
            </CardContent>
          </Card>
        </div>

        {/* 特殊日期纪念 */}
        <Card className="bg-white/20 backdrop-blur-md border-white/30 max-w-xs sm:max-w-md mx-auto mb-4 md:mb-8">
          <CardContent className="p-4 md:p-6 text-center">
            <div className="text-2xl md:text-3xl mb-2 md:mb-3">💕</div>
            <h3 className="text-white font-bold text-lg md:text-xl mb-1 md:mb-2">2024.8.1</h3>
            <p className="text-white/80 text-sm md:text-base">我们的故事开始的日子</p>
          </CardContent>
        </Card>

        {/* 音乐播放器样式 */}
        <Card className="bg-white/20 backdrop-blur-md border-white/30 max-w-xs sm:max-w-md mx-auto music-note">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg md:text-xl">🎵</span>
                </div>
                <div className="text-left">
                  {/* 歌曲信息可以根据播放状态动态改变 */}
                  <h4 className="text-white font-bold text-sm md:text-base">{isPlaying ? "正在播放..." : "凭什么说"}</h4>
                  <p className="text-white/70 text-xs md:text-sm">楠楠最喜欢的歌曲</p>
                </div>
              </div>
              {/* 使用从props传入的播放控制函数 */}
              <Button
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                onClick={onPlayToggle}
              >
                {/* 根据isPlaying状态显示播放或暂停图标 */}
                {isPlaying ? '⏸️' : '▶️'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Hero;