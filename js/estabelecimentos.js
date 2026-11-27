/* =========================================================
   CADASTRO DOS ESTABELECIMENTOS
   ---------------------------------------------------------
   Para adicionar um estabelecimento: copie um bloco { ... },
   cole no fim da lista (antes do ]) e troque as informações.
   Não esqueça a vírgula entre um bloco e outro.

   categoria → use exatamente um destes valores:
     "padarias" | "sorveterias" | "lanchonetes" | "pizzarias" | "conveniencias"

   logo → caminho da imagem em img/estabelecimentos/
          (de preferência .webp ou .png quadrado, até ~400 px)
          Deixe "" se não tiver logo: aparece o ícone da categoria.

   mapa → no Google Maps, toque no local > Compartilhar > Copiar link

   Os blocos abaixo são EXEMPLOS: substitua ou apague.
   ========================================================= */

const ESTABELECIMENTOS = [
  {
    nome: "Nome da Padaria",
    categoria: "padarias",
    descricao: "Pães, bolos e café da manhã.",
    endereco: "Rua Exemplo, 123 – Centro",
    logo: "",
    mapa: "https://maps.app.goo.gl/COLE-O-LINK-AQUI"
  },
  {
    nome: "Nome da Sorveteria",
    categoria: "sorveterias",
    descricao: "Sorvetes, açaí e milk-shakes.",
    endereco: "Rua Exemplo, 456 – Centro",
    logo: "",
    mapa: "https://maps.app.goo.gl/COLE-O-LINK-AQUI"
  },
  {
    nome: "Nome da Lanchonete",
    categoria: "lanchonetes",
    descricao: "Lanches, porções e bebidas.",
    endereco: "Avenida Exemplo, 789 – Centro",
    logo: "",
    mapa: "https://maps.app.goo.gl/COLE-O-LINK-AQUI"
  },
  {
    nome: "Nome da Pizzaria",
    categoria: "pizzarias",
    descricao: "Pizzas tradicionais e especiais.",
    endereco: "Rua Exemplo, 321 – Centro",
    logo: "",
    mapa: "https://maps.app.goo.gl/COLE-O-LINK-AQUI"
  },
  {
    nome: "Nome da Conveniência",
    categoria: "conveniencias",
    descricao: "Bebidas, gelo e lanches rápidos.",
    endereco: "Avenida Exemplo, 654 – Centro",
    logo: "",
    mapa: "https://maps.app.goo.gl/COLE-O-LINK-AQUI"
  }
];
