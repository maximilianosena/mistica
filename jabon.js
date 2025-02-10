let id = localStorage.getItem("id")?localStorage.getItem("id"):1

let url = `https://mistica-back.vercel.app/jabon/${id}`

fetch(url)
  .then(response => response.json())
  .then(data =>{
    console.log(data)
    
  } )