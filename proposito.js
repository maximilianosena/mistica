let lista = {
    propositos: [
      {
        img: "",
        titulo: "AMOR, ARMONÍA Y CONEXIÓN ESPIRITUAL",
        jabones: ["Amor y Armonía", "Calma y Dulzura Espiritual", "Serenidad y Relajación"],
        ingredientes: ["Pétalos de Rosa", "Flores de Manzanilla", "Coco Rallado", "Canela en Polvo"]
      },
      {
        img: "",
        titulo: "ENERGÍA, VITALIDAD Y RENOVACIÓN",
        jabones: ["Alegría y Vitalidad", "Frescura y Claridad Mental", "Energía y Renovación", "Revitalización y Equilibrio Energético"],
        ingredientes: ["Hojas de Menta", "Flores de Caléndula", "Orégano", "Espirulina en Polvo"]
      },
      {
        img: "",
        titulo: "PROTECCIÓN, EQUILIBRIO Y DEFENSA ENERGÉTICA",
        jabones: ["Escudo Energético", "Protección Psíquica"],
        ingredientes: ["Hojas de Savia", "Romero", "Hojas de Ruda", "Jengibre en Polvo"]
      },
      {
        img: "",
        titulo: "CONEXIÓN ESPIRITUAL Y FUERZA INTERIOR",
        jabones: ["Fuerza y Conexión Espiritual", "Claridad Espiritual y Conexión Divina"],
        ingredientes: ["Albahaca", "Hojas de Laurel", "Espinaca en Polvo"]
      }
    ]
  };
  
  function listado(jabon) {
    let lista = document.createElement("li");
    lista.classList.add("list-group-item");
    lista.innerHTML = `${jabon}`;
    return lista;
  }
  
  document.addEventListener('DOMContentLoaded', function () {
  
    let container = document.getElementById("cardContainer");
  
    lista.propositos.forEach((proposito, x) => {
  
      // Crear la card
      let cardHTML = `
      <div class="card" style="width: 18rem;">
          <img src="${proposito.img}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${proposito.titulo}</h5>
              <p class="card-text">${proposito.ingredientes.map(ingrediente => ingrediente).join(', ')}</p>
          </div>
          <ul class="list-group list-group-flush" id="listaJabones${x}">
          </ul>
      </div>
      <br>
      `;
  
      // Añadir la card al contenedor
      container.innerHTML += cardHTML;
  
      // Obtener el contenedor de jabones
      let contenedorJabones = document.getElementById(`listaJabones${x}`);
  
      // Crear los elementos de la lista de jabones
      proposito.jabones.forEach(jabon => {
        let listadoJabon = listado(jabon);
        let idValido = jabon.replace(/[^a-zA-Z0-9-_]/g, "_").replace(/ /g, "_");
        listadoJabon.id = idValido;
        console.log(listadoJabon)

        listadoJabon.setAttribute("onclick", `console.log('Hiciste clic en el jabón: ${jabon}')`);

        contenedorJabones.appendChild(listadoJabon);
      });
    });
  });
  