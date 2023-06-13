/*const body = document.querySelector("body"); //body

const header = document.createElement("header"); //creo header

header.classList.add("py-3", "mb-4", "border-bottom", "header"); //otorgo clase

body.appendChild(header); //fusiono



const divHeader = document.createElement("div");

divHeader.classList.add("container", "d-flex", "flex-wrap", "justify-content-center");

header.appendChild(divHeader)
//

const aDivHeader = document.createElement("a");

aDivHeader.href = "index.html"

aDivHeader.classList.add("d-flex", "align-items-center", "mb-3", "mb-lg-0", "me-lg-auto", "link-body-emphasis", "text-decoration-none");

divHeader.appendChild(aDivHeader)

//

const svgA = document.createElement("img");

svgA.classList.add("bi", "me-2");

svgA.setAttribute('width', '80');
svgA.setAttribute('height', '82');
svgA.setAttribute('src', '../img/bunnySVG.svg')
svgA.setAttribute('alt', 'logo')


aDivHeader.appendChild(svgA);

const useSvg = document.createElement("use");

useSvg.setAttribute('xlink:href', '#bootstrap');

svgA.appendChild(useSvg);

const spanHeader = document.createElement("span");

spanHeader.classList.add("fs-4");
spanHeader.textContent = "Fox Market";

aDivHeader.appendChild(spanHeader);


const formHeader = document.createElement("form");

formHeader.classList.add("col-12", "col-lg-auto", "mb-3", "mb-lg-0");
formHeader.setAttribute("role", "search");

divHeader.appendChild(formHeader);

const inputFormHeader = document.createElement("input");

inputFormHeader.classList.add("form-control", "nav-search");

inputFormHeader.setAttribute("type", "search")
inputFormHeader.setAttribute("placeholder", "Search...")
inputFormHeader.setAttribute("aria-label", "Search")

formHeader.appendChild(inputFormHeader);

//NAV

const nav = document.createElement("nav");

nav.classList.add("py-2", "bg-body-tertiary", "border-bottom");

body.appendChild(nav);

const divNavContainer = document.createElement("div");

divNavContainer.classList.add("container", "d-flex", "flex-wrap");

nav.appendChild(divNavContainer);

const ulNav1 = document.createElement('ul');
ulNav1.classList.add('nav', 'me-auto', "asd");

// Crear los elementos <li> y <a> dentro del ulNav1
const navItems1 = [
    { text: 'Home', href: './index.html', active: true },
    { text: 'Imagen y sonido', href: '#' },
    { text: 'Climatizacion', href: './pages/climatizacion.html' },
    { text: 'Electro Hogar', href: '#' },
    { text: 'Pequeños Electros', href: '#' },
    { text: 'Electro Hogar', href: '#' },
    { text: 'Electro Hogar', href: '#' }
];

navItems1.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.text;
    a.classList.add('nav-link', 'link-dark', 'px-2', 'a-nav');
    if (item.active) {
        a.classList.add('active');
        a.setAttribute('aria-current', 'page');
    }
    li.classList.add('nav-item');
    li.appendChild(a);
    ulNav1.appendChild(li);
});

// Crear el elemento <ul> dentro del divNavContainer (segundo grupo de elementos de navegación)
const ulNav2 = document.createElement('ul');
ulNav2.classList.add('nav');

// Crear los elementos <li> y <a> dentro del ulNav2
const navItems2 = [
    { text: 'Login', href: '#' },
    { text: 'Sign up', href: '#' },
];

navItems2.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.text;
    a.classList.add('nav-link', 'link-dark', 'px-2');
    li.classList.add('nav-item');
    li.appendChild(a);
    ulNav2.appendChild(li);
});

// Agregar el elemento <ul> al elemento <div>
divNavContainer.appendChild(ulNav1);
divNavContainer.appendChild(ulNav2);

// Agregar el elemento <div> al elemento <nav>
nav.appendChild(divNavContainer);


// Agregar el header y el nav al documento


// Crear el elemento <div> dentro del ulNav2 para el carrito de compras
const liCart = document.createElement('li');
const divCart = document.createElement('div');
divCart.classList.add('nav-link', 'link-dark', 'px-2');
divCart.innerHTML = '<img class="logo-carrito"src="/img/shoppingcartbutton_99694.svg" alt="Carrito de compras">';

liCart.classList.add('nav-item');
liCart.appendChild(divCart);
ulNav2.appendChild(liCart);




// Crear el elemento <div> con la clase "container"
const containerDiv = document.createElement("div");
containerDiv.className = "container";

// Crear el elemento <footer> con las clases y contenido correspondientes
const footer = document.createElement("footer");
footer.className = "d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top";

// Crear el elemento <p> con la clase y texto correspondientes
const paragraph = document.createElement("p");
paragraph.className = "col-md-4 mb-0 text-body-secondary";
paragraph.textContent = "© 2023 Company, Inc";

// Crear el elemento <a> con las clases y atributos correspondientes
const link = document.createElement("a");
link.href = "./index.html";
link.className = "col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none";

// Crear el elemento <svg> con la clase correspondiente
const svg = document.createElement("img");
svg.className = "bi me-2";
svg.width = "80";
svg.height = "80";
svg.src ="./img/bunnySVG.svg"



// Agregar el elemento <svg> como hijo del elemento <a>
link.appendChild(svg);

// Crear el elemento <ul> con la clase correspondiente
const ul = document.createElement("ul");
ul.className = "nav col-md-4 justify-content-center";

// Crear los elementos <li> y <a> con las clases y atributos correspondientes
const navItems = [
    { text: "Home", href: "./index.html" },
    { text: "Imagen y Sonido", href: "#" },
    { text: "Climatizacion", href: "#" },
    { text: "Electro Hogar", href: "#" },
    { text: "Pequeños Electros", href: "#" }
];

navItems.forEach(function (item) {
    const li = document.createElement("li");
    li.className = "nav-item";

    const a = document.createElement("a");
    a.href = item.href;
    a.className = "nav-link px-2 text-body-secondary 'aFooter'";
    a.textContent = item.text;

    li.appendChild(a);
    ul.appendChild(li);
});

// Agregar los elementos creados como hijos del elemento <footer>
footer.appendChild(paragraph);
footer.appendChild(link);
footer.appendChild(ul);

// Agregar el elemento <footer> como hijo del elemento <div>
containerDiv.appendChild(footer);

// Agregar el elemento <div> al cuerpo del documento
body.appendChild(containerDiv);

*/
document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("headerContainer");
  const divCarrito = document.getElementById("div-carrito");

  headerContainer.innerHTML = `
    <header class="py-3 mb-4 border-bottom header">
      <div class="container d-flex flex-wrap justify-content-center">
        <a href="index.html" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
          <img class="bi me-2" width="80" height="82" src="../img/bunnySVG.svg" alt="logo">
          <span class="fs-4">Fox Market</span>
        </a>
        <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
          <input type="search" id="searchInput" class="form-control nav-search" placeholder="Search..." aria-label="Search">
          <div id="results"></div>
        </form>
      </div>
    </header>
    <nav class="py-2 bg-body-tertiary border-bottom">
      <div class="container d-flex flex-wrap">
        <ul class="nav me-auto asd" id="navMenu">
        </ul>
        <div class="nav-link link-dark px-2 carrito" id="div-carrito">
          <img class="logo-carrito" src="/img/shoppingcartbutton_99694.svg" alt="Carrito de compras">
          <div class="carrito-contenido" id="carrito-contenido"></div>
        </div>
      </div>
    </nav>`;

    fetch("/js/stock.json")
    .then(response => response.json())
    .then(data => {
      const searchInput = document.getElementById('searchInput');
      const resultsContainer = document.getElementById('results');
  
      searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
  
        // Limpiar los resultados anteriores
        resultsContainer.textContent = '';
  
        // Mostrar los resultados filtrados
        if (searchTerm.trim() !== '') {
          data.forEach(producto => {
            const nombre = producto.nombre.toLowerCase();
  
            if (nombre.startsWith(searchTerm)) {
              const resultItem = document.createElement('div');
              const resultLink = document.createElement('a');
              resultLink.href = `producto.html?id=${producto.id}`; // Página del producto con su ID
              resultLink.textContent = `${producto.nombre} - $${producto.precio}`;
              resultItem.appendChild(resultLink);
              resultsContainer.appendChild(resultItem);
            }
          });
        }
      });
    });

  const navMenu = document.getElementById("navMenu");

  // Cargar el archivo stock.json y obtener las categorías
  fetch("/js/stock.json")
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      const categorias = datos.map((producto) => producto.categoria);
      // Eliminar duplicados de categorías
      const categoriasUnicas = [...new Set(categorias)];

      // Crear dinámicamente los elementos <li> del menú
      categoriasUnicas.forEach((categoria) => {
        const li = document.createElement("li");
        li.classList.add("nav-item");
        const a = document.createElement("a");
        a.href = `categorias.html?categoria=${encodeURIComponent(categoria)}`; // Redirigir a la página dinámica con la categoría como parámetro
        a.classList.add("nav-link", "link-dark", "px-2", "a-nav");
        a.textContent = categoria;
        li.appendChild(a);
        navMenu.appendChild(li);
      });
    })
    .catch((error) => console.log(error));

  });

const heroe = document.getElementById("heroe");//heroe index

heroe.innerHTML = `<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item">
          <img class="bd-placeholder-img img-carrousel" width="100%" height="700" src="../img/black-friday.jpg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></img>
          <div class="container">
            <div class="carousel-caption text-start">
              <h1></h1>
            </div>
          </div>
        </div>
        <div class="carousel-item active">
          <img class="bd-placeholder-img img-carrousel" width="100%" height="700" src="../img/creatividad_BLACKFRIDAY_1_1900x.jpg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></img>
          <div class="container">
            <div class="carousel-caption">
              <h1></h1>
              <p></p>
            </div>
          </div>
        </div>
        <div class="carousel-item ">
          <img class="bd-placeholder-img img-carrousel" width="100%" height="700" src="../img/black-friday-2022-amazonn.jpg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></img>
          <div class="container">
            <div class="carousel-caption text-end">
              <h1></h1>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      </div>`

      
const footerContainer = document.getElementById("footerContainer");//footer

footerContainer.innerHTML = `  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
<p class="col-md-4 mb-0 text-body-secondary">Copyright © 1999-2023 Fox Market</p>
<a href="./index.html" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
  <img class="bi me-2" width="80" height="80" src="./img/bunnySVG.svg" alt="logo">
</a>
<ul class="nav col-md-4 justify-content-center">
  <li class="nav-item">
    <a href="./index.html" class="nav-link px-2 text-body-secondary aFooter">Home</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link px-2 text-body-secondary aFooter">Imagen y Sonido</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link px-2 text-body-secondary aFooter">Climatizacion</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link px-2 text-body-secondary aFooter">Electro Hogar</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link px-2 text-body-secondary aFooter">Pequeños Electros</a>
  </li>
</ul>
</footer>`;



