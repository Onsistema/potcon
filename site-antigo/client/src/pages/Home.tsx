/*
 * Direção visual: “Sala de Controle Humana” — editorial industrial contemporâneo,
 * com marfim de papel técnico, azul de instrumentação e laranja de sinalização.
 * Layout assimétrico, linhas de processo, cartões de especificação e motion curto.
 */
import { useEffect, useState } from "react";
import type { CSSProperties, FormEvent } from "react";
import { ClientWall } from "@/components/ClientWall";
import {
  Activity,
  ArrowUpRight,
  Cable,
  Check,
  ChevronRight,
  CircleCheck,
  Clock3,
  Factory,
  Gauge,
  MapPin,
  Mail,
  Menu,
  Network,
  Phone,
  Route,
  ScanLine,
  Settings2,
  ShieldCheck,
  X,
  Wrench,
  Zap,
} from "lucide-react";

const asset = {
  hero: "/manus-storage/potcon-hero-ref_effe5708.jpg",
  mark: "/manus-storage/potcon-mark_24b8e229.png",
  panel: "/manus-storage/potcon-panel-ref_1f5fb690.jpg",
  field: "/manus-storage/potcon-field-ref_bb2a077e.jpg",
  blueprint: "/manus-storage/potcon-blueprint-ref_e8858959.jpg",
};

const navItems = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Como atuamos", href: "#processo" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Clientes", href: "/clientes" },
  { label: "Contato", href: "#contato" },
];

const serviceCards = [
  {
    number: "01",
    icon: ScanLine,
    title: "Diagnóstico & PDA",
    text: "Mapeamos o processo e transformamos a necessidade da operação em um plano de automação claro, viável e priorizado.",
    tag: "Clareza antes do investimento",
  },
  {
    number: "02",
    icon: Cable,
    title: "Elétrica & instrumentação",
    text: "Projetamos painéis, instrumentação de campo e infraestrutura para dar estabilidade ao que a sua planta precisa controlar.",
    tag: "Base sólida para escalar",
  },
  {
    number: "03",
    icon: Network,
    title: "Integração & supervisão",
    text: "Conectamos CLPs, supervisórios e sistemas de controle para que os dados cheguem a quem precisa decidir.",
    tag: "Tudo conversa com tudo",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Implantação & suporte",
    text: "Acompanhamos montagem, instalação, treinamento e manutenção para a solução continuar performando depois da entrega.",
    tag: "Presença além do projeto",
  },
];

const painPoints = [
  {
    icon: Activity,
    title: "Paradas que chegam sem aviso",
    text: "Falhas recorrentes e manutenção reativa drenam produtividade, confiança e margem.",
  },
  {
    icon: Gauge,
    title: "Processos sem visibilidade",
    text: "Quando os dados ficam espalhados, a decisão demora e o gargalo aparece tarde demais.",
  },
  {
    icon: Settings2,
    title: "Tecnologia que não acompanha",
    text: "Sistemas antigos não precisam condenar a operação. Eles podem ser reautomatizados com critério.",
  },
];

const steps = [
  {
    number: "01",
    title: "Entender o cenário",
    text: "Uma visita técnica para ouvir a operação, observar o processo e dimensionar o desafio real.",
  },
  {
    number: "02",
    title: "Desenhar o caminho",
    text: "Escopo, equipe, equipamentos, cronograma e investimento organizados em uma proposta objetiva.",
  },
  {
    number: "03",
    title: "Construir com precisão",
    text: "Projeto, montagem, instalação e integração conduzidos em parceria com a engenharia do cliente.",
  },
  {
    number: "04",
    title: "Deixar a operação forte",
    text: "Treinamento, manutenção e suporte para o conhecimento permanecer dentro da sua planta.",
  },
];

const sectors = [
  "Alimentos & bebidas",
  "Química & processos",
  "Farmacêutica",
  "Infraestrutura",
  "Agronegócio",
  "Logística de grãos",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const company = String(formData.get("company") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Contato pelo site — ${company || name}`);
    const body = encodeURIComponent(
      `Olá, Potcon.\n\nMeu nome é ${name}.\nEmpresa: ${company}.\n\nDesafio: ${message}`,
    );
    setFormSent(true);
    window.location.href = `mailto:potcon@potcon.com.br?subject=${subject}&body=${body}`;
  };

  return (
    <div className="site-shell">
      <div className="topline">
        <div className="container topline-inner">
          <span>Engenharia de automação desde 1991</span>
          <span className="topline-separator" />
          <span>Campinas · SP</span>
          <a href="mailto:potcon@potcon.com.br">potcon@potcon.com.br</a>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Potcon Automação Industrial — início">
            <span className="brand-mark-wrap">
              <img src={asset.mark} alt="" className="brand-mark" />
            </span>
            <span className="brand-copy">
              <strong>potcon</strong>
              <span>automação industrial</span>
            </span>
          </a>

          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="nav-cta" href="#contato" onClick={() => setMenuOpen(false)}>
              Falar com a engenharia <ArrowUpRight size={16} />
            </a>
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section" id="top">
          <div className="hero-grid-pattern" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy reveal is-visible">
              <div className="eyebrow"><span className="eyebrow-dot" /> Automação com visão de operação</div>
              <h1>Mais controle para o que não pode <em>parar.</em></h1>
              <p className="hero-lead">
                Engenharia, integração e suporte para transformar processos industriais em operações mais previsíveis, seguras e eficientes.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contato">
                  Conte o seu desafio <ArrowUpRight size={17} />
                </a>
                <a className="button button-quiet" href="#solucoes">
                  Ver soluções <ChevronRight size={17} />
                </a>
              </div>
              <div className="hero-proof">
                <div className="proof-avatars" aria-hidden="true">
                  <span>PA</span><span>CLP</span><span>+</span>
                </div>
                <p><strong>Do primeiro desenho ao suporte.</strong><br />Uma equipe parceira em cada etapa.</p>
              </div>
            </div>

            <div className="hero-visual reveal is-visible" style={{ "--delay": "100ms" } as CSSProperties}>
              <div className="hero-image-frame">
                <img src={asset.hero} alt="Engenheira analisando um sistema de controle em ambiente industrial" />
                <div className="hero-image-shade" />
                <div className="hero-image-label"><span className="signal-pulse" /> sistema em leitura</div>
              </div>
              <div className="hero-spec-card">
                <div className="spec-top"><span>Potcon / 1991—2026</span><span className="spec-status"><span /> ativa</span></div>
                <div className="spec-value">35<span>+</span></div>
                <div className="spec-caption">anos colocando conhecimento em operação</div>
                <div className="spec-line"><span /><span /><span /></div>
              </div>
              <div className="hero-coordinate">S 22°54' · W 47°03'</div>
            </div>
          </div>
          <div className="hero-footnote container">
            <span>01 / 05</span>
            <span className="footnote-line" />
            <span>Integração · controle · continuidade</span>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-inner">
            <p>Conhecimento realizando soluções para operações que exigem mais</p>
            <div className="trust-items">
              <span><ShieldCheck size={17} /> segurança</span>
              <span><Zap size={17} /> produtividade</span>
              <span><CircleCheck size={17} /> previsibilidade</span>
            </div>
          </div>
        </section>

        <section className="pain-section section-pad" id="desafios">
          <div className="container">
            <div className="section-intro split-intro reveal">
              <div>
                <div className="eyebrow eyebrow-blue"><span className="eyebrow-dot" /> O problema antes da solução</div>
                <h2>Quando a operação perde o ritmo, cada minuto conta.</h2>
              </div>
              <p>
                A Potcon entra onde a complexidade começa a custar caro. Organizamos sinais, equipamentos e decisões para devolver clareza ao processo.
              </p>
            </div>
            <div className="pain-grid">
              {painPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <article className="pain-card reveal" key={point.title} style={{ "--delay": `${index * 70}ms` } as CSSProperties}>
                    <div className="card-index">0{index + 1}</div>
                    <div className="icon-box"><Icon size={21} strokeWidth={1.7} /></div>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                    <span className="card-arrow"><ArrowUpRight size={16} /></span>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="solutions-section section-pad" id="solucoes">
          <div className="container solutions-grid">
            <div className="solutions-visual reveal">
              <div className="image-caption">leitura de campo / 02</div>
              <div className="blueprint-frame">
                <img src={asset.blueprint} alt="Bancada de engenharia com desenho técnico de automação" />
              </div>
              <div className="blueprint-note">
                <span className="note-pin" />
                <span>especificação<br /><strong>→ implantação</strong></span>
              </div>
            </div>
            <div className="solutions-copy">
              <div className="eyebrow eyebrow-blue reveal"><span className="eyebrow-dot" /> Uma cadeia, uma parceira</div>
              <h2 className="reveal">Da ideia ao chão de fábrica, sem perder o fio.</h2>
              <p className="solutions-lead reveal">
                Você não precisa coordenar cinco fornecedores para fazer um projeto acontecer. A Potcon integra engenharia, automação e suporte em uma jornada única.
              </p>
              <div className="service-list">
                {serviceCards.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <article className="service-row reveal" key={service.number} style={{ "--delay": `${index * 50}ms` } as CSSProperties}>
                      <span className="service-number">{service.number}</span>
                      <div className="service-icon"><Icon size={19} strokeWidth={1.8} /></div>
                      <div className="service-text">
                        <h3>{service.title}</h3>
                        <p>{service.text}</p>
                        <span className="service-tag">{service.tag}</span>
                      </div>
                      <ArrowUpRight className="service-arrow" size={18} />
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="process-section section-pad" id="processo">
          <div className="container">
            <div className="process-heading reveal">
              <div>
                <div className="eyebrow"><span className="eyebrow-dot" /> Como atuamos</div>
                <h2>Menos promessa.<br /><em>Mais método.</em></h2>
              </div>
              <p>Uma solução confiável começa antes do painel ser montado: começa entendendo a realidade da sua planta.</p>
            </div>
            <div className="process-track">
              <div className="process-signal" aria-hidden="true"><span /><span /><span /><span /></div>
              {steps.map((step, index) => (
                <article className="process-step reveal" key={step.number} style={{ "--delay": `${index * 80}ms` } as CSSProperties}>
                  <div className="step-marker"><span>{step.number}</span></div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
            <div className="process-cta reveal">
              <span>Uma visita técnica muda a qualidade da conversa.</span>
              <a href="#contato">Agendar conversa <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="field-section" id="experiencia">
          <div className="container field-grid">
            <div className="field-copy reveal">
              <div className="eyebrow eyebrow-green"><span className="eyebrow-dot" /> Experiência que permanece</div>
              <h2>A tecnologia só entrega valor quando a equipe consegue <em>usar, manter e evoluir.</em></h2>
              <p>
                Por isso, nosso trabalho não termina na instalação. Transferimos conhecimento, documentamos o sistema e permanecemos próximos para a operação seguir com autonomia.
              </p>
              <div className="field-metrics">
                <div><strong>01</strong><span>parceira desde<br />a especificação</span></div>
                <div><strong>∞</strong><span>continuidade<br />após a entrega</span></div>
              </div>
              <a className="text-link" href="#contato">Conhecer a Potcon <ArrowUpRight size={16} /></a>
            </div>
            <div className="field-visual reveal">
              <img src={asset.field} alt="Engenheiro de automação observando instrumentação em uma planta industrial" />
              <div className="field-badge"><CircleCheck size={17} /><span>operação<br /><strong>assistida</strong></span></div>
              <div className="field-caption">campo / 03 — presença onde importa</div>
            </div>
          </div>
        </section>

        <section className="sectors-section section-pad">
          <div className="container sectors-grid">
            <div className="sectors-head reveal">
              <div className="eyebrow eyebrow-blue"><span className="eyebrow-dot" /> Onde o processo acontece</div>
              <h2>Experiência para diferentes ritmos industriais.</h2>
            </div>
            <div className="sectors-body reveal">
              <p>Projetos em ambientes onde produtividade, rastreabilidade e segurança precisam andar juntos.</p>
              <div className="sector-tags">
                {sectors.map((sector) => <span key={sector}>{sector}</span>)}
              </div>
              <div className="client-line"><span>Experiências citadas</span><strong>Crodas · Syngenta · Unilever · Souza Cruz · Cofco</strong></div>
            </div>
          </div>
        </section>

        <section className="clients-preview-section section-pad" id="clientes">
          <div className="container clients-preview-grid">
            <div className="clients-preview-copy reveal">
              <div className="eyebrow"><span className="eyebrow-dot" /> Experiências citadas</div>
              <h2>Empresas que já confiaram na nossa <em>engenharia.</em></h2>
              <p>Uma seleção de clientes e organizações apresentada no portfólio institucional da Potcon. Cada nome carrega um contexto industrial diferente.</p>
              <a className="text-link text-link-light" href="/clientes">Ver página de clientes <ArrowUpRight size={16} /></a>
            </div>
            <ClientWall />
          </div>
        </section>

        <section className="contact-section section-pad" id="contato">
          <div className="container contact-card">
            <div className="contact-copy reveal">
              <div className="eyebrow"><span className="eyebrow-dot" /> Próximo passo</div>
              <h2>Qual é o gargalo que a sua operação não pode mais carregar?</h2>
              <p>Conte o contexto. A primeira conversa é técnica, objetiva e sem compromisso.</p>
              <div className="contact-details">
                <a href="tel:+551932336576"><Phone size={17} /> (19) 3233-6576</a>
                <a href="mailto:potcon@potcon.com.br"><Mail size={17} /> potcon@potcon.com.br</a>
                <span><MapPin size={17} /> Campinas · São Paulo</span>
                <span><Clock3 size={17} /> Atendimento em horário comercial</span>
              </div>
            </div>
            <form className="contact-form reveal" onSubmit={handleSubmit}>
              <div className="form-header"><span>fale com a engenharia</span><Route size={18} /></div>
              <label>
                Seu nome
                <input required name="name" type="text" placeholder="Como podemos chamar você?" />
              </label>
              <label>
                Empresa
                <input required name="company" type="text" placeholder="Nome da sua empresa" />
              </label>
              <label>
                O que precisa destravar?
                <textarea required name="message" rows={3} placeholder="Ex.: modernizar um sistema, integrar dados, reduzir paradas..." />
              </label>
              <button className="button button-primary form-button" type="submit">
                {formSent ? "Mensagem preparada" : "Enviar contexto"} <ArrowUpRight size={17} />
              </button>
              <small>Ao enviar, seu aplicativo de e-mail será aberto com a mensagem pronta.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark-wrap"><img src={asset.mark} alt="" className="brand-mark" /></span>
            <span className="brand-copy"><strong>potcon</strong><span>automação industrial</span></span>
          </a>
          <p>Conhecimento realizando soluções.</p>
          <a className="footer-up" href="#top" aria-label="Voltar ao topo"><ArrowUpRight size={18} /></a>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Potcon Automação Industrial Ltda.</span>
          <span>Av. Marechal Carmona, 506 · Vila João Jorge · Campinas/SP</span>
          <span>CREA-SP · 0452555</span>
        </div>
      </footer>
    </div>
  );
}
