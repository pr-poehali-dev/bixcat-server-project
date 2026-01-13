import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]">
      <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center neon-border">
                <span className="text-2xl">🐱</span>
              </div>
              <h1 className="text-2xl font-bold text-primary neon-text">BixCat</h1>
            </div>
            
            <div className="hidden md:flex gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'home' ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'about' ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                О сервере
              </button>
              <button
                onClick={() => scrollToSection('rules')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'rules' ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                Правила
              </button>
            </div>

            <Button 
              onClick={() => window.open('https://t.me/ArtemisMuraev', '_blank')}
              className="bg-primary hover:bg-primary/90 text-background font-semibold glow-hover"
            >
              <Icon name="Send" size={16} className="mr-2" />
              Telegram
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="text-8xl mb-6 animate-bounce">⛏️</div>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6 text-primary neon-text">
            BixCat
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-6 max-w-2xl mx-auto">
            Лучший Minecraft сервер выживания с дружным комьюнити
          </p>
          
          <Card className="bg-card/40 backdrop-blur border-primary/40 p-6 inline-block mb-8 neon-border">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-3">
                <Icon name="Server" size={24} className="text-primary" />
                <div className="text-left">
                  <p className="text-sm text-foreground/60 mb-1">IP-адрес сервера:</p>
                  <p className="text-xl font-bold text-primary font-mono">BixCat.aternos.me:16863</p>
                </div>
              </div>
              <Button
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText('BixCat.aternos.me:16863');
                }}
                className="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/40"
              >
                <Icon name="Copy" size={16} className="mr-2" />
                Скопировать
              </Button>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              onClick={() => scrollToSection('about')}
              className="bg-primary hover:bg-primary/90 text-background font-bold text-lg px-8 glow-hover"
            >
              <Icon name="PlayCircle" size={20} className="mr-2" />
              Начать играть
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.open('https://t.me/ArtemisMuraev', '_blank')}
              className="border-primary text-primary hover:bg-primary/10 font-bold text-lg px-8"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Наш чат
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-primary/30 p-6 glow-hover">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-secondary mb-2">50+ игроков</h3>
              <p className="text-foreground/70">Активное комьюнити</p>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-accent/30 p-6 glow-hover">
              <div className="text-4xl mb-4">🏰</div>
              <h3 className="text-2xl font-bold text-accent mb-2">Без вайпов</h3>
              <p className="text-foreground/70">Твои постройки навсегда</p>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-primary/30 p-6 glow-hover">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-primary mb-2">Без лагов</h3>
              <p className="text-foreground/70">Стабильная работа 24/7</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-5xl font-black text-center mb-12 text-primary neon-text">
            О сервере
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur border-primary/30 p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🌲</div>
                <h3 className="text-2xl font-bold text-secondary">Режим выживания</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Классическое выживание в Minecraft без модификаций геймплея. 
                Добывай ресурсы, строй дома, исследуй мир и создавай свою историю.
              </p>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-accent/30 p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🏗️</div>
                <h3 className="text-2xl font-bold text-accent">Постройки</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Создавай невероятные постройки вместе с друзьями. 
                Твоя фантазия - единственное ограничение!
              </p>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-secondary/30 p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">⛏️</div>
                <h3 className="text-2xl font-bold text-secondary">Добыча ресурсов</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Копай шахты, исследуй пещеры, находи редкие руды. 
                Все ресурсы добываются честно, без привилегий.
              </p>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/30 p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🤝</div>
                <h3 className="text-2xl font-bold text-primary">Комьюнити</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Дружное сообщество игроков, готовых помочь новичкам. 
                Создавай кланы, торгуй и общайся!
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-black text-center mb-12 text-primary neon-text">
            Правила сервера
          </h2>
          
          <div className="space-y-4">
            {[
              { icon: '🚫', title: 'Запрещено использование читов', desc: 'Любые модификации, дающие преимущество в игре' },
              { icon: '💬', title: 'Уважение к игрокам', desc: 'Оскорбления, спам и токсичность караются баном' },
              { icon: '🏠', title: 'Гриферство запрещено', desc: 'Не ломай чужие постройки без разрешения владельца' },
              { icon: '🎭', title: 'Не обманывай игроков', desc: 'Честная торговля и взаимодействие' },
              { icon: '🛡️', title: 'Багоюз запрещен', desc: 'Использование багов игры для получения выгоды' },
              { icon: '📝', title: 'Следуй указаниям админов', desc: 'Администрация следит за порядком на сервере' }
            ].map((rule, idx) => (
              <Card 
                key={idx}
                className="bg-card/50 backdrop-blur border-primary/30 p-6 glow-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{rule.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">{rule.title}</h3>
                    <p className="text-foreground/70">{rule.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-black/40 border-t border-primary/20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center neon-border">
              <span className="text-3xl">🐱</span>
            </div>
            <h3 className="text-3xl font-bold text-primary neon-text">BixCat</h3>
          </div>
          <p className="text-foreground/60 mb-4">
            Лучший Minecraft сервер выживания
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.open('https://t.me/ArtemisMuraev', '_blank')}
              className="border-primary/40 hover:bg-primary/10 hover:border-primary"
            >
              <Icon name="Send" size={20} />
            </Button>
          </div>
          <p className="text-foreground/40 text-sm mt-8">
            © 2024 BixCat. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;