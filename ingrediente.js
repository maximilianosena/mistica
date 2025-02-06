let url2 = "http://localhost:3000/ingredientes"
let url3= "http://localhost:3000/jabones"
let lista_Jabones

fetch(url3)
  .then(response => response.json())
  .then(data =>{
    lista_Jabones=data
  } )

    

function comparador (buscado, jabon){
    let visual =[]
    for (let i = 0; i < jabon.jabones.length; i++) {
        let jabn = jabon.jabones[i];  

        for (let x = 0; x < buscado.length; x++) {
            if (jabn.ingredientes.includes(buscado[x])) {
                visual.push(jabn); 
                break 
            }
        }
    }
    console.log(visual)

        let containerResultado = document.getElementById("resultado")
        
        containerResultado.innerHTML=""
        if (visual.length===0){
            containerResultado.innerHTML=`<h2 style="text-align:center" >Seleccione el/los ingredientes a buscar </h2>`
        }
        for (let r = 0; r < visual.length; r++) {
            let cardHTML = `
                 <div class="card ingrediente" style="width: 18rem;">
                  <img src="${visual[r].img}" class="card-img-top" alt="...">
                    <div class="card-body">
                         <h5 class="card-title">${visual[r].nombre}</h5>
                        <p class="card-text">${visual[r].ingredientes.map(ingrediente => ingrediente).join(', ')}</p>
                     </div>
                 </div>
                 <br>
                        `;

        
            containerResultado.innerHTML += cardHTML

          
             }
}

document.addEventListener('DOMContentLoaded', function () {

let container = document.getElementById("checks")
let buscador = []

fetch(url2)
  .then(response => response.json())
  .then(data => {
    data.sort(); // Ordenar los datos

    for (let x = 0; x < data.length; x++) {
      let id = data[x].replace(/ /g, "_"); // Convertir espacios en guiones bajos

      // Crear el input checkbox y el texto
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = data[x];
      checkbox.id = id;

      let label = document.createElement("label");
      label.setAttribute("for", id);
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

        localStorage.setItem("buscar", JSON.stringify(buscador));
        comparador(buscador, lista_Jabones);
      });
    }
  })
  .catch(error => console.error("Error en la petición:", error));
})