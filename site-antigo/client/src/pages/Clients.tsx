/*
 * Direção visual: “Industrial Signal” — página de clientes com uma abertura
 * azul-marinho de alto contraste e uma parede editorial de nomes verificáveis.
 */
import { ArrowLeft, ArrowUpRight, CircleCheck, MapPin } from "lucide-react";
import { Link } from "wouter";
import { ClientWall } from "@/components/ClientWall";

export default function Clients() {
  return (
    <div className="clients-page">
      <header className="clients-header">
        <div className="container clients-header-inner">
          <Link className="clients-back" href="/"><ArrowLeft size={16} /> Voltar para a home</Link>
          <Link className="clients-wordmark" href="/">potcon<span>/ clientes</span></Link>
          <a className="clients-header-cta" href="/#contato">Falar com a engenharia <ArrowUpRight size={15} /></a>
        </div>
      </header>

      <main>
        <section className="clients-hero">
          <div className="clients-hero-grid-pattern" aria-hidden="true" />
          <div className="container clients-hero-inner">
            <div>
              <div className="eyebrow"><span className="eyebrow-dot" /> Portfólio institucional</div>
              <h1>Engenharia que já esteve em muitos <em>chãos de fábrica.</em></h1>
              <p>Uma seleção das empresas e organizações apresentadas no portfólio institucional da Potcon ao longo da sua trajetória.</p>
            </div>
            <div className="clients-hero-aside">
              <span className="clients-big-number">35<span>+</span></span>
              <span>anos de estrada<br />em automação industrial</span>
              <div className="clients-aside-line" />
              <span><MapPin size={14} /> Campinas · SP</span>
            </div>
          </div>
        </section>

        <section className="clients-intro section-pad">
          <div className="container clients-intro-grid">
            <div>
              <div className="eyebrow eyebrow-blue"><span className="eyebrow-dot" /> Confiança se constrói no processo</div>
              <h2>Não é sobre um logo.<br /><em>É sobre o contexto.</em></h2>
            </div>
            <div className="clients-intro-copy">
              <p>Os nomes abaixo aparecem na página de clientes do site antigo da Potcon. Eles representam experiências citadas em diferentes setores e contextos de operação.</p>
              <div className="clients-note"><CircleCheck size={17} /><span>Lista organizada a partir do conteúdo público da empresa. Sem depoimentos ou métricas não publicadas.</span></div>
            </div>
          </div>
        </section>

        <section className="clients-wall-section">
          <div className="container">
            <ClientWall full />
          </div>
        </section>

        <section className="clients-closing section-pad">
          <div className="container clients-closing-card">
            <div>
              <div className="eyebrow"><span className="eyebrow-dot" /> Próximo capítulo</div>
              <h2>O seu processo pode ser a próxima experiência bem resolvida.</h2>
            </div>
            <a className="button button-primary" href="/#contato">Conte o seu desafio <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <footer className="clients-footer">
        <div className="container"><span>Potcon Automação Industrial</span><span>Conhecimento realizando soluções.</span><span>CREA-SP · 0452555</span></div>
      </footer>
    </div>
  );
}
