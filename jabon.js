let id = localStorage.getItem("id")?localStorage.getItem("id"):1

let url = `https://mistica-back.vercel.app/jabon/${id}`

let containerProducto = document.getElementById("containerProducto")
  function mostrarProducto(info){

    containerProducto.innerHTML+=` <img src="${info.img}" alt="Imagen del producto">
    <br>
    <h1>${info.nombre}</h1>
    <p>Ingredientes: ${info.ingredientes.map(ingrediente => ingrediente).join(', ')}</p>
    <br>
    <p>TEXTO DESCRIPCIÓN</p>
    <button id=${info.id}>Me interesa</button>
    `
  }

  document.addEventListener('DOMContentLoaded', function () {

  fetch(url)
  .then(response => response.json())
  .then(data =>{
    console.log(data)
    mostrarProducto(data)
  } )
 
})