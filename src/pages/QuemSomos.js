import React, { useCallback } from 'react';
import {
  Heart,
  Target,
  Award,
  Users,
  Handshake,
  TrendingUp,
  Briefcase,
  CheckCircle,
  MessageCircle,
  Mail,
  Phone,
  Linkedin,
  Users2,
  Globe
} from 'lucide-react';

const QuemSomos = () => {
  const handleFinanceTagHover = useCallback((e) => {
    const financeTag = e.currentTarget;
    const square = financeTag.querySelector('.square');

    if (!square || square.classList.contains('run') || square.classList.contains('filled')) {
      return;
    }

    square.classList.add('run');

    const handleAnimationEnd = () => {
      square.classList.add('filled');
      setTimeout(() => {
        window.location.href = '/contato';
      }, 0);
      square.removeEventListener('animationend', handleAnimationEnd);
    };

    square.addEventListener('animationend', handleAnimationEnd, { once: true });
  }, []);

  return (
    <div className="overflow-hidden bg-white">
      {/* HERO SECTION - CLARA COMO NA HOME */}
      <section className="hero-section relative h-[420px] md:h-[520px] lg:h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/img/quem-somos-office.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 60%'
          }}
        />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold animate-fade-in-up" style={{ color: 'white', textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
            <span style={{ color: 'white' }}>Quem</span>{' '}
            <span style={{ color: 'var(--b4-saffron)' }}>Somos</span>
          </h1>
        </div>
      </section>

      {/* CARD PRINCIPAL - INTEGRADO */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-custom">
          <div 
            className="rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto"
            style={{
              backgroundColor: 'rgba(244, 166, 35, 0.15)',
              border: '2px solid rgba(244, 166, 35, 0.3)'
            }}
          >
            <p className="text-base md:text-lg leading-relaxed text-[var(--b4-gray)] font-medium text-center">
              A B4 Soluções Financeiras conecta empresas e pessoas às melhores oportunidades de
              captação de recursos, de forma ágil e estratégica, com ética e excelência em todas
              as etapas, apoiando nossos clientes antes, durante e após a operação.
            </p>
          </div>
        </div>
      </section>

      {/* NOSSO JEITO DE FAZER */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--b4-gray)' }}>
              Nosso Jeito de <span style={{ color: 'var(--b4-saffron)' }}>Fazer</span>
            </h2>
            <p className="text-xl" style={{ color: 'var(--b4-gray)' }}>
              Propósito, visão e princípios éticos que direcionam cada decisão na B4.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* PROPÓSITO */}
            <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[var(--b4-saffron)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8" style={{ color: 'var(--b4-saffron)' }} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: 'var(--b4-saffron)' }}>Propósito</h3>
              <p className="leading-relaxed text-center" style={{ color: 'var(--b4-gray)' }}>
                Impulsionar o sucesso de pequenas e médias empresas através do acesso facilitado ao crédito justo e ético, atuando como parceiros estratégicos no desenvolvimento econômico.
              </p>
            </div>

            {/* VISÃO */}
            <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[var(--b4-saffron)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8" style={{ color: 'var(--b4-saffron)' }} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: 'var(--b4-saffron)' }}>Visão</h3>
              <p className="leading-relaxed text-center" style={{ color: 'var(--b4-gray)' }}>
                Ser referência no Brasil para as PMEs no assessoramento à captação de crédito no mercado financeiro, sendo a marca mais lembrada e indicada nesse segmento.
              </p>
            </div>

            {/* CÓDIGO DE ÉTICA */}
            <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[var(--b4-saffron)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8" style={{ color: 'var(--b4-saffron)' }} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: 'var(--b4-saffron)' }}>Código de Ética</h3>
              <p className="leading-relaxed text-center" style={{ color: 'var(--b4-gray)' }}>
                Nossos princípios éticos norteiam cada decisão. Priorizamos transparência, honestidade e responsabilidade em todos os relacionamentos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NOSSOS VALORES - 6 CARDS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--b4-gray)' }}>
              Nossos <span style={{ color: 'var(--b4-saffron)' }}>Valores</span>
            </h2>
            <p className="text-xl" style={{ color: 'var(--b4-gray)' }}>
              Os princípios que nos guiam em cada projeto e relacionamento.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Integridade */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[var(--b4-saffron)]/10 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="h-7 w-7" style={{ color: 'var(--b4-saffron)' }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--b4-saffron)' }}>Integridade e Transparência</h3>
              <p className="leading-relaxed text-sm" style={{ color: 'var(--b4-gray)' }}>
                Atuamos com total honestidade e clareza em todos os nossos processos.
              </p>
            </div>

            {/* Excelência */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[var(--b4-saffron)]/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="h-7 w-7" style={{ color: 'var(--b4-saffron)' }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--b4-saffron)' }}>Excelência e Qualidade</h3>
              <p className="leading-relaxed text-sm" style={{ color: 'var(--b4-gray)' }}>
                Buscamos sempre a perfeição em tudo o que fazemos para nossos clientes.
              </p>
            </div>

            {/* Inovação */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[var(--b4-saffron)]/10 rounded-xl flex items-center justify-center mb-4">
                <Briefcase className="h-7 w-7" style={{ color: 'var(--b4-saffron)' }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--b4-saffron)' }}>Inovação Responsável</h3>
              <p className="leading-relaxed text-sm" style={{ color: 'var(--b4-gray)' }}>
                Utilizamos as melhores práticas e tecnologias de forma ética e sustentável.
              </p>
            </div>

            {/* Respeito */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[var(--b4-saffron)]/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-7 w-7" style={{ color: 'var(--b4-saffron)' }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--b4-saffron)' }}>Respeito e Valorização</h3>
              <p className="leading-relaxed text-sm" style={{ color: 'var(--b4-gray)' }}>
                Cada pessoa é única e merece tratamento digno e respeitoso.
              </p>
            </div>

            {/* Responsabilidade Social */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[var(--b4-saffron)]/10 rounded-xl flex items-center justify-center mb-4">
                <Handshake className="h-7 w-7" style={{ color: 'var(--b4-saffron)' }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--b4-saffron)' }}>Responsabilidade Social</h3>
              <p className="leading-relaxed text-sm" style={{ color: 'var(--b4-gray)' }}>
                Contribuímos ativamente para o desenvolvimento da sociedade.
              </p>
            </div>

            {/* Colaboração */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[var(--b4-saffron)]/10 rounded-xl flex items-center justify-center mb-4">
                <Users2 className="h-7 w-7" style={{ color: 'var(--b4-saffron)' }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--b4-saffron)' }}>Colaboração e Parceria</h3>
              <p className="leading-relaxed text-sm" style={{ color: 'var(--b4-gray)' }}>
                Construímos relacionamentos sólidos e duradouros com nossos parceiros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEGMENTOS DE MERCADO */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--b4-gray)' }}>
              Segmentos de <span style={{ color: 'var(--b4-saffron)' }}>Mercado</span>
            </h2>
            <p className="text-xl" style={{ color: 'var(--b4-gray)' }}>
              Soluções personalizadas para cada perfil de empresa e pessoa física.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Small Business */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--b4-saffron)]/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6" style={{ color: 'var(--b4-saffron)' }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--b4-gray)' }}>Small Business</h3>
              </div>
              <span className="inline-block bg-[var(--b4-saffron)]/10 px-3 py-1 rounded-full text-sm font-medium mb-4" style={{ color: 'var(--b4-saffron)' }}>
                R$ 500 Mil – R$ 5 Mi
              </span>
              <p className="leading-relaxed text-sm mb-3" style={{ color: 'var(--b4-gray)' }}>
                <strong>Setores:</strong> Sellers, Prestadores de Serviços, Varejo de Alimentos, Comércio Varejista
              </p>
              <p className="leading-relaxed text-sm" style={{ color: 'var(--b4-gray)' }}>
                Empresas em crescimento que buscam capital de giro e investimento para expansão. Oferecemos linhas de crédito ágeis e flexíveis, com análise personalizada e aprovação rápida.
              </p>
            </div>

            {/* Middle Business */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--b4-saffron)]/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6" style={{ color: 'var(--b4-saffron)' }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--b4-gray)' }}>Middle Business</h3>
              </div>
              <span className="inline-block bg-[var(--b4-saffron)]/10 px-3 py-1 rounded-full text-sm font-medium mb-4" style={{ color: 'var(--b4-saffron)' }}>
                R$ 5 Mi – R$ 50 Mi
              </span>
              <p className="leading-relaxed text-sm mb-3" style={{ color: 'var(--b4-gray)' }}>
                <strong>Setores:</strong> Indústria, Construtoras, Comércio Varejista, Supermercados
              </p>
              <p className="leading-relaxed text-sm" style={{ color: 'var(--b4-gray)' }}>
                Empresas consolidadas com operações complexas. Estruturamos soluções sofisticadas de crédito, com consultoria estratégica e acesso a múltiplas fontes de financiamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA PRONTO PARA CRESCER - FUNDO AÇAFRÃO */}
      <section 
        className="section-padding text-center py-24 md:py-32"
        style={{ backgroundColor: 'var(--b4-saffron)' }}
      >
        <div className="container-custom">
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: 'white' }}>
            Pronto para crescer com a <span style={{ color: 'white' }}>B4</span>?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto" style={{ color: 'white' }}>
            Entre em contato com nosso time e descubra a solução de crédito ideal para sua empresa.
          </p>
          <div className="flex items-center gap-4 justify-center flex-wrap">
            <div className="finance-tag" onMouseEnter={handleFinanceTagHover} style={{ minWidth: '280px', height: '56px' }}>
              <span className="square" />
              <span className="text" style={{ fontSize: '18px', fontWeight: '600' }}>Fale Conosco</span>
            </div>
          </div>
        </div>
      </section>

      {/* NOSSOS CANAIS - 7 CANAIS */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--b4-gray)' }}>
              Nossos <span style={{ color: 'var(--b4-saffron)' }}>Canais</span>
            </h2>
            <p className="text-xl" style={{ color: 'var(--b4-gray)' }}>
              Utilizamos diversos canais para conectar com nossos clientes e parceiros.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* NetWork de Mercado */}
            <div className="bg-gray-700 p-8 rounded-2xl text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[var(--b4-saffron)] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-7 w-7" style={{ color: 'white' }} />
              </div>
              <h3 className="font-bold mb-2" style={{ color: 'white' }}>NetWork de Mercado</h3>
              <p className="text-sm" style={{ color: '#b0b0b0' }}>Conexões estratégicas</p>
            </div>

            {/* Mídias Sociais */}
            <div className="bg-gray-700 p-8 rounded-2xl text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[var(--b4-saffron)] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users2 className="h-7 w-7" style={{ color: 'white' }} />
              </div>
              <h3 className="font-bold mb-2" style={{ color: 'white' }}>Mídias Sociais</h3>
              <p className="text-sm" style={{ color: '#b0b0b0' }}>Conteúdo e engajamento</p>
            </div>

            {/* Google Ads */}
            <div className="bg-gray-700 p-8 rounded-2xl text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[var(--b4-saffron)] rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-7 w-7" style={{ color: 'white' }} />
              </div>
              <h3 className="font-bold mb-2" style={{ color: 'white' }}>Google Ads</h3>
              <p className="text-sm" style={{ color: '#b0b0b0' }}>Publicidade direcionada</p>
            </div>

            {/* E-mail Marketing */}
            <div className="bg-gray-700 p-8 rounded-2xl text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[var(--b4-saffron)] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="h-7 w-7" style={{ color: 'white' }} />
              </div>
              <h3 className="font-bold mb-2" style={{ color: 'white' }}>E-mail Marketing</h3>
              <p className="text-sm" style={{ color: '#b0b0b0' }}>Campanhas segmentadas</p>
            </div>

            {/* WhatsApp Marketing */}
            <div className="bg-gray-700 p-8 rounded-2xl text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[var(--b4-saffron)] rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-7 w-7" style={{ color: 'white' }} />
              </div>
              <h3 className="font-bold mb-2" style={{ color: 'white' }}>WhatsApp Marketing</h3>
              <p className="text-sm" style={{ color: '#b0b0b0' }}>Atendimento direto</p>
            </div>

            {/* Associações de Classe */}
            <div className="bg-gray-700 p-8 rounded-2xl text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[var(--b4-saffron)] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-7 w-7" style={{ color: 'white' }} />
              </div>
              <h3 className="font-bold mb-2" style={{ color: 'white' }}>Associações de Classe</h3>
              <p className="text-sm" style={{ color: '#b0b0b0' }}>Parcerias setoriais</p>
            </div>

            {/* Influenciadores Financeiros */}
            <div className="bg-gray-700 p-8 rounded-2xl text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[var(--b4-saffron)] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-7 w-7" style={{ color: 'white' }} />
              </div>
              <h3 className="font-bold mb-2" style={{ color: 'white' }}>Influenciadores</h3>
              <p className="text-sm" style={{ color: '#b0b0b0' }}>Especialistas financeiros</p>
            </div>

            {/* Telefone */}
            <div className="bg-gray-700 p-8 rounded-2xl text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[var(--b4-saffron)] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-7 w-7" style={{ color: 'white' }} />
              </div>
              <h3 className="font-bold mb-2" style={{ color: 'white' }}>Telefone</h3>
              <p className="text-sm" style={{ color: '#b0b0b0' }}>Contato direto</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuemSomos;
