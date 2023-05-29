document.addEventListener("DOMContentLoaded", () => {
  const stockURL = "/js/stock.json";
  const cards = document.getElementById("cardsContainer");
  const divCarrito = document.getElementById("div-carrito");
  const carritoContenido = document.getElementById("carrito-contenido");
  let carrito = [];

  if (localStorage.getItem("carrito") !== null) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
  }

  fetch(stockURL)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      datos.forEach((producto) => {
        const div = document.createElement("div");
        div.classList.add("div-principal");
        div.innerHTML = `
          <div class="row row-cols-4 row-cols-md-3 mb-3 text-center">
            <div class="col-md-4 div-principal">
              <div class="card mb-4 rounded-3 shadow-sm div-principal">
                <div class="card-header py-3 titulo-cardd">
                  <h4 class="my-0 fw-normal" id="titulo-card">${producto.nombre}</h4>
                </div>
                <div class="card-body">
                  <img class="img-card" id="img-card" src="${producto.img}" />
                  <h4>$ ${producto.precio}</h4>
                  <button type="button" class="w-100 btn btn-lg btn-outline-primary btn-agregar-carrito">Agregar al carrito</button>
                </div>
              </div>
            </div>
          </div>`;
        cards.appendChild(div);

        const btnAgregarCarrito = div.querySelector(".btn-agregar-carrito");
        btnAgregarCarrito.addEventListener("click", (event) => {
          event.stopPropagation(); // Detener la propagación del evento

          const productoo = {
            nombre: producto.nombre,
            precio: producto.precio,
            img: producto.img,
          };
          carrito.push(productoo);
          actualizarCarrito();
          guardarCarritoLocalStorage();
          console.log(carrito);
        });

        div.addEventListener("click", () => {
          // Redireccionar a la página de producto con el ID del producto
          window.location.href = `producto.html?id=${producto.id}`;
        });
      });
    })
    .catch((error) => console.log(error))
    .finally(() => console.log("Proceso finalizado"));

  let carritoAbierto = false;

  divCarrito.addEventListener("click", () => {
    carritoAbierto = !carritoAbierto;
    actualizarCarrito(); // Actualizar el carrito al abrir o cerrar el div

    if (carritoAbierto) {
      divCarrito.classList.add("carrito-abierto");
    } else {
      divCarrito.classList.remove("carrito-abierto");
    }
  });

  function guardarCarritoLocalStorage() {
    const carritoJson = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoJson);
  }

  function actualizarCarrito() {
    carritoContenido.innerHTML = "";
    carrito.forEach((item) => {
      const carritoCard = document.createElement("div");
      carritoCard.innerHTML = `
          <img class="img-contenido-carrito" src="${item.img}" />
          <h3 class="titulo-contenido-carrito">${item.nombre}</h3>
          <p class="precio-contenido-carrito">${item.precio}</p>
          <button class="btn-delete-carrito" id="btn-delete-item">- quitar</button>`;

      carritoContenido.appendChild(carritoCard);

      const btnDeleteItem = carritoCard.querySelector(".btn-delete-carrito");
      btnDeleteItem.addEventListener("click", (event) => {
        event.stopPropagation(); // Detener la propagación del evento
        borrarItemCarrito(item);
      });
    });
  }

  function borrarItemCarrito(item) {
    const index = carrito.indexOf(item);
    if (index > -1) {
      carrito.splice(index, 1);
      actualizarCarrito();
    }
  }
});

