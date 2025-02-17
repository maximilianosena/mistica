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
    localStorage.setItem("imagen", "/imgs/corona.webp")
    localStorage.setItem("nombre_Chakra", JSON.stringify("Chakra Corona (Sahasrara)"))
    localStorage.setItem("frase_Chakra", JSON.stringify("Yo soy"))
})

chakra2.addEventListener("click",()=>{
    localStorage.setItem("chakras", [2])
    localStorage.setItem("imagen", "/imgs/tercer.png")
    localStorage.setItem("nombre_Chakra", JSON.stringify("Chakra Tercer Ojo (Ajna)"))
    localStorage.setItem("frase_Chakra", JSON.stringify("Yo comprendo"))
})

chakra3.addEventListener("click",()=>{
    localStorage.setItem("chakras", [1])
    localStorage.setItem("imagen", "/imgs/garganta.png")
    localStorage.setItem("nombre_Chakra", JSON.stringify("Chakra Garganta (Vishuddha)"))
    localStorage.setItem("frase_Chakra", JSON.stringify("Yo hablo"))
})

chakra4.addEventListener("click",()=>{
    localStorage.setItem("chakras", [6,8])
    localStorage.setItem("imagen", "/imgs/corazon.png")
    localStorage.setItem("nombre_Chakra", JSON.stringify("Chakra Corazón (Anahata)"))
    localStorage.setItem("frase_Chakra", JSON.stringify("Yo amo"))
})

chakra5.addEventListener("click",()=>{
    localStorage.setItem("chakras", [10,5])
    localStorage.setItem("imagen", "/imgs/plexo.png")
    localStorage.setItem("nombre_Chakra", JSON.stringify("Chakra Plexo Solar (Manipura)"))
    localStorage.setItem("frase_Chakra", JSON.stringify("Yo puedo"))
})

chakra6.addEventListener("click",()=>{
    localStorage.setItem("chakras", [7,9])
    localStorage.setItem("imagen", "/imgs/sacro.png")
    localStorage.setItem("nombre_Chakra", JSON.stringify("Chakra Sacro (Svadhisthana)"))
    localStorage.setItem("frase_Chakra", JSON.stringify("Yo deseo"))
})

chakra7.addEventListener("click",()=>{
    localStorage.setItem("chakras", [3,4])
    localStorage.setItem("imagen", "/imgs/raiz.png")
    localStorage.setItem("nombre_Chakra", JSON.stringify("Chakra Raíz (Muladhara)"))
    localStorage.setItem("frase_Chakra", JSON.stringify("Yo tengo"))
})
})