document.addEventListener("DOMContentLoaded", () => {
    const categoria = obtenerCategoriaDeURL();
    if (categoria) {
      obtenerProductosPorCategoria(categoria);
    }
  
    function obtenerCategoriaDeURL() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get("categoria");
    }
  
    function obtenerProductosPorCategoria(categoria) {
      const stockURL = "/js/stock.json";
      fetch(stockURL)
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          const productos = datos.filter((producto) => producto.categoria === categoria);
          if (productos.length > 0) {
            mostrarProductos(productos);
          } else {
            mostrarMensajeError();
          }
        })
        .catch((error) => {
          console.log(error);
          mostrarMensajeError();
        });
    }
  
    function mostrarProductos(productos) {
      const cardsContainer = document.getElementById("cardsContainer");
      productos.forEach((producto) => {
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
        cardsContainer.appendChild(div);
  
        
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
    }
  
    function mostrarMensajeError() {
      const cardsContainer = document.getElementById("cardsContainer");
      cardsContainer.innerHTML = "<p>No se encontraron productos para esta categoría.</p>";
    }
  });