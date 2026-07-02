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
    slug: "energia-solar-comercial-bahia-payback",
    title: "Energia solar comercial na Bahia: quanto custa, quanto economiza e payback real em 2026",
    category: "Energia", categorySlug: "energia",
    tags: ["Solar", "Energia Solar", "Payback", "Fio B", "ANEEL", "COELBA", "GD", "Empresas"],
    image: heroSolarBahia, author: "Carlos Mendes", date: "28 jun 2026", read: "14 min",
    excerpt: "Guia completo para empresas baianas que querem instalar energia solar em 2026: preços por kWp, economia real na conta da COELBA, payback com Fio B em regime pleno, tributação de ICMS e caminho passo a passo para não perder dinheiro na contratação.",
    metaTitle: "Energia solar comercial Bahia: payback e economia real em 2026",
    metaDescription: "Quanto custa, quanto economiza e em quantos anos se paga um sistema solar comercial na Bahia em 2026. Preços por kWp, Fio B, ICMS e checklist.",
    updated: "28 jun 2026",
    midImage: midSolarTelhado,
    midImageAlt: "Painéis solares fotovoltaicos monocristalinos instalados no telhado de um edifício comercial em Salvador, Bahia, sob céu azul com técnico ao fundo inspecionando o inversor",
    midImageCaption: "Sistema fotovoltaico comercial em telhado de galpão em Salvador: a Bahia tem uma das maiores irradiações do país, o que reduz o payback frente a estados do Sul e Sudeste.",
    authorBio: "Carlos Mendes é engenheiro eletricista com registro no CREA-BA, MBA em energia pela UFBA e mais de doze anos dimensionando projetos fotovoltaicos comerciais e industriais no Nordeste. Já assinou memoriais técnicos de mais de 180 sistemas conectados à COELBA.",
    sources: [
      { label: "ANEEL — Geração Distribuída", url: "https://www.gov.br/aneel/pt-br/assuntos/geracao-distribuida" },
      { label: "COELBA (Neoenergia) — Micro e Minigeração", url: "https://www.neoenergiacoelba.com.br" },
      { label: "EPE — Anuário Estatístico de Energia Elétrica", url: "https://www.epe.gov.br" },
      { label: "SEI-BA — Indicadores do Estado da Bahia", url: "https://www.sei.ba.gov.br" },
    ],
    content: [
      "> **Resumo executivo** — Um sistema fotovoltaico comercial de 75 kWp instalado em telhado de galpão na Região Metropolitana de Salvador custa, em 2026, entre R$ 245 mil e R$ 305 mil chave-na-mão. A economia média mensal na conta de energia fica entre R$ 5.400 e R$ 7.200, resultando em payback simples de 4,2 a 5,6 anos mesmo com o Fio B em regime pleno da Lei 14.300. Este guia detalha preço por kWp, dimensionamento correto, tributação, contrato com integradora e como não pagar caro por um sistema mal projetado.",
      "Empresas baianas descobriram no ciclo 2023–2026 uma coisa que os condomínios residenciais do Sul já sabiam: a conta de luz virou um dos principais itens de custo fixo — e é um dos únicos que dá para atacar sem demitir ninguém, sem trocar de sede e sem mexer no preço final. Padarias, supermercados de bairro, oficinas mecânicas, clínicas, escolas, hotéis, pousadas, pequenas indústrias e escritórios com muito ar-condicionado passaram a receber propostas de energia solar quase toda semana. Boa parte é séria. Outra parte, não. Este guia serve para o dono do negócio, o gestor financeiro ou o síndico que precisa entender, sem simplificação, o que está sendo vendido antes de assinar.",
      "## Por que a Bahia é o melhor estado do Brasil para solar comercial",
      "Três fatores objetivos colocam a Bahia à frente da maioria dos estados brasileiros quando o assunto é geração fotovoltaica em telhado comercial. O primeiro é a irradiação solar. Segundo dados do Atlas Brasileiro de Energia Solar e cruzamentos publicados pela EPE, a irradiação média diária no território baiano varia entre 5,3 e 6,4 kWh/m² por dia, com o Vale do São Francisco batendo picos raros no planeta. Isso significa que o mesmo painel gera aqui de 20% a 35% mais energia ao ano do que geraria em Curitiba, por exemplo.",
      "O segundo fator é o preço da tarifa. A tarifa comercial B3 da COELBA, com bandeira, encargos e tributos, ficou entre 2024 e 2026 acima de R$ 1,05 por kWh na média para consumidores do grupo B. Quanto mais cara a tarifa que o sistema substitui, mais rápido o payback. É por isso que hotel de porte médio, mercado de bairro e pequena indústria são os perfis que melhor amortizam o investimento.",
      "O terceiro fator é climático em outro sentido: baixa nebulosidade no interior. Cidades como Barreiras, Juazeiro, Guanambi, Vitória da Conquista e Feira de Santana têm poucos dias com cobertura total de nuvens, o que aumenta o fator de capacidade real do sistema — a energia efetivamente gerada em relação ao potencial.",
      "### O que os números oficiais mostram",
      "A ANEEL, em seu painel público de Geração Distribuída, registra a Bahia como um dos cinco estados com maior potência instalada em GD no país, com mais de 2,3 GWp conectados até o primeiro semestre de 2026. Mais de 60% desse volume corresponde a sistemas comerciais e industriais, e não residenciais — sinal de que o mercado B2B assumiu a dianteira e é o que vai puxar os próximos anos.",
      "## Quanto custa instalar energia solar comercial na Bahia em 2026",
      "O preço de um sistema fotovoltaico é medido por kWp instalado. Em 2026, o mercado baiano opera dentro de faixas razoavelmente estáveis, com variação por porte, tipo de telhado, marca de módulo e complexidade da entrada de energia.",
      "### Faixas de preço por porte",
      "- Sistemas de 10 a 30 kWp: R$ 4.100 a R$ 4.900 por kWp instalado.",
      "- Sistemas de 30 a 75 kWp: R$ 3.500 a R$ 4.100 por kWp instalado.",
      "- Sistemas de 75 a 300 kWp: R$ 3.100 a R$ 3.700 por kWp instalado.",
      "- Sistemas acima de 500 kWp (mini geração): R$ 2.700 a R$ 3.200 por kWp.",
      "Esses valores incluem módulos fotovoltaicos monocristalinos de tier 1, inversores string ou híbridos, estruturas de fixação, cabos, quadros de proteção, projeto elétrico, ART do engenheiro, homologação junto à COELBA, comissionamento e monitoramento remoto. Não incluem obras civis pesadas — como reforço de estrutura de telhado — nem eventual troca de padrão de entrada.",
      "> **Sinal de alerta** — Proposta abaixo de R$ 2.900 por kWp em sistemas comerciais pequenos costuma esconder ausência de projeto executivo, uso de inversor genérico sem representação no Brasil ou promessa vazia de garantia. Barato acima da média do mercado normalmente é caro em quatro anos.",
      "### O que compõe o CAPEX de um sistema de 75 kWp",
      "Um sistema comercial de referência de 75 kWp para telhado de galpão médio na Bahia tem a seguinte composição típica em 2026, com valores centrais aproximados:",
      "| Item | Participação no CAPEX | Valor referencial |",
      "| Módulos fotovoltaicos monocristalinos tier 1 | 38% | R$ 104.500 |",
      "| Inversores string ou híbridos | 14% | R$ 38.500 |",
      "| Estrutura de fixação e materiais elétricos | 12% | R$ 33.000 |",
      "| Projeto executivo, ART e homologação | 8% | R$ 22.000 |",
      "| Instalação, mão de obra e comissionamento | 18% | R$ 49.500 |",
      "| Monitoramento remoto e garantia estendida | 4% | R$ 11.000 |",
      "| Impostos, frete e margem da integradora | 6% | R$ 16.500 |",
      "| CAPEX total consolidado | 100% | R$ 275.000 |",
      "## Economia real na conta de luz: o cálculo passo a passo",
      "Aqui mora a maior confusão do mercado. Muita proposta comercial mostra economia bruta e chama de retorno. Não é. A economia real é o valor que efetivamente sai da fatura da COELBA depois de considerar o Fio B, a demanda contratada, a bandeira e os encargos que continuam sendo cobrados.",
      "### Como a tarifa se decompõe",
      "A tarifa que uma empresa do grupo B paga é composta por Tarifa de Uso do Sistema de Distribuição (TUSD), Tarifa de Energia (TE), ICMS, PIS/COFINS, iluminação pública, bandeira tarifária e, quando aplicável, taxa de disponibilidade mínima. A energia gerada pelo sistema fotovoltaico compensa a parcela de energia, mas com a Lei 14.300 em regime pleno paga proporcionalmente o Fio B — a parte da TUSD referente ao uso da rede.",
      "### Cronograma do Fio B em 2026",
      "A Lei 14.300 estabeleceu uma escala progressiva de cobrança do Fio B sobre a energia injetada por sistemas de geração distribuída conectados a partir de 2023. Em 2026, o percentual cobrado é de 75% do Fio B da distribuidora. Em 2027 sobe para 90%. A partir de 2028, novos projetos entram em regime pleno com a metodologia definitiva definida pela ANEEL.",
      "Isso não inviabiliza o investimento. Reduz a economia por kWh em cerca de R$ 0,08 a R$ 0,14 em relação ao regime antigo, o que empurra o payback de 3,8 anos (regime antigo) para algo entre 4,2 e 5,6 anos (regime atual), a depender do porte e da localização.",
      "### Estudo de caso realista",
      "Uma empresa com consumo médio de 8.500 kWh por mês em Salvador, tarifa comercial média efetiva de R$ 1,08 por kWh e conta mensal na casa de R$ 9.180 instala um sistema de 75 kWp. O sistema, em uma cidade com irradiação média de 5,4 kWh/m²/dia, gera aproximadamente 10.300 kWh por mês em base anual. Como o consumo é de 8.500 kWh, sobram cerca de 1.800 kWh mensais para autoconsumo remoto de outra unidade da mesma empresa (matriz e filial, por exemplo) ou para crédito futuro na mesma unidade em meses de maior consumo.",
      "Descontando o Fio B em regime de 2026 (75%), a taxa de disponibilidade mínima e os encargos que permanecem, a economia líquida mensal efetiva fica entre R$ 5.900 e R$ 7.100 na maior parte dos meses. Em 12 meses, economia acumulada de aproximadamente R$ 78 mil sobre CAPEX de R$ 275 mil, o que resulta em payback simples de cerca de 3,5 a 4,1 anos — abaixo da média nacional porque a Bahia junta boa irradiação com tarifa alta.",
      "## Comparativo: solar próprio, aluguel de sistema ou consórcio de energia",
      "Nem toda empresa vai ou deve comprar o sistema. Existem três modelos comerciais convivendo no mercado baiano em 2026, e a escolha correta depende de fluxo de caixa, apetite por dívida e horizonte de permanência no imóvel.",
      "### 1. Compra à vista ou financiada",
      "É o modelo com melhor retorno em termos absolutos. Compra à vista maximiza payback e libera o CAPEX inteiro para depreciação e crédito de PIS/COFINS em empresas do regime não cumulativo. Compra financiada via linhas verdes de bancos como Banco do Nordeste (FNE Verde), Sicredi ou fintechs especializadas tem taxa efetiva entre 1,2% e 1,6% ao mês em 2026, prazo de 60 a 84 meses, e mantém o retorno atrativo porque a economia mensal costuma cobrir a parcela desde o primeiro mês.",
      "### 2. Aluguel de usina (assinatura de energia)",
      "Também chamado de PPA privado. Uma geradora instala e opera o sistema — no telhado da própria empresa ou em usina remota conectada por autoconsumo — e a empresa contratante paga uma tarifa mensal equivalente a 70% a 85% da tarifa da COELBA, sem investir CAPEX. Zero investimento inicial e economia garantida em contrato. A desvantagem é retorno menor que a compra e amarração de 10 a 15 anos.",
      "### 3. Cooperativas e consórcios de energia solar",
      "Modelo em ascensão para consumidores menores. A empresa entra como cotista de uma cooperativa que opera uma usina remota e recebe créditos de energia proporcionais à sua cota. Ticket menor, sem obra no telhado e sem risco operacional, mas com governança que precisa ser auditada — há muita cooperativa nova sem histórico.",
      "## Tributação: o que muda na apuração do ICMS em 2026",
      "A energia elétrica é um dos itens mais tributados do país. Para geração distribuída, o convênio CONFAZ 16/2015 e revisões posteriores estabelecem que os estados podem isentar de ICMS a energia injetada e depois compensada — e a Bahia aderiu com regras específicas.",
      "Em 2026, sistemas de até 5 MW conectados na Bahia mantêm isenção de ICMS sobre a parcela de energia compensada. Sobre a Tarifa de Uso do Sistema de Distribuição, entretanto, o ICMS continua incidindo, o que reforça a importância de dimensionar o sistema para autoconsumo efetivo e evitar exportar volumes altos para a rede que retornem como crédito com custo tributário embutido.",
      "Empresas do lucro real ainda conseguem duas alavancas importantes: depreciação acelerada do sistema (vida útil fiscal de 10 anos, mas com opção de depreciação acelerada em condições específicas) e crédito de PIS/COFINS não cumulativos sobre o CAPEX, o que reduz o desembolso líquido em até 9,25% para quem se enquadra. Consulte contador especializado antes de projetar esses benefícios na planilha.",
      "## Erros mais comuns na contratação (e como evitar cada um)",
      "Ao longo de mais de uma década assinando memoriais técnicos, quatro erros aparecem com frequência incômoda nas propostas rejeitadas na COELBA ou em sistemas que subperformam.",
      "### Dimensionar sem análise de consumo real de 12 meses",
      "A conta de energia oscila com sazonalidade. Um dimensionamento baseado em três meses aleatórios erra fácil em 15% a 25% para mais ou para menos. Exija sempre análise de 12 faturas contínuas e curva de carga se a empresa tiver medição horária.",
      "### Ignorar a demanda contratada e o grupo tarifário",
      "Empresas do grupo A (média tensão) têm cobrança de demanda que a solar não substitui. Um sistema fotovoltaico não reduz a demanda contratada — apenas o consumo de energia ativa. Migrar de grupo A para B, quando possível, pode gerar economia adicional maior do que a própria geração solar.",
      "### Escolher inversor por preço, não por representação técnica no Brasil",
      "Módulos duram 25 anos, mas inversores têm vida útil de 10 a 15 anos. Sem representação técnica local, uma falha vira uma dor de cabeça de meses. Exija marca com assistência técnica em Salvador, Feira de Santana ou Vitória da Conquista.",
      "### Contrato sem cláusula de performance garantida",
      "O contrato deve prever geração mínima anual em kWh, medida no monitoramento remoto, com penalidade para a integradora em caso de subperformance por defeito de projeto, instalação ou equipamento. Sem essa cláusula, o risco de subgeração fica com o dono do negócio.",
      "## Checklist de contratação em 12 pontos",
      "- Ter em mãos 12 faturas de energia contínuas da unidade consumidora.",
      "- Solicitar pelo menos três propostas comparáveis (mesma potência e mesma marca de módulo).",
      "- Verificar CNPJ, tempo de mercado e portfólio de obras da integradora.",
      "- Confirmar que o projeto elétrico será assinado por engenheiro com CREA-BA ativo, com ART emitida.",
      "- Exigir memorial de cálculo com fator de capacidade estimado e perda por temperatura.",
      "- Ver contrato modelo antes de assinar qualquer sinal.",
      "- Confirmar cláusula de performance garantida e penalidade por subgeração.",
      "- Confirmar prazos de garantia: módulos (25 anos linear), inversor (10 anos mínimo), instalação (5 anos).",
      "- Solicitar visita técnica presencial ao telhado antes da proposta final.",
      "- Validar o modelo de homologação junto à COELBA no cronograma da proposta.",
      "- Confirmar seguro contra granizo, vandalismo, curto-circuito e queda de raio.",
      "- Solicitar acesso ao portal de monitoramento remoto desde o primeiro dia.",
      "## Cenário 2026–2030: para onde caminha a solar comercial baiana",
      "Três movimentos vão moldar o mercado. O primeiro é a integração com armazenamento em baterias (BESS) em sistemas comerciais médios e grandes, começando por hospitais, hotéis e centros de distribuição que precisam de continuidade operacional em quedas de rede.",
      "O segundo é a consolidação do modelo de autoconsumo remoto e geração compartilhada, permitindo que uma empresa com telhado bom instale uma usina maior e destine créditos para filiais, imóveis do sócio e até para colaboradores em programas de benefício.",
      "O terceiro é a maturação do mercado livre para consumidores de menor porte a partir de 2028. Empresas com contratação a partir de 500 kW terão a possibilidade de comprar energia diretamente de geradoras, o que redesenha o cálculo de retorno da solar própria em comparação com o mercado livre.",
      "## Como este guia se conecta com outras análises do site",
      "Se o interesse for entender riscos regulatórios além da Lei 14.300, vale ler a análise sobre riscos regulatórios da geração distribuída na Bahia pós-2026, que aprofunda mudanças do Fio B e novas cobranças em discussão na ANEEL. Para empresas de porte industrial que consideram associar geração própria a incentivos estaduais, o guia sobre incentivos PRODUZIR BA para indústrias em 2026 detalha os benefícios de ICMS e os prazos de protocolo.",
      "## Conclusão prática",
      "Instalar energia solar comercial na Bahia em 2026 continua sendo uma das decisões financeiras mais previsíveis que uma empresa pode tomar. O payback subiu ligeiramente com o Fio B, mas ainda entrega retorno superior à renda fixa isenta em quase todos os cenários realistas — com a diferença de que é retorno em economia, não em juros tributáveis. O caminho seguro é o mesmo há uma década: dimensionar com base em consumo real de 12 meses, exigir projeto executivo com ART, escolher equipamento com representação técnica local e amarrar contrato com performance garantida. Feito assim, o sistema paga a si mesmo antes do quinto ano e continua gerando energia por mais de duas décadas.",
    ],
    faq: [
      { q: "Quanto custa instalar energia solar comercial na Bahia em 2026?", a: "O preço médio varia entre R$ 3.100 e R$ 4.900 por kWp instalado, dependendo do porte. Um sistema comercial padrão de 75 kWp fica entre R$ 245 mil e R$ 305 mil chave-na-mão, incluindo módulos, inversor, estrutura, projeto, homologação e comissionamento." },
      { q: "Qual o payback real de um sistema solar comercial na Bahia?", a: "Com a Lei 14.300 em regime de 2026 (Fio B de 75%), o payback simples de um sistema comercial bem dimensionado fica entre 4,2 e 5,6 anos. Em cidades do interior com irradiação acima de 6 kWh/m²/dia, pode cair para 3,8 anos." },
      { q: "A Bahia é realmente melhor que outros estados para energia solar?", a: "Sim. A irradiação média varia entre 5,3 e 6,4 kWh/m² por dia, uma das maiores do Brasil, o que aumenta a geração anual em 20% a 35% frente a estados do Sul. Somado à tarifa comercial elevada da COELBA, resulta em payback melhor que a média nacional." },
      { q: "O que muda com a Lei 14.300 e o Fio B em 2026?", a: "A lei estabeleceu cronograma progressivo de cobrança do Fio B sobre a energia injetada pela geração distribuída. Em 2026 são 75%, em 2027 sobem para 90% e a partir de 2028 vigora o regime pleno definido pela ANEEL. Isso reduz a economia por kWh, mas não inviabiliza o investimento." },
      { q: "Vale mais a pena comprar o sistema ou alugar via assinatura de energia?", a: "Compra à vista ou financiada entrega maior retorno em termos absolutos e libera CAPEX para depreciação. Assinatura (PPA privado) tem zero investimento inicial e economia contratual de 15% a 30% na tarifa, mas amarra a empresa em contrato de 10 a 15 anos e retorno menor no longo prazo." },
      { q: "Sistemas solares comerciais pagam ICMS na Bahia?", a: "Sistemas de geração distribuída de até 5 MW conectados na Bahia mantêm isenção de ICMS sobre a parcela de energia compensada. O ICMS segue incidindo sobre a Tarifa de Uso do Sistema de Distribuição (TUSD), o que reforça a importância de dimensionar para autoconsumo efetivo." },
      { q: "Empresas do lucro real podem descontar o CAPEX do imposto?", a: "Sim. Empresas do lucro real conseguem depreciar o sistema ao longo da vida útil fiscal (10 anos) e, em alguns casos, aplicar depreciação acelerada. Também podem tomar crédito de PIS/COFINS não cumulativos sobre o CAPEX, reduzindo o desembolso líquido em até 9,25%. Consulte contador especializado antes de contratar." },
      { q: "Preciso de reforço estrutural no telhado do galpão?", a: "Nem sempre. Estruturas metálicas modernas suportam bem o peso adicional dos módulos (cerca de 12 a 18 kg/m²). Telhados de fibrocimento antigos ou coberturas com mais de 20 anos costumam exigir laudo técnico e, em alguns casos, reforço de terças. Sempre exija visita técnica presencial antes da proposta final." },
      { q: "Quanto tempo demora entre contratar e começar a gerar energia?", a: "O prazo médio na Bahia em 2026 é de 60 a 110 dias entre assinatura de contrato e conexão homologada pela COELBA. Inclui projeto executivo, aprovação do parecer de acesso, aquisição de equipamentos, instalação, comissionamento e vistoria da distribuidora." },
      { q: "O que acontece se o sistema gerar menos do que a proposta previa?", a: "Depende do contrato. Contratos profissionais incluem cláusula de performance garantida que obriga a integradora a compensar financeiramente o cliente em caso de subgeração por defeito de projeto, instalação ou equipamento. Sem essa cláusula, o risco fica com o dono do sistema." },
      { q: "Existe financiamento para energia solar comercial na Bahia?", a: "Sim. O FNE Verde do Banco do Nordeste é a linha mais utilizada, com prazo de até 12 anos e taxa efetiva competitiva em 2026. Bancos como Sicredi, Sicoob e fintechs especializadas em crédito verde também oferecem linhas de 60 a 84 meses. Em geral a parcela mensal fica abaixo da economia gerada." },
      { q: "Vale a pena esperar o preço dos painéis cair mais para instalar?", a: "Em geral, não. O preço do watt-pico caiu bastante entre 2020 e 2024 e está próximo da estabilização. Cada mês sem gerar é conta cheia da COELBA. Para empresas com consumo relevante, o custo de oportunidade de adiar costuma superar a queda esperada no CAPEX." },
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