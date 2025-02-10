let url2 = "https://mistica-back.vercel.app/ingredientes"
let lista_Jabones



    

function comparador (buscado){
   

        let containerResultado = document.getElementById("resultado")
        
        containerResultado.innerHTML=""
        if (buscado.length===0){
            containerResultado.innerHTML=`<h2 style="text-align:center" >Seleccione el/los ingredientes que desee </h2>`
        }
        for (let r = 0; r < buscado.length; r++) {
            let cardHTML = `
                  <div class="card ingrediente" style="width: 18rem;">
                    <div class="card-body">
                         <h5 class="card-title">${buscado[r]}</h5>
                     </div>
                 </div>
                 <br>
                        `;

        
            containerResultado.innerHTML += cardHTML

          
             }

             containerResultado.innerHTML +=`<button type="submit" id="continuar"  class="btn btn-warning btn-lg btn-block">Continuar</button>`

document.getElementById("continuar").addEventListener("click", ()=> {

    location.replace("wpp.html")
})
}

document.addEventListener('DOMContentLoaded', function () {

let container = document.getElementById("checks")
let buscador = []

fetch(url2)
  .then(response => response.json())
  .then(data => {
    data.sort(); // Ordenar los datos

    for (let x = 0; x < data.length; x++) {

      // Crear el input checkbox y el texto
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = data[x];
     

      let label = document.createElement("label");
      label.innerHTML = data[x];

      let br = document.createElement("br");

      // Agregar los elementos al contenedor
      container.appendChild(checkbox);
      container.appendChild(label);
      container.appendChild(br);

      // Agregar evento al checkbox
      checkbox.addEventListener("change", (e) => {
        if (e.target.checked) {
          buscador.push(data[x]);
        } else {
          buscador = buscador.filter((item) => item !== data[x]);
        }

        localStorage.setItem("personalizado", JSON.stringify(buscador));
        comparador(buscador);
      });
    }
  })
  .catch(error => console.error("Error en la petición:", error));
})