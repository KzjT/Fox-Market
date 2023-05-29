document.addEventListener("DOMContentLoaded", () => {
    const headerLinks = document.querySelectorAll(".a-nav");
  
    headerLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        const category = link.textContent.trim().toLowerCase(); // Obtener la categoría del enlace
  
        // Redireccionar a la página de categoría correspondiente
        window.location.href = `categorias.html?category=${category}`;
      });
    });
  
    // Resto del código existente...
  
  });