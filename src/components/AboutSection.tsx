import { Heart, Shield, Star } from 'lucide-react';
import brandPerson from '../assets/brand-person.jpg';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-luxury)]">
              <img 
                src={brandPerson} 
                alt="Person wearing Grace & Faith clothing, embodying peace and confidence"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Quote */}
            <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-xl shadow-[var(--shadow-elegant)] max-w-xs">
              <p className="text-sm italic text-muted-foreground mb-2">
                "Fé e moda lindamente entrelaçadas."
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Heart size={16} className="text-primary-foreground" />
                </div>
                <span className="text-sm font-medium">Nossa Promessa

</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-primary mb-4">
                <div className="w-12 h-0.5 bg-primary"></div>
                <span className="text-sm font-medium uppercase tracking-wider">Por que Nossa Marca</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
                Onde a Fé Encontra a Moda
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sandras Modas, acreditamos que seu guarda-roupa deve refletir não apenas seu estilo, mas também seus valores. Cada peça é cuidadosamente projetada para incorporar a elegância, a qualidade e os princípios atemporais da fé cristã.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fundada na crença de que a moda pode ser tanto bonita quanto significativa, criamos roupas que permitem que você expresse sua fé com confiança e graça. Cada peça de vestuário conta uma história de esperança, amor e crença inabalável.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Shield size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Qualidade Garantida</h3>
                <p className="text-sm text-muted-foreground">Materiais premium e artesanato excepcional em cada peça

</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Heart size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Centrado na Fé</h3>
                <p className="text-sm text-muted-foreground">Designs que honram e celebram os valores cristãos

</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Star size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Estilo Atemporal

</h3>
                <p className="text-sm text-muted-foreground">Designs clássicos que transcendem as tendências passageiras</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href="https://wa.me/1234567890?text=I'd love to learn more about your brand story and values."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                Conecte-se Conosco
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}