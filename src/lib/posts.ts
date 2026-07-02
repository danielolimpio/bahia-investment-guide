import heroEolica from "@/assets/hero-eolica.jpg";
import heroImovel from "@/assets/hero-imovel.jpg";
import heroCacau from "@/assets/hero-cacau.jpg";
import postSolar from "@/assets/post-solar.jpg";
import postMorro from "@/assets/post-morro.jpg";
import postFruta from "@/assets/post-fruta.jpg";
import postSalvador from "@/assets/post-salvador.jpg";
import postDue from "@/assets/post-due.jpg";
import postItacare from "@/assets/post-itacare.jpg";
import postRoi from "@/assets/post-roi.jpg";
import midEolica from "@/assets/mid-eolica-chapada.jpg";
import midCasa from "@/assets/mid-casa-itacare.jpg";
import heroSolarBahia from "@/assets/hero-solar-bahia.jpg";
import midSolarTelhado from "@/assets/mid-solar-telhado.jpg";
import heroFranquias from "@/assets/hero-franquias-ba.jpg";
import midFranquias from "@/assets/mid-franquias-plano.jpg";
import type { Post } from "@/components/site/PostCard";

export type FaqItem = { q: string; a: string };

export type FullPost = Post & {
  slug: string;
  categorySlug: string;
  tags: string[];
  content: string[]; // paragraphs (markdown-lite: ## H2, ### H3, #### H4, - lista, > callout, | tabela |, **bold**)
  read: string;
  excerpt: string;
  metaTitle?: string;
  metaDescription?: string;
  updated?: string;
  midImage?: string;
  midImageAlt?: string;
  midImageCaption?: string;
  faq?: FaqItem[];
  authorBio?: string;
  sources?: { label: string; url?: string }[];
};

export const CATEGORIES = [
  { slug: "energia", name: "Energia Eólica & Solar", short: "Energia", desc: "Análises de parques eólicos e solares na Bahia com TIR, payback e risco regulatório." },
  { slug: "imoveis", name: "Imóveis de Temporada", short: "Imóveis", desc: "Cap rate, ocupação e ROI real de casas e pousadas em Trancoso, Itacaré e Morro de SP." },
  { slug: "agronegocio", name: "Agronegócio Premium", short: "Agronegócio", desc: "Cacau fino, fruticultura irrigada e cadeias de alto valor agregado." },
  { slug: "due-diligence", name: "Due Diligence", short: "Due Diligence", desc: "Checklists, estrutura societária e proteção patrimonial para investir na Bahia." },
  { slug: "incentivos", name: "Incentivos Fiscais", short: "Incentivos", desc: "PRODUZIR BA, DESENVOLVE, ICMS e benefícios para indústrias e energia." },
  { slug: "cases", name: "Cases & ROI Real", short: "Cases", desc: "Estudos de caso anonimizados com números reais de aquisição, custo e retorno." },
  { slug: "analise", name: "Análises de Mercado", short: "Análise", desc: "Visão regional, ciclos e comparativos entre ativos baianos." },
];

export const catName = (slug: string) => CATEGORIES.find((c) => c.slug === slug)?.short ?? slug;

const lorem = (s: string) => s;

export const POSTS: FullPost[] = [
  {
    slug: "bahia-lidera-eolica-tir-16",
    title: "Bahia lidera geração eólica do Brasil: 5 parques com TIR acima de 16% em 2026",
    category: "Energia", categorySlug: "energia",
    tags: ["Eólica", "ANEEL", "TIR", "Leilão A-4", "PPA", "BESS", "Chapada Diamantina"],
    image: heroEolica, author: "Equipe ANB", date: "28 jun 2026", read: "8 min",
    excerpt: "Mapa completo dos cinco parques eólicos baianos com maior TIR alavancada em 2026, premissas de PPA, PLD, câmbio e caminhos práticos para investidor pessoa física entrar via SPE, FIP-IE e debêntures incentivadas.",
    metaTitle: "5 parques eólicos com TIR acima de 16% na Bahia em 2026",
    metaDescription: "Análise técnica dos parques eólicos baianos mais rentáveis de 2026: TIR, payback, PPA, PLD, ticket mínimo e como investir com R$ 5 mil.",
    updated: "28 jun 2026",
    midImage: midEolica,
    midImageAlt: "Vista aérea de parque eólico ao pôr do sol na Chapada Diamantina, Bahia, com dezenas de aerogeradores alinhados",
    midImageCaption: "Cluster eólico na borda da Chapada Diamantina: fatores de capacidade acima de 55% colocam a Bahia entre as regiões de melhor vento do planeta.",
    authorBio: "Equipe editorial do AgoraNaBahia, formada por analistas com passagem por ANEEL, EPE e mesas de originação de energia. Todas as análises são revisadas por engenheiro eletricista sênior com CREA ativo.",
    sources: [
      { label: "ANEEL — Banco de Informações da Geração (BIG)", url: "https://www.gov.br/aneel" },
      { label: "EPE — Plano Decenal de Expansão de Energia", url: "https://www.epe.gov.br" },
      { label: "SEI-BA — Indicadores Econômicos da Bahia", url: "https://www.sei.ba.gov.br" },
    ],
    content: [
      "> **Resumo executivo** — Em 2026 a Bahia ultrapassou 10 GW de capacidade eólica instalada e responde por cerca de um terço de toda a geração eólica do Sistema Interligado Nacional. Cinco projetos operacionais no Sertão, na Chapada Diamantina e no Vale do São Francisco entregaram, nos últimos doze meses, Taxa Interna de Retorno alavancada acima de 16% ao ano. Este guia mostra como esses números são construídos, o que precisa dar certo para eles se sustentarem e como o investidor pessoa física pode participar com ticket a partir de R$ 5 mil.",
      "Quem acompanha o setor elétrico brasileiro há uma década percebe uma inversão silenciosa: o vento do Nordeste deixou de ser complemento sazonal do parque hidrelétrico e virou espinha dorsal do sistema em vários meses do ano. Dentro do Nordeste, a Bahia consolidou uma vantagem que não é apenas geográfica. É uma combinação de vento estável, terrenos com poucos conflitos fundiários, subestações reforçadas nos últimos oito anos e um arcabouço estadual de incentivos que reduz o CAPEX efetivo de projetos industriais associados. Para quem avalia investir em energia renovável, entender essa engrenagem é o primeiro passo antes de olhar qualquer planilha.",
      "## Por que a Bahia lidera a geração eólica no Brasil",
      "Três variáveis explicam a liderança baiana. A primeira é o próprio recurso eólico: as medições anemométricas em torres de 120 a 160 metros nos municípios de Caetité, Guanambi, Pindaí, Brotas de Macaúbas, Sento Sé e Casa Nova mostram velocidades médias entre 8,5 e 9,7 m/s, com baixa variabilidade diária. Na prática, isso se traduz em fatores de capacidade — o quanto o parque efetivamente gera em relação ao seu potencial — entre 52% e 60%, patamar que a Alemanha só consegue no offshore.",
      "A segunda variável é a infraestrutura de transmissão. Os linhões que ligam Xingó, Sobradinho e o Polo de Camaçari foram reforçados após os leilões de transmissão de 2018 e 2019. Isso reduziu o chamado risco de curtailment (corte de geração por limitação da rede), que ainda castiga projetos no Piauí e no Rio Grande do Norte. Para o investidor, menos curtailment significa receita mais previsível e, portanto, TIR menos volátil.",
      "A terceira variável é regulatória e institucional. O programa DESENVOLVE/PRODUZIR BA, revisto por decreto estadual, mantém benefícios de ICMS para operações vinculadas a projetos energéticos industriais — especialmente quando conectados à cadeia de hidrogênio verde em Camaçari. Some-se a isso o BNDES Finem para renováveis, com taxas equivalentes a IPCA + 4,5% a 5,5% ao ano em 2026, e o mercado de debêntures incentivadas (Lei 12.431), que baratearam o custo médio ponderado de capital dos projetos baianos em cerca de 180 pontos-base contra a média nacional.",
      "### O que os dados oficiais mostram",
      "Segundo o Banco de Informações da Geração da ANEEL, a Bahia fechou o segundo trimestre de 2026 com 10,4 GW eólicos operacionais, mais 2,1 GW em construção com previsão de entrada até 2028. O Sistema de Estatísticas do Estado (SEI-BA) registra que o setor de eletricidade e gás foi o de maior crescimento no PIB estadual nos últimos três anos, avançando bem acima da média do PIB baiano no período — um sinal claro de para onde o capital produtivo está migrando.",
      "## Como se calcula a TIR de um parque eólico",
      "Antes de olhar os cinco projetos, vale destravar o vocabulário. A Taxa Interna de Retorno alavancada de um parque eólico é a taxa que zera o Valor Presente Líquido do fluxo de caixa do acionista, considerando que uma parte do CAPEX foi financiada por dívida — tipicamente BNDES e debêntures incentivadas, na proporção de 65% a 75%. Ela difere da TIR do projeto (não alavancada), que ignora a estrutura de capital.",
      "Três premissas comandam o resultado. **CAPEX por megawatt instalado** — em 2026 gira entre R$ 3,4 milhões e R$ 4,1 milhões por MW na Bahia, dependendo da distância da subestação, do porte da turbina e da complexidade do terreno. **Preço de venda da energia** — combinação entre o PPA de longo prazo (Contrato de Compra e Venda de Energia, geralmente de 15 a 20 anos) e o preço de liquidação das diferenças (PLD) para a parcela vendida no mercado livre. **Fator de capacidade** — quanto maior, mais receita para o mesmo CAPEX.",
      "> Um erro comum de quem monta a própria planilha é usar PLD histórico como projeção. O PLD é volátil e depende de hidrologia, demanda e reservatórios. Para análise conservadora, use a média ponderada dos últimos 60 meses com desconto de 15% — o que hoje coloca o PLD SE/CO de referência entre R$ 150 e R$ 190 por MWh.",
      "## Os 5 parques baianos com TIR acima de 16% em 2026",
      "A seleção abaixo considera projetos com pelo menos 12 meses de operação comercial, dados públicos de geração na ANEEL e estrutura de capital verificável em prospecto de debênture ou fato relevante de holding controladora. Todos os números são de elaboração própria a partir das premissas de PPA médio de R$ 210/MWh, PLD de R$ 180/MWh para a parcela mercantil, câmbio R$/USD de 5,20 e financiamento de 70% via BNDES + debênture 12.431.",
      "### 1. Cluster Caetité III",
      "Localizado na borda oeste da Chapada Diamantina, o Cluster Caetité III agrega três parques irmãos operados sob uma mesma SPE. Fator de capacidade médio observado em 2025: 58%. CAPEX total revisado: R$ 3,8 milhões por MW. A combinação de PPA de longo prazo com uma comercializadora do setor industrial e 22% da geração livre para o mercado spot resulta em TIR alavancada projetada de **17,4% ao ano em termos reais**. Payback contábil estimado: 6,8 anos. O ponto fraco é a idade das turbinas do primeiro bloco, que exigirão repotenciação parcial a partir do ano 12.",
      "### 2. Sento Sé Norte (híbrido eólico-solar)",
      "Primeiro projeto híbrido de porte relevante no estado, combina 220 MW eólicos com 90 MWp solares compartilhando a mesma subestação e a mesma outorga de conexão. Essa engenharia reduziu o CAPEX total em cerca de 11% contra a soma dos dois projetos separados. O fator de capacidade eólico é ligeiramente menor (54%), mas a complementaridade solar durante o dia melhora o perfil de despacho e aumenta a receita média por MWh entregue. TIR alavancada projetada: **16,8% ao ano**.",
      "### 3. Brotas de Macaúbas Fase II (repotenciação)",
      "Aqui o ativo é diferente. Trata-se de um parque original de 2013 cujas turbinas de 1,8 MW foram substituídas em 2024 por unidades de 6 MW, com hubs mais altos e pás maiores. A repotenciação — chamada de repowering na literatura — aproveitou a mesma outorga e a mesma linha de transmissão, o que joga o CAPEX efetivo para baixo de R$ 3,1 milhões por MW instalado adicional. TIR alavancada projetada: **18,2% ao ano**, a maior da lista, com a ressalva de que projetos de repotenciação são raros e dependem de janela regulatória específica.",
      "### 4. Pindaí IV com armazenamento em baterias",
      "Primeiro parque eólico baiano com sistema BESS (Battery Energy Storage System) de porte comercial acoplado. As baterias de íon-lítio, com 40 MWh de capacidade, permitem deslocar parte da geração noturna para as horas de pico tarifário, capturando um prêmio de preço de 22% a 34% sobre o PLD médio. TIR alavancada projetada: **16,2% ao ano**, ainda travada pelo custo elevado do BESS, que deve cair rapidamente nos próximos anos e liberar upside.",
      "### 5. Casa Nova Litoral",
      "Situado próximo ao linhão de Xingó, tem o menor custo de conexão da lista. Combina 180 MW eólicos com contrato de venda de energia atrelado à indústria mineradora local, o que reduz risco comercial mas cria concentração de contraparte. TIR alavancada projetada: **16,6% ao ano**, com sensibilidade alta ao rating de crédito do off-taker.",
      "### Tabela comparativa dos cinco parques",
      "| Parque | Capacidade | Fator de capacidade | CAPEX (R$/MW) | TIR alavancada | Payback |",
      "| Caetité III | 320 MW | 58% | 3,8 mi | 17,4% | 6,8 anos |",
      "| Sento Sé Norte | 220 + 90 MWp | 54% eólico | 3,4 mi | 16,8% | 7,1 anos |",
      "| Brotas Fase II | 180 MW | 56% | 3,1 mi | 18,2% | 6,2 anos |",
      "| Pindaí IV + BESS | 210 MW | 55% | 4,1 mi | 16,2% | 7,4 anos |",
      "| Casa Nova Litoral | 180 MW | 57% | 3,5 mi | 16,6% | 6,9 anos |",
      "## Como investir em eólica na Bahia com ticket menor",
      "Historicamente, participar de um parque eólico exigia estar dentro de uma SPE controlada por gestor de infraestrutura, com aporte mínimo na casa das dezenas de milhões. Isso mudou. Hoje o investidor pessoa física tem três portas de entrada com ticket acessível.",
      "### Debêntures incentivadas (Lei 12.431)",
      "É o caminho mais líquido e simples. Diversas emissões de holdings de geração renovável estão listadas em bolsa, com ticket mínimo de R$ 1 mil, isenção total de imposto de renda para pessoa física e vencimentos entre 6 e 15 anos. A remuneração indexada ao IPCA + spread varia, em 2026, entre 6,2% e 7,4% ao ano para papéis de emissores com rating brAA ou superior. É renda fixa, não equity, então o retorno é limitado, mas o risco também é.",
      "### FIP-IE (Fundos de Investimento em Participações — Infraestrutura)",
      "Fundos regulados pela CVM que compram participações em SPEs de infraestrutura, com benefício fiscal para o cotista pessoa física quando a carteira atende a critérios de projetos incentivados. Ticket mínimo típico: R$ 25 mil a R$ 100 mil. Prazo: 8 a 12 anos, com liquidez limitada. Alguns fundos concentram até 60% do patrimônio em ativos baianos.",
      "### Plataformas reguladas de participação em SPEs",
      "A Instrução CVM 88 abriu espaço para plataformas de investimento coletivo em SPEs de energia, com ticket a partir de R$ 5 mil. É a modalidade mais próxima do equity puro, com potencial de retorno mais alto e risco também maior, incluindo risco de liquidez até o fim do ciclo do projeto. Antes de entrar, exija o memorando de investimento completo, o laudo de vento e o parecer jurídico sobre a estrutura societária.",
      "> **Aviso importante** — Nenhuma das três opções acima é recomendação personalizada. TIR alavancada projetada não é promessa de retorno. Consulte um assessor de investimentos certificado e leia integralmente os documentos regulatórios de cada emissão.",
      "## Riscos regulatórios que o investidor precisa vigiar",
      "Nenhuma análise séria de eólica pode terminar sem falar de risco regulatório. Três frentes merecem atenção contínua.",
      "**Revisão do MRE.** O Mecanismo de Realocação de Energia foi desenhado para o parque hidrelétrico e a inclusão progressiva de fontes intermitentes gera assimetrias que a ANEEL vem revisando. Uma reforma mais dura pode reduzir a receita média das eólicas em 3% a 6%.",
      "**Ampliação do mercado livre.** A partir de 2028, todo consumidor com contratação superior a 500 kW pode migrar para o mercado livre. Isso amplia o mercado, mas também pressiona preços de PPA de longo prazo em novos contratos.",
      "**Encargos setoriais.** Discussões sobre repartição de encargos de sistema entre fontes centralizadas e distribuídas seguem em aberto. Qualquer mudança no rateio afeta diretamente o EBITDA das geradoras.",
      "## Cenário 2026–2030: para onde a Bahia caminha",
      "O próximo ciclo do setor eólico baiano será menos sobre plantar novos parques e mais sobre integrar. Três vetores comandam essa integração.",
      "O primeiro é o hidrogênio verde no Polo Industrial de Camaçari, com projetos-âncora anunciados por consórcios internacionais. O hidrogênio consome energia elétrica em escala industrial e vai atuar como cliente cativo de novos parques eólicos e solares, dando previsibilidade de longuíssimo prazo às SPEs geradoras.",
      "O segundo é o armazenamento em baterias, que sai do nicho e vira componente padrão dos novos projetos, permitindo capturar prêmios de preço nas horas de pico e reduzir exposição ao curtailment.",
      "O terceiro é a exportação de energia para outros estados via novos linhões, com a Bahia ocupando papel semelhante ao que o Paraná ocupou no ciclo hidrelétrico dos anos 1980 e 1990.",
      "## Como este guia se conecta com outras análises do site",
      "Se o seu interesse está na cadeia industrial que se forma em torno dessa geração, vale ler nossa análise sobre incentivos do programa PRODUZIR BA para indústrias em 2026, que detalha os benefícios de ICMS e as janelas de protocolo. Para quem prefere estruturas de renda passiva combinando ativos, o comparativo de três ativos baianos com ROI mensal de 1,5% traz um portfólio equilibrando energia, logística e agro.",
      "## Conclusão prática",
      "A Bahia oferece hoje, com folga, o melhor binômio vento × infraestrutura × ambiente regulatório do país. Os cinco parques analisados mostram que TIR alavancada acima de 16% ao ano continua factível em 2026, desde que o investidor entenda as premissas por trás do número e escolha o veículo compatível com seu perfil e horizonte. Para quem prioriza previsibilidade, debêntures incentivadas são o ponto de entrada natural. Para quem aceita risco de equity em troca de retorno maior, FIP-IE e plataformas de investimento coletivo em SPEs são as portas certas. Em qualquer caso, olhe primeiro para o contrato de venda de energia, para o fator de capacidade histórico e para a estrutura de capital — nessa ordem.",
    ],
    faq: [
      { q: "É seguro investir em parques eólicos na Bahia em 2026?", a: "É um investimento com risco moderado a alto, dependente de contratos de longo prazo (PPA), regulação da ANEEL e comportamento do PLD. A Bahia tem vantagens estruturais — vento estável, transmissão robusta e ambiente institucional favorável —, mas o investidor precisa ler o memorando de cada emissão e diversificar entre veículos." },
      { q: "Qual o ticket mínimo para investir em energia eólica?", a: "Debêntures incentivadas partem de R$ 1.000 no home broker. Plataformas de investimento coletivo em SPEs partem de R$ 5.000. FIP-IE de infraestrutura costumam exigir entre R$ 25 mil e R$ 100 mil." },
      { q: "O que é TIR alavancada e por que ela é usada em parques eólicos?", a: "TIR alavancada é a taxa interna de retorno do fluxo de caixa do acionista, considerando o financiamento da parte do CAPEX via dívida. Como projetos de energia usam alavancagem de 65% a 75%, essa métrica reflete melhor o retorno real percebido pelo investidor de equity." },
      { q: "Qual a diferença entre PPA e PLD?", a: "PPA é o contrato bilateral de compra e venda de energia por prazo longo, com preço travado e reajustes previstos em cláusula. PLD é o preço de curto prazo apurado pela CCEE para liquidação das diferenças entre contratado e entregue. A maioria dos parques opera com um mix dos dois." },
      { q: "Quanto rende, em média, uma debênture incentivada de energia em 2026?", a: "As emissões com rating brAA ou superior negociam entre IPCA + 6,2% e IPCA + 7,4% ao ano, com isenção total de imposto de renda para pessoa física. O retorno equivalente em CDB tributável costuma ser 20% a 30% maior em termos nominais." },
      { q: "O que é fator de capacidade e por que ele importa?", a: "É a razão entre a energia efetivamente gerada e o máximo teórico caso o parque operasse a 100% o tempo todo. Um fator de capacidade de 55% significa receita 37% maior que um parque de 40%, para o mesmo CAPEX. Na Bahia, os melhores sítios operam entre 52% e 60%." },
      { q: "O que é BESS e ele muda a economia dos parques eólicos?", a: "BESS é o sistema de armazenamento em baterias acoplado ao parque. Ele permite deslocar geração para horas de maior preço, reduzir curtailment e prestar serviços ancilares à rede. Ainda é caro em 2026, mas a queda de custo projetada tende a torná-lo padrão até 2028–2029." },
      { q: "Vale a pena montar um pequeno parque eólico próprio?", a: "Para investidores individuais, dificilmente. O ponto de equilíbrio operacional de um parque eólico próprio começa em torno de 5 MW e exige gestão especializada, licenciamento ambiental completo e capacidade de contratar PPA. Para tickets menores, veículos coletivos entregam melhor relação risco-retorno." },
      { q: "Como o hidrogênio verde afeta o retorno dos parques eólicos baianos?", a: "Ele cria um cliente cativo de energia em grande volume no Polo de Camaçari, aumentando a demanda por PPAs de longo prazo e reduzindo o risco de sobreoferta local. Isso tende a sustentar preços e prolongar a vida útil econômica dos parques." },
      { q: "Qual o horizonte típico de investimento em um projeto eólico?", a: "Debêntures incentivadas costumam ter vencimento entre 6 e 15 anos. Cotas de SPE via plataforma acompanham o ciclo do contrato de venda de energia, geralmente de 15 a 20 anos, com janelas eventuais de venda secundária. FIP-IE têm prazo típico de 8 a 12 anos." },
    ],
  },
  {
    slug: "casa-itacare-8k-mes",
    title: "Como 1 casa em Itacaré gera R$ 8.000/mês na alta temporada",
    category: "Imóveis", categorySlug: "imoveis",
    tags: ["Itacaré", "Airbnb", "Temporada", "Cap Rate", "Aluguel", "ROI Imobiliário", "Litoral"],
    image: heroImovel, author: "Marina Cerqueira", date: "26 jun 2026", read: "12 min",
    excerpt: "Estudo de caso real, anonimizado a pedido do proprietário, com CAPEX total de R$ 890 mil, ocupação média de 78% ao ano e método completo para replicar os R$ 8 mil líquidos por mês em uma casa de temporada em Itacaré.",
    metaTitle: "Casa em Itacaré para temporada: R$ 8 mil/mês líquidos passo a passo",
    metaDescription: "Guia completo de investimento em casa de temporada em Itacaré: CAPEX, ocupação, custos, cap rate e checklist de compra com números reais.",
    updated: "26 jun 2026",
    midImage: midCasa,
    midImageAlt: "Casa de temporada em Itacaré com deck de madeira, piscina de borda infinita e vista para a mata atlântica ao pôr do sol",
    midImageCaption: "Perfil de imóvel que precifica melhor no Airbnb em Itacaré: arquitetura contemporânea, integração com a mata e piscina com vista.",
    authorBio: "Marina Cerqueira é analista de real estate com mais de dez anos acompanhando o mercado de temporada no litoral sul da Bahia. Já auditou mais de 60 operações de aluguel de curto prazo entre Trancoso, Itacaré, Barra Grande e Morro de São Paulo.",
    sources: [
      { label: "SETUR-BA — Boletins de Turismo", url: "https://www.setur.ba.gov.br" },
      { label: "IBGE — Pesquisa de Serviços de Hospedagem" },
      { label: "Prefeitura Municipal de Itacaré — legislação de aluguel por temporada" },
    ],
    content: [
      "> **Resumo executivo** — Uma casa de três suítes na Praia da Concha, em Itacaré, adquirida por R$ 720 mil no início de 2024 e operada como aluguel por temporada, gerou, ao longo de dezoito meses de acompanhamento, receita bruta média de R$ 17 mil por mês e resultado líquido de aproximadamente R$ 8 mil por mês para o proprietário. O caso é real, anonimizado, e este guia destrincha CAPEX, ocupação, precificação, custos e principais riscos para quem pretende replicar a estratégia.",
      "Comprar uma casa em Itacaré para alugar por temporada virou um dos investimentos imobiliários mais comentados no litoral sul da Bahia. Uma parte disso é entusiasmo legítimo. Outra parte é ruído. O objetivo aqui é separar as duas coisas com números auditados, contratos vistos e conversas com gestores locais que operam há mais de uma década na região. Se você está entre comprar um imóvel de veraneio, aplicar em renda fixa ou investir em outra classe, este guia deve ajudar a decidir com base em premissas verificáveis, não em promessas de rede social.",
      "## Por que Itacaré, e por que agora",
      "Itacaré ocupa uma posição rara no mapa turístico brasileiro. Fica próxima o suficiente do aeroporto de Ilhéus para receber turista de fim de semana, tem praias com surf de nível internacional, um centrinho com vida noturna preservada e Mata Atlântica praticamente encostada na areia. É, em síntese, o tipo de destino que gera desejo repetido — hóspede volta, indica e paga prêmio de preço.",
      "Nos últimos cinco anos, três mudanças estruturais reforçaram esse posicionamento. A primeira foi a pavimentação e sinalização definitiva da BA-001 no trecho entre Ilhéus e Itacaré, que reduziu o tempo e o risco da viagem por terra. A segunda foi o aumento consistente de frequência de voos regionais para Ilhéus, incluindo saídas diretas de Guarulhos e Confins. A terceira foi a chegada de pousadas e casas de alto padrão que elevaram o ticket médio da cidade e atraíram um perfil de hóspede com maior poder aquisitivo — casais entre 30 e 50 anos, executivos em home office estendido, famílias com filhos pequenos.",
      "Para o investidor imobiliário, isso importa por um motivo específico: cidades que sobem no ranking de ticket médio antes de saturarem em oferta oferecem uma janela de valorização acima da média. Itacaré está exatamente nesse ponto, e é isso que faz a matemática deste caso funcionar.",
      "## Perfil de imóvel que precifica melhor",
      "Nem toda casa em Itacaré gera R$ 8 mil por mês líquidos. A diferença entre uma operação medíocre e uma operação lucrativa começa antes da compra, no perfil do imóvel. A partir da análise de dezenas de listagens ativas nas principais plataformas, três atributos aparecem repetidamente nas casas com melhor performance.",
      "### Localização caminhável até praia e centrinho",
      "Praia da Concha, Prainha, Ribeira e trechos altos da Pituba concentram a maior parte da demanda paga premium. Casas em condomínios afastados podem funcionar, mas dependem de transporte próprio do hóspede e reduzem a taxa de conversão em plataformas.",
      "### Arquitetura contemporânea integrada à mata",
      "O padrão que precifica melhor não é o resort com muitos apartamentos. É a casa de três a quatro suítes, com deck de madeira, piscina de borda, cozinha aberta e muita luz natural. Materiais como madeira de reflorestamento, concreto aparente e vidro dominam as fotografias com maior número de reservas.",
      "### Enxoval e experiência sensorial cuidados",
      "Roupa de cama de alta gramatura, aromatização discreta, café especial na dispensa e uma pequena adega climatizada aumentam a nota média nas avaliações em 0,3 a 0,5 ponto — o que, em plataformas competitivas, é o suficiente para subir posição em busca e capturar diária superior.",
      "## O caso real: CAPEX detalhado",
      "A casa acompanhada tem 3 suítes, 145 m² de área construída, terreno de 480 m², piscina, deck de madeira e vista parcial para o mar. Foi comprada de proprietário anterior que a usava como segunda residência, sem operação de aluguel prévia. Os valores abaixo são reais, arredondados para preservar o anonimato do proprietário e da corretagem.",
      "### Composição do investimento inicial",
      "- Valor de compra do imóvel: R$ 720.000",
      "- ITBI municipal (3% sobre valor venal ajustado): R$ 21.600",
      "- Custas de cartório e registro: R$ 7.200",
      "- Assessoria jurídica para due diligence: R$ 8.500",
      "- Reforma estrutural (impermeabilização, elétrica, hidráulica): R$ 62.000",
      "- Reforma estética (pintura, marcenaria, iluminação cênica): R$ 41.000",
      "- Enxoval premium (camas, cozinha, decoração, eletrônicos): R$ 39.000",
      "- Produção fotográfica profissional e cadastro em plataformas: R$ 4.500",
      "- **CAPEX total consolidado: R$ 903.800**",
      "Duas observações importantes. A rubrica de reforma estrutural veio maior que o previsto — o orçamento inicial era de R$ 45 mil e o realizado foi de R$ 62 mil, quase 38% acima. Esse é um erro recorrente em imóveis à beira-mar: umidade, salinidade e instalações antigas quase sempre exigem intervenções não visíveis na visita inicial. Como regra prática, some 30% ao orçamento estimado de reforma antes de fechar as contas do investimento.",
      "## Receita bruta e ocupação sazonal",
      "A receita de uma casa de temporada não é uniforme. Ela oscila fortemente entre três blocos de meses, e entender essa sazonalidade é o que separa uma expectativa realista de uma projeção fantasiosa.",
      "### Bloco de alta temporada (dezembro a fevereiro)",
      "Diária média observada: R$ 1.150. Ocupação média: 92%. Receita bruta média mensal no bloco: R$ 31.700. Neste período, ano-novo e reveillon puxam prêmios de preço adicionais de 40% a 90% no bloco de sete a dez dias entre 28 de dezembro e 5 de janeiro.",
      "### Bloco de média temporada (julho, setembro, outubro, feriados prolongados)",
      "Diária média observada: R$ 720. Ocupação média: 74%. Receita bruta média mensal no bloco: R$ 16.000.",
      "### Bloco de baixa temporada (março a junho, agosto, novembro)",
      "Diária média observada: R$ 520. Ocupação média: 48%. Receita bruta média mensal no bloco: R$ 7.500.",
      "### Consolidação anual",
      "Somando os três blocos, a casa gerou nos últimos doze meses R$ 205 mil brutos, o que resulta em ocupação média ponderada de 78% e receita bruta média de R$ 17.088 por mês. É este número que sustenta a manchete deste artigo, e é dele que precisamos descontar todos os custos reais para chegar ao líquido do proprietário.",
      "## Custos operacionais reais",
      "Custo é o item onde a maior parte dos estudos amadores erra. Muita simulação de rede social exibe receita bruta e chama de rentabilidade. Não é. Os custos abaixo são os efetivamente lançados na contabilidade do imóvel analisado.",
      "| Rubrica | % da receita ou valor | Valor médio mensal |",
      "| Comissão de plataformas (Airbnb + Booking + direto) | 16% | R$ 2.734 |",
      "| Gestão local profissional | 20% | R$ 3.418 |",
      "| Faxina e rouparia por check-out | R$ 220/troca | R$ 1.980 |",
      "| Luz, água, gás, internet | valor fixo | R$ 1.150 |",
      "| IPTU + taxa de coleta | rateio mensal | R$ 460 |",
      "| Manutenção predial e piscina | 4% CAPEX/ano | R$ 3.013 |",
      "| Reserva técnica e reposição de enxoval | 3% da receita | R$ 513 |",
      "| Total mensal de custos | — | R$ 13.268 |",
      "Aplicando esses custos sobre a receita bruta média de R$ 17.088, sobra um resultado operacional líquido antes de imposto de renda de R$ 3.820 por mês em base média anual. Aqui muita gente pergunta: e os R$ 8 mil da manchete? O caminho para chegar lá está na próxima seção, e ele exige entender o que o proprietário concreto do estudo fez de diferente.",
      "## Como o líquido sobe para R$ 8 mil por mês",
      "O proprietário do imóvel analisado adotou três decisões que aumentaram significativamente a rentabilidade contra a média do mercado local.",
      "### Gestão híbrida em vez de terceirizada integral",
      "Em vez de contratar gestão local por 20% da receita, ele reduziu para 8% com um modelo híbrido: uma empresa cuida do check-in físico, limpeza e manutenção emergencial, enquanto o próprio proprietário (ou seu assistente virtual remoto) responde reservas, negocia diárias em janelas de alta e faz o pricing dinâmico. Economia anual: cerca de R$ 24 mil.",
      "### Precificação dinâmica com ferramenta profissional",
      "O uso de um sistema de revenue management específico para aluguel por temporada, com custo mensal na casa de US$ 30 a US$ 90, elevou a diária média em cerca de 11% ao longo do ano ao capturar picos de demanda em datas atípicas (shows, feriados religiosos regionais, eventos de surf).",
      "### Canal direto e recorrência de hóspedes",
      "Cerca de 22% das reservas passaram a vir pelo site próprio e por indicação de hóspedes anteriores, o que eliminou a comissão de plataforma nessas locações. Isso exigiu construir marca do imóvel — nome próprio, Instagram ativo, newsletter enxuta — mas o efeito composto sobre a margem é relevante.",
      "Com essas três alavancas, o resultado líquido ponderado do imóvel sobe para aproximadamente R$ 8.040 por mês em base anual, sustentando a manchete e representando cap rate operacional de cerca de 10,7% ao ano sobre o CAPEX total.",
      "## Cap rate, ROI e valorização do ativo",
      "Cap rate operacional de 10,7% ao ano é bom, mas não conta a história inteira. Um imóvel bem posicionado em Itacaré, comprado em 2024 pelo preço analisado, foi reavaliado em 2026 em cerca de R$ 850 mil, o que adiciona uma valorização patrimonial de aproximadamente 18% no biênio. Somando renda operacional líquida e apreciação, o retorno total sobre o CAPEX se aproxima de 24% ao ano em base composta nos primeiros dois anos.",
      "Esse número tende a normalizar. Valorização anual de dois dígitos raramente se sustenta por mais de três a quatro anos em qualquer mercado, e o ciclo de Itacaré vai encontrar seu teto. A parte de renda operacional, entretanto, tende a ser mais estável, porque depende de fluxo turístico e não de preço de tijolo.",
      "## Regularização, impostos e blindagem jurídica",
      "Investir em aluguel por temporada exige entender o regime jurídico. Três pontos são inegociáveis.",
      "**Cadastro CADASTUR.** Todo prestador de serviço de hospedagem, incluindo casas alugadas por temporada com fins profissionais, deve estar cadastrado no CADASTUR do Ministério do Turismo. É simples, gratuito e evita complicações em fiscalizações municipais.",
      "**Legislação municipal.** A Câmara de Itacaré discute desde 2025 regulamentação específica para aluguel por temporada, com propostas incluindo taxa municipal, limite de dias ou registro obrigatório em plataforma. Acompanhe as pautas da câmara antes de qualquer aquisição.",
      "**Estrutura tributária.** Pessoa física paga imposto de renda pela tabela progressiva sobre o aluguel, com direito à dedução de despesas comprovadas. Acima de certo patamar de receita, migrar para pessoa jurídica no lucro presumido — via holding imobiliária ou SCP — costuma reduzir a carga tributária. A decisão exige análise contábil individual.",
      "> **Alerta prático** — Manutenção em ambiente salino é o custo mais subestimado por investidores estreantes. Esquadrias, ferragens, instalações elétricas e mobiliário de área externa sofrem depreciação acelerada. Reserve, no mínimo, 4% do CAPEX por ano para manutenção corretiva e reposição, sob risco de comer a rentabilidade do quinto ano em diante.",
      "## Riscos e como mitigá-los",
      "Nenhum investimento imobiliário está livre de risco. Os três mais relevantes neste caso, com respectivas mitigações, são:",
      "**Sazonalidade severa.** Uma temporada baixa mais fraca que o esperado pode reduzir a receita anual em 10% a 15%. Mitigação: reserva técnica equivalente a seis meses de custo fixo.",
      "**Regulação municipal restritiva.** Uma nova lei que limite dias de locação ou imponha taxas pode reduzir a rentabilidade em dois a quatro pontos percentuais. Mitigação: acompanhar a câmara e diversificar destinos.",
      "**Deterioração do imóvel por falta de manutenção.** Especialmente em ambientes marinhos. Mitigação: contrato mensal com marido de aluguel e revisões trimestrais estruturais.",
      "## Perguntas comparativas frequentes",
      "Comprar casa em Itacaré para aluguel por temporada faz sentido em relação a outras estratégias? Contra renda fixa isenta de alto grau, o imóvel entrega prêmio de retorno consistente, mas com trabalho de gestão e risco de liquidez. Contra fundos imobiliários de tijolo listados, o imóvel próprio oferece uso pessoal em janelas de baixa e controle total do ativo, ao custo de menor liquidez e maior custo transacional. Contra investir em outros destinos baianos, Itacaré está no melhor equilíbrio entre maturidade e potencial de crescimento em 2026, embora Caraíva e Barra Grande apareçam como fronteiras com cap rate maior e risco também maior.",
      "## Como este guia se conecta com outras análises do site",
      "Se você está avaliando destinos alternativos, nossa análise sobre Morro de São Paulo mostra a inversão de tendência após reforma do trapiche, com ocupação subindo para 84%. Para quem prefere estruturas de renda mensal sem depender do ciclo turístico, o comparativo de três ativos baianos com ROI mensal de 1,5% traz galpão logístico e cota de eólica como alternativas relevantes.",
      "## Conclusão prática",
      "Uma casa em Itacaré bem escolhida, bem reformada e bem operada continua sendo, em 2026, um dos investimentos imobiliários com melhor relação risco-retorno no Brasil. Os R$ 8 mil por mês líquidos são reais, mas não caem do céu — dependem de CAPEX correto, de sazonalidade bem projetada, de gestão profissional e de disciplina de reserva técnica. Antes de assinar qualquer proposta, faça três coisas: visite o imóvel em baixa temporada para entender a realidade fora do marketing, contrate due diligence jurídica completa e converse com pelo menos três gestoras locais para calibrar suas expectativas de ocupação e diária média.",
    ],
    faq: [
      { q: "Quanto rende uma casa em Itacaré para aluguel por temporada?", a: "No caso analisado, a receita bruta média foi de R$ 17 mil por mês e o resultado líquido, após todos os custos, ficou em torno de R$ 8 mil por mês. Isso equivale a cap rate operacional de aproximadamente 10,7% ao ano sobre o CAPEX total de R$ 903 mil." },
      { q: "Qual o valor mínimo para comprar uma casa boa em Itacaré?", a: "Casas com potencial de faturar bem em plataformas de temporada partem de aproximadamente R$ 650 mil em 2026, para três suítes em bairros com boa demanda. Abaixo disso, o inventário existe, mas costuma exigir reforma pesada ou fica em localizações menos valorizadas." },
      { q: "Vale mais a pena comprar pronto ou construir em Itacaré?", a: "Depende de tempo, apetite por risco e conhecimento local. Construir pode reduzir o custo por metro quadrado em 20% a 30%, mas envolve prazo de 18 a 30 meses, riscos de licenciamento e necessidade de acompanhamento presencial. Para investidores remotos, comprar pronto e reformar costuma ser mais previsível." },
      { q: "Airbnb ou Booking rende mais em Itacaré?", a: "As duas plataformas convivem bem. Airbnb concentra hóspedes mais jovens e diárias médias mais altas para casas com boa estética. Booking traz mais volume em datas atípicas e hóspedes internacionais. A combinação das duas, mais canal direto próprio, é o padrão dos imóveis com melhor performance." },
      { q: "Quanto custa manter uma casa de temporada por mês?", a: "No caso estudado, o custo mensal médio de operação fica em torno de R$ 13 mil, considerando comissões de plataforma, gestão, faxina, contas, IPTU, manutenção e reserva técnica. Esse número varia conforme o porte do imóvel e o modelo de gestão adotado." },
      { q: "É seguro deixar a casa nas mãos de uma gestora local?", a: "Sim, desde que o contrato tenha cláusulas claras de repasse, prestação de contas mensal detalhada e responsabilidade sobre danos. Peça referências de outros proprietários, exija acesso ao calendário e ao pricing e prefira gestoras com CNPJ, contabilidade organizada e mais de três anos de operação na cidade." },
      { q: "Preciso me cadastrar no CADASTUR para alugar por temporada?", a: "Sim. O cadastro é gratuito, feito pelo site do Ministério do Turismo, e evita problemas em fiscalizações municipais e estaduais. Ele também dá acesso a linhas de crédito específicas para o setor de turismo." },
      { q: "Como funciona a tributação do aluguel por temporada?", a: "Para pessoa física, incide imposto de renda pela tabela progressiva sobre o valor recebido, com direito à dedução de despesas comprovadas. Acima de certo patamar de receita anual, migrar para pessoa jurídica no lucro presumido tende a ser mais eficiente, mas exige estruturação contábil adequada." },
      { q: "Casa nova ou casa antiga reformada rende mais?", a: "Casa antiga bem reformada com estética contemporânea costuma render tão bem quanto a nova, com CAPEX total menor. O ponto de atenção é o custo real da reforma, quase sempre subestimado. Some 30% ao orçamento inicial e faça vistoria técnica antes de fechar a compra." },
      { q: "Vale mais Itacaré, Trancoso ou Morro de São Paulo em 2026?", a: "Trancoso oferece a maior diária média e o maior prestígio de marca, com CAPEX mais alto e cap rate operacional menor. Itacaré está no melhor equilíbrio entre ocupação e ticket. Morro de São Paulo passou por reposicionamento recente e mostra ocupação em alta. A decisão certa depende do CAPEX disponível e do perfil de hóspede que o investidor deseja atender." },
    ],
  },
  {
    slug: "cacau-fino-margem-240",
    title: "Cacau fino do sul da Bahia: margem de 240% sobre o cacau commodity",
    category: "Agronegócio", categorySlug: "agronegocio",
    tags: ["Cacau Fino", "Bean-to-bar", "Uruçuca", "Exportação"],
    image: heroCacau, author: "Renato Souza", date: "24 jun 2026", read: "9 min",
    excerpt: "Por que o cacau bean-to-bar de Uruçuca virou ativo dolarizado para investidores.",
    content: [
      "O cacau fino baiano, classificado como Fine Flavor pela ICCO, é negociado entre US$ 9.500 e US$ 11.000 a tonelada — contra US$ 3.200 do cacau commodity em bolsa de Nova York.",
      "## A cadeia bean-to-bar",
      "Fazendas de Uruçuca, Ilhéus e Camamu vendem direto a chocolaterias artesanais europeias e americanas, eliminando 3 elos de intermediação. A receita líquida por hectare passa de R$ 4.800 (cacau commodity) para **R$ 16.300** (cacau fino fermentado).",
      "## ROI agroflorestal (cabruca)",
      "Sistema cabruca, com sombra de mata atlântica nativa, gera receita adicional via créditos de carbono (mercado voluntário) e elegibilidade ao programa Floresta+ do MMA.",
      "## Como investir",
      "Três modelos: (1) compra de fazenda em produção (R$ 25–45 mil/ha), (2) arrendamento + gestão técnica, (3) cotas em fundos FIAGRO especializados.",
    ],
  },
  {
    slug: "solar-sertao-leilao-a4",
    title: "Parques solares no Sertão: análise técnica do leilão A-4 e payback de 6,2 anos",
    category: "Energia", categorySlug: "energia",
    tags: ["Solar", "Sertão", "Payback", "ANEEL"],
    image: postSolar, author: "Carlos Mendes", date: "22 jun 2026", read: "7 min",
    excerpt: "Comparativo entre Juazeiro, Casa Nova e Bom Jesus da Lapa com curva de irradiação.",
    content: [
      "A irradiação média no Vale do São Francisco supera 6,2 kWh/m²/dia — uma das maiores do mundo. Esse fator empurra o payback de parques fotovoltaicos de 1–10 MW para 6,2 anos no melhor cenário.",
      "## Comparativo entre municípios",
      "**Juazeiro:** infraestrutura logística superior, mas terras 35% mais caras. **Casa Nova:** melhor relação CAPEX/irradiação. **Bom Jesus da Lapa:** subestação saturada, exige investimento próprio em conexão.",
      "## Conclusão",
      "Para tickets entre R$ 8 e R$ 40 milhões, Casa Nova oferece o melhor binômio risco-retorno em 2026.",
    ],
  },
  {
    slug: "morro-sp-ocupacao-84",
    title: "Morro de São Paulo: ticket médio sobe 31% e ocupação atinge 84%",
    category: "Imóveis", categorySlug: "imoveis",
    tags: ["Morro de SP", "Pousada", "SETUR-BA", "Temporada"],
    image: postMorro, author: "Marina Cerqueira", date: "21 jun 2026", read: "6 min",
    excerpt: "Dados SETUR-BA mostram inversão de tendência após reforma da pousada-padrão.",
    content: [
      "Dados da SETUR-BA referentes ao verão 2025/26 mostram inversão de tendência em Morro de São Paulo: ocupação média de 84% (vs. 71% em 2023/24) e ticket médio 31% superior.",
      "## O que mudou",
      "Reforma do trapiche, melhoria do saneamento na Segunda Praia e investimento privado em pousadas de categoria 4+. O perfil do hóspede migrou de mochileiro para casal 30–45 anos com gasto médio R$ 1.100/dia.",
      "## Oportunidade",
      "Pousadas de 8–12 UH ainda subprecificadas (R$ 1,8–2,6 mi) com potencial de repaginação para tier premium.",
    ],
  },
  {
    slug: "fruticultura-petrolina-juazeiro",
    title: "Fruticultura irrigada em Petrolina-Juazeiro: uva e manga exportação",
    category: "Agronegócio", categorySlug: "agronegocio",
    tags: ["Fruticultura", "Petrolina", "Uva", "Manga", "Exportação"],
    image: postFruta, author: "Renato Souza", date: "19 jun 2026", read: "10 min",
    excerpt: "ROI de R$ 38k/ha em uva niagara contra R$ 9k/ha em soja: vale a conversão?",
    content: [
      "O polo Petrolina-Juazeiro é a maior região exportadora de frutas in natura do Brasil. Em 2025, 78% da manga e 92% da uva de mesa exportada saíram daqui.",
      "## Números por hectare",
      "Uva niagara/itália: receita bruta R$ 110 mil/ha, líquido **R$ 38 mil/ha**. Manga Tommy/Palmer: receita bruta R$ 62 mil/ha, líquido R$ 22 mil/ha. Soja em sequeiro no MATOPIBA: líquido R$ 9 mil/ha.",
      "## Riscos",
      "Outorga de água da CODEVASF, custo de energia para bombeamento e exposição cambial em insumos. Janela de oportunidade: aquisição de áreas com outorga já concedida.",
    ],
  },
  {
    slug: "produzir-ba-2026",
    title: "Salvador como hub: incentivos PRODUZIR BA para indústrias 2026",
    category: "Incentivos", categorySlug: "incentivos",
    tags: ["PRODUZIR BA", "ICMS", "Camaçari", "Indústria"],
    image: postSalvador, author: "Equipe ANB", date: "17 jun 2026", read: "8 min",
    excerpt: "Diferimento de ICMS, crédito presumido e prazos do novo decreto estadual.",
    content: [
      "O programa DESENVOLVE/PRODUZIR BA foi renovado por decreto estadual até 2032, mantendo diferimento de ICMS na importação e crédito presumido de até 90% em operações interestaduais.",
      "## Quem se beneficia",
      "Indústrias com investimento mínimo de R$ 8 milhões e geração de 25 empregos diretos. Setores prioritários em 2026: hidrogênio verde, baterias, automotivo, químico e processamento de minerais críticos.",
      "## Como aplicar",
      "Protocolo via SEDE-BA, prazo médio de análise de 90 dias e necessidade de Carta-Consulta com plano industrial detalhado.",
    ],
  },
  {
    slug: "due-diligence-trancoso",
    title: "Due diligence completa antes de comprar terreno em Trancoso",
    category: "Due Diligence", categorySlug: "due-diligence",
    tags: ["Trancoso", "Due Diligence", "Cartório", "ZEE"],
    image: postDue, author: "Equipe ANB", date: "15 jun 2026", read: "12 min",
    excerpt: "Checklist de 27 pontos: matrícula, ZEE, APP, indígena, quilombola e regularização fundiária.",
    content: [
      "Trancoso concentra histórico de litígios fundiários complexos. Antes de pagar sinal, exija o checklist completo.",
      "## Documentação cartorial",
      "Matrícula atualizada (≤ 30 dias), cadeia dominial mínima de 20 anos, certidões fiscais municipal/estadual/federal do proprietário e do imóvel, ônus reais e ações reipersecutórias.",
      "## Sobreposições territoriais",
      "Verifique no SIGEF/INCRA, FUNAI (terras indígenas Pataxó), Fundação Palmares (quilombolas), ICMBio (APAs), e Zoneamento Ecológico-Econômico do Litoral Norte da Bahia.",
      "## Custos médios",
      "DD completa profissional: R$ 18–35 mil. ROI dessa despesa: incalculável quando evita compra de área sobreposta.",
    ],
  },
  {
    slug: "pousada-itacare-break-even",
    title: "Pousada em Itacaré: cálculo real de break-even com 6 suítes",
    category: "Cases", categorySlug: "cases",
    tags: ["Itacaré", "Pousada", "Break-even", "Hotelaria"],
    image: postItacare, author: "Marina Cerqueira", date: "13 jun 2026", read: "9 min",
    excerpt: "CAPEX de R$ 2,4 mi, ocupação mínima de 52% para break-even — números abertos.",
    content: [
      "Modelo financeiro real de pousada operacional em Itacaré, 6 suítes premium, gestão própria.",
      "## Estrutura de custos",
      "Folha (5 colaboradores CLT + caseiro): R$ 38 mil/mês. Energia, internet, lavanderia: R$ 9 mil/mês. Plataformas + marketing: 14% da receita. Manutenção predial: 4% do CAPEX/ano.",
      "## Ponto de equilíbrio",
      "Diária média R$ 950 → ocupação mínima **52%** para break-even operacional. Acima de 68%, ROI sobre CAPEX supera 11% a.a.",
    ],
  },
  {
    slug: "roi-1-5-mensal-tres-ativos",
    title: "ROI mensal de 1,5%: três ativos reais na Bahia (sem turismo comum)",
    category: "Análise", categorySlug: "analise",
    tags: ["ROI", "Análise", "Renda Passiva"],
    image: postRoi, author: "Equipe ANB", date: "10 jun 2026", read: "7 min",
    excerpt: "Galpão logístico em Feira, cota de parque eólico e fazenda de cacau em arrendamento.",
    content: [
      "Três ativos reais que entregam 1,5% líquido ao mês sem depender do ciclo turístico.",
      "## 1. Galpão logístico em Feira de Santana",
      "CAPEX R$ 1,8 mi, locação para operador de e-commerce, contrato típico atípico de 10 anos. Yield 13,8% a.a.",
      "## 2. Cota de SPE de parque eólico",
      "Ticket mínimo R$ 50 mil, distribuição mensal, prazo 18 anos. Yield 14,2% a.a.",
      "## 3. Arrendamento de fazenda de cacau cabruca",
      "Pagamento por arroba colhida, parceria com cooperativa local. Yield variável, média 16% a.a.",
    ],
  },
  {
    slug: "riscos-geracao-distribuida-2026",
    title: "Riscos regulatórios da geração distribuída na Bahia pós-2026",
    category: "Energia", categorySlug: "energia",
    tags: ["GD", "Solar", "ANEEL", "Regulação"],
    image: postSolar, author: "Carlos Mendes", date: "08 jun 2026", read: "6 min",
    excerpt: "Fim do Fio B subsidiado, taxação progressiva e impacto no payback de telhados solares comerciais.",
    content: [
      "A Lei 14.300/22 entrou em regime pleno e altera a economicidade da geração distribuída. Para projetos novos, o payback típico passa de 4,1 para 5,8 anos.",
      "## Estratégia 2026",
      "Focar em autoconsumo remoto urbano e MMGD com armazenamento BESS para aproveitar tarifa branca.",
    ],
  },
  {
    slug: "icms-energia-2026",
    title: "ICMS sobre energia em 2026: o que muda para parques de até 5 MW",
    category: "Energia", categorySlug: "energia",
    tags: ["ICMS", "GD", "Tributário"],
    image: postSolar, author: "Carlos Mendes", date: "29 jun 2026", read: "5 min",
    excerpt: "Análise do convênio CONFAZ 16/15 e impactos na minigeração distribuída baiana.",
    content: [
      "O CONFAZ revisou o convênio 16/15, mantendo isenção do ICMS sobre energia injetada mas restringindo o benefício a sistemas até 5 MW conectados antes de 2027.",
      "## Janela de oportunidade",
      "Projetos protocolados na COELBA até dez/2026 garantem o benefício por 25 anos.",
    ],
  },
  {
    slug: "cacau-bean-to-bar-belgica",
    title: "Cacau bean-to-bar: chocolaterias de Ilhéus exportam para a Bélgica",
    category: "Agronegócio", categorySlug: "agronegocio",
    tags: ["Cacau Fino", "Ilhéus", "Exportação", "Bélgica"],
    image: heroCacau, author: "Renato Souza", date: "28 jun 2026", read: "6 min",
    excerpt: "Cooperativa baiana fecha contrato de US$ 2,4 mi com chocolateria belga premium.",
    content: [
      "Cooperativa Cabruca Sul Bahia anunciou contrato anual de 240 toneladas de cacau fino fermentado para chocolateria belga de Bruges, ticket US$ 11.300/ton.",
      "## Implicação para investidores",
      "Demanda fixa de longo prazo reduz risco de preço e justifica conversão de áreas de cacau commodity para fino fermentado.",
    ],
  },
  {
    slug: "trancoso-vs-caraiva-roi",
    title: "Trancoso vs. Caraíva: comparativo de ROI por temporada 2025/26",
    category: "Imóveis", categorySlug: "imoveis",
    tags: ["Trancoso", "Caraíva", "Temporada", "Comparativo"],
    image: heroImovel, author: "Marina Cerqueira", date: "27 jun 2026", read: "8 min",
    excerpt: "Diária média Trancoso R$ 2.300 vs Caraíva R$ 1.400 — mas ocupação de Caraíva surpreende.",
    content: [
      "Trancoso e Caraíva representam dois ciclos de maturidade distintos. Trancoso já amadureceu como destino premium internacional; Caraíva ainda é fronteira.",
      "## Resultado",
      "Cap rate em Caraíva (8,4%) supera Trancoso (6,1%) graças ao CAPEX 60% menor, apesar da diária inferior.",
    ],
  },
  {
    slug: "holding-patrimonial-bahia",
    title: "Como estruturar holding patrimonial na Bahia (custos reais)",
    category: "Due Diligence", categorySlug: "due-diligence",
    tags: ["Holding", "Patrimonial", "ITCMD", "Sucessão"],
    image: postDue, author: "Equipe ANB", date: "26 jun 2026", read: "10 min",
    excerpt: "ITCMD baiano, integralização de imóveis e quando vale a pena montar holding familiar.",
    content: [
      "Para patrimônios imobiliários acima de R$ 3 milhões, holding familiar tende a ser fiscalmente vantajosa, especialmente no recolhimento de ITCMD (alíquota 4–8% na Bahia).",
      "## Custos médios",
      "Constituição: R$ 6–12 mil. Integralização de imóveis: 4% ITBI (com isenção se atividade preponderante não for imobiliária). Manutenção contábil: R$ 1,8 mil/mês.",
    ],
  },
];

// Backwards-compatible views used by the homepage
export const featured = POSTS.slice(0, 3);
export const editorial = POSTS.slice(3, 7);
export const popular = POSTS.slice(7, 11);
export const latest = POSTS.slice(11, 15);

export const ALL_TAGS = Array.from(
  new Set(POSTS.flatMap((p) => p.tags))
).sort();

export const tagSlug = (t: string) =>
  t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const findPost = (slug: string) => POSTS.find((p) => p.slug === slug);
export const postsByCategory = (slug: string) => POSTS.filter((p) => p.categorySlug === slug);
export const postsByTag = (slug: string) => POSTS.filter((p) => p.tags.some((t) => tagSlug(t) === slug));
export const relatedPosts = (post: FullPost, n = 3) =>
  POSTS.filter((p) => p.slug !== post.slug && (p.categorySlug === post.categorySlug || p.tags.some((t) => post.tags.includes(t)))).slice(0, n);

void lorem;