import { Book, Users, Globe } from 'lucide-react';

export default function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-primary mb-4">
            <div className="w-12 h-0.5 bg-primary"></div>
            <span className="text-sm font-medium uppercase tracking-wider">Nossa Fundação</span>
            <div className="w-12 h-0.5 bg-primary"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Missão, Visião & Valores
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Temos o compromisso de criar moda que honre a Deus, sirva aos outros e construa uma comunidade
de crentes que não têm medo de deixar sua luz brilhar através de seu estilo.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <div className="card-luxury text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-20 h-20 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-[var(--shadow-luxury)] transition-shadow duration-300">
              <Book size={32} className="text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Nossa Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Criar roupas bonitas e de alta qualidade que permitam aos fiéis expressar sua fé
com elegância e confiança, mantendo os mais altos padrões de artesanato e integridade.
            </p>
          </div>

          {/* Vision */}
          <div className="card-luxury text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-20 h-20 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-[var(--shadow-luxury)] transition-shadow duration-300">
              <Globe size={32} className="text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Nossa Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser a marca líder de moda cristã que preenche a lacuna entre fé e estilo,
inspirando uma comunidade global de fiéis a se vestir com propósito e viver com intenção.
            </p>
          </div>

          {/* Values */}
          <div className="card-luxury text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-20 h-20 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-[var(--shadow-luxury)] transition-shadow duration-300">
              <Users size={32} className="text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Nossos valores</h3>
            <p className="text-muted-foreground leading-relaxed">
              Fé, integridade, excelência e comunidade norteiam tudo o que fazemos. Acreditamos em
tratar cada cliente como família e cada peça como uma obra de arte que glorifica a Deus.
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div className="bg-subtle-gradient rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
              Nossos Princípios Fundamentais
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Esses princípios moldam todas as decisões que tomamos, do design à entrega.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary-foreground font-bold">1</span>
              </div>
              <h4 className="font-heading font-semibold text-foreground">Fé em primeiro lugar</h4>
              <p className="text-sm text-muted-foreground">Cada design reflete nossos valores cristãos e nosso compromisso de honrar a Deus.</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary-foreground font-bold">2</span>
              </div>
              <h4 className="font-heading font-semibold text-foreground">Excelência em Qualidade</h4>
              <p className="text-sm text-muted-foreground">Usamos apenas materiais de primeira qualidade e trabalho artesanal especializado em cada peça.</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary-foreground font-bold">3</span>
              </div>
              <h4 className="font-heading font-semibold text-foreground">Cuidado Comunitário</h4>
              <p className="text-sm text-muted-foreground">Construindo relacionamentos e servindo nossos clientes com amor e respeito.</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary-foreground font-bold">4</span>
              </div>
              <h4 className="font-heading font-semibold text-foreground">Práticas Éticas</h4>
              <p className="text-sm text-muted-foreground">Comércio justo, práticas sustentáveis e decisões empresariais responsáveis.</p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center mt-16">
          <blockquote className="text-2xl lg:text-3xl font-heading italic text-primary max-w-4xl mx-auto mb-6">
            "Deixem a luz de vocês brilhar diante dos homens, para que vejam as suas boas ações e glorifiquem o Pai de vocês, que está nos céus."
          </blockquote>
          <cite className="text-muted-foreground font-medium">Mateus 5:16</cite>
        </div>
      </div>
    </section>
  );
}