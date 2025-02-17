let localStorage_Chakras=localStorage.getItem("chakras")
let url3= "https://mistica-back.vercel.app/jabones"
let jabones = [localStorage_Chakras.split(",")]
let lista_Jabones
function guardarId(id) {
    localStorage.setItem("id", id);
}
console.log(jabones)

  function comparador (buscado, jabon){
    let visual =[]
    for (let i = 0; i < jabon.jabones.length; i++) {
        let jabn = jabon.jabones[i]; 
        console.log(jabn.id) 
        for (let x = 0; x <= buscado.length; x++) {
            if (jabn.id == buscado[0][x]) {
                console.log(buscado[0][x])
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
              <a href="jabon.html" style="text-align: center; display: flex; justify-content: center;" onclick="guardarId('${visual[r].id}')"> 
              <div class="card" style="width: 40rem; text-align: center; display: flex; justify-content: center;">
                <img src="${visual[r].img}" class="card-img-top" alt="...">
                <div class="card-body">
                     <h5 class="card-title">${visual[r].nombre}</h5>
                    <ul class="list-group">
                    ${visual[r].ingredientes.map((ingrediente, index) => `
                        <li class="list-group-item">
                          ${ingrediente} : <span>${visual[r].proposito[index]}</span>
                        </li>
                      `).join('')}
                       </li>
                        </ul>
                 </div>
             </div>
             </a>
             <br>
                    `;

    
        containerResultado.innerHTML += cardHTML

      
         }

}

let containerImg = document.getElementById("imagenChakra")
document.addEventListener("DOMContentLoaded", function() {
    fetch(url3)
    .then(response => response.json())
    .then(data =>{
      
      lista_Jabones=data
      console.log(lista_Jabones)
      comparador(jabones, lista_Jabones)
    } )

    containerImg.innerHTML += ` <img src="${localStorage.getItem("imagen")}" style="height: 80px; width: 80px;">`
    containerImg.innerHTML += `  <h1 style="text-align: center;">${JSON.parse(localStorage.getItem("nombre_Chakra"))} </h1> ` 
    containerImg.innerHTML += `  <h2 style="text-align: center;">  ${JSON.parse(localStorage.getItem("frase_Chakra"))}</h2>  <br>`
} )