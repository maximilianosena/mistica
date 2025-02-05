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
document.addEventListener('DOMContentLoaded', function () {

let container = document.getElementById("checks")
let buscador = []

for (let x=0; x < lista.length; x++){
    
    
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
        } else {
            buscador = buscador.filter(item => item !== lista[x]);
            localStorage.setItem("buscar", JSON.stringify(buscador))

        }
       
    }
        )
}



})