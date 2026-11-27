/* =========================================================
   GUIA GASTRONÔMICO DE ARARUNA
   Monta o menu, as categorias e os cards a partir de
   js/estabelecimentos.js. Para cadastrar, edite aquele arquivo.
   ========================================================= */

// Categorias do guia (id usado no cadastro, nome exibido e ícone)
const CATEGORIAS = [
  { id: "padarias",      nome: "Padarias",      icone: "🥖" },
  { id: "sorveterias",   nome: "Sorveterias",   icone: "🍦" },
  { id: "lanchonetes",   nome: "Lanchonetes",   icone: "🍔" },
  { id: "pizzarias",     nome: "Pizzarias",     icone: "🍕" },
  { id: "restaurantes",  nome: "Restaurantes",  icone: "🍽️" },
  { id: "conveniencias", nome: "Conveniências", icone: "🏪" }
];

const TEXTO_BOTAO = "📍 Como chegar";

// ---------- Elementos ----------
const telaInicio = document.getElementById("tela-inicio");
const telaCategoria = document.getElementById("tela-categoria");
const tituloCategoria = document.getElementById("tituloCategoria");
const contagemCategoria = document.getElementById("contagemCategoria");
const listaCards = document.getElementById("listaCards");
const vazio = document.getElementById("vazio");
const gradeCategorias = document.getElementById("gradeCategorias");
const menuLista = document.getElementById("menuLista");
const menu = document.getElementById("menu");
const menuFundo = document.getElementById("menuFundo");
const btnMenu = document.getElementById("btnMenu");
const btnFechar = document.getElementById("btnFechar");

// ---------- Utilidades ----------
function criar(tag, classe, texto) {
  const el = document.createElement(tag);
  if (classe) el.className = classe;
  if (texto) el.textContent = texto;
  return el;
}

// aceita "categorias: [...]" (uma ou mais) ou "categoria: ..." (uma só)
function pertence(est, idCategoria) {
  const lista = est.categorias || [est.categoria];
  return lista.includes(idCategoria);
}

function contar(idCategoria) {
  return ESTABELECIMENTOS.filter((e) => pertence(e, idCategoria)).length;
}

// Se o link do Maps ainda não foi colado, busca pelo nome + endereço no Google Maps
function linkMapa(est) {
  // usarCoordenadas: true no cadastro = rota direto para a posição do pino (evita achar outro lugar de mesmo nome)
  if (est.usarCoordenadas && typeof est.lat === "number" && typeof est.lng === "number") {
    return `https://www.google.com/maps/dir/?api=1&destination=${est.lat},${est.lng}`;
  }
  if (est.mapa && est.mapa.startsWith("http") && !est.mapa.includes("COLE-O-LINK")) {
    return est.mapa;
  }
  const busca = `${est.nome}, ${est.endereco || ""}, Araruna - PR`;
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(busca);
}

// ---------- Menu e grade de categorias ----------
const navTopo = document.getElementById("navTopo");

// cria o mesmo link no menu sanduíche (celular) e no menu do topo (computador)
function adicionarLink(rota, textoSanduiche, textoTopo) {
  const li = criar("li");
  const link = criar("a", "menu-link", textoSanduiche);
  link.href = `#${rota}`;
  link.dataset.rota = rota;
  li.appendChild(link);
  menuLista.appendChild(li);

  const liTopo = criar("li");
  const linkTopo = criar("a", "nav-link", textoTopo);
  linkTopo.href = `#${rota}`;
  linkTopo.dataset.rota = rota;
  liTopo.appendChild(linkTopo);
  navTopo.appendChild(liTopo);
}

function montarMenu() {
  adicionarLink("inicio", "🏠 Início", "Início");

  CATEGORIAS.forEach((cat) => {
    adicionarLink(cat.id, `${cat.icone} ${cat.nome}`, cat.nome);

    // botão da grade na tela inicial
    const item = criar("li");
    const botao = criar("a", "categoria");
    botao.href = `#${cat.id}`;
    botao.appendChild(criar("span", "categoria-icone", cat.icone));
    const textos = criar("span", "categoria-textos");
    textos.appendChild(criar("span", "categoria-nome", cat.nome));
    const n = contar(cat.id);
    textos.appendChild(criar("span", "categoria-qtd", n === 1 ? "1 local" : `${n} locais`));
    botao.appendChild(textos);
    item.appendChild(botao);
    gradeCategorias.appendChild(item);
  });

  // MAPA: link no menu que leva ao mapa da tela inicial
  adicionarLink("mapa", "🗺️ Mapa", "Mapa");
}

function abrirMenu() {
  menu.hidden = false;
  menuFundo.hidden = false;
  requestAnimationFrame(() => {
    menu.classList.add("aberto");
    menuFundo.classList.add("aberto");
  });
  btnMenu.setAttribute("aria-expanded", "true");
  document.body.classList.add("sem-rolagem");
  btnFechar.focus();
}

function fecharMenu() {
  menu.classList.remove("aberto");
  menuFundo.classList.remove("aberto");
  btnMenu.setAttribute("aria-expanded", "false");
  document.body.classList.remove("sem-rolagem");
  setTimeout(() => {
    menu.hidden = true;
    menuFundo.hidden = true;
  }, 250);
}

btnMenu.addEventListener("click", abrirMenu);
btnFechar.addEventListener("click", fecharMenu);
menuFundo.addEventListener("click", fecharMenu);
menuLista.addEventListener("click", (e) => {
  if (e.target.closest("a")) fecharMenu();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !menu.hidden) fecharMenu();
});

// ---------- Cards ----------
function criarCard(est, cat) {
  const li = criar("li", "card");

  const topo = criar("div", "card-topo");
  const logo = criar("div", "card-logo");
  if (est.logo) {
    const img = document.createElement("img");
    img.src = est.logo;
    img.alt = `Logo ${est.nome}`;
    img.loading = "lazy";
    img.onerror = () => { logo.textContent = cat.icone; logo.classList.add("sem-logo"); };
    logo.appendChild(img);
  } else {
    logo.textContent = cat.icone;
    logo.classList.add("sem-logo");
  }
  topo.appendChild(logo);

  const info = criar("div", "card-info");
  info.appendChild(criar("h3", "card-nome", est.nome));
  if (est.descricao) info.appendChild(criar("p", "card-descricao", est.descricao));
  topo.appendChild(info);
  li.appendChild(topo);

  if (est.endereco) {
    const end = criar("p", "card-endereco");
    end.appendChild(criar("span", "card-endereco-rotulo", "Endereço"));
    end.appendChild(document.createTextNode(est.endereco));
    li.appendChild(end);
  }

  const botao = criar("a", "btn-mapa", TEXTO_BOTAO);
  botao.href = linkMapa(est);
  botao.target = "_blank";
  botao.rel = "noopener noreferrer";
  botao.setAttribute("aria-label", `Como chegar: ${est.nome}, abre o Google Maps`);
  li.appendChild(botao);

  return li;
}

function mostrarCategoria(cat) {
  const lista = ESTABELECIMENTOS
    .filter((e) => pertence(e, cat.id))
    .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR")); // ordem alfabética

  tituloCategoria.replaceChildren(
    criar("span", "titulo-icone", cat.icone),
    criar("span", "titulo-nome", cat.nome)
  );
  contagemCategoria.textContent =
    lista.length === 1 ? "1 estabelecimento" : `${lista.length} estabelecimentos`;

  listaCards.replaceChildren(...lista.map((e) => criarCard(e, cat)));
  vazio.hidden = lista.length > 0;

  telaInicio.hidden = true;
  telaCategoria.hidden = false;
  document.title = `${cat.nome} | Guia Gastronômico Araruna 72 anos Night Run`;
}

function mostrarInicio() {
  telaCategoria.hidden = true;
  telaInicio.hidden = false;
  document.title = "Guia Gastronômico Araruna 72 anos Night Run";
  if (window.abrirMapa) window.abrirMapa(); // js/mapa.js: o mapa já aparece na tela inicial
}

// ---------- Navegação pelo endereço (#padarias, #pizzarias...) ----------
// Assim o botão "voltar" do celular funciona e cada categoria tem seu próprio link.
function rotear() {
  const rota = location.hash.replace("#", "");
  const cat = CATEGORIAS.find((c) => c.id === rota);
  if (cat) mostrarCategoria(cat);
  else mostrarInicio();

  const ativa = rota === "mapa" ? "mapa" : cat ? cat.id : "inicio";
  document.querySelectorAll(".menu-link, .nav-link").forEach((l) => {
    l.classList.toggle("ativo", l.dataset.rota === ativa);
  });
  // #mapa abre a tela inicial já rolada até o mapa
  if (rota === "mapa") document.getElementById("secao-mapa").scrollIntoView();
  else window.scrollTo(0, 0);
}

montarMenu();
window.addEventListener("hashchange", rotear);
rotear();
