# Guia Gastronômico de Araruna

Site estático (HTML, CSS e JavaScript puro) com os estabelecimentos de alimentação de Araruna-PR, acessado por QR Code. Ele foi feito para a Araruna 72 anos Night Run e continua servindo depois do evento.

## Estrutura

```
index.html                  página única (início + telas de categoria)
css/tema.css                cores, fontes e cantos: mude aqui para trocar o visual
css/style.css               layout e responsividade
js/estabelecimentos.js      CADASTRO dos estabelecimentos
js/app.js                   monta menu, categorias e cards
js/mapa.js                  tela #mapa (Leaflet, carregado só quando abre)
css/mapa.css                visual do mapa noturno
vendor/leaflet/             Leaflet 1.9.4 hospedado junto (sem depender de CDN)
img/                        logos do evento, da Prefeitura e foto do topo
img/estabelecimentos/       logos dos estabelecimentos
.github/workflows/static.yml  publicação automática no GitHub Pages
```

## Como cadastrar um estabelecimento

1. Coloque a logo em `img/estabelecimentos/`. De preferência quadrada, `.webp` ou `.png`, com até ~400 px. Se não houver logo, aparece o ícone da categoria.
2. Abra `js/estabelecimentos.js`, copie um bloco `{ ... }` e preencha:

```js
{
  nome: "Padaria Exemplo",
  categoria: "padarias",           // padarias | sorveterias | lanchonetes | pizzarias | conveniencias
  descricao: "Pães, bolos e café.",
  endereco: "Rua Exemplo, 123 – Centro",
  logo: "img/estabelecimentos/padaria-exemplo.webp",
  mapa: "https://maps.app.goo.gl/..."
},
```

3. Para o pino aparecer na aba **Mapa**, preencha também `lat` e `lng` (no Google Maps, toque e segure no local: os números aparecem na busca). Sem eles o estabelecimento fica só na lista.
4. Para pegar o link do mapa: no Google Maps, toque no local, depois em **Compartilhar** e em **Copiar link**.

Os cards aparecem em ordem alfabética dentro de cada categoria.

## Links diretos

Cada categoria tem endereço próprio, útil para divulgar:
`.../#padarias`, `.../#sorveterias`, `.../#lanchonetes`, `.../#pizzarias`, `.../#restaurantes`, `.../#conveniencias` e `.../#mapa`

## Depois do evento

Em `index.html`, apague o bloco entre `FAIXA DO EVENTO` e `FIM DA FAIXA DO EVENTO`. Para mudar o visual, edite `css/tema.css`.
