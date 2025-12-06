import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Briefcase, Network, MapPin, Users, Target, ChevronLeft, ChevronRight, Phone, TrendingUp, Zap } from 'lucide-react';

const HeroCarousel = () => {
  const slides = useMemo(() => ([
    { img: '/aperto.jpg', alt: 'Profissionais com tablet', phrase: null, subtitle: { pre: 'Conectando você ao melhor ', highlight: 'crédito', post: '' }, pos: 'center', duration: 8000 },
    { img: '/assinatura.png', alt: 'Mão assinando documento', phrase: { pre: 'Especialistas em viabilizar o seu ', highlight: 'próximo', post: ' passo' }, subtitle: null, pos: 'center', duration: 6000 },
    { img: '/amarelo.png', alt: 'Prédio amarelo', phrase: { pre: 'Capital inteligente para impulsionar seus ', highlight: 'objetivos', post: '' }, subtitle: null, pos: 'center', duration: 6000, hasFade: true },
  ]), []);

  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (hover) return;
    timeoutRef.current && clearTimeout(timeoutRef.current);
    const duration = slides[index].duration || 6000;
    timeoutRef.current = setTimeout(() => setIndex((prev) => (prev + 1) % slides.length), duration);
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [index, hover, slides]);

  const handleFinanceTagHover = (e) => {
    const financeTag = e.currentTarget;
    const square = financeTag.querySelector('.square');
    
    // Evita múltiplas animações
    if (square.classList.contains('run') || square.classList.contains('filled')) {
      return;
    }
    
    // 1) Começa a animação
    square.classList.add('run');
    
    // 2) Quando a animação de 1s terminar
    const handleAnimationEnd = () => {
      // Preenche o quadrado inteiro de açafrão
      square.classList.add('filled');
      
      // Espera 4s (2s parado + 2s delay) e redireciona para Insights
      setTimeout(() => {
        window.location.href = '/insights';
      }, 4000);
      
      square.removeEventListener('animationend', handleAnimationEnd);
    };
    
    square.addEventListener('animationend', handleAnimationEnd, { once: true });
  };

  return (
    <section className="relative overflow-hidden h-[calc(100vh-200px)]" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-700 ease-out ${i === index ? 'opacity-100' : 'opacity-0'}`} aria-hidden={i !== index}>
            <div className="w-full h-full relative">
              <img src={s.img} alt={s.alt} className={`w-full h-full object-cover`} style={{ objectPosition: s.pos }} />
              {/* Overlay escuro suave padronizado */}
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </div>
        ))}
      </div>
      <div className="relative z-10 h-full">
        <div className="container-custom h-full flex items-center">
          <div className="max-w-3xl">
            {slides[index].phrase && (
              <h1 className={`hero-readable-shadow text-white text-5xl md:text-6xl font-extrabold leading-tight mb-6 ${slides[index].hasFade ? 'fade-in-up' : ''}`}>
                <span className="text-white">{slides[index].phrase.pre}</span>
                <span className="text-[var(--b4-saffron)]">{slides[index].phrase.highlight}</span>
                <span className="text-white">{slides[index].phrase.post}</span>
              </h1>
            )}
            {slides[index].subtitle && (
              <p className="hero-readable-shadow text-white/90 text-5xl md:text-6xl font-extrabold mb-8 fade-in-up">
                <span className="text-white">{slides[index].subtitle.pre}</span>
                <span className="text-[var(--b4-saffron)]">{slides[index].subtitle.highlight}</span>
                <span className="text-white">{slides[index].subtitle.post}</span>
              </p>
            )}
            {/* Finance Tag - novo botão com animação */}
            <div className="flex items-center gap-3">
              <span className="text-white font-bold text-sm">Insights</span>
              <div className="finance-tag" onMouseEnter={handleFinanceTagHover}>
                <span className="square" />
                <span className="text">Financeiros</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroCarousel />

      {/* Conheça o Grupo B4 */}
      <section className="section-padding section-orange">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                <span className="text-white">Conheça o Grupo </span>
                <span className="font-bold text-[#5B5B5B] tracking-tight ml-2 text-4xl">
                  B<span className="font-light text-3xl">4</span>
                </span>
              </h2>
              <ul className="space-y-6 text-base">
                <li className="flex items-start">
                  <Clock className="h-8 w-8 text-white mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white mb-1">Histórico e Experiência</h3>
                    <span style={{ color: '#555555' }}>Mais de uma década conectando clientes às melhores soluções financeiras, com histórico de atuação desde meados dos anos 1990.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Briefcase className="h-8 w-8 text-white mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white mb-1">Portfólio Completo</h3>
                    <span style={{ color: '#555555' }}>Portfólio completo em operações de crédito, fomento mercantil e fundos de investimento para diversos perfis empresariais.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Network className="h-8 w-8 text-white mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white mb-1">Rede de Parcerias</h3>
                    <span style={{ color: '#555555' }}>Rede de parcerias com grandes bancos, fintechs e instituições financeiras, ampliando as opções e condições para os clientes.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-8 w-8 text-white mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white mb-1">Presença Nacional</h3>
                    <span style={{ color: '#555555' }}>Sede em Campinas/SP, na Av. Coronel Silva Telles, 1002, filiais em Belo Horizonte e Fortaleza com equipe especializada dedicada à saúde financeira das empresas.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
              <img src="/grupo-b4-recepcao.png" alt="Grupo B4 Recepção" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Por que escolher a B4 Soluções Financeiras */}
      <section className="section-padding section-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                <span className="font-bold text-[#5B5B5B] tracking-tight mr-2 text-4xl">
                  B<span className="font-light text-3xl">4</span>
                </span> <span className="text-[var(--b4-saffron)]">Soluções Financeiras</span>
              </h2>
              <div className="space-y-8 text-[var(--b4-gray)] leading-relaxed">
                <div className="flex items-start">
                  <Target className="h-8 w-8 text-[var(--b4-saffron)] mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--b4-saffron)' }}>
                      Expertise de Mercado
                    </h3>
                    <p className="text-base">Fundada por sócios com mais de 30 anos de atuação em grandes instituições financeiras, garantindo segurança e conhecimento técnico em cada operação.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="h-8 w-8 text-[var(--b4-saffron)] mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--b4-saffron)' }}>
                      Conexão Multi-Banco
                    </h3>
                    <p className="text-base">Acesso simultâneo a múltiplos bancos e fintechs. Não oferecemos apenas um produto, mas comparamos e entregamos a melhor taxa e condição para o seu perfil.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="h-8 w-8 text-[var(--b4-saffron)] mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--b4-saffron)' }}>
                      Agilidade e Consultoria
                    </h3>
                    <p className="text-base">Do diagnóstico à liberação e acompanhamento do recurso: atuamos com rapidez na análise e formalização, eliminando a burocracia bancária tradicional.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full">
              <img src="https://customer-assets.emergentagent.com/job_finance-solutions-1/artifacts/t3on1tap_freepik__expand__12081-1536x512.png.webp" alt="Equipe B4" className="rounded-2xl shadow-2xl w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
