import { Heart, MessageCircle, Instagram, Facebook, Mail } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-subtle-gradient border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="Grace & Faith Clothing Logo" 
                className="h-10 w-auto"
              />
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Where faith meets fashion. Creating beautiful, high-quality clothing that allows believers 
              to express their values with elegance and confidence.
            </p>
            
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/graceandfaith"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/graceandfaith"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Facebook size={18} />
              </a>
              <a
                href="mailto:hello@graceandfaith.com"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-forest rounded-full flex items-center justify-center hover:bg-forest/80 text-forest-foreground transition-colors duration-200"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-6">Quick Links</h3>
            <div className="space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-6">Customer Care</h3>
            <div className="space-y-4">
              <button 
                onClick={() => scrollToSection('faq')}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                FAQ
              </button>
              <a
                href="https://wa.me/1234567890?text=I need help with sizing information."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Sizing Guide
              </a>
              <a
                href="https://wa.me/1234567890?text=I'd like to know about your return policy."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Returns & Exchanges
              </a>
              <a
                href="https://wa.me/1234567890?text=I have a question about shipping."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Shipping Info
              </a>
              <a
                href="https://wa.me/1234567890?text=I need customer support."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Customer Support
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-background/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>&copy; 2024 Grace & Faith Clothing. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart size={16} className="text-accent fill-current" />
                <span>and faith</span>
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a
                href="https://wa.me/1234567890?text=I'd like to see your privacy policy."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="https://wa.me/1234567890?text=I'd like to see your terms of service."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}