import { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import featuredProducts from '../assets/featured-products.jpg';
import brandPerson from '../assets/brand-person.jpg';
import heroGarment from '../assets/hero-garment.jpg';

const galleryImages = [
  {
    id: 1,
    src: heroGarment,
    title: "Elegant Blazer Collection",
    category: "Outerwear"
  },
  {
    id: 2,
    src: brandPerson,
    title: "Faith in Style",
    category: "Lifestyle"
  },
  {
    id: 3,
    src: featuredProducts,
    title: "Premium Collection",
    category: "Featured"
  },
  {
    id: 4,
    src: featuredProducts,
    title: "Summer Essentials",
    category: "Seasonal"
  },
  {
    id: 5,
    src: heroGarment,
    title: "Business Casual",
    category: "Professional"
  },
  {
    id: 6,
    src: brandPerson,
    title: "Weekend Comfort",
    category: "Casual"
  }
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-primary mb-4">
            <div className="w-12 h-0.5 bg-primary"></div>
            <span className="text-sm font-medium uppercase tracking-wider">Visual Story</span>
            <div className="w-12 h-0.5 bg-primary"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Gallery
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection through beautiful imagery that captures the essence of faith-inspired fashion.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative group cursor-pointer overflow-hidden rounded-xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 animate-fade-in-up ${
                index % 3 === 0 ? 'lg:row-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.id)}
            >
              <div className={`relative ${index % 3 === 0 ? 'h-96 lg:h-[32rem]' : 'h-64 lg:h-80'}`}>
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="space-y-2">
                    <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {image.category}
                    </span>
                    <h3 className="text-xl font-heading font-semibold">
                      {image.title}
                    </h3>
                  </div>
                </div>
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn size={16} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Love what you see? Let's talk about creating your perfect wardrobe.
          </p>
          <a
            href="https://wa.me/1234567890?text=I'm inspired by your gallery! I'd love to discuss creating a custom wardrobe that reflects my faith and style."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury"
          >
            Start Your Style Journey
          </a>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={galleryImages.find(img => img.id === selectedImage)?.src}
              alt={galleryImages.find(img => img.id === selectedImage)?.title}
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}