 
 /* Carrossel automático */
const carousel = document.querySelector('.carousel');
const larguraBanner = 480;
const totalBanners = carousel.querySelectorAll('img').length;
let index = 0;

function mostrarProximoBanner() {
  index++;
  if (index >= totalBanners) index = 0;
  carousel.scrollTo({ left: larguraBanner * index, behavior: 'smooth' });
}

setInterval(mostrarProximoBanner, 3000);
 



/* Modal de produtos */
const produtos = [
  { nome: "New Balance 1000", preco: "R$ 499,00", img: "imagem/produtos-em-alta/NewBalance_1000.jpg" },
  { nome: "Vans Ultra 01", preco: "R$ 599,00", img: "imagem/produtos-em-alta/Vans_Ultra_01.jpg" },
  // Adicione mais produtos aqui
];

function abrirModal(i) {
  const modal = document.getElementById('modalProduto');
  document.getElementById('modalImg').src = produtos[i].img;
  document.getElementById('modalNome').textContent = produtos[i].nome;
  document.getElementById('modalPreco').textContent = produtos[i].preco;
  modal.style.display = 'flex';
}

function fecharModal() {
  document.getElementById('modalProduto').style.display = 'none';
}

/* Menu ativo */
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', function() {
    menuLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Pegar ID do produto pela URL
const params = new URLSearchParams(location.search);
const id = params.get("produto");

// Preencher a página com o produto correto
document.getElementById('produtoImg').src = produtos[id].img;
document.getElementById('produtoNome').textContent = produtos[id].nome;
document.getElementById('produtoPreco').textContent = produtos[id].preco;

