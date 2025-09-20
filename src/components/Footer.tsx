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
              Onde a fé encontra a moda. Criando roupas lindas e de alta qualidade que permitem aos fiéis
expressar seus valores com elegância e confiança.
            </p>
            
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/sandra_modasmulhervirtuosa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/17AgcbHmym/ "
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Facebook size={18} />
              </a>
              <a
                href="sandragfreitas1974@gmail"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://wa.me/558393092886"
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
            <h3 className="font-heading font-semibold text-foreground mb-6">Links rápidos</h3>
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
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Produtos
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Galeria
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Contatos
              </button>
            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-6">Atendimento ao Cliente</h3>
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
                Guia de dimensionamento
              </a>
              <a
                href="https://wa.me/1234567890?text=I'd like to know about your return policy."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Devoluções & trocas
              </a>
              <a
                href="https://wa.me/1234567890?text=I have a question about shipping."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Informações de envio
              </a>
              <a
                href="https://wa.me/1234567890?text=I need customer support."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Suporte ao Cliente
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
              <span>&copy; 2025 Sandra & Modas. Todos Direitos Reservados.</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center space-x-1">
                <span>Feito com</span>
                <Heart size={16} className="text-accent fill-current" />
                <span>e fé</span>
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a
                href="https://wa.me/1234567890?text=I'd like to see your privacy policy."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
              >
                Politica de Privacidade
              </a>
              <a
                href="https://wa.me/1234567890?text=I'd like to see your terms of service."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
              >
                Termos de Serviços
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}