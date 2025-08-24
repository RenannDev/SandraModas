import { MessageCircle, Instagram, Facebook, Mail, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-primary mb-4">
            <div className="w-12 h-0.5 bg-primary"></div>
            <span className="text-sm font-medium uppercase tracking-wider">Get In Touch</span>
            <div className="w-12 h-0.5 bg-primary"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Connect with Us
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have questions about our products, 
            want to share your faith journey, or simply want to say hello.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Main CTA */}
          <div className="space-y-8">
            <div className="card-luxury text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-forest rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-[var(--shadow-luxury)] transition-shadow duration-300">
                <MessageCircle size={32} className="text-forest-foreground" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Shop on WhatsApp
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Experience personalized shopping with our dedicated team. Get instant responses, 
                see exclusive pieces, and enjoy a seamless shopping experience.
              </p>
              
              <a
                href="https://wa.me/1234567890?text=Hello! I'm interested in exploring your Christian clothing collection. Could you help me find the perfect pieces?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-lg px-8 py-4"
              >
                <MessageCircle size={20} />
                Start Shopping Now
              </a>
              
              <div className="mt-6 text-sm text-muted-foreground">
                Available Monday - Saturday, 9 AM - 7 PM EST
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-heading font-semibold text-foreground text-lg mb-4">
                Other Ways to Reach Us
              </h4>
              
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200">
                <Mail size={20} />
                <span>hello@graceandfaith.com</span>
              </div>
              
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200">
                <Phone size={20} />
                <span>+1 (555) 123-FAITH</span>
              </div>
            </div>
          </div>

          {/* Community & Social */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Join Our Faith Community
              </h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Follow us on social media for style inspiration, faith encouragement, 
                behind-the-scenes content, and to connect with our growing community of believers.
              </p>

              {/* Social Links */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="https://instagram.com/graceandfaith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <Instagram size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">Instagram</div>
                    <div className="text-sm text-muted-foreground">@graceandfaith</div>
                  </div>
                </a>

                <a
                  href="https://facebook.com/graceandfaith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Facebook size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">Facebook</div>
                    <div className="text-sm text-muted-foreground">Grace & Faith</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="card-luxury">
              <h4 className="font-heading font-semibold text-foreground text-lg mb-4">
                Stay Connected
              </h4>
              
              <p className="text-muted-foreground mb-6">
                Get the latest updates, exclusive offers, and faith-inspired content delivered to your inbox.
              </p>
              
              <a
                href="https://wa.me/1234567890?text=I'd like to join your newsletter to stay updated on new collections and faith-inspired content."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-luxury w-full justify-center"
              >
                Subscribe via WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16 pt-12 border-t border-border">
          <blockquote className="text-xl font-heading italic text-primary mb-4">
            "Come to me, all you who are weary and burdened, and I will give you rest."
          </blockquote>
          <cite className="text-muted-foreground">Matthew 11:28</cite>
          
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
            We're more than a clothing brand - we're a community of believers supporting each other 
            in faith and style. We can't wait to connect with you!
          </p>
        </div>
      </div>
    </section>
  );
}