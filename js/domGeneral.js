const body = document.getElementById("headerContainer");

headerContainer.innerHTML = `  <header class="py-3 mb-4 border-bottom header">
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
  <ul class="nav me-auto asd">
    <li class="nav-item">
      <a href="./index.html" class="nav-link link-dark px-2 a-nav active" aria-current="page">Home</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link link-dark px-2 a-nav">Imagen y sonido</a>
    </li>
    <li class="nav-item">
      <a href="./pages/climatizacion.html" class="nav-link link-dark px-2 a-nav">Climatizacion</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link link-dark px-2 a-nav">Electro Hogar</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link link-dark px-2 a-nav">Pequeños Electros</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link link-dark px-2 a-nav">Electro Hogar</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link link-dark px-2 a-nav">Electro Hogar</a>
    </li>
    </ul>
    <div class="nav-link link-dark px-2 carrito" id="div-carrito">
      <img class="logo-carrito" src="/img/shoppingcartbutton_99694.svg" alt="Carrito de compras">
      <div class="carrito-contenido" id="carrito-contenido">
      </div>
      </div>
      </div>
      </nav>`;



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





