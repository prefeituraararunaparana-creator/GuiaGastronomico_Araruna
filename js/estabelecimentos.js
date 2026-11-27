/* =========================================================
   CADASTRO DOS ESTABELECIMENTOS
   ---------------------------------------------------------
   Para adicionar um estabelecimento: copie um bloco { ... },
   cole no fim da lista (antes do ]) e troque as informações.
   Não esqueça a vírgula entre um bloco e outro.

   categorias → lista com uma ou mais destas opções:
     "padarias" | "sorveterias" | "lanchonetes" | "pizzarias"
     "restaurantes" | "conveniencias"
     Ex.: ["lanchonetes", "pizzarias"] aparece nas duas categorias.

   logo → salve a imagem em img/estabelecimentos/ com o nome
          indicado em cada bloco (.webp, quadrada, até ~400 px).
          Enquanto não houver o arquivo, aparece o ícone da categoria.

   mapa → no Google Maps, toque no local > Compartilhar > Copiar link
          e cole no lugar de COLE-O-LINK-AQUI.
   ========================================================= */

const ESTABELECIMENTOS = [
  // ---------- Padarias ----------
  {
    nome: "Panificadora Pão de Mel",
    categorias: ["padarias"],
    descricao: "Pães, doces e salgados.",
    endereco: "Av. 29 de Novembro, 411",
    logo: "img/estabelecimentos/panificadora-pao-de-mel.webp",
    mapa: "COLE-O-LINK-AQUI"
  },
  {
    nome: "Panificadora São José",
    categorias: ["padarias"],
    descricao: "Pães, doces e salgados.",
    endereco: "Rua Vítor Meireles, 721",
    logo: "img/estabelecimentos/panificadora-sao-jose.webp",
    mapa: "COLE-O-LINK-AQUI"
  },
  {
    nome: "Casa do Pão",
    categorias: ["padarias"],
    descricao: "Pães, doces e salgados.",
    endereco: "Rua Vital Brasil, 681",
    logo: "img/estabelecimentos/casa-do-pao.webp",
    mapa: "COLE-O-LINK-AQUI"
  },

  // ---------- Sorveterias ----------
  {
    nome: "Sorveteria Milkneve",
    categorias: ["sorveterias", "lanchonetes"],
    descricao: "Sorvetes, sobremesas e lanches.",
    endereco: "Av. Presidente Vargas, 581",
    logo: "img/estabelecimentos/sorveteria-milkneve.webp",
    mapa: "COLE-O-LINK-AQUI"
  },
  {
    nome: "Sorveteria New Big",
    categorias: ["sorveterias"],
    descricao: "Sorvetes e sobremesas.",
    endereco: "Rua Eraclides Gouveia",
    logo: "img/estabelecimentos/sorveteria-new-big.webp",
    mapa: "COLE-O-LINK-AQUI"
  },

  // ---------- Lanchonetes ----------
  {
    nome: "Roxito Açaí Burguer",
    categorias: ["lanchonetes"],
    descricao: "Açaí e lanches.",
    endereco: "Rua Eraclides Alves Gouveia",
    logo: "img/estabelecimentos/roxito-acai-burguer.webp",
    mapa: "COLE-O-LINK-AQUI"
  },
  {
    nome: "Hot Dog do Guerino",
    categorias: ["lanchonetes"],
    descricao: "Cachorro-quente e lanches.",
    endereco: "Av. Presidente Vargas, 580b",
    logo: "img/estabelecimentos/hot-dog-do-guerino.webp",
    mapa: "COLE-O-LINK-AQUI"
  },
  {
    nome: "Kenilanches e Pizzas",
    categorias: ["lanchonetes", "pizzarias"],
    descricao: "Lanches e pizzas.",
    endereco: "Av. Paraná, 698",
    logo: "img/estabelecimentos/kenilanches-e-pizzas.webp",
    mapa: "COLE-O-LINK-AQUI"
  },
  {
    nome: "Fome Zero Lanchonete e Pizzaria",
    categorias: ["lanchonetes", "pizzarias"],
    descricao: "Lanches e pizzas.",
    endereco: "Rua Deoclécio Manoel Teixeira",
    logo: "img/estabelecimentos/fome-zero.webp",
    mapa: "COLE-O-LINK-AQUI"
  },

  // ---------- Pizzarias ----------
  {
    nome: "Pizzaria Pizza d'Casa",
    categorias: ["pizzarias"],
    descricao: "Pizzas.",
    endereco: "Rua Vital Brasil, 570",
    logo: "img/estabelecimentos/pizzaria-pizza-d-casa.webp",
    mapa: "COLE-O-LINK-AQUI"
  },

  // ---------- Restaurantes ----------
  {
    nome: "Ki Delícia Restaurante e Espetinho",
    categorias: ["restaurantes"],
    descricao: "Refeições e espetinhos.",
    endereco: "Av. Presidente Vargas, 390",
    logo: "img/estabelecimentos/ki-delicia.webp",
    mapa: "COLE-O-LINK-AQUI"
  },
  {
    nome: "Sabor Caseiro",
    categorias: ["restaurantes"],
    descricao: "Refeições.",
    endereco: "Rua Duque de Caxias, 151",
    logo: "img/estabelecimentos/sabor-caseiro.webp",
    mapa: "COLE-O-LINK-AQUI"
  },

  // ---------- Conveniências ----------
  {
    nome: "Ramos Conveniência e Espetinho",
    categorias: ["conveniencias"],
    descricao: "Bebidas, conveniência e espetinhos.",
    endereco: "Rua Deoclécio Manoel Teixeira, 424",
    logo: "img/estabelecimentos/ramos-conveniencia.webp",
    mapa: "COLE-O-LINK-AQUI"
  }
];
