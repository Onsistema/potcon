/*
 * Direção visual: “Industrial Signal” — prova institucional apresentada como
 * tipografia de arquivo, com blocos escuros, bordas finas e acentos cobre.
 * O componente usa apenas nomes identificados publicamente no site antigo.
 */
import { ArrowUpRight, Building2 } from "lucide-react";

export const clientGroups = [
  {
    label: "Alimentos & bebidas",
    names: ["Agrana Fruit", "Polenghi", "Nestlé", "Cafés São Francisco", "Unilever", "Vidroporto"],
  },
  {
    label: "Química & materiais",
    names: ["Croda", "Syngenta", "Cerdec", "Imerys", "Du Pont", "Kraton", "Degussa", "Crosfield"],
  },
  {
    label: "Infraestrutura & energia",
    names: ["Sanasa Campinas", "Embratel", "Air Products", "Reliance Elétrica", "Promon", "Yokogawa"],
  },
  {
    label: "Indústria & operação",
    names: ["Borealis", "Merial", "Calmitec", "Alumita", "Ecomac", "Nipro", "Goodyear", "Souza Cruz", "Cisper", "Dixie Toga", "Guabi", "Engelhard", "Owens Corning", "Compaq", "Automic", "Extratex", "Engecorr", "Quality"],
  },
];

const clientLogoItems = [
  { name: "Croda", src: "/manus-storage/croda_cbd2ee66.jpg" },
  { name: "Syngenta", src: "/manus-storage/syngenta_954719cd.gif" },
  { name: "Unilever", src: "/manus-storage/unilever_672ef8cb.jpg" },
  { name: "Sanasa", src: "/manus-storage/sanasa_d99009ed.jpg" },
  { name: "Merial", src: "/manus-storage/merial_07c12aa5.jpg" },
  { name: "Nestlé", src: "/manus-storage/nestle_223d42c4.gif" },
  { name: "Goodyear", src: "/manus-storage/goodyear_23ed3ffd.gif" },
  { name: "Agrana", src: "/manus-storage/agrana_98cd093d.jpg" },
  { name: "Imerys", src: "/manus-storage/imerys_c71c5fd9.jpg" },
  { name: "Nipro", src: "/manus-storage/nipro_ae789f0f.jpg" },
  { name: "Embratel", src: "/manus-storage/embratel_b8f8d71a.jpg" },
  { name: "Promon", src: "/manus-storage/promon_92e21029.gif" },
];

export function ClientWall({ full = false }: { full?: boolean }) {
  if (full) {
    return (
      <>
        <div className="client-logo-featured" aria-label="Logotipos de clientes citados no portfólio institucional">
          {clientLogoItems.map((client) => (
            <div className="client-logo-featured-card" key={client.name}>
              <img src={client.src} alt={client.name} />
              <span>{client.name}</span>
            </div>
          ))}
        </div>
        <div className="client-groups">
        {clientGroups.map((group) => (
          <section className="client-group" key={group.label}>
            <div className="client-group-label"><span />{group.label}</div>
            <div className="client-name-grid">
              {group.names.map((name) => <span key={name}>{name}</span>)}
            </div>
          </section>
        ))}
        </div>
      </>
    );
  }

  return (
    <div className="client-wall-compact">
      <div className="client-wall-visual"><Building2 size={17} /><span>experiências citadas no portfólio institucional</span></div>
      <div className="client-logo-spotlight" aria-label="Amostra de logotipos de clientes citados">
        {clientLogoItems.slice(0, 6).map((client) => (
          <div className="client-logo-spotlight-card" key={client.name}>
            <img src={client.src} alt={client.name} />
          </div>
        ))}
      </div>
      <a className="client-wall-link" href="/clientes">Ver empresas e segmentos <ArrowUpRight size={16} /></a>
    </div>
  );
}
