const stockURL = "/js/stock.json";
const cards = document.getElementById("cardsContainer");//cards

fetch(stockURL)
    .then(respuesta => respuesta.json())
    .then(datos => {

        datos.forEach(producto => {
            const cards = document.getElementById("cardsContainer");//cards
            const div = document.createElement("div");//cards

            div.classList.add("div-principal");


            div.innerHTML = `<div class="row row-cols-4 row-cols-md-3 mb-3 text-center">
            <div class="col-md-4 div-principal">
                <div class="card mb-4 rounded-3 shadow-sm div-principal">
                <div class="card-header py-3 titulo-cardd">
                    <h4 class="my-0 fw-normal" id="titulo-card">${producto.nombre}</h4>
                </div>
                <div class="card-body">
                    <img id="img-card" src="${producto.img}" </img>
                    <h4>$ ${producto.precio}</h4>
                    <button type="button" id="btn-agregar-carrito" class="w-100 btn btn-lg btn-outline-primary">Agregar al carrito</button>
                </div>
                </div>
            </div>`

            cards.appendChild(div);
        });

    })
    .catch(error => console.log(error))
    .finally(() => console.log("proceso finalizado"));