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
                "Faith and fashion beautifully woven together"
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Heart size={16} className="text-primary-foreground" />
                </div>
                <span className="text-sm font-medium">Our Promise</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-primary mb-4">
                <div className="w-12 h-0.5 bg-primary"></div>
                <span className="text-sm font-medium uppercase tracking-wider">Why Our Brand</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
                Where Faith Meets Fashion
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Grace & Faith Clothing, we believe that your wardrobe should reflect not just your style, 
                but your values. Each piece is thoughtfully designed to embody elegance, quality, and the 
                timeless principles of Christian faith.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded on the belief that fashion can be both beautiful and meaningful, we create clothing 
                that allows you to express your faith with confidence and grace. Every garment tells a story 
                of hope, love, and unwavering belief.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Shield size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Quality Promise</h3>
                <p className="text-sm text-muted-foreground">Premium materials and exceptional craftsmanship in every piece</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Heart size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Faith-Centered</h3>
                <p className="text-sm text-muted-foreground">Designs that honor and celebrate Christian values</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Star size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Timeless Style</h3>
                <p className="text-sm text-muted-foreground">Classic designs that transcend fleeting trends</p>
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
                Connect with Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}