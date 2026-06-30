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
import type { Post } from "@/components/site/PostCard";

export type FullPost = Post & {
  slug: string;
  categorySlug: string;
  tags: string[];
  content: string[]; // paragraphs (supports markdown-lite: **bold**, ## subhead)
  read: string;
  excerpt: string;
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
    tags: ["Eólica", "ANEEL", "TIR", "Leilão A-4"],
    image: heroEolica, author: "Equipe ANB", date: "28 jun 2026", read: "8 min",
    excerpt: "Mapa atualizado dos leilões A-4 e A-6 com retorno real descontado por câmbio e PLD médio.",
    content: [
      "A Bahia consolidou em 2026 a posição de maior produtor de energia eólica do Brasil, ultrapassando 10,4 GW de capacidade instalada segundo dados da ANEEL e do SEI-BA. O Sertão e a Chapada Diamantina concentram fatores de capacidade acima de 55%, patamar raro globalmente.",
      "## Os 5 parques destaque",
      "Selecionamos cinco projetos arrematados nos leilões A-4 e A-6 com TIR alavancada acima de 16% ao ano, considerando câmbio R$/USD de 5,20, PLD médio sudeste de R$ 180/MWh e contratos PPA de 20 anos.",
      "**1. Caetité Cluster III** — fator de capacidade 58%, CAPEX R$ 3,8 mi/MW, TIR projetada 17,4%. **2. Sento Sé Norte** — projeto híbrido eólico-solar, sinergia de transmissão reduz CAPEX em 11%. **3. Brotas de Macaúbas Fase II** — repotenciação com turbinas de 6 MW. **4. Pindaí IV** — primeiro projeto baiano com BESS (armazenamento). **5. Casa Nova Litoral** — proximidade ao linhão de Xingó.",
      "## Como entrar com ticket menor",
      "Para investidores PF, plataformas reguladas pela CVM (modalidade 588) permitem participação a partir de R$ 5 mil em SPEs de parques operacionais, com distribuição mensal de dividendos. O risco principal é regulatório: revisão tarifária da ANEEL e mudanças no MRE.",
      "## Conclusão",
      "A Bahia oferece o melhor binômio vento × infraestrutura do país. Para 2026–2030, o vetor de crescimento mais relevante é a integração eólica + BESS + hidrogênio verde no Polo de Camaçari.",
    ],
  },
  {
    slug: "casa-itacare-8k-mes",
    title: "Como 1 casa em Itacaré gera R$ 8.000/mês na alta temporada",
    category: "Imóveis", categorySlug: "imoveis",
    tags: ["Itacaré", "Airbnb", "Temporada", "Cap Rate"],
    image: heroImovel, author: "Marina Cerqueira", date: "26 jun 2026", read: "11 min",
    excerpt: "Estudo de caso real (anonimizado): aquisição de R$ 720k, gestão Airbnb e ocupação 78%.",
    content: [
      "Acompanhamos por 18 meses uma casa de 3 suítes na Praia da Concha, Itacaré, adquirida por R$ 720 mil em janeiro de 2024. O caso é real, anonimizado a pedido do proprietário.",
      "## Aquisição e CAPEX inicial",
      "Valor de compra: R$ 720.000. ITBI e cartório: R$ 28.800. Reforma estrutural e enxoval premium: R$ 142.000. CAPEX total: **R$ 890.800**.",
      "## Receita bruta observada",
      "Diária média ponderada: R$ 720. Ocupação anual: 78% (alta de 95% em dez-fev, baixa de 45% em mai-jun). Receita anual bruta: R$ 205.066. Receita média mensal: **R$ 17.088** brutos.",
      "## Custos reais",
      "Plataformas (Airbnb + Booking): 18%. Gestão local profissional: 20%. Limpeza, IPTU, condomínio, internet e manutenção: R$ 3.400/mês. Líquido médio mensal: **R$ 8.040**. Cap rate sobre CAPEX: 10,8% a.a.",
      "## Riscos e mitigação",
      "Sazonalidade severa, regulação municipal de aluguel por temporada (em discussão na Câmara de Itacaré em 2026) e custo de manutenção em ambiente salino. Recomendação: reserva técnica de 6 meses de despesa fixa.",
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