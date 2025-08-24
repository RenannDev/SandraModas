import { Book, Users, Globe } from 'lucide-react';

export default function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-primary mb-4">
            <div className="w-12 h-0.5 bg-primary"></div>
            <span className="text-sm font-medium uppercase tracking-wider">Our Foundation</span>
            <div className="w-12 h-0.5 bg-primary"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Mission, Vision & Values
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are committed to creating fashion that honors God, serves others, and builds a community 
            of believers who aren't afraid to let their light shine through their style.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <div className="card-luxury text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-20 h-20 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-[var(--shadow-luxury)] transition-shadow duration-300">
              <Book size={32} className="text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To create beautiful, high-quality clothing that allows believers to express their faith 
              with elegance and confidence, while maintaining the highest standards of craftsmanship and integrity.
            </p>
          </div>

          {/* Vision */}
          <div className="card-luxury text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-20 h-20 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-[var(--shadow-luxury)] transition-shadow duration-300">
              <Globe size={32} className="text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the leading Christian fashion brand that bridges the gap between faith and style, 
              inspiring a global community of believers to dress with purpose and live with intention.
            </p>
          </div>

          {/* Values */}
          <div className="card-luxury text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-20 h-20 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-[var(--shadow-luxury)] transition-shadow duration-300">
              <Users size={32} className="text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Values</h3>
            <p className="text-muted-foreground leading-relaxed">
              Faith, integrity, excellence, and community guide everything we do. We believe in 
              treating every customer as family and every piece as a work of art that glorifies God.
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div className="bg-subtle-gradient rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
              Our Core Principles
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles shape every decision we make, from design to delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary-foreground font-bold">1</span>
              </div>
              <h4 className="font-heading font-semibold text-foreground">Faith First</h4>
              <p className="text-sm text-muted-foreground">Every design reflects our Christian values and commitment to honoring God.</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary-foreground font-bold">2</span>
              </div>
              <h4 className="font-heading font-semibold text-foreground">Quality Excellence</h4>
              <p className="text-sm text-muted-foreground">We use only premium materials and skilled craftsmanship in every piece.</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary-foreground font-bold">3</span>
              </div>
              <h4 className="font-heading font-semibold text-foreground">Community Care</h4>
              <p className="text-sm text-muted-foreground">Building relationships and serving our customers with love and respect.</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary-foreground font-bold">4</span>
              </div>
              <h4 className="font-heading font-semibold text-foreground">Ethical Practices</h4>
              <p className="text-sm text-muted-foreground">Fair trade, sustainable practices, and responsible business decisions.</p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center mt-16">
          <blockquote className="text-2xl lg:text-3xl font-heading italic text-primary max-w-4xl mx-auto mb-6">
            "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven."
          </blockquote>
          <cite className="text-muted-foreground font-medium">Matthew 5:16</cite>
        </div>
      </div>
    </section>
  );
}