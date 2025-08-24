import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import featuredProducts from '../assets/featured-products.jpg';

const products = [
  {
    id: 1,
    name: "Grace Elegance Blazer",
    description: "Sophisticated blazer perfect for both professional and casual settings",
    price: "$189",
    image: featuredProducts,
    category: "Outerwear"
  },
  {
    id: 2,
    name: "Faith Serenity Dress",
    description: "Flowing dress that embodies grace and modesty",
    price: "$149",
    image: featuredProducts,
    category: "Dresses"
  },
  {
    id: 3,
    name: "Blessed Comfort Cardigan",
    description: "Cozy cardigan for everyday elegance",
    price: "$119",
    image: featuredProducts,
    category: "Knitwear"
  },
  {
    id: 4,
    name: "Divine Grace Blouse",
    description: "Classic blouse with contemporary styling",
    price: "$89",
    image: featuredProducts,
    category: "Tops"
  },
  {
    id: 5,
    name: "Peaceful Presence Skirt",
    description: "Modest midi skirt for any occasion",
    price: "$79",
    image: featuredProducts,
    category: "Bottoms"
  }
];

export default function ProductsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleProducts] = useState(3);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + visibleProducts >= products.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, products.length - visibleProducts) : prev - 1
    );
  };

  const visibleItems = products.slice(currentIndex, currentIndex + visibleProducts);

  return (
    <section id="products" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-primary mb-4">
            <div className="w-12 h-0.5 bg-primary"></div>
            <span className="text-sm font-medium uppercase tracking-wider">Featured Collection</span>
            <div className="w-12 h-0.5 bg-primary"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Our Most Loved Pieces
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated collection of faith-inspired fashion. 
            Each piece is designed to help you express your values with elegance and confidence.
          </p>
        </div>

        {/* Products Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-card rounded-full shadow-[var(--shadow-elegant)] flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
          >
            <ChevronLeft size={20} className="group-hover:scale-110 transition-transform duration-200" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-card rounded-full shadow-[var(--shadow-elegant)] flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
          >
            <ChevronRight size={20} className="group-hover:scale-110 transition-transform duration-200" />
          </button>

          {/* Products Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {visibleItems.map((product, index) => (
              <div
                key={product.id}
                className="card-product group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </div>
                  
                  {/* View Details Button - appears on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="btn-ghost-luxury text-white border-white hover:bg-white hover:text-primary">
                      <ExternalLink size={16} className="mr-2" />
                      View Details
                    </button>
                  </div>
                </div>
                
                <div className="p-6 space-y-3">
                  <h3 className="font-heading font-semibold text-xl text-foreground group-hover:text-primary transition-colors duration-200">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <a
                      href={`https://wa.me/1234567890?text=I'm interested in the ${product.name}. Could you provide more details?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-forest hover:text-forest/80 font-medium transition-colors duration-200"
                    >
                      Ask About This →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: Math.ceil(products.length / visibleProducts) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * visibleProducts)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  Math.floor(currentIndex / visibleProducts) === index
                    ? 'bg-primary scale-125'
                    : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/1234567890?text=I'd like to see your complete collection. What pieces do you currently have available?"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury"
          >
            Explore Full Collection
          </a>
        </div>
      </div>
    </section>
  );
}