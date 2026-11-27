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
    logo: "img/estabelecimentos/panificadora-pao-de-mel.jpeg",
    mapa: "https://www.google.com/maps/place/Panificadora+P%C3%A3o+de+Mel/@-23.9304341,-52.4966634,17z/data=!3m1!4b1!4m6!3m5!1s0x94ed6fc53f92cb9d:0x34f32acfb19358b3!8m2!3d-23.9304341!4d-52.4966634!16s%2Fg%2F1td4l8mb?entry=ttu&g_ep=EgoyMDI2MTEyMy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "Panificadora São José",
    categorias: ["padarias"],
    descricao: "Pães, doces e salgados.",
    endereco: "Rua Vítor Meireles, 721",
    logo: "img/estabelecimentos/panificadora-sao-jose.webp",
    mapa: "https://www.google.com/maps/place/Panificadora+S%C3%A3o+Jos%C3%A9/@-23.9288234,-52.5002848,17z/data=!3m1!4b1!4m6!3m5!1s0x94ed6f2ea7f87b35:0xf8138d6fc0fe8472!8m2!3d-23.9288234!4d-52.5002848!16s%2Fg%2F11mw5322f4?entry=ttu&g_ep=EgoyMDI2MTEyMy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "Casa do Pão",
    categorias: ["padarias"],
    descricao: "Pães, doces e salgados.",
    endereco: "Rua Vital Brasil, 681",
    logo: "img/estabelecimentos/casa-do-pao.webp",
    mapa: "https://www.google.com/maps/place/A+CASA+Do+P%C3%83O+-+P%C3%A3es,+Bolos+e+Salgados/@-23.9291741,-52.5015251,17z/data=!3m1!4b1!4m6!3m5!1s0x94ed6f1b57e0c5a7:0x980b1295e19214e6!8m2!3d-23.9291741!4d-52.5015251!16s%2Fg%2F11p3kk80yd?entry=ttu&g_ep=EgoyMDI2MTEyMy4wIKXMDSoASAFQAw%3D%3D"
  },

  // ---------- Sorveterias ----------
  {
    nome: "Sorveteria Milkneve",
    categorias: ["sorveterias"],
    descricao: "Sorvetes, sobremesas e lanches.",
    endereco: "Av. Presidente Vargas, 581",
    logo: "img/estabelecimentos/sorveteria-milkneve.webp",
    mapa: "https://www.google.com/maps/search/?api=1&query=Sorveteria%20Milkneve%2C%20Av.%20Presidente%20Vargas%2C%20581%2C%20Araruna%20-%20PR"
  },
  {
    nome: "Sorveteria New Big",
    categorias: ["sorveterias"],
    descricao: "Sorvetes e sobremesas.",
    endereco: "Rua Eraclides Gouveia",
    logo: "img/estabelecimentos/sorveteria-new-big.webp",
    mapa: "https://www.google.com/maps/place/New+Big+Sorvetes+e+A%C3%A7a%C3%AD/@-24.0375724,-52.3706233,21z/data=!4m6!3m5!1s0x94ed7525d12d0653:0x50f3e190952ffe48!8m2!3d-24.0375637!4d-52.3705268!16s%2Fg%2F11fjr46dr9?entry=ttu&g_ep=EgoyMDI2MTEyMy4wIKXMDSoASAFQAw%3D%3D"
  },

  // ---------- Lanchonetes ----------
  {
    nome: "Roxito Açaí Burguer",
    categorias: ["lanchonetes"],
    descricao: "Açaí e lanches.",
    endereco: "Rua Eraclides Alves Gouveia",
    logo: "img/estabelecimentos/roxito-acai-burguer.webp",
    mapa: "https://www.google.com/maps/search/?api=1&query=Roxito%20Açaí%20Burguer%2C%20Rua%20Eraclides%20Alves%20Gouveia%2C%20Araruna%20-%20PR"
  },
  {
    nome: "Hot Dog do Guerino",
    categorias: ["lanchonetes"],
    descricao: "Cachorro-quente e lanches.",
    endereco: "Av. Presidente Vargas, 580b",
    logo: "img/estabelecimentos/hot-dog-do-guerino.webp",
    mapa: "https://www.google.com/maps/search/?api=1&query=Hot%20Dog%20do%20Guerino%2C%20Av.%20Presidente%20Vargas%2C%20580b%2C%20Araruna%20-%20PR"
  },
  {
    nome: "Kenilanches e Pizzas",
    categorias: ["lanchonetes", "pizzarias"],
    descricao: "Lanches e pizzas.",
    endereco: "Av. Paraná, 698",
    logo: "img/estabelecimentos/kenilanches-e-pizzas.webp",
    mapa: "https://www.google.com/maps/place/Kenilanches/@-23.9296365,-52.4878883,619a,75y,220.26h,90t/data=!3m7!1e1!3m5!1se548ie6u4t9Hac9YE048-w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.clients6.google.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3De548ie6u4t9Hac9YE048-w%26yaw%3D220.26451013325544!7i16384!8i8192!4m6!3m5!1s0x94ed6e2c3c01334b:0x772a206f7a65eb35!8m2!3d-23.9297027!4d-52.4879426!16s%2Fg%2F11ckq_ghb5?entry=ttu&g_ep=EgoyMDI2MTEyMy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "Fome Zero Lanchonete e Pizzaria",
    categorias: ["lanchonetes", "pizzarias"],
    descricao: "Lanches e pizzas.",
    endereco: "Rua Deoclécio Manoel Teixeira",
    logo: "img/estabelecimentos/fome-zero.webp",
    mapa: "https://www.google.com/maps/@-23.9295978,-52.4979272,615a,75y,258.41h,81.84t/data=!3m7!1e1!3m5!1seaDCNjUyuADvfOMk8lgz9A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.clients6.google.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D8.156305443519727%26panoid%3DeaDCNjUyuADvfOMk8lgz9A%26yaw%3D258.4064337076628!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MTEyMy4wIKXMDSoASAFQAw%3D%3D"
  },

  // ---------- Pizzarias ----------
  {
    nome: "Pizza d'Casa",
    categorias: ["pizzarias"],
    descricao: "Pizzas.",
    endereco: "Rua Vital Brasil, 570",
    logo: "img/estabelecimentos/pizzaria-pizza-d-casa.webp",
    mapa: "https://www.google.com/maps/place/PIZZA+D'CASA/@-23.9306143,-52.501599,595a,75y,116.41h,89.24t/data=!3m7!1e1!3m5!1sGYdg6KejOfwBFLCrGVSpHA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.clients6.google.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0.7600214148205993%26panoid%3DGYdg6KejOfwBFLCrGVSpHA%26yaw%3D116.40505532251254!7i16384!8i8192!4m6!3m5!1s0x94ed6f543fd39d95:0x6bdb62e19cfdf3be!8m2!3d-23.9306436!4d-52.5015071!16s%2Fg%2F11tpbfqv01?entry=ttu&g_ep=EgoyMDI2MTEyMy4wIKXMDSoASAFQAw%3D%3D"
  },

  // ---------- Restaurantes ----------
  {
    nome: "Ki Delícia Restaurante e Espetinho",
    categorias: ["restaurantes"],
    descricao: "Refeições e espetinhos.",
    endereco: "Av. Presidente Vargas, 390",
    logo: "img/estabelecimentos/ki-delicia.webp",
    mapa: "https://www.google.com/maps/@-23.9342945,-52.497475,618a,75y,193.33h,90t/data=!3m7!1e1!3m5!1sBTo3aEomDyHDtn-nmtFQBQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.clients6.google.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DBTo3aEomDyHDtn-nmtFQBQ%26yaw%3D193.33087!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MTEyMy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "Sabor Caseiro",
    categorias: ["restaurantes"],
    descricao: "Refeições.",
    endereco: "Rua Duque de Caxias, 151",
    logo: "img/estabelecimentos/sabor-caseiro.webp",
    mapa: "https://www.google.com/maps/place/Restaurante+V%C3%B3+Maria+toque+caseiro/@-23.9293835,-52.4962499,611a,75y,17.37h,83.84t/data=!3m7!1e1!3m5!1sCaBPjLZBuIp61uMyIh4IIw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.clients6.google.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D6.162809348753683%26panoid%3DCaBPjLZBuIp61uMyIh4IIw%26yaw%3D17.37018080186391!7i16384!8i8192!4m6!3m5!1s0x94ed6fd4f181d8f7:0x8279e7b8be09096a!8m2!3d-23.9291643!4d-52.4962105!16s%2Fg%2F11w56dgz02?entry=ttu&g_ep=EgoyMDI2MTEyMy4wIKXMDSoASAFQAw%3D%3D"
  },

  // ---------- Conveniências ----------
  {
    nome: "Ramos Conveniência e Espetinho",
    categorias: ["conveniencias"],
    descricao: "Bebidas, conveniência e espetinhos.",
    endereco: "Rua Deoclécio Manoel Teixeira, 424",
    logo: "img/estabelecimentos/ramos-conveniencia.webp",
    mapa: "https://www.google.com/maps/place/Ramos+Conveni%C3%AAncia/@-23.9299614,-52.4979707,616a,75y,88.53h,90.74t/data=!3m7!1e1!3m5!1sgO_cKKNji2qRHMuTtgOAeg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.clients6.google.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-0.7352683046124184%26panoid%3DgO_cKKNji2qRHMuTtgOAeg%26yaw%3D88.52839518937918!7i16384!8i8192!4m15!1m7!3m6!1s0x94ed6f6587bd9d3d:0x13817de8b4bdb78c!2sRamos+Conveni%C3%AAncia!8m2!3d-23.9307096!4d-52.497865!16s%2Fg%2F11f9wwsv4l!3m6!1s0x94ed6f6587bd9d3d:0x13817de8b4bdb78c!8m2!3d-23.9307096!4d-52.497865!10e5!16s%2Fg%2F11f9wwsv4l?entry=ttu&g_ep=EgoyMDI2MTEyMy4wIKXMDSoASAFQAw%3D%3D"
  }
];
