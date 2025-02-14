let url2 = "https://mistica-back.vercel.app/ingredientes"
let lista_Jabones
let jb_personalizados = []

document.addEventListener('DOMContentLoaded', function () {

  let container = document.getElementById("checks");
  let buscador = [];

  fetch(url2)
    .then(response => response.json())
    .then(data => {
      data.sort(); // Ordenar los datos

      for (let x = 0; x < data.length; x++) {

          let checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.name = data[x];
          checkbox.classList.add("checkbox");

          let label = document.createElement("label");
          label.innerHTML = data[x];

          let br = document.createElement("br");

          
          container.appendChild(checkbox);
          container.appendChild(label);
          container.appendChild(br);

          const maxSeleccion = 3;

       
          checkbox.addEventListener("change", () => {
              const checkboxes = document.querySelectorAll(".checkbox");
              const seleccionados = [...document.querySelectorAll(".checkbox:checked")].map(cb => cb.name);

              // Desactivar checkboxes si se alcanzó el máximo
              checkboxes.forEach(cb => {
                  cb.disabled = seleccionados.length >= maxSeleccion && !cb.checked;
              });

              // Actualizar `buscador` con los seleccionados
              buscador = seleccionados;

              
              comparador(buscador);
          });
      }
    });
});

function comparador(buscado) {
  let containerResultado = document.getElementById("resultado");
  containerResultado.innerHTML = "";

  if (buscado.length === 0) {
      containerResultado.innerHTML = `<h2 style="text-align:center">Seleccione el/los ingredientes que desee</h2>`;
      return;
  }

  buscado.forEach(item => {
      let cardHTML = `
          <div class="card ingrediente" style="width: 18rem;">
              <div class="card-body">
                  <h5 class="card-title">${item}</h5>
              </div>
          </div>
          <br>
      `;
      containerResultado.innerHTML += cardHTML;
  });

   containerResultado.innerHTML += `<button type="submit" id="agregar" class="btn btn-warning btn-lg btn-block">Agregar nuevo jabón</button>`
  containerResultado.innerHTML += `<button type="submit" id="continuar" class="btn btn-warning btn-lg btn-block">Finalizar selección</button>`;

  document.getElementById("agregar").addEventListener("click", () => {
    jb_personalizados.push({
      ingrediente1: buscado[0],
      ingrediente2: buscado[1],
      ingrediente3: buscado[2]
    })
    
    localStorage.setItem("personalizado", JSON.stringify(jb_personalizados));
    const checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach(cb => {
      cb.disabled = false
      cb.checked = false
  });

  containerResultado.innerHTML = `<h2 style="text-align:center">Seleccione el/los ingredientes que desee</h2>`;
  buscado = []

  });
  document.getElementById("continuar").addEventListener("click", () => {
    jb_personalizados.push({
      ingrediente1: buscado[0],
      ingrediente2: buscado[1],
      ingrediente3: buscado[2]
    })
    
    localStorage.setItem("personalizado", JSON.stringify(jb_personalizados));
      location.replace("wpp.html");
  });
}


