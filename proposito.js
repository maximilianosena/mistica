let url1 = "https://mistica-back.vercel.app/categorias"

    document.addEventListener('DOMContentLoaded', function () {
        let container = document.getElementById("cardContainer");
      
        fetch(url1)
          .then(response => response.json())
          .then(data => {
            data.propositos.forEach((proposito, index) => {
              
              // Crear la card
              let cardHTML = `
                <div class="card" style="width: 18rem;">
                    <img src="${proposito.img}" class="card-img-top" alt="Imagen de ${proposito.titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${proposito.titulo}</h5>
                        <p class="card-text">${proposito.ingredientes.join(', ')}</p>
                    </div>
                    <ul class="list-group list-group-flush" id="listaJabones${index}"></ul>
                </div>
                <br>
              `;
      
              
              container.innerHTML += cardHTML;
      
              
              let listaJabones = document.getElementById(`listaJabones${index}`);
      
              // Agregar los jabones como elementos <li>
              proposito.jabones.forEach((jabon, i) => {
                let listaItem = document.createElement("li");
                listaItem.classList.add("list-group-item");
                listaItem.textContent = jabon;
                listaItem.id = proposito.id[i]
                listaJabones.appendChild(listaItem);
              });
      
            });

            document.addEventListener("click", function (event) {
              if (event.target.classList.contains("list-group-item")) {
                  let idBoton = event.target.id;
                  localStorage.setItem("id", idBoton);
                  console.log("Botón guardado:", idBoton);
                  window.open("jabon.html", "_blank");
              }
          });
         
          })
          .catch(error => console.error("Error al obtener los datos:", error));
      });
                 
