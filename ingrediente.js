let lista = [
    "Pétalos de Rosa",
    "Remolacha en Polvo", 
    "Flores de Manzanilla", 
    "Coco Rallado", 
    "Flores de Lavanda",
    "Avena",
    "Canela en Polvo",
    "Flores de Caléndula", 
    "Cúrcuma en Polvo",
    "Hojas de Menta",
    "Espinaca en Polvo",
    "Espirulina en Polvo",
    "Jengibre en Polvo",
    "Orégano",
    "Hojas de Salvia",
    "Hojas de Ruda",
    "Clavo de olor en polvo",
    "Sal gruesa",
    "Romero",
    "Açaí en polvo",
    "Albahaca",
    "Hojas de Laurel"
]

let lista_Jabones = {
    jabones: [
      {nombre:"Alegría y Vitalidad",
        img:"",
        ingredientes:["Flores de Caléndula", "Cúrcuma en Polvo"]
      },
      {nombre:"Revitalización y Equilibrio Energético",
        img:"",
        ingredientes:["Orégano", "Canela en Polvo"]
      },
      {
        nombre:"Serenidad y Relajación",
        img:"",
        ingredientes:["Avena", "Canela en Polvo", "Flores de Lavanda"]
      }

    ]}

let orden = lista.sort()

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
        for (let r = 0; r < visual.length; r++) {
            containerResultado.innerHTML += `<p> ${visual[r].nombre}</p>`
             }
}

document.addEventListener('DOMContentLoaded', function () {

let container = document.getElementById("checks")
let buscador = []

for (let x=0; x < orden.length; x++){
    
    
    let id = lista[x].replace(/ /g, "_");

        // Crear el input checkbox y el texto
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = lista[x];
        checkbox.id = id;

        let label = document.createElement('label');
        label.setAttribute('for', id);
        label.innerHTML = lista[x];

        // Crear un salto de línea
        let br = document.createElement('br');

        // Agregar los elementos al contenedor
        container.appendChild(checkbox);
        container.appendChild(label);
        container.appendChild(br);

    
    document.getElementById(id).addEventListener("change", (e)=>{

        if(e.target.checked){
            buscador.push(lista[x])
            console.log(buscador)
            localStorage.setItem("buscar", JSON.stringify(buscador))
            comparador(buscador, lista_Jabones)
        } else {
            buscador = buscador.filter(item => item !== lista[x]);
            localStorage.setItem("buscar", JSON.stringify(buscador))
            comparador(buscador, lista_Jabones)
        }
       
    }
        )
}



})