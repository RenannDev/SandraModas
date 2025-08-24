import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "What makes Grace & Faith Clothing different from other fashion brands?",
    answer: "We combine premium quality craftsmanship with Christian values, creating clothing that allows you to express your faith with elegance. Every piece is thoughtfully designed to reflect modesty, sophistication, and timeless style while maintaining the highest standards of quality."
  },
  {
    id: 2,
    question: "What sizes do you offer?",
    answer: "We offer sizes from XS to 3XL to ensure every woman can find her perfect fit. We believe every body is beautiful and deserves clothing that celebrates that truth. If you need specific measurements or have questions about sizing, our team is happy to help."
  },
  {
    id: 3,
    question: "What materials do you use?",
    answer: "We exclusively use premium, ethically-sourced materials including high-quality cotton, silk, wool, and sustainable blends. All our fabrics are carefully selected for their durability, comfort, and ability to maintain their beauty over time."
  },
  {
    id: 4,
    question: "How do I place an order?",
    answer: "Simply contact us through WhatsApp using any of our 'Shop on WhatsApp' buttons. Our friendly team will help you browse our collection, answer any questions, and guide you through the ordering process. We make shopping personal and enjoyable."
  },
  {
    id: 5,
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for unworn items with original tags. Customer satisfaction is our priority, and we want you to love every piece you purchase. Contact us if you need to make a return or exchange."
  },
  {
    id: 6,
    question: "Do you ship internationally?",
    answer: "Currently, we ship within the United States with plans to expand internationally soon. We offer free shipping on orders over $150 and provide tracking information for all shipments."
  },
  {
    id: 7,
    question: "Do you offer custom or personalized pieces?",
    answer: "Yes! We love creating custom pieces that reflect your personal style and faith journey. Contact us to discuss custom orders, special occasions, or personalized touches to existing designs."
  },
  {
    id: 8,
    question: "How do I care for my Grace & Faith clothing?",
    answer: "Each garment comes with detailed care instructions. Generally, we recommend gentle washing in cold water and air drying to maintain the quality and longevity of your pieces. For specific care questions, feel free to reach out to us."
  }
];

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-primary mb-4">
            <div className="w-12 h-0.5 bg-primary"></div>
            <span className="text-sm font-medium uppercase tracking-wider">Questions & Answers</span>
            <div className="w-12 h-0.5 bg-primary"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our products, ordering process, and brand values.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="card-luxury hover:shadow-[var(--shadow-elegant)] transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
              >
                <h3 className="text-lg font-heading font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  {openFAQ === faq.id ? (
                    <Minus size={16} className="text-primary" />
                  ) : (
                    <Plus size={16} className="text-primary" />
                  )}
                </div>
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-6 pb-6 animate-fade-in-up">
                  <div className="h-px bg-border mb-4"></div>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="text-center mt-16 card-luxury max-w-2xl mx-auto">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            Still Have Questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our team is here to help! Reach out to us directly and we'll be happy to assist you with any questions or concerns.
          </p>
          <a
            href="https://wa.me/1234567890?text=Hi! I have a question that wasn't covered in your FAQ section. Could you help me?"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            Ask Your Question
          </a>
        </div>
      </div>
    </section>
  );
}