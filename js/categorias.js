document.addEventListener("DOMContentLoaded", () => {
    const categoriasURL = "/js/categorias.json";
    fetch(categoriasURL)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        mostrarCategorias(datos);
      })
      .catch((error) => {
        console.log(error);
      });
  
    function mostrarCategorias(categorias) {
      const contenedorCategorias = document.getElementById("contenedorCategorias");
      categorias.forEach((categoria) => {
        const enlaceCategoria = document.createElement("a");
        enlaceCategoria.href = `categoria.html?id=${categoria.id}`;
        enlaceCategoria.textContent = categoria.nombre;
  
        const elementoCategoria = document.createElement("li");
        elementoCategoria.appendChild(enlaceCategoria);
  
        contenedorCategorias.appendChild(elementoCategoria);
      });
    }
  });