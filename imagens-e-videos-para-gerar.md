# Imagens e vídeos para gerar: Potcon

**Regra que vale para todos os prompts:** cole em inglês, sem traduzir. Os modelos rendem bem melhor assim.

---

# RODADA 1: escolher o conceito ✅ CONCLUÍDA

| Conceito | Veredito |
|---|---|
| **A, a máquina que ganha controle** | ✅ **APROVADO e escolhido.** Melhor anatomia, espaço calmo à esquerda exatamente onde o texto precisa, e já conta o retrofit no quadro parado |
| C, a caminhada pela planta | Bonita, mas sem espaço calmo nas laterais, e lê como fábrica desativada |
| B, o antes e depois | ❌ Reprovado. Manômetro derretido, correia que não fecha, e lê como museu abandonado |

### ⬛ AÇÃO NECESSÁRIA

Salve a imagem escolhida (a da máquina longa com os painéis verdes ao fundo) como:

```
review\conceito-a.jpg
```

Ela é o quadro inicial do vídeo. Sem esse arquivo em disco eu não consigo processar nada depois.

---

# RODADA 2: o vídeo hero

## VÍDEO 1 — a chegada do controle

**Formato:** MP4
**Proporção:** 16:9 (horizontal)
**Tamanho:** 1920x1080 (1080p). **Não gere em 4K**, a versão web é recomprimida de qualquer jeito e 4K só multiplica o custo e o tempo.
**Duração:** 6 segundos (se a ferramenta permitir 8 ou 10, melhor ainda, me avise qual você usou)
**Áudio:** não importa, eu removo
**Como gerar:** modo **imagem para vídeo** (image to video), usando `review\conceito-a.jpg` como imagem inicial
**Salvar em:** `review\video-1-hero.mp4`

**O que tem que acontecer, e essa é a alma da tomada:** a câmera avança ao longo da máquina, que começa **toda apagada**. Conforme ela passa, os painéis de controle vão **acendendo um atrás do outro**, e ficam acesos. O verde se espalha pela máquina na esteira da câmera. No fim ela para, e a máquina inteira está acesa, controlada e rodando.

É a mesma máquina do primeiro ao último quadro. Nada se transforma em outra coisa. O que muda é que ela ganha controle.

### ❌ Tentativa 1: reprovada

| Problema | Gravidade |
|---|---|
| Trocou a máquina velha por uma de ficção científica com braço robótico e LED azul | Grave, mata a mensagem |
| O final não descansa: movimento 6,9 no fim contra 6,0 no meio, e cauda em 6,6 até o último quadro | Grave, a página não tem onde assentar |
| 640x360 em vez de 1920x1080 | Grave para tela cheia |
| Texto e gráficos nas telas, e azul no lugar do verde | Corrigível |

**A lição:** o modelo escala quando recebe uma viagem longa. Oito segundos percorrendo uma máquina inteira é convite para ele inventar. O prompt novo encurta o movimento e proíbe nome por nome tudo que ele inventou.

### Tentativa 2 (use este)

**A máquina MUDA, e é para mudar mesmo.** O que a tentativa 1 errou não foi mudar, foi virar ficção científica. Retrofit de verdade tem cara de chão de fábrica: painel cinza novo parafusado no ferro velho, eletrocalha nova, sensor em suporte, IHM num braço articulado, fiação bem passada, sinaleiro no topo. O corpo antigo continua aparecendo por baixo, e é justamente isso que faz o antes e depois ser legível.

**Duração:** 6 segundos.

**Prompt (colar em inglês, sem traduzir):**

```
One continuous shot, no cuts. A slow dolly move forward along the flank of a long
old industrial machine inside a working factory, ending in a gentle complete stop.

The machine is being retrofitted in front of the camera. It starts as neglected
old equipment: dark weathered steel, worn paint, bare mechanical linkages, no
electronics, unpowered and still. As the camera travels along it, modern
industrial control equipment appears on the same machine, section by section, and
stays: new grey powder coated control cabinets bolt onto the old frame, galvanised
cable trays run along the top, neat bundles of new wiring drop into place, compact
photoelectric sensors appear on steel brackets, a small industrial HMI panel swings
out on an articulated arm, and a red amber green stack light rises at the end. Rows
of small indicator lamps blink awake and stay lit, casting a soft green glow onto
the old steel around them.

CRITICAL: the machine's original iron body, its overall shape, its size and its
position in the frame stay recognisably the same underneath. The old weathered
steel remains visible between and behind the new equipment. This is the same
machine upgraded, not a different machine.

The machine starts running as it is completed: rollers turning, linkages rising and
falling, a faint vibration in the metal. Dust drifts through a warm overhead work
light. Green reflections spread on the polished concrete floor on the left.

The camera decelerates through the final two seconds and comes to a complete stop,
holding perfectly still: the retrofitted machine running steadily, its new grey
cabinets and lit indicator lamps sitting on the visibly old steel body, the left
third of the frame open plant floor carrying the green reflection, generous empty
space above the machine. The final two seconds are almost motionless.

STRICTLY FORBIDDEN: robot arms, LED light strips, glowing edge lighting, white or
chrome futuristic machinery, holographic or transparent displays, screens showing
numbers charts or graphics, blue lighting, science fiction styling, any machine
that replaces the original one.
Photorealistic documentary style, real working Brazilian factory, industrial grey
and beige equipment colours, cinematic, 16:9, 1920x1080.
No text, no lettering, no logos, no brand names anywhere.
```

### As três checagens desse prompt

1. **A máquina tem que estar reconhecível no fim.** Mesmo corpo de ferro, agora com painel cinza, eletrocalha, sensores e sinaleiro por cima. Se o último quadro tiver um equipamento branco e brilhante que não existia, reprovou de novo.
2. **Os últimos dois segundos têm que ser quase parados.** Isso não é gosto, é o que faz a página assentar.
3. **Zero azul, zero braço robótico, zero tela com gráfico.**

Se a segunda tentativa também virar ficção científica, o problema deixa de ser o prompt e passa a ser o modelo. Aí o plano B é gerar **duas imagens**, o antes e o depois da mesma máquina, e eu faço a transição no HyperFrames com controle total. Custo zero e resultado garantido.

### O que eu vou inspecionar quando você mandar

Extraio os quadros do começo, do meio e do fim e olho:

1. **Marca registrada** que a IA tenha contrabandeado na máquina ou nos painéis.
2. **Anatomia** que quebrou no movimento. Máquina parada aguenta muita coisa, máquina em movimento denuncia.
3. **Se o final realmente descansa.** Meço o movimento quadro a quadro. Se a câmera continuar derivando no fim, a página não tem onde assentar. Nesse caso o conserto costuma ser cortar a cauda no último quadro estável, e não gerar de novo.
4. **Se o terço esquerdo continuou calmo** ao longo da tomada inteira, porque é lá que as cinco frases moram.
5. **Se termina aceso.** Um final escuro passa sensação de fábrica parada, que é o contrário da mensagem.

### Se sair ruim

Não gere três vezes seguidas mudando o prompt no chute. Me manda a tentativa que saiu e eu digo qual palavra ajustar. Se três vídeos falharem no mesmo conceito, o problema é o conceito e não o prompt, e a gente pivota em vez de insistir.

---

# RODADA 3: as imagens de apoio

Fica em branco de propósito. Elas precisam ser do **mesmo mundo** do vídeo aprovado: mesma paleta, mesma luz, mesmo tratamento, tudo descrito explicitamente em cada prompt. Isso só dá para escrever com a filmagem aprovada na mão.

Serão de duas a quatro imagens para as seções de baixo, e cada elemento paralelo recebe tratamento igual. Se uma seção tem três passos, os três ganham imagem, porque assimetria entre elementos iguais lê como buraco.
