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
            <input type="search" class="form-control nav-search" placeholder="Search..." aria-label="Search">
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





