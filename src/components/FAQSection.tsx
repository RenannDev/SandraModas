import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "O que torna a Sandra Modas diferente de outras marcas de moda?",
    answer: "Combinamos artesanato de alta qualidade com valores cristãos, criando roupas que permitem que você expresse sua fé com elegância. Cada peça é cuidadosamente projetada para refletir modéstia, sofisticação e estilo atemporal, mantendo os mais altos padrões de qualidade."
  },
  {
    id: 2,
    question: "Quais tamanhos vocês oferecem?",
    answer: "Oferecemos tamanhos do G ao GG para garantir que cada mulher encontre o seu caimento perfeito. Acreditamos que todo corpo é lindo e merece roupas que celebrem essa verdade. Se precisar de medidas específicas ou tiver dúvidas sobre tamanhos, nossa equipe terá prazer em ajudar."
  },
  {
    id: 3,
    question: "Que materiais você usa?",
    answer: "Utilizamos exclusivamente materiais premium e de origem ética, incluindo algodão, seda, lã e misturas sustentáveis ​​de alta qualidade. Todos os nossos tecidos são cuidadosamente selecionados por sua durabilidade, conforto e capacidade de manter sua beleza ao longo do tempo."
  },
  {
    id: 4,
    question: "Como faço um pedido?",
    answer: "Basta entrar em contato conosco pelo WhatsApp usando qualquer um dos nossos botões Comprar no WhatsApp. Nossa equipe atenciosa ajudará você a navegar pela nossa coleção, responderá a quaisquer perguntas e o guiará pelo processo de compra. Tornamos a compra pessoal e agradável."
  },
  {
    id: 5,
    question: "Qual é a sua política de devolução?",
    answer: "Oferecemos uma política de devolução de 30 dias para itens não usados ​​com as etiquetas originais. A satisfação do cliente é nossa prioridade e queremos que você ame cada peça que comprar. Entre em contato conosco se precisar fazer uma devolução ou troca."
  },
  {
    id: 6,
    question: "Vocês fazem envios internacionais?",
    answer: "Atualmente, enviamos para os Estados Unidos, com planos de expansão internacional em breve. Oferecemos frete grátis para pedidos acima de R$ 150 e fornecemos informações de rastreamento para todas as remessas."
  },
  {
    id: 7,
    question: "Vocês oferecem peças personalizadas ou customizadas?",
    answer: "Sim! Adoramos criar peças personalizadas que reflitam seu estilo pessoal e sua jornada de fé. Entre em contato conosco para discutir pedidos personalizados, ocasiões especiais ou dar um toque personalizado a designs existentes."
  },
  {
    id: 8,
    question: "Como cuidar das minhas roupas Sandra Modas?",
    answer: "Cada peça vem com instruções detalhadas de cuidados. Geralmente, recomendamos lavar delicadamente em água fria e secar ao ar livre para manter a qualidade e a durabilidade das suas peças. Para dúvidas específicas sobre cuidados, entre em contato conosco."
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
            <span className="text-sm font-medium uppercase tracking-wider">Perguntas e Respostas</span>
            <div className="w-12 h-0.5 bg-primary"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Perguntas frequentes
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para perguntas comuns sobre nossos produtos, processo de pedidos e valores da marca.
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
Ainda tem perguntas?          </h3>
          <p className="text-muted-foreground mb-6">
            Nossa equipe está aqui para ajudar! Entre em contato conosco diretamente e teremos prazer em ajudar com qualquer dúvida ou preocupação.
          </p>
          <a
            href="https://wa.me/558393092886"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            Faça sua pergunta
          </a>
        </div>
      </div>
    </section>
  );
}