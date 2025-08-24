import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Dallas, TX",
    rating: 5,
    text: "Grace & Faith Clothing has transformed my wardrobe. The quality is exceptional, and I love how each piece reflects my values. I feel confident and beautiful wearing their designs.",
    product: "Grace Elegance Blazer"
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    location: "Phoenix, AZ",
    rating: 5,
    text: "Finally, a brand that understands the importance of modesty without sacrificing style. The attention to detail and craftsmanship is remarkable. Highly recommend!",
    product: "Faith Serenity Dress"
  },
  {
    id: 3,
    name: "Jennifer Thompson",
    location: "Nashville, TN",
    rating: 5,
    text: "The customer service is outstanding, and the clothing exceeded my expectations. It's wonderful to support a brand that shares my faith and values.",
    product: "Blessed Comfort Cardigan"
  },
  {
    id: 4,
    name: "Rachel Adams",
    location: "Charlotte, NC",
    rating: 5,
    text: "Each piece I've purchased has become a staple in my wardrobe. The fabric quality is amazing, and I always receive compliments when wearing Grace & Faith.",
    product: "Divine Grace Blouse"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-warm-gradient">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-primary mb-4">
            <div className="w-12 h-0.5 bg-primary"></div>
            <span className="text-sm font-medium uppercase tracking-wider">Customer Stories</span>
            <div className="w-12 h-0.5 bg-primary"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            What Our Community Says
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real customers who have experienced the Grace & Faith difference.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 z-10 w-12 h-12 bg-card rounded-full shadow-[var(--shadow-elegant)] flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
          >
            <ChevronLeft size={20} className="group-hover:scale-110 transition-transform duration-200" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 z-10 w-12 h-12 bg-card rounded-full shadow-[var(--shadow-elegant)] flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
          >
            <ChevronRight size={20} className="group-hover:scale-110 transition-transform duration-200" />
          </button>

          {/* Testimonial Card */}
          <div className="card-luxury text-center relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-10">
              <Quote size={48} className="text-primary" />
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-8">
              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-primary fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl lg:text-2xl font-heading italic text-foreground mb-8 leading-relaxed">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="space-y-2">
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  {currentTestimonial.name}
                </h3>
                <p className="text-muted-foreground">
                  {currentTestimonial.location}
                </p>
                <p className="text-sm text-primary font-medium">
                  Purchased: {currentTestimonial.product}
                </p>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentIndex === index
                    ? 'bg-primary scale-125'
                    : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">4.9</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Would Recommend</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/1234567890?text=I'd love to share my own Grace & Faith experience and learn more about your latest pieces."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury"
          >
            Share Your Story
          </a>
        </div>
      </div>
    </section>
  );
}