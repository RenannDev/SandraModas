import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import featuredProducts from '../assets/destaques/secao-destaque.jpg';
import featuredProducts1 from '../assets/destaques/agasalho.jpg';
import featuredProducts2 from '../assets/destaques/intimo.jpg';
import featuredProducts3 from '../assets/destaques/saia-rodada.jpg';
import featuredProducts4 from '../assets/destaques/camisa-social-m.jpg';


const products = [
  {
    id: 1,
    name: "Kit - Saia e Camisa",
    description: "versatilidade e estilo para todas as ocasiões com um toque de delicadeza",
    price: "R$189",
    image: featuredProducts,
    category: "Conjuntos"
  },
  {
    id: 2,
    name: "Casaco de Tricô",
    description: "Invista em um clássico: o casaco de tricot! Versátil e aconchegante, ele é a camada perfeita para adicionar charme e delicadeza às suas produções.",
    price: "R$149",
    image: featuredProducts1,
    category: "Tricô"
  },
  {
    id: 3,
    name: "Cinta Body Modeladora",
    description: "Sinta-se ainda mais poderosa e confiante! Nossa cinta body modeladora é a peça secreta para um caimento impecável e uma silhueta deslumbrante em qualquer roupa",
    price: "R$119",
    image: featuredProducts2,
    category: "Intimo"
  },
  {
    id: 4,
    name: "Saia Rodada ",
    description: "Leveza, movimento e elegância em uma única peça! A nossa saia rodada longa é um clássico que esbanja delicadeza e feminilidade. Um item indispensável para o seu guarda-roupa",
    price: "R$89",
    image: featuredProducts3,
    category: "Saias"
  },
  {
    id: 5,
    name: "Camisa Social Masculina",
    description: "Invista no básico que faz a diferença! Nossa camisa social masculina é sinônimo de elegância e estilo, ideal para criar looks que vão do formal ao casual. Uma peça essencial para o homem moderno e de fé",
    price: "R$79",
    image: featuredProducts4,
    category: "Social"
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
            <span className="text-sm font-medium uppercase tracking-wider">Coleção em destaque</span>
            <div className="w-12 h-0.5 bg-primary"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Nossas Peças Mais Amadas
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa coleção cuidadosamente selecionada de moda inspirada na fé.
Cada peça foi criada para ajudar você a expressar seus valores com elegância e confiança.
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
                      Ver detalhes
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
                      href="https://wa.me/558393092886"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-forest hover:text-forest/80 font-medium transition-colors duration-200"
                    >
                      Pergunte sobre isso →
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
            href="https://wa.me/558393092886"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury"
          >
            Explorar a coleção completa
          </a>
        </div>
      </div>
    </section>
  );
}