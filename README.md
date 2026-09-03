# Site da Potcon Automação Industrial

Site institucional de página única, com hero cinematográfico controlado por scroll.
HTML puro, CSS e JavaScript vanilla. Sem framework, sem build, sem npm.

## O que publica

Só a pasta `site/`. Todo o resto é bastidor e nunca vai para o ar.

```
site/
├── index.html
└── assets/
    ├── hero-scrub.mp4     o vídeo do hero, tratado para scrub
    ├── hero-poster.jpg    primeiro quadro, pintado antes do vídeo chegar
    ├── hero-ending.jpg    quadro final, usado no hero estático de celular
    └── logo-marca.png     o símbolo da marca
```

## Como ver localmente

Dois cliques no `index.html` mostram o hero estático, porque navegador bloqueia
`fetch` em endereço `file://` e o carregador de vídeo recua de propósito.
Para ver a jornada de scroll completa, sirva a pasta:

```bash
cd site && npx http-server -p 8899 -c-1
```

E abra `http://127.0.0.1:8899/` num navegador de verdade, não num painel embutido.

## As decisões que governam o projeto

- **A premissa:** o retrofit salva a máquina. O corpo mecânico continua, o controle é novo.
- **A paleta** foi amostrada do logo: verde `#83E607` do nó, azul `#004AE3`, e um
  marinho `#08111F` derivado do próprio azul da marca.
- **O hero** roda em progresso de scroll, não em segundos. O vídeo é buscado como
  Blob porque muita hospedagem não suporta download parcial, e sem isso o scrub
  trava em zero no ar enquanto funciona no local.
- **Celular e movimento reduzido** recebem um hero de imagem estática e nunca
  baixam o vídeo.
- **A página é completa sem o vídeo.** Se ele nunca carregar, tudo funciona sobre o pôster.

## Bastidor

| Pasta | O que é |
|---|---|
| `review/` | Brutos, tentativas descartadas e quadros de inspeção |
| `videos/hero-malha/` | Composição HyperFrames do primeiro conceito, abandonado |
| `site-antigo/` | Código do site anterior, guardado para referência |
| `pacote-de-design.md` | Cada decisão criativa, escrita antes de qualquer geração |
| `textos-do-site.md` | Todo o texto voltado ao visitante |
| `imagens-e-videos-para-gerar.md` | Especificações e prompts das peças geradas |

## Contato da empresa

Potcon Automação Industrial
Av. Marechal Carmona, 506, Vila João Jorge, Campinas SP
(19) 3233-6576 · potcon@potcon.com.br
