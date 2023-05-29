document.addEventListener("DOMContentLoaded", () => {
    const productId = obtenerIdProductoDeURL();
    if (productId) {
        obtenerDetallesProducto(productId);
    }

    function obtenerIdProductoDeURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get("id");
    }

    function obtenerDetallesProducto(productId) {
        const stockURL = "/js/stock.json";
        fetch(stockURL)
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                const producto = datos.find((producto) => producto.id === productId);
                if (producto) {
                    mostrarDetallesProducto(producto);
                } else {
                    mostrarMensajeError();
                }
            })
            .catch((error) => {
                console.log(error);
                mostrarMensajeError();
            });
    }

    function mostrarDetallesProducto(producto) {
        const contenedorProducto = document.getElementById("contenedorProducto");
        contenedorProducto.innerHTML = `
        <h2>${producto.nombre}</h2>
        <img src="${producto.img}" alt="Imagen del producto">
        <p>Precio: ${producto.precio}</p>
        <p>Descripción: ${producto.descripcion}</p>
        <!-- Otros detalles del producto -->
      `;
    }

    function mostrarMensajeError() {
        const contenedorProducto = document.getElementById("contenedorProducto");
        contenedorProducto.innerHTML = "<p>No se encontraron detalles para este producto.</p>";
    }
});
