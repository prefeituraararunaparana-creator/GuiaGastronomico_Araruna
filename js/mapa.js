/* =========================================================
   MAPA DO GUIA
   Mostra no mapa os estabelecimentos que têm lat e lng em
   js/estabelecimentos.js. O Leaflet (hospedado em vendor/leaflet)
   só é carregado quando a pessoa abre o mapa pela primeira vez.
   Todo texto do cadastro entra como textContent, nunca como HTML.
   ========================================================= */

(function () {
  // Largada e chegada da corrida (ponto "Largada" do KMZ oficial, Rua 7 de Setembro).
  // Confirmar com a Diretoria de Esportes se a 3ª etapa larga no mesmo ponto.
  const LARGADA = { lat: -23.9329923, lng: -52.497919 };

  // CHAVE DO GOOGLE MAPS EMBED API (opcional).
  // Sem chave: a janela mostra a prévia pública do Google Maps (mapa e ficha do local).
  // Com chave: a janela mostra o cartão completo do local, com foto, nota e avaliações.
  // Como criar a chave: Google Cloud > APIs > "Maps Embed API" > Credenciais > Criar chave,
  // restringida ao endereço do site (referenciador HTTP). Cole aqui entre as aspas.
  const CHAVE_EMBED = "";

  const TILES = {
    url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    atribuicao: '&copy; <a href="https://www.openstreetmap.org/copyright">colaboradores do OpenStreetMap</a>'
  };

  const erroEl = document.getElementById("mapaErro");
  const chipsEl = document.getElementById("mapaChips");
  const notaEl = document.getElementById("mapaNota");

  const janelaEl = document.getElementById("mapaJanela");
  const janelaTitulo = document.getElementById("mapaJanelaTitulo");
  const janelaEnd = document.getElementById("mapaJanelaEnd");
  const janelaFrame = document.getElementById("mapaJanelaFrame");
  const janelaRota = document.getElementById("mapaJanelaRota");
  const janelaFechar = document.getElementById("mapaJanelaFechar");
  let ultimoPino = null;

  let mapa = null;
  let camada = null;
  let carregando = null;
  let filtro = "todos";
  let errosTile = 0;

  function criarEl(tag, classe, texto) {
    const el = document.createElement(tag);
    if (classe) el.className = classe;
    if (texto) el.textContent = texto;
    return el;
  }

  function temPino(est) {
    return typeof est.lat === "number" && typeof est.lng === "number";
  }

  function comPino() {
    return ESTABELECIMENTOS.filter(temPino);
  }

  function semPino() {
    return ESTABELECIMENTOS.filter((e) => !temPino(e));
  }

  // ---------- Leaflet sob demanda ----------
  function carregarLeaflet() {
    if (window.L) return Promise.resolve();
    if (carregando) return carregando;
    carregando = new Promise((resolve, reject) => {
      const css = document.createElement("link");
      css.rel = "stylesheet";
      css.href = "vendor/leaflet/leaflet.css";
      document.head.appendChild(css);
      const js = document.createElement("script");
      js.src = "vendor/leaflet/leaflet.js";
      js.onload = resolve;
      js.onerror = () => { carregando = null; reject(new Error("leaflet")); };
      document.head.appendChild(js);
    });
    return carregando;
  }

  // ---------- Filtros por categoria ----------
  function montarChips() {
    if (chipsEl.childElementCount) return;
    const itens = [{ id: "todos", nome: "Todos", icone: "" }].concat(CATEGORIAS);
    itens.forEach((c) => {
      const b = criarEl("button", "mapa-chip", (c.icone ? c.icone + " " : "") + c.nome);
      b.type = "button";
      b.dataset.id = c.id;
      b.setAttribute("aria-pressed", String(c.id === filtro));
      b.addEventListener("click", () => {
        filtro = c.id;
        chipsEl.querySelectorAll(".mapa-chip").forEach((x) =>
          x.setAttribute("aria-pressed", String(x.dataset.id === filtro))
        );
        desenharPinos();
      });
      chipsEl.appendChild(b);
    });
  }

  // ---------- Janela com a prévia do Google Maps ----------
  function urlPrevia(est) {
    const base = temPino(est) ? `&ll=${est.lat},${est.lng}` : "";
    // Locais sem ficha própria no Google (ou com nome repetido pelo Brasil) usam só a posição do pino.
    if (est.usarCoordenadas && temPino(est)) {
      return `https://www.google.com/maps?q=${est.lat},${est.lng}&z=18&hl=pt-BR&output=embed`;
    }
    const busca = `${est.nome}, ${est.endereco || ""}, Araruna - PR`;
    if (CHAVE_EMBED) {
      return "https://www.google.com/maps/embed/v1/place?key=" + encodeURIComponent(CHAVE_EMBED) +
        "&q=" + encodeURIComponent(busca) + "&zoom=17&language=pt-BR" +
        (temPino(est) ? `&center=${est.lat},${est.lng}` : "");
    }
    // ll = posição do pino: faz o Google procurar o nome perto dali, e não em outra cidade
    return "https://www.google.com/maps?q=" + encodeURIComponent(busca) + base + "&z=17&hl=pt-BR&output=embed";
  }

  function abrirJanela(est, pino) {
    ultimoPino = pino || null;
    janelaTitulo.textContent = est.nome;
    janelaEnd.textContent = est.endereco || "";
    janelaFrame.src = urlPrevia(est); // o Google só é chamado quando a janela abre
    janelaRota.href = linkMapa(est); // função do js/app.js
    janelaRota.setAttribute("aria-label", `Como chegar: ${est.nome}, abre o Google Maps`);
    janelaEl.hidden = false;
    document.body.classList.add("sem-rolagem");
    janelaFechar.focus();
  }

  function fecharJanela() {
    if (janelaEl.hidden) return;
    janelaEl.hidden = true;
    janelaFrame.src = "about:blank";
    document.body.classList.remove("sem-rolagem");
    if (ultimoPino && ultimoPino.focus) ultimoPino.focus();
  }

  janelaFechar.addEventListener("click", fecharJanela);
  document.getElementById("mapaJanelaFundo").addEventListener("click", fecharJanela);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") fecharJanela();
  });

  function desenharPinos() {
    const L = window.L;
    if (!mapa) return;
    camada.clearLayers();

    const lista = comPino().filter((e) => filtro === "todos" || pertence(e, filtro));
    const pontos = [[LARGADA.lat, LARGADA.lng]];

    lista.forEach((est) => {
      const icone = L.divIcon({
        className: "",
        html: '<div class="mapa-pino"></div>',
        iconSize: [20, 20], iconAnchor: [10, 10], popupAnchor: [0, -10]
      });
      const marcador = L.marker([est.lat, est.lng], { icon: icone, title: est.nome, alt: est.nome, keyboard: true });
      marcador.on("click", () => abrirJanela(est, marcador.getElement()));
      marcador.addTo(camada);
      pontos.push([est.lat, est.lng]);
    });


    if (pontos.length > 1) mapa.fitBounds(pontos, { padding: [40, 40], maxZoom: 17 });
    else mapa.setView(pontos[0], 16);
  }

  function iniciarMapa() {
    const L = window.L;
    mapa = L.map("mapa", { zoomControl: true }).setView([LARGADA.lat, LARGADA.lng], 16);

    const tiles = L.tileLayer(TILES.url, { attribution: TILES.atribuicao, maxZoom: 19 });
    tiles.on("tileerror", () => { errosTile++; if (errosTile >= 4) erroEl.hidden = false; });
    tiles.on("tileload", () => { if (errosTile < 4) erroEl.hidden = true; });
    tiles.addTo(mapa);

    const caixa = criarEl("div", "mapa-popup");
    caixa.appendChild(criarEl("strong", null, "Largada e chegada"));
    caixa.appendChild(criarEl("p", null, "Em frente à Prefeitura, Rua 7 de Setembro"));
    caixa.appendChild(criarEl("p", null, "Largada às 20h, 27/11"));
    L.marker([LARGADA.lat, LARGADA.lng], {
      icon: L.divIcon({
        className: "",
        html: '<div class="mapa-pino-largada"><span>Largada</span></div>',
        iconSize: [92, 34], iconAnchor: [46, 34], popupAnchor: [0, -34]
      }),
      title: "Largada e chegada da corrida", alt: "Largada e chegada da corrida",
      zIndexOffset: 1000, keyboard: true
    }).bindPopup(caixa).addTo(mapa);

    camada = L.layerGroup().addTo(mapa);

    // se a largura da caixa mudar depois (barra de rolagem, girar o celular), o mapa se ajusta
    if (window.ResizeObserver) {
      new ResizeObserver(() => mapa.invalidateSize()).observe(document.getElementById("mapa"));
    } else {
      window.addEventListener("resize", () => mapa.invalidateSize());
    }
  }

  function mostrarNota() {
    const fora = semPino();
    if (!fora.length) return;
    notaEl.textContent =
      "Sem posição no mapa por enquanto: " + fora.map((e) => e.nome).join(", ") +
      ". Eles continuam na lista de cada categoria.";
    notaEl.hidden = false;
  }

  // chamado pelo js/app.js quando a rota é #mapa
  window.abrirMapa = function () {
    montarChips();
    mostrarNota();
    carregarLeaflet().then(() => {
      erroEl.hidden = true;
      if (!mapa) { iniciarMapa(); desenharPinos(); }
      setTimeout(() => mapa.invalidateSize(), 0); // o mapa estava escondido
    }).catch(() => {
      erroEl.hidden = false;
    });
  };
})();
