let tableBody = document.getElementById("tableBody");
let tableBody2 = document.getElementById("tableBody2");
let tableBody3 = document.getElementById("tableBody3");
let totalElement = document.getElementById("total");
let list = [];
let subtotalPersonalizado = 0
let jbChico = []
let totalChicos = 0;
let jbPersonalizado = JSON.parse(localStorage.getItem("personalizado"))
let resultadoSubtotal;
/////////////////////////////////////////////////////////////
let cart = JSON.parse(localStorage.getItem("cart"))

console.log(jbPersonalizado)
jbPersonalizado===null?console.log("personalizados vacio"):jbPersonalizados(jbPersonalizado)

function products_add() {
    list = []
    // Recorre el carrito original para buscar duplicados
    cart.forEach((product) => {
      const product_Exist = list.find((item) => item.articles[0].id === product.articles[0].id);
      if (product_Exist) {
        // Si se encuentra un duplicado, suma las unidades
        product_Exist.articles[0].count += product.articles[0].count;
      } else {
        list.push(product);
      }
    });
  
    
    console.log("lista", list)

    for (let i = 0; i < list.length; i ++) {
      for (let x = 0; x < list[i].articles.length; x ++){
      console.log(list[i].articles[x])
      if (list[i].articles[x].linea==="Aura"){
        jbChico.push(list[i].articles[x])
      }
    }
  }
    console.log("chicos", jbChico)
  
    localStorage.setItem("cart", JSON.stringify(list));
    for (let product of list) {
      showTheProduct(product);
    }
  }
  
  
  /////////////////////////////////////////////////////
  
  async function showproduct() {
    let response = await fetch(urlProduct);
    if (response.ok) {
      let object = await response.json();
      console.log(object);
      localStorage.setItem("cart", JSON.stringify([object]))
    
      console.log(jbPersonalizado)
      showTheProduct(object);
      subTotals(); //agrego función al fetch para ver al cargar la página
    } else {
      console.log("Error: " + response.status);
    }
  }
  
  
  
  function showTheProduct(object) {
    tableBody.innerHTML += '';
  
    for (let i = 0; i < object.articles.length; i++) {
      let product = object.articles[i];
  
      if (product.linea!=="Aura"){
      // Calcula el subtotal en función de la cantidad
      let subtotal = product.unitCost * product.count;
  
      // Agrega el atributo data-index para identificar la fila
      tableBody.innerHTML += `<tr data-index="${i}"> 
        <td><img src=${product.image} width="50px" ></td>
        <td>${product.name}</td>
        <td>$ ${product.unitCost}</td>
        <td><input class="prodCount" type="number" value=${product.count} min="1" style="width:70px"></td>
        <td><b>$ <span class="subtotal">${subtotal}</span></b></td>
        <td><button type="button" class="btn btn-danger" onclick="removeProductCart(${product.id})">X </button></td>
        </tr>`;
    } 
  
   
    // Agrega un evento de cambio a los campos de cantidad
    let prodCountInputs = document.querySelectorAll(".prodCount");
  
    prodCountInputs.forEach((input, index) => {
      input.addEventListener("input", (event) => {
        let product = list[index].articles;
        let cost = product[0].unitCost
        let newCount = parseInt(event.target.value, 10);
  
        if (!isNaN(newCount) && newCount >= 1) {
  
          console.log(cost)
  
          product[0].count = newCount;
  
          // Recalcula el subtotal en función de la nueva cantidad
          let newSubtotal = cost * newCount;
  
          let subtotalElement = event.target.closest("tr").querySelector(".subtotal");
          subtotalElement.innerHTML = parseInt(newSubtotal);
  
          console.log(subtotalElement)
  
          let newTotal = 0;
          document.querySelectorAll(".subtotal").forEach((subtotal) => {
            newTotal += parseInt(subtotal.textContent.split(" ")[1]);
          });
  
  
          // Actualiza el contenido del elemento "total" con el valor recalculado
          totalElement = product[0].currency + " " + newTotal;
  
          //Función que se dispara al cambiar la cantidad de inputs
          subTotals()
  
          localStorage.setItem("cart", JSON.stringify(list));
  
          tableBody.innerHTML = '';
          for (let product of list) {
            showTheProduct(product);
          }
        }
      });
    });
  }
}

  



  function jbPersonalizados(array) {
    for (let i = 0; i < array.length; i++) {
      let product = array[i];
      subtotalPersonalizado += 120
      // Generar la lista de ingredientes en una sola línea
      let ingredientes = `${product.ingrediente1}`
        + (product.ingrediente2 ? `, ${product.ingrediente2}` : '')
        + (product.ingrediente3 ? `, ${product.ingrediente3}` : '');
  
      tableBody2.innerHTML += `
        <tr data-index="${i}"> 
          <td><img src="" width="50px"></td>
          <td>${ingredientes}</td>
          <td><b>$ <span class="subtotal">${120 * 1}</span></b></td>
        </tr>`;
    }
  }
  
  console.log(localStorage.getItem("personalizado"));

  function removeProductCart(id) {
    tableBody.innerHTML = '';
  
    for (let i = 0; i < list.length; i++) {
      if (list[i].articles[0].id === id) {
        // Elimina el primer objeto que coincida con la id
        list.splice(i, 1);
        cart = list;
        break;
      }
    }
  
    console.log("Nueva lista:", cart);
  
    localStorage.setItem("cart", JSON.stringify(cart));
  
    products_add();
    subTotals();
  
  }
  
  //SUMA TOTAL
let allSubtotal = document.getElementsByTagName("b")
console.log(allSubtotal.length)
console.log(Number.parseFloat(subtotalPersonalizado))

function subTotals() {
  let resultado = 0;
  if (allSubtotal.length === 0) {
    console.log("vacío")
    totalFinal.textContent = ` $ 0`
  }
  else {
    for (let i = 0; i < allSubtotal.length; i++) {
        resultado += parseFloat(allSubtotal[i].childNodes[1].textContent)
      }
    }
 
    final(resultado)
}

//Función Suma Total

let totalFinal = document.getElementById("totalCart")

function final(subtotalCart, subtotalPersonalizado) {
  let result = 0
  subtotalCart = isNaN(parseFloat(subtotalCart)) ? 0 : parseFloat(subtotalCart) ;
  subtotalPersonalizado = isNaN(parseFloat(subtotalPersonalizado)) ? 0 : parseFloat(subtotalPersonalizado);
  result = subtotalCart + subtotalPersonalizado ;
  totalFinal.textContent = ` $ ${Number.parseFloat(result)}`
  console.log(result)
  localStorage.setItem("totalPagar", result)
}





function resetPage() {
  
  tableBody.innerHTML = '';
  totalFinal.textContent = `$ 0`;
};


if (cart === null && jbPersonalizado===0 ) {
    console.log("Carro vacio")
    tableBody.innerHTML = '';
    totalFinal.textContent = `$ 0`;
  } else if ( parseFloat(subtotalPersonalizado)!==0 && cart === null){
    final(0, parseFloat(subtotalPersonalizado), parseFloat(totalChicos))
  }
  else {
    products_add()
    subTotals()
  }

  function finalizarCompra(){
   
      console.log("Funciona")
      location.replace("wpp.html")
  }

  (() => {
    'use strict'
  
    
    const forms = document.querySelectorAll('.needs-validation')
  
    
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
  
        if ((cart && cart.length === 0 || cart == null) && parseFloat(subtotalPersonalizado)===0) {
          alertPlaceholder.style.display = "block"
          appendAlert('Agregue un producto al carrito!', 'danger')
          setTimeout(function () {
            alertPlaceholder.style.display = "none"
          }, 2000)
          event.preventDefault()
          event.stopPropagation()
        } else {

              finalizarCompra();
              event.preventDefault()
          
  
          form.classList.add('was-validated')
        }
      }, false)
    })
  })()
  
  
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder.append(wrapper)
  }