import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-warm-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Sparkles size={20} />
                <span className="text-sm font-medium uppercase tracking-wider">Faith-Inspired Fashion</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-heading font-bold text-foreground leading-tight">
                Grace & 
                <span className="block text-luxury-gold">Faith</span>
                <span className="block text-2xl lg:text-4xl font-medium text-muted-foreground">Clothing</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                Discover elegant, faith-inspired clothing that combines luxury with Christian values. 
                Where sophistication meets spirituality.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/1234567890?text=Hello! I'm interested in your Christian clothing collection."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury inline-flex items-center justify-center gap-2 group"
              >
                Shop on WhatsApp
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ghost-luxury inline-flex items-center justify-center"
              >
                Learn Our Story
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Faith-Based Values</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Handcrafted</span>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Model */}
          <div className={`relative h-[600px] ${isLoaded ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-subtle-gradient rounded-2xl shadow-[var(--shadow-luxury)]">
              <ThreeScene />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium animate-float">
              New Collection
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium animate-float" style={{ animationDelay: '1s' }}>
              Premium Quality
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}