export const STORE_INFO = {
  name: "Estillus Gato",
  address: "Av. Norte Miguel Arraes de Alencar, 5229, Casa Amarela, Recife — PE",
  addressShort: "Av. Norte Miguel Arraes de Alencar, 5229, Casa Amarela, Recife/PE",
  phoneDisplay: "+55 81 98692-9847",
  phoneHref: "tel:+5581986929847",
  instagram: "https://www.instagram.com/estillusgato/",
  whatsapp: "https://wa.me/5581986929847",
  mapsPlace: "https://www.google.com/maps/place/Estillus+Gato/@-8.0237087,-34.9130004,17z",
  mapsRoute: "https://www.google.com/maps/dir/?api=1&destination=-8.0237087%2C-34.9130004",
  latitude: -8.0237087,
  longitude: -34.9130004,
  openingHours: "segunda a sábado, das 9h às 18h",
} as const;

export const LINKS = {
  instagram: STORE_INFO.instagram,
  whatsapp: STORE_INFO.whatsapp,
  maps: STORE_INFO.mapsPlace,
  route: STORE_INFO.mapsRoute,
} as const;

export const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Estilos", href: "#estilos" },
  { label: "Destaques", href: "#destaques" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Nossa loja", href: "#nossa-loja" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
] as const;

export const ADDRESS = STORE_INFO.addressShort;

export const TESTIMONIALS = [
  {
    name: "Cliente demonstrativo",
    source: "Avaliação demonstrativa no Google",
    rating: 5,
    review:
      "Depoimento de exemplo para apresentação do layout. Não representa uma avaliação real publicada pela loja.",
  },
  {
    name: "Cliente demonstrativo",
    source: "Avaliação demonstrativa no Google",
    rating: 5,
    review:
      "Depoimento de exemplo para apresentação do layout. Não representa uma avaliação real publicada pela loja.",
  },
  {
    name: "Cliente demonstrativo",
    source: "Avaliação demonstrativa no Google",
    rating: 5,
    review:
      "Depoimento de exemplo para apresentação do layout. Não representa uma avaliação real publicada pela loja.",
  },
] as const;

export const FAQ_ITEMS: Array<{ question: string; answer: string; answerLink?: string }> = [
  {
    question: "Onde fica a Estillus Gato?",
    answer: "Estamos na Av. Norte Miguel Arraes de Alencar, 5229, Casa Amarela, Recife — PE.",
    answerLink: LINKS.maps,
  },
  {
    question: "Qual é o horário de funcionamento?",
    answer:
      "O horário divulgado é de segunda a sábado, das 9h às 18h. Para feriados, recomendamos confirmar diretamente com a loja.",
  },
  {
    question: "Como posso entrar em contato?",
    answer:
      "Você pode entrar em contato pelo WhatsApp (81) 98692-9847 ou acompanhar o Instagram @estillusgato.",
  },
  {
    question: "A Estillus Gato vende roupas masculinas?",
    answer:
      "Sim. A Estillus Gato é uma loja especializada em moda masculina, com diferentes estilos para o dia a dia.",
  },
  {
    question: "Como posso acompanhar as novidades?",
    answer:
      "Acompanhe o Instagram @estillusgato, onde são divulgadas novidades e inspirações de looks.",
  },
];

/**
 * Imagens de demonstração (recortes ampliados de prints do Instagram).
 * "_crop" = mesma imagem 2x sem o ícone de vídeo do Instagram no canto superior.
 * Troque por fotos licenciadas em alta resolução mantendo as proporções (≈ 4:5).
 */
export const LOOKS = {
  bermuda: {
    src: "/assets/looks/look_01_bermuda_esportiva_crop.webp",
    alt: "Bermuda branca esportiva com listras laterais pretas, look masculino",
    title: "Casual Essential",
  },
  conjunto: {
    src: "/assets/looks/look_02_camisas_verde_branca_crop.webp",
    alt: "Camisa verde-oliva e peças brancas combinadas em manequins",
    title: "Conjunto Urbano",
  },
  polos: {
    src: "/assets/looks/look_03_polos_listradas_crop.webp",
    alt: "Camisetas polo listradas em verde, marrom e vinho em manequins",
    title: "Polo em Fokus",
  },
  terracota: {
    src: "/assets/looks/look_04_camisa_terracota_crop.webp",
    alt: "Camisa terracota com bermuda listrada em manequim",
    title: "Terracota Day",
  },
  trico: {
    src: "/assets/looks/look_05_camisa_trico_preta_crop.webp",
    alt: "Rapaz com camisa de tricô preta com listras claras",
    title: "Casual Premium",
  },
} as const;
