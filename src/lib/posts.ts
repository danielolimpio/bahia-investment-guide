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

export const featured: Post[] = [
  {
    title: "Bahia lidera geração eólica do Brasil: 5 parques com TIR acima de 16% em 2026",
    category: "Energia",
    image: heroEolica,
    author: "Equipe ANB",
    date: "28 jun 2026",
    excerpt: "Mapa atualizado dos leilões A-4 e A-6 com retorno real descontado por câmbio e PLD médio.",
    read: "8 min",
  },
  {
    title: "Como 1 casa em Itacaré gera R$ 8.000/mês na alta temporada",
    category: "Imóveis",
    image: heroImovel,
    author: "Marina Cerqueira",
    date: "26 jun 2026",
    excerpt: "Estudo de caso real (anonimizado): aquisição de R$ 720k, gestão Airbnb e ocupação 78%.",
    read: "11 min",
  },
  {
    title: "Cacau fino do sul da Bahia: margem de 240% sobre o cacau commodity",
    category: "Agronegócio",
    image: heroCacau,
    author: "Renato Souza",
    date: "24 jun 2026",
    excerpt: "Por que o cacau bean-to-bar de Uruçuca virou ativo dolarizado para investidores.",
    read: "9 min",
  },
];

export const editorial: Post[] = [
  {
    title: "Parques solares no Sertão: análise técnica do leilão A-4 e payback de 6,2 anos",
    category: "Energia",
    image: postSolar,
    author: "Carlos Mendes",
    date: "22 jun 2026",
    excerpt: "Comparativo entre Juazeiro, Casa Nova e Bom Jesus da Lapa com curva de irradiação.",
  },
  {
    title: "Morro de São Paulo: ticket médio sobe 31% e ocupação atinge 84%",
    category: "Imóveis",
    image: postMorro,
    author: "Marina Cerqueira",
    date: "21 jun 2026",
    excerpt: "Dados SETUR-BA mostram inversão de tendência após reforma da pousada-padrão.",
  },
  {
    title: "Fruticultura irrigada em Petrolina-Juazeiro: uva e manga exportação",
    category: "Agronegócio",
    image: postFruta,
    author: "Renato Souza",
    date: "19 jun 2026",
    excerpt: "ROI de R$ 38k/ha em uva niagara contra R$ 9k/ha em soja: vale a conversão?",
  },
  {
    title: "Salvador como hub: incentivos PRODUZIR BA para indústrias 2026",
    category: "Incentivos",
    image: postSalvador,
    author: "Equipe ANB",
    date: "17 jun 2026",
    excerpt: "Diferimento de ICMS, crédito presumido e prazos do novo decreto estadual.",
  },
];

export const popular: Post[] = [
  { title: "Due diligence completa antes de comprar terreno em Trancoso", category: "Due Diligence", image: postDue, author: "Equipe ANB", date: "15 jun 2026" },
  { title: "Pousada em Itacaré: cálculo real de break-even com 6 suítes", category: "Cases", image: postItacare, author: "Marina C.", date: "13 jun 2026" },
  { title: "ROI mensal de 1,5%: três ativos reais na Bahia (sem turismo comum)", category: "Análise", image: postRoi, author: "Equipe ANB", date: "10 jun 2026" },
  { title: "Riscos regulatórios da geração distribuída na Bahia pós-2026", category: "Energia", image: postSolar, author: "Carlos Mendes", date: "08 jun 2026" },
];

export const latest: Post[] = [
  { title: "ICMS sobre energia em 2026: o que muda para parques de até 5 MW", category: "Energia", image: postSolar, author: "Carlos M.", date: "29 jun" },
  { title: "Cacau bean-to-bar: chocolaterias de Ilhéus exportam para a Bélgica", category: "Agronegócio", image: heroCacau, author: "Renato S.", date: "28 jun" },
  { title: "Trancoso vs. Caraíva: comparativo de ROI por temporada 2025/26", category: "Imóveis", image: heroImovel, author: "Marina C.", date: "27 jun" },
  { title: "Como estruturar holding patrimonial na Bahia (custos reais)", category: "Due Diligence", image: postDue, author: "Equipe ANB", date: "26 jun" },
];