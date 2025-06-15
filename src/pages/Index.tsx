import { useState, useRef, useEffect } from 'react';
import { Heart, Music, Star, Home, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import FavoritesSection from '@/components/FavoritesSection';
import OurStory from '@/components/OurStory';
import FutureAdventures from '@/components/FutureAdventures';
import SpecialGifts from '@/components/SpecialGifts';
import SupabaseExample from '@/components/SupabaseExample';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const musicSrc = 'https://music.jsbaidu.com/hot/2010/09-16/397528.mp3';

  useEffect(() => {
    const audio = new Audio(musicSrc);
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    const handleAudioEnd = () => setIsPlaying(false);
    audio.addEventListener('ended', handleAudioEnd);

    return () => {
      audio.pause();
      audio.removeEventListener('ended', handleAudioEnd);
    };
  }, [musicSrc]);

  const handlePlayToggle = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.error("音乐播放失败:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const sections = [
    { id: 'home', name: '首页', icon: Home },
    { id: 'favorites', name: '楠楠的最爱', icon: Heart },
    { id: 'story', name: '我们的故事', icon: Star },
    { id: 'future', name: '未来计划', icon: Star },
    { id: 'gifts', name: '神秘礼物', icon: Heart },
    { id: 'supabase', name: '数据示例', icon: Database },
  ];

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Hero onNavigate={setCurrentSection} isPlaying={isPlaying} onPlayToggle={handlePlayToggle} />;
      case 'favorites':
        return <FavoritesSection />;
      case 'story':
        return <OurStory />;
      case 'future':
        return <FutureAdventures />;
      case 'gifts':
        return <SpecialGifts />;
      case 'supabase':
        return <SupabaseExample />;
      default:
        return <Hero onNavigate={setCurrentSection} isPlaying={isPlaying} onPlayToggle={handlePlayToggle} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dream-blue via-dream-purple to-pink-400">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="container mx-auto px-2 py-2 md:px-4 md:py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-dancing font-bold text-white">
              💖 楠楠的奇妙世界 💖
            </h1>
            <Button
              variant="ghost"
              size="sm"
              onClick={handlePlayToggle}
              className="text-white hover:bg-white/20 px-2"
            >
              <Music size={16} />
            </Button>
          </div>
          <div className="overflow-x-auto scrollbar-none pb-1 mt-1 md:mt-2">
            <div className="flex space-x-2 md:justify-center">
              {sections.map(({ id, name, icon: Icon }) => (
                <Button
                  key={id}
                  variant={currentSection === id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setCurrentSection(id)}
                  className={`text-white shrink-0 hover:bg-white/20 px-2 ${
                    currentSection === id ? 'bg-white/20' : ''
                  }`}
                >
                  <Icon size={14} className="md:mr-1" />
                  <span className="text-xs md:text-sm hidden md:inline">{name}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 md:pt-28">
        {renderSection()}
      </main>

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 text-2xl md:text-4xl animate-float">🦊</div>
        <div className="absolute top-1/3 right-1/4 text-xl md:text-3xl animate-bounce-gentle">💜</div>
        <div className="absolute bottom-1/4 left-1/3 text-xl md:text-2xl animate-float">🍫</div>
        <div className="absolute bottom-1/3 right-1/3 text-xl md:text-3xl animate-bounce-gentle">🐾</div>
        <div className="absolute top-1/2 left-1/6 text-xl md:text-2xl animate-float hidden sm:block">🌟</div>
        <div className="absolute top-2/3 right-1/6 text-xl md:text-2xl animate-bounce-gentle hidden sm:block">🎵</div>
      </div>
    </div>
  );
};

export default Index;
