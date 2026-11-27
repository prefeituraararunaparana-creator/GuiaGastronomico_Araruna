/* =========================================================
   CADASTRO DOS ESTABELECIMENTOS
   ---------------------------------------------------------
   Revisão de 27/11/2026: links do Google Maps substituídos pelos
   fornecidos pelo responsável. Endereços textuais preservados do
   cadastro; ainda sujeitos à conferência.

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

   usarCoordenadas → coloque  usarCoordenadas: true,  nos locais que não têm ficha
          própria no Google ou cujo nome se repete pelo Brasil (ex.: New Big). O botão
          "Como chegar" e a prévia do mapa passam a usar só a posição do pino.

   lat e lng → posição do pino no MAPA do guia (aba "Mapa").
          Para pegar: no Google Maps, toque e segure no local; os
          números aparecem na caixa de busca (ex.: -23.93, -52.49).
          Sem lat/lng o estabelecimento continua na lista, mas não
          aparece no mapa.
   ========================================================= */

const ESTABELECIMENTOS = [
  // ---------- Padarias ----------
  {
    nome: "Panificadora Pão de Mel",
    categorias: ["padarias"],
    descricao: "Pães, doces e salgados.",
    endereco: "Av. 29 de Novembro, 411",
    logo: "img/estabelecimentos/panificadora-pao-de-mel.jpeg",
    mapa: "https://maps.app.goo.gl/ZwXj5Df8kmPDmwLx5",
    lat: -23.9304341,
    lng: -52.4966634
  },
  {
    nome: "Panificadora São José",
    categorias: ["padarias"],
    descricao: "Pães, doces e salgados.",
    endereco: "Rua Vítor Meireles, 721",
    logo: "img/estabelecimentos/panificadora-sao-jose.png",
    mapa: "https://maps.app.goo.gl/cnmmYkcUbtC1RRPQ6",
    lat: -23.9288234,
    lng: -52.5002848
  },
  {
    nome: "Casa do Pão",
    categorias: ["padarias"],
    descricao: "Pães, doces e salgados.",
    endereco: "Rua Vital Brasil, 681",
    logo: "img/estabelecimentos/casa-do-pao.png",
    mapa: "https://maps.app.goo.gl/A6PYBzgPoK9FBLxa9",
    lat: -23.9291741,
    lng: -52.5015251
  },
  // ---------- Sorveterias ----------
  {
    nome: "Sorveteria Milkneve",
    categorias: ["sorveterias"],
    descricao: "Sorvetes",
    endereco: "Av. Presidente Vargas, 581",
    logo: "img/estabelecimentos/sorveteria-milkneve.png",
    mapa: "https://maps.app.goo.gl/pCJkogaS8mDVb9NN8",
    lat: -23.9309736,
    lng: -52.4970521
  },
  {
    nome: "Sorveteria New Big",
    categorias: ["sorveterias"],
    descricao: "Sorvetes e sobremesas.",
    endereco: "Rua Eraclides Gouveia",
    logo: "img/estabelecimentos/sorveteria-new-big.png",
    mapa: "https://maps.app.goo.gl/oigRZnZQhfVbmYxG8",
    usarCoordenadas: true,
    lat: -23.9316871,
    lng: -52.4974949
  },
  // ---------- Lanchonetes ----------
  {
    nome: "Roxito Açaí Burguer",
    categorias: ["lanchonetes"],
    descricao: "Açaí e lanches.",
    endereco: "Rua Eraclides Alves Gouveia",
    logo: "img/estabelecimentos/roxito-acai-burguer.png",
    mapa: "https://maps.app.goo.gl/22jPHDeb76j8jCmv9",
    usarCoordenadas: true,
    lat: -23.93174,
    lng: -52.4972199
  },
  {
    nome: "Thiago Lanches",
    categorias: ["lanchonetes"],
    descricao: "Lanches.",
    endereco: "Av. Paraná, 382",
    logo: "img/estabelecimentos/thiago-lanches.png",
    mapa: "https://maps.app.goo.gl/Lpypa1rExBttCNkR6",
    usarCoordenadas: true,
    lat: -23.929878,
    lng: -52.489077
  },
  {
    nome: "Hot Dog do Guerino",
    categorias: ["lanchonetes"],
    descricao: "Cachorro-quente e lanches.",
    endereco: "Av. Presidente Vargas, 580b",
    logo: "img/estabelecimentos/hot-dog-do-guerino.png",
    mapa: "https://maps.app.goo.gl/afiTrvCqM3szQceG6",
    lat: -23.9310555,
    lng: -52.4967591
  },
  {
    nome: "Kenilanches e Pizzas",
    categorias: ["lanchonetes", "pizzarias"],
    descricao: "Lanches e pizzas.",
    endereco: "Av. Paraná, 698",
    logo: "img/estabelecimentos/kenilanches-e-pizzas.png",
    mapa: "https://maps.app.goo.gl/ziucFWdHSy672rW37",
    lat: -23.9297027,
    lng: -52.4879426
  },
  {
    nome: "Fome Zero Lanchonete e Pizzaria",
    categorias: ["lanchonetes", "pizzarias"],
    descricao: "Lanches e pizzas.",
    endereco: "Rua Deoclécio Manoel Teixeira",
    logo: "img/estabelecimentos/fome-zero.png",
    mapa: "https://maps.app.goo.gl/xGyey13BYvtcQ8fn6",
    lat: -23.9297815,
    lng: -52.4980807
  },
  // ---------- Pizzarias ----------
  {
    nome: "Pizza d'Casa",
    categorias: ["pizzarias"],
    descricao: "Pizzas.",
    endereco: "Rua Vital Brasil, 570",
    logo: "img/estabelecimentos/pizzaria-pizza-d-casa.png",
    mapa: "https://maps.app.goo.gl/7VAYzPejYQbu27uMA",
    lat: -23.9306436,
    lng: -52.5015071
  },
  // ---------- Restaurantes ----------
  {
    nome: "Ki Delícia Restaurante e Espetinho",
    categorias: ["restaurantes"],
    descricao: "Refeições e espetinhos.",
    endereco: "Av. Presidente Vargas, 390",
    logo: "img/estabelecimentos/ki-delicia.png",
    mapa: "https://maps.app.goo.gl/jE4UKfAAWRFUwK1E8",
    usarCoordenadas: true,
    lat: -23.934449,
    lng: -52.497564
  },
  {
    nome: "Sabor Caseiro",
    categorias: ["restaurantes"],
    descricao: "Refeições.",
    endereco: "Rua Duque de Caxias, 151",
    logo: "img/estabelecimentos/sabor-caseiro.png",
    mapa: "https://maps.app.goo.gl/3wYvEXvXnUshATT36",
    usarCoordenadas: true,
    lat: -23.9287993,
    lng: -52.4997605
  },
  // ---------- Conveniencias ----------
  {
    nome: "Ramos Conveniência e Espetinho",
    categorias: ["conveniencias"],
    descricao: "Bebidas, conveniência e espetinhos.",
    endereco: "Rua Deoclécio Manoel Teixeira, 424",
    logo: "img/estabelecimentos/ramos-conveniencia.png",
    mapa: "https://maps.app.goo.gl/KXLXFKdxnCbKTaD2A",
    lat: -23.9300501,
    lng: -52.4978661
  }
];
