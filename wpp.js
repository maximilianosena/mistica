const companyPhone = '59894797973';

window.onload=()=>{
    if (!localStorage.getItem("cart")|| 
    (JSON.parse(localStorage.getItem("cart")).length === 0 && localStorage.getItem("personalizado")) ){
        let messageArea = document.getElementById('message');
        let message = document.getElementById('message');
        let jabones = JSON.parse(localStorage.getItem("personalizado"));
        message = `Hola! Quisiera realizar un jabón personalizado con los siguientes ingredientes: \n`;
        for (let i=0; i < jabones.length; i++) {
                message += `--${jabones[i].ingrediente1}`
    + (jabones[i].ingrediente2 ? `, ${jabones[i].ingrediente2}` : '')
    + (jabones[i].ingrediente3 ? `, ${jabones[i].ingrediente3}` : '')
    + '.\n';
        }
        message += `\n`
        message += `Espero su confirmación, muchas gracias!`
        messageArea.value= message
    } else if (
        !localStorage.getItem("personalizado") || 
        (JSON.parse(localStorage.getItem("personalizado")).length === 0 && localStorage.getItem("cart"))
      )
      {
        let messageArea = document.getElementById('message');
        let articulos = JSON.parse(localStorage.getItem("cart"))
        let total = localStorage.getItem("totalPagar")
        console.log(articulos)
        let message = `Hola!\n`
        message += `Me interesa la adquisición de: \n`
        for (let i = 0; i < articulos.length; i++) {
            for (let j = 0; j < articulos[i].articles.length; j++) {
                message += `${articulos[i].articles[j].count} unidades de ${articulos[i].articles[j].name}.\n`;
            }
        }
        message += `\n`
        message +=`-Por un total de: $${total}.\n`
        message += `\n`
        message += `Espero su confirmación, muchas gracias!`
        messageArea.value= message
        }
        else if (localStorage.getItem("personalizado")&& JSON.parse(localStorage.getItem("personalizado")).length > 0&&localStorage.getItem("cart")){
            let messageArea = document.getElementById('message');
            let articulos = JSON.parse(localStorage.getItem("cart"))
            let total = localStorage.getItem("totalPagar")
            let jabones = JSON.parse(localStorage.getItem("personalizado"));

            console.log(articulos)
            let message = `Hola!\n`
            message += `Me interesa la adquisición de: \n`
            for (let i = 0; i < articulos.length; i++) {
                for (let j = 0; j < articulos[i].articles.length; j++) {
                    message += `${articulos[i].articles[j].count} unidades de ${articulos[i].articles[j].name}.\n`;
                }
            }
           
           
              message += `\nTambién quisiera realizar jabón personalizado con los siguientes ingredientes: \n`;
                 for (let i=0; i < jabones.length; i++) {
                   message += `--${jabones[i].ingrediente1}`
                        + (jabones[i].ingrediente2 ? `, ${jabones[i].ingrediente2}` : '')
                         + (jabones[i].ingrediente3 ? `, ${jabones[i].ingrediente3}` : '')
                             + '.\n';
        }
             message += `\n`
             message +=`-Por un total de: $${total}.\n`
             message += `\n`
             message += `Espero su confirmación, muchas gracias!`
              messageArea.value= message
            }
}

        document.getElementById('messageForm').addEventListener('submit', (event) => {
            event.preventDefault();
            let message = document.getElementById('message');
                let whatsappMessage = `${encodeURIComponent(message.value)}`
            const whatsappUrl = `https://wa.me/${companyPhone}?text=${whatsappMessage}`;
            window.open(whatsappUrl, '_blank');
            localStorage.clear()
        });