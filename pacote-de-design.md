# Pacote de Design: Potcon Automação Industrial

Documento único do Loop do Diretor Criativo. Escrito antes de qualquer render. Consumido pela construção na Fase 8. Cada linha de texto voltada ao visitante embarca ao pé da letra. Números de faixa são pontos de partida, validados pelo teste de flick.

**Nível: 3 (site coreografado).** O vídeo é desenhado para a página antes de existir, porque eu renderizo cada quadro no HyperFrames. Storyboard e mapa do site foram escritos juntos.

---

## 0. O quadro do produtor

| Item | Decisão |
|---|---|
| Fonte do vídeo | HyperFrames, renderizado local |
| Fonte das imagens de apoio | SVG e HTML desenhados à mão |
| Logos de clientes | Originais fornecidos pelo usuário, usados como estão, sem animação |
| Custo em créditos | **0** |
| Higgsfield | Conectado, 0 créditos, fora do caminho |
| Duração do hero | 10 segundos |
| Altura do hero | 700vh (ponto de partida) |
| Decisão de mobile | Hero estático composto. Celular recebe o quadro final com as legendas assentadas |

---

## 1. A premissa da marca

**A malha que não abre.**

Em engenharia de controle, malha fechada é o sistema que mede a própria saída e se corrige sozinho, continuamente, para sempre. Ele nunca para de olhar. É o oposto de um projeto que é entregue e abandonado.

O site inteiro ensina e vende essa ideia. A Potcon não vende um projeto de automação, vende uma malha que continua fechada depois que o caminhão vai embora: documentação que serve, conhecimento que fica na planta, e alguém que atende o telefone daqui a doze anos. Trinta e cinco anos de operação é a única prova dessa promessa que um concorrente novo não consegue falsificar.

Cada seção serve a premissa. O momento interativo é o visitante fechando a malha com as próprias mãos. Se uma seção não serve a premissa, ela não entra na página.

---

## 2. A pesquisa (a voz real do comprador)

Levantada em fóruns técnicos onde engenheiro de planta desabafa, porque busca em português só devolveu blog de fornecedor.

**O medo número um, repetido em tópico atrás de tópico:** a documentação vira inútil quando o integrador que construiu o sistema já foi embora e alguém precisa mexer nele anos depois.

Os demais, em ordem de recorrência:
1. Suporte depois da entrega, a preocupação mais citada na hora de escolher integrador.
2. Ficar refém de um fornecedor só.
3. Ninguém na planta sabe operar depois, agravado no Brasil pela falta de mão de obra qualificada.
4. Parada não programada não custa só produção: desgasta a equipe, que vive apagando incêndio sob pressão, e derruba os índices de segurança.
5. Projeto mal planejado e integração incompleta viram custo de manutenção maior, não menor.
6. Coordenar vários fornecedores para um projeto só acontecer.

**A ÚNICA chamada para ação:** agendar uma visita técnica. Não é orçamento, não é catálogo, não é newsletter. Uma conversa técnica na planta do cliente. Toda seção afunila para essa âncora.

---

## 3. A paleta como tokens CSS

Amostrada do mundo da filmagem: uma coluna técnica escura, um pulso de luz descendo, camadas acendendo na passagem. Os valores finais são calibrados contra o vídeo renderizado, depois do gate. Estes são a direção, e já são próximos.

```css
:root{
  --canvas:#0E1418;        /* grafite azulado profundo, nunca preto puro */
  --panel:#161F26;         /* cartões e superfícies elevadas */
  --steel:#243138;         /* bordas, divisórias, estrutura */
  --accent:#2FBF87;        /* verde instrumento: o CTA e a ênfase rara */
  --accent-hover:#3FD79A;
  --accent-muted:#1C6B50;  /* nível de sussurro: bordas, brilhos, partículas */
  --signal:#F2F6F4;        /* o branco quente do pulso, o texto de título */
  --text-primary:#E4EBE8;
  --text-secondary:#8FA3A0;
}
```

**Por que verde, dito em voz alta.** Numa planta, verde significa rodando. É a convenção do próprio mundo do assunto, e a premissa inteira é "a operação não para". A skill proíbe quase-preto com verde-ácido; este não é ácido, é um verde de instrumento dessaturado, e aparece em doses raras: só o CTA, o foco, e dois momentos de ênfase.

**O que foi deliberadamente evitado:** creme com acento terracota (é exatamente a paleta do site atual, e a skill proíbe pelo nome), âmbar quente com serifa de alto contraste, e brutalismo de borda fina.

---

## 4. O trio de fontes

| Papel | Face | Pesos |
|---|---|---|
| Display | **Archivo** | 600, 700 |
| Texto | **IBM Plex Sans** | 400, 500 |
| Mono, rótulos e leituras | **IBM Plex Mono** | 400, 500 |

Archivo é um grotesco pesado de linhagem de sinalização: lê como letra estampada em máquina, com peso real. IBM Plex Sans nasceu para produto técnico e carrega essa origem sem gritar. IBM Plex Mono faz os rótulos de instrumento e a numeração de seção.

Nenhuma é Inter, nenhuma é Roboto, e nenhuma é Space Grotesk, que é justamente a display do site atual e o reflexo padrão de todo gerador.

---

## 5. O storyboard do hero (10 segundos, uma tomada, sem cortes)

A câmera desce em linha reta por dentro de uma coluna técnica escura. Um pulso de luz desce à frente dela. Cada camada que o pulso atravessa acende e **fica acesa atrás**, então a descida constrói o sistema em vez de só passar por ele.

| Momento | Segundos | O que acontece | Onde o texto vive |
|---|---|---|---|
| Nascimento | 0.0 a 1.6 | Escuro com estrutura apenas insinuada. O pulso nasce no alto do quadro e começa a cair | Centro-esquerda |
| Camada 1, campo | 1.6 a 3.6 | O pulso cruza um plano de sensores. Pontos acendem em sequência e permanecem | Esquerda |
| Camada 2, controle | 3.6 a 5.6 | Cruza um plano denso de trilhas ortogonais. As trilhas se acendem por condução, não por corte | Direita |
| Camada 3, supervisão | 5.6 a 7.6 | Cruza um plano aberto onde as trilhas convergem em poucas linhas grossas | Esquerda |
| Assentamento | 7.6 a 10.0 | A descida desacelera. O pulso pousa na base e a coluna inteira, agora acesa de cima a baixo, respira devagar | Centro, com margem generosa acima e abaixo |

**Leis atendidas.** Movimento vertical descendo, que casa um a um com o scroll (leis 1 e 6). Um assunto, um movimento contínuo, sem cortes (lei 2). O caminho é rígido mas a cena vive: o pulso ondula, as camadas piscam ao acender, partículas derivam (lei 3). O final é uma chegada composta e parada, com margem para o cabeçalho sentar sem cortar nada (lei 4). Assunto tolerante: luz, forma e partícula, zero anatomia (lei 5). A faixa de ação fica na coluna central e o texto ladeia (lei 7). A travessia de cada plano ganha um momento físico de lente: uma batida curta de desfoque e um respingo de partícula (lei 8). Nenhum texto e nenhum logo dentro da imagem (lei 12).

**A guarda de composição do final.** O quadro final precisa ser verificado com o cabeçalho simulado por cima, em janela larga e em janela baixa, antes de aprovar. Como o final é textura sangrada de luz e não um objeto recortável, não existe nada para cortar feio.

---

## 6. O mapa de faixas

Cinco batidas, uma por momento da filmagem. Intervalos em progresso de scroll, pontos de partida validados depois pelo teste de flick.

| Faixa | Intervalo | Momento da filmagem | Texto (ao pé da letra) | Entrada |
|---|---|---|---|---|
| 1 | 0.00 a 0.16 | O pulso nasce e começa a cair | **"O sinal nasce no campo."** | Deriva para baixo, palavra por palavra, ecoando a queda |
| 2 | 0.18 a 0.36 | Cruza o plano de sensores | **"Atravessa o controle."** | Alinhamento em grade, caracteres deslizando em ordem de leitura, ecoando os pontos acendendo em sequência |
| 3 | 0.38 a 0.56 | Cruza as trilhas ortogonais | **"Chega em decisão."** | Desfoque para nítido, ecoando a condução se resolvendo |
| 4 | 0.58 a 0.76 | As trilhas convergem | **"A malha fecha."** | Metades se abrindo e voltando ao centro, ecoando a convergência |
| 5 | 0.78 a 1.00 | Assentamento, coluna inteira acesa | **"E não abre há 35 anos."** | Subida palavra por palavra em assentamento de três etapas |

A faixa 1 abre já assentada, com a rampa única baseada em tempo no carregamento. A faixa 5 pula a suavização de saída.

**Dispositivo de marca deliberado, declarado aqui para o gate de texto não confundir com sinal de IA:** as cinco batidas formam um staccato planejado, escrito de propósito, cada frase curta casando com um movimento da filmagem. Elas ficam como estão.

O assentamento da faixa 5 carrega três chegadas na mesma faixa:
- Título: **"E não abre há 35 anos."**
- Subtítulo: **"Potcon. Engenharia de automação que continua depois da entrega."**
- Fileira do CTA: botão **"Agendar visita técnica"** e link secundário **"Ver como trabalhamos"**

---

## 7. O bloco de texto do hero estático

Para celulares e movimento reduzido, composto sobre o quadro final.

- Kicker: **AUTOMAÇÃO INDUSTRIAL DESDE 1991**
- Título: **A malha fecha. E não abre há 35 anos.**
- Subtítulo: **Engenharia, integração e suporte para a operação que não pode parar. Da especificação à manutenção, com a mesma equipe.**
- CTA: **Agendar visita técnica**

---

## 8. O esboço abaixo da dobra

Toda seção afunila para a âncora `#visita`. Duas seções vizinhas nunca dividem o mesmo esqueleto de layout.

### 8.1 Faixa de permanência (logo após o assentamento)
Uma faixa fina, em mono, com quatro leituras de instrumento: **1991 · 35 ANOS · CAMPINAS SP · MALHA FECHADA**. Layout: fileira alinhada na linha de base, não caixas centradas.

### 8.2 O problema (a voz do comprador)
Kicker: **O QUE TIRA O SONO DE QUEM OPERA**
Título: **O projeto acaba. O sistema fica com você.**
Lede: **Quando o integrador vai embora, alguém na sua planta herda um sistema que ninguém documentou direito. É aí que a conta chega.**

Três cartões, texto tirado direto da pesquisa:
1. **A documentação que não serve** / "Anos depois, quem precisa mexer no sistema descobre que o manual não explica o que foi feito. A planta vira arqueologia."
2. **O telefone que ninguém atende** / "O suporte que existia durante a obra some depois do aceite. A parada acontece no domingo, e você liga para o vazio."
3. **A equipe que não foi ensinada** / "O sistema roda, mas só o fornecedor sabe mexer. Toda mudança pequena vira orçamento e espera."

### 8.3 A cadeia (uma parceira, do desenho ao suporte)
Kicker: **UMA CADEIA, UMA PARCEIRA**
Título: **Você não precisa coordenar cinco fornecedores.**
Lede: **Diagnóstico, elétrica, integração e suporte na mesma casa. O fio nunca é passado de mão em mão.**

Quatro etapas, cada uma com número em mono, título e uma linha. Todas ganham tratamento igual, incluindo elemento visual, porque assimetria entre elementos paralelos lê como buraco:
1. **Diagnóstico e PDA** / "Visita técnica na sua planta. Saímos com um plano de automação claro, viável e priorizado." / rótulo: CLAREZA ANTES DO INVESTIMENTO
2. **Elétrica e instrumentação** / "Painéis, instrumentação de campo e infraestrutura para dar estabilidade ao que você precisa controlar." / rótulo: BASE SÓLIDA
3. **Integração e supervisão** / "CLPs, supervisórios e sistemas de controle conversando, para o dado chegar em quem decide." / rótulo: TUDO CONVERSA
4. **Implantação e suporte** / "Montagem, instalação, treinamento e manutenção. A parte que a maioria trata como pós-venda, e para nós é o trabalho." / rótulo: A MALHA CONTINUA FECHADA

### 8.4 O momento interativo: fechar a malha
Kicker: **A DIFERENÇA, EM UM GESTO**
Título: **Segure para fechar a malha.**
Microtexto: **Um sistema em malha aberta entrega e vai embora. Um sistema em malha fechada mede, corrige e continua. A Potcon é a segunda.**

Mecânica: o visitante pressiona e segura. Enquanto segura, uma linha de sinal desenhada em SVG completa o percurso e volta ao ponto de partida. Ao fechar, a seção acende em sequência e revela três provas de permanência:
- **Documentação que a sua equipe consegue ler**
- **Treinamento para o conhecimento ficar na planta**
- **Suporte que atende anos depois do aceite**

Soltar cedo desce o progresso suavemente, nunca estala para zero. Movimento reduzido recebe o estado final na hora, sem segurar.

### 8.5 Setores
Kicker: **ONDE O PROCESSO ACONTECE**
Título: **Ritmos industriais diferentes, a mesma exigência.**
Lede: **Produtividade, rastreabilidade e segurança andando juntas.**
Seis setores em mono: Alimentos e bebidas · Química e processos · Farmacêutica · Infraestrutura e energia · Agronegócio · Logística de grãos

### 8.6 A prova de permanência (os clientes)
Kicker: **TRINTA E CINCO ANOS DE CHÃO DE FÁBRICA**
Título: **Elas não nos chamaram uma vez.**
Lede: **Nomes que aparecem na trajetória da Potcon, organizados por setor. A prova não é o logo. É a empresa ainda estar aqui.**

As logos originais que o usuário fornecer, sem animação, em altura óptica igualada e uma única grade. Abaixo, a lista completa por setor em tipografia, em quatro colunas:
- **Alimentos e bebidas:** Agrana Fruit, Polenghi, Nestlé, Cafés São Francisco, Unilever, Vidroporto
- **Química e materiais:** Croda, Syngenta, Cerdec, Imerys, Du Pont, Kraton, Degussa, Crosfield
- **Infraestrutura e energia:** Sanasa Campinas, Embratel, Air Products, Reliance Elétrica, Promon, Yokogawa
- **Indústria e operação:** Borealis, Merial, Calmitec, Alumita, Ecomac, Nipro, Goodyear, Souza Cruz, Cisper, Dixie Toga, Guabi, Engelhard, Owens Corning, Automic, Extratex, Engecorr, Quality

Nota de rodapé da seção, em mono pequeno: **LISTA ORGANIZADA A PARTIR DO CONTEÚDO PÚBLICO DA POTCON. SEM DEPOIMENTOS OU MÉTRICAS NÃO PUBLICADAS.**

A moldura "trajetória, por setor" é o que resolve o problema da lista carregar nomes de empresas que mudaram ou deixaram de existir. Numa lista sem data isso entrega idade. Como trajetória de 35 anos, vira profundidade.

### 8.7 FAQ (as objeções reais da pesquisa)
Kicker: **PERGUNTAS QUE VOCÊS FAZEM**
Título: **O que você provavelmente quer perguntar antes de ligar.**

1. **"E se eu precisar mexer no sistema daqui a dez anos?"** / "A documentação é entregue no formato que a sua equipe usa, e a gente continua atendendo. Tem cliente nosso que voltou depois de mais de uma década."
2. **"Vou ficar dependente de vocês?"** / "O objetivo é o contrário. Treinamos a sua equipe para operar e manter sem depender de ninguém. Ficamos disponíveis, não indispensáveis."
3. **"Minha planta é antiga. Dá para automatizar sem parar tudo?"** / "Dá, e é boa parte do que fazemos. Sistema antigo não condena a operação, ele pode ser reautomatizado por etapas, com parada programada."
4. **"Quanto custa?"** / "Depende do que a visita técnica encontrar. A conversa e o diagnóstico não custam nada, e você sai com o escopo e o número na mão."
5. **"Vocês atendem fora de Campinas?"** / "Sim. A base é Campinas e os projetos acontecem onde a planta estiver."

### 8.8 A chamada para ação
Kicker: **PRÓXIMO PASSO**
Título: **Qual gargalo a sua operação não pode mais carregar?**
Lede: **A primeira conversa é técnica, objetiva e sem compromisso. Uma visita muda a qualidade da conversa.**

Formulário: **Seu nome** · **Empresa** · **O que precisa destravar?** · botão **Enviar contexto**
Destino: **mailto** para potcon@potcon.com.br, com assunto e corpo montados. Microtexto honesto: **Ao enviar, o seu aplicativo de e-mail abre com a mensagem pronta.**
Estado de sucesso: a linha de sinal fecha a malha uma última vez.

Contato direto ao lado: **(19) 3233-6576** · **potcon@potcon.com.br** · **Av. Marechal Carmona, 506, Vila João Jorge, Campinas SP** · **Atendimento em horário comercial**

### 8.9 Rodapé
Marca, endereço, telefone, e-mail, e a linha **Potcon Automação Industrial · Desde 1991**. Marca real, então não há declaração de marca fictícia.

---

## 9. O plano da camada vetorial

**O elemento assinatura: a linha da malha.** Um traço fino em `--accent-muted` que nasce onde o hero assenta e desce pela página inteira, atravessando cada seção com nós marcados nos pontos de decisão. Na seção 8.4 o visitante fecha ela com as próprias mãos. Na CTA final ela curva e volta para o topo, completando o laço.

Teste do volume da assinatura: se ela fosse removida, a página perderia a metáfora inteira e viraria uma sequência de blocos. Passa.

- A linha se traça sozinha no scroll, com `stroke-dashoffset` comandado por IntersectionObserver.
- Nós acendem quando a seção correspondente entra.
- Partículas em nível de sussurro derivando na camada de ambiente fixa ao fundo, ciclo de 90 segundos.
- Brilho suave em `--accent` nos números de etapa, atrasos negativos para nunca estalar na primeira pintura.
- Tudo honra movimento reduzido: estados finais mostrados, motores parados.

---

## 10. A lista de engenharia

Padrão completo de `references/pipeline-scrub.md`, nada pela metade:

- Busca do vídeo como Blob transmitido com anel de carregamento (o hero de 10s deve passar de 8 MB), pôster pintado primeiro, watchdog de 20s.
- Interpolação normalizada por dt no loop rAF que descansa ao convergir.
- Seeks travados com o padrão à prova de deadlock, incluindo o reset da flag no `error`.
- Escritas de DOM só na mudança, limitadas a 10Hz para texto.
- Ritmo de faixas em distância de scroll, validado pelo teste de flick em 120, 240 e 360px.
- Sistema de legibilidade de quatro camadas: scrim base global, scrim por faixa acompanhando `--k`, token de sombra de três camadas, chip para texto pequeno. Auditoria de pior quadro em 3.5:1 no mínimo.
- Os cinco portões do hero estático, idênticos caractere por caractere em CSS e JS, mantidos vivos com listeners de `change`.
- Completo sem o vídeo: a página inteira funciona sobre o pôster.
- `overflow-x: clip` em `html` e `body`, com `hidden` antes como recuo.
- Movimento reduzido honrado ao vivo, nas duas direções, com `pinToFinalStates` e o desfazer correspondente.
- Vídeo decorativo: `aria-hidden`, sem `controls`, fora da ordem de tab.
- Fontes enxugadas só nos pesos em uso, com `preconnect`.
- `og:image` e `og:url` com o comentário `<!-- DEPLOY STEP -->` para a Fase 10.

---

## 11. A linha do gate de texto

Cada linha voltada ao visitante deste pacote embarca ao pé da letra. A página construída precisa passar o gate de grep da Fase 9 antes de alguém ver: zero travessões, zero das palavras de estoque (alavancar, robusto, empoderar, destravar, acionável, orientado a dados, soluções, sinergia, escalável), mais a varredura do corpo por construções "não é só X, é Y", faixas falsas, atribuições vagas, finais grandiosos, e as palavras testamento, panorama, mergulhar e elevar.

**Exceção declarada.** O staccato das cinco faixas do hero e o trio da seção 8.4 são dispositivos de marca deliberados, escolhidos de propósito para esta marca. Ficam.

**Atenção especial no gate:** a palavra **destravar** aparece de propósito no formulário ("O que precisa destravar?") porque é o texto real do site atual e é a linguagem do próprio comprador. Está na lista de estoque, então esta é a exceção declarada, e é a única permitida.
