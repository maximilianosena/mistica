document.addEventListener("DOMContentLoaded", function() {

let chakra1 = document.getElementById("chakra1")
let chakra2 = document.getElementById("chakra2")
let chakra3 = document.getElementById("chakra3")
let chakra4 = document.getElementById("chakra4")
let chakra5 = document.getElementById("chakra5")
let chakra6 = document.getElementById("chakra6")
let chakra7 = document.getElementById("chakra7")

chakra1.addEventListener("click",()=>{
    localStorage.setItem("chakras", [11])
    localStorage.setItem("imagen", "/mistica/imgs/corona.webp")
    localStorage.setItem("nombre_Chakra", JSON.stringify("Chakra Corona (Sahasrara)"))
    localStorage.setItem("frase_Chakra", JSON.stringify("Yo soy"))
 location.href="jabones_chakras.html"
})

chakra2.addEventListener("click",()=>{
    localStorage.setItem("chakras", [2])
    localStorage.setItem("imagen", "/mistica/imgs/tercer.png")
    localStorage.setItem("nombre_Chakra", JSON.stringify("Chakra Tercer Ojo (Ajna)"))
    localStorage.setItem("frase_Chakra", JSON.stringify("Yo comprendo"))
location.href="jabones_chakras.html"
})

chakra3.addEventListener("click",()=>{
    localStorage.setItem("chakras", [1])
    localStorage.setItem("imagen", "/mistica/imgs/garganta.png")
    localStorage.setItem("nombre_Chakra", JSON.stringify("Chakra Garganta (Vishuddha)"))
    localStorage.setItem("frase_Chakra", JSON.stringify("Yo hablo"))
location.href="jabones_chakras.html"
})

chakra4.addEventListener("click",()=>{
    localStorage.setItem("chakras", [6,8])
    localStorage.setItem("imagen", "/mistica/imgs/corazon.png")
    localStorage.setItem("nombre_Chakra", JSON.stringify("Chakra Corazón (Anahata)"))
    localStorage.setItem("frase_Chakra", JSON.stringify("Yo amo"))
location.href="jabones_chakras.html"
})

chakra5.addEventListener("click",()=>{
    localStorage.setItem("chakras", [10,5])
    localStorage.setItem("imagen", "/mistica/imgs/plexo.png")
    localStorage.setItem("nombre_Chakra", JSON.stringify("Chakra Plexo Solar (Manipura)"))
    localStorage.setItem("frase_Chakra", JSON.stringify("Yo puedo"))
location.href="jabones_chakras.html"
})

chakra6.addEventListener("click",()=>{
    localStorage.setItem("chakras", [7,9])
    localStorage.setItem("imagen", "/mistica/imgs/sacro.png")
    localStorage.setItem("nombre_Chakra", JSON.stringify("Chakra Sacro (Svadhisthana)"))
    localStorage.setItem("frase_Chakra", JSON.stringify("Yo deseo"))
location.href="jabones_chakras.html"
})

chakra7.addEventListener("click",()=>{
    localStorage.setItem("chakras", [3,4])
    localStorage.setItem("imagen", "/mistica/imgs/raiz.png")
    localStorage.setItem("nombre_Chakra", JSON.stringify("Chakra Raíz (Muladhara)"))
    localStorage.setItem("frase_Chakra", JSON.stringify("Yo tengo"))
location.href="jabones_chakras.html"
})
})