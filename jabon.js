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
                "linea": cart_product.linea,
                "count": 1,
                "unitCost": cart_product.unitCost,
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
                    <div class="card-body" id=${info.id} >
                        <h5 class="card-title">${info.nombre} 
                        </br>
                        </br>
                        Linea: ${info.linea} 
                        <hr>
                        </h5>
                     <h6>${info.gramos}</h6>
                        <p class="card-text">${info.ingredientes.join(', ')}</p>
                    
                    `
                    let container_Body = document.getElementById(info.id)

                    if(info.prop_ener){
                        container_Body.innerHTML+= `<p class="card-text"> Propósito energético: ${info.prop_ener}</p>
                       <p class="card-text">Beneficios para la piel: ${info.beneficios}</p>
                     `}

                     containerProducto.innerHTML += `</div>`;
                     containerProducto.innerHTML += `</div>`;

                    containerBoton.innerHTML += `<button class="btn btn-warning mt-0" id=${info.id}button>Me interesa</button>`
                  
                  

  let btn_add = document.getElementById(info.id+"button")

  btn_add.addEventListener("click", () => {
    btn_add.disabled = true; // Desactivar el botón

    productToTheCart()
        .then(() => {
            jsonCart();
            alertPlaceholder.style.display = "block"
            appendAlert('Producto agregado al <a href="carrito.html" class="alert-link">carrito</a>', 'warning')
            setTimeout(function () {
              alertPlaceholder.style.display = "none" }, 5000)
            btn_add.disabled = false; // Volver a habilitar el botón después de agregar el producto
        })
        .catch((error) => {
            console.error("Error: " + error);
            btn_add.disabled = false; // Volver a habilitar el botón en caso de error
        });
})

  }

  
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible mt-1" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder.append(wrapper)
  }


  document.addEventListener('DOMContentLoaded', function () {

  fetch(url)
  .then(response => response.json())
  .then(data =>{
    console.log(data)
    mostrarProducto(data)
  } )
 
})