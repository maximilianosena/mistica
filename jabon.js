let id = localStorage.getItem("id")?localStorage.getItem("id"):1

let url = `https://mistica-back.vercel.app/jabon/${id}`

let containerProducto = document.getElementById("containerProducto")
let containerBoton = document.getElementById("interesa")

let productos = JSON.parse(localStorage.getItem("cart")) || []

function addProduct(cart_product) {

    let newProduct = {
        "articles": [
            {
                "id": cart_product.id,
                "name": cart_product.nombre,
                "count": 1,
                "unitCost": 120,
                "image": cart_product.img
            }
        ]
    }
    productos.push(newProduct)
}

async function productToTheCart() {
    let response = await fetch(url);
    if (response.ok) {
        let responseContents = await response.json();
       
        addProduct(responseContents);
    } else {
        console.log("Error: " + response.status)
    }
}



function jsonCart() {
    localStorage.setItem("cart", JSON.stringify(productos))
}


  function mostrarProducto(info){

    containerProducto.innerHTML+=    `
                <div class="card" style="width: 40rem;">
                    <img src="${info.img}" class="card-img-top" alt="Imagen de ${info.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${info.nombre}</h5>
                        <p class="card-text">${info.ingredientes.join(', ')}</p>
                        <p class="card-text">Propósito energético: ${info.prop_ener}</p>
                        <p class="card-text">Beneficios para la piel: ${info.beneficios}</p>
                    </div>
                    </div>
                    `
    
                    containerBoton.innerHTML += `<button  class="btn btn-warning" id=${info.id}>Me interesa</button>`


  let btn_add = document.getElementById(info.id)

  btn_add.addEventListener("click", () => {
    btn_add.disabled = true; // Desactivar el botón

    productToTheCart()
        .then(() => {
            jsonCart();
            btn_add.disabled = false; // Volver a habilitar el botón después de agregar el producto
        })
        .catch((error) => {
            console.error("Error: " + error);
            btn_add.disabled = false; // Volver a habilitar el botón en caso de error
        });
})

  }



  document.addEventListener('DOMContentLoaded', function () {

  fetch(url)
  .then(response => response.json())
  .then(data =>{
    console.log(data)
    mostrarProducto(data)
  } )
 
})