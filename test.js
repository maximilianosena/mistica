let url3= "https://mistica-back.vercel.app/jabones"

let lista_Jabones



const questions = [
    {
        question: "¿Cómo describes tu estado emocional y mental actual?",
        options: [
            { text: "Siento que estoy en un estado óptimo, con energía suficiente para todo el día.", value: 3 },
            { text: "Me siento en paz, pero un poco desconectado de mi energía más vibrante.", value: 1 },
            { text: "Mi mente está en constante movimiento y me siento un poco disperso.", value: 4 },
            { text: "Me siento abrumado y necesito centrarme, encontrar claridad.", value: 2 }
        ]
    },
    {
        question: "En cuanto a tu bienestar físico, ¿qué es lo que más necesitas en este momento?",
        options: [
            { text: "Necesito relajarme, deshacerme de la fatiga acumulada.", value: 1 },
            { text: "Mi cuerpo siente que necesita un empujón de energía", value: 4 },
            { text: "Mi cuerpo se siente bien, pero mi mente necesita despejarse.", value: 2 },
            { text: "Siento que necesito algo que me proteja tanto física como energéticamente.", value: 3 }
        ]
    },
    {
        question: "Si pudieras cambiar algo de tu entorno actual, ¿qué sería?",
        options: [
            { text: "Necesito un cambio radical en el ambiente, que me impulse a seguir adelante.", value: 4 },
            { text: "Busco un entorno que me brinde estabilidad, alejado de la tensión.", value: 3 },
            { text: "Mi entorno está un poco caótico; quiero un espacio más claro y ordenado para enfocarme.", value: 2 },
            { text: "Busco un entorno más tranquilo, que me permita descansar mental y emocionalmente.", value: 1 }
        ]
    },
    {
        question: "Imagina que tu día comienza de manera ideal. ¿Qué sensación te gustaría tener al final del día?",
        options: [
            { text: "Al final del día, quiero sentirme relajado con todo lo que sucedió.", value: 1 },
            { text: "Al finalizar el día, deseo sentirme realizado y listo para lo siguiente.", value: 4 },
            { text: "Quiero sentirme protegido, tanto física como emocionalmente.", value: 3 },
            { text: "Al final del día, me gustaría sentir que mi mente está despejada y enfocada.", value: 2 }
        ]
    },
    {
        question: "¿Cómo prefieres que te haga sentir un jabón al usarlo?",
        options: [
            { text: "Quiero que mi piel y energía se sientan fortalecidas.", value: 3 },
            { text: "Prefiero una sensación de enfoque, que me mantenga alerta y equilibrado.", value: 2 },
            { text: "Busco algo que me brinde paz y tranquilidad.", value: 1 },
            { text: "Prefiero algo que me dé una sensación de frescura y renovación.", value: 4 }
        ]
    },
    {
        question: "¿Cómo describirías tu conexión con la naturaleza o el mundo espiritual?",
        options: [
            { text: "Me siento en equilibrio con la naturaleza y mi interior.", value: 1 },
            { text: "Estoy explorando mi espiritualidad y buscando respuestas.", value: 4 },
            { text: "A veces siento que estoy desconectado de la naturaleza y necesito reconectarme.", value: 3 },
            { text: "Busco energías frescas y revitalizantes que me ayuden a avanzar y seguir creciendo espiritualmente.", value: 2 }
        ]
    },
    {
        question: "¿Cuál es tu relación con el descanso y el sueño?",
        options: [
            { text: "Duermo bien.", value: 1 },
            { text: "A veces me cuesta dormir, pero intento mantenerme tranquilo.", value: 2 },
            { text: "Siento que necesito ayuda para descansar mejor.", value: 3 },
            { text: "Duermo poco, despierto agotado.", value: 4 }
        ]
    },
    {
        question: " ¿Cuál de estas actividades disfrutas más en tu tiempo libre?",
        options: [
            { text: "Hacer caminatas al aire libre.", value: 2 },
            { text: "Pasar tiempo con amigos o familia.", value: 3 },
            { text: "Hacer ejercicio o una actividad que me active físicamente.", value: 4 },
            { text: "Leer un libro.", value: 1 }
        ]
    },
    {
        question: "¿Qué elemento natural sientes que te representa más en este momento?",
        options: [
            { text: "El agua: fluida y tranquila.", value: 1 },
            { text: "El fuego: intenso y transformador.", value: 4 },
            { text: "La tierra: firme y protectora.", value: 3 },
            { text: "El aire: ligero y en movimiento.", value: 2 }
        ]
    }

];

let currentQuestionIndex = 0;
let answers = [];

const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const questionData = questions[currentQuestionIndex];
    questionContainer.innerHTML = `<h3>${questionData.question}</h3>`;

    questionData.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.onclick = () => {
            answers.push(option.value);
            currentQuestionIndex++;
            loadQuestion();
        };
        questionContainer.appendChild(button);
    });
}

function showResult() {
    questionContainer.style.display = "none";
    nextButton.style.display = "none";

    const result = calculateResult();
    resultContainer.innerHTML = `<h2>Tu resultado es:</h2>
    <br>
    <div class="card ingrediente" style="width: 18rem;">
                  <a href="index.html" style="text-align: center; display: flex; justify-content: center;"> <img src="${result.img}" class="card-img-top" alt="..."> </a>
                    <div class="card-body">
                         <h5 class="card-title">${result.nombre}</h5>
                     </div>
                 </div>
                 <br>
    <p>${result.id}</p>
        <a href="index.html" style="text-align: center; display: flex; justify-content: center;"> <img src="imgs/logo.jpg" alt="" style="height: 80px; width: 80px;"></a>
    `;
    resultContainer.style.display = "block";
}

function calculateResult() {
    const sumaTotal = answers.reduce((acumulador, num) => acumulador + num, 0);


    const resultado = [
        {
            jabon: "Amor y Armonía",
            valor: Array.from({ length: 5 }, (_, i) => 10 + i)
        }, {
            jabon: "Calma y Dulzura Espiritual",
            valor: Array.from({ length: 4 }, (_, i) => 15 + i)
        },
        {
            jabon: "Alegría y Vitalidad",
            valor: Array.from({ length: 4 }, (_, i) => 19 + i)
        },
        {
            jabon: "Fuerza y Conexión Espiritual",
            valor: Array.from({ length: 4 }, (_, i) => 23 + i)
        },
        {
            jabon: "Serenidad y Relajación",
            valor: Array.from({ length: 4 }, (_, i) => 27 + i)
        },
        {
            jabon: "Protección Psíquica",
            valor: Array.from({ length: 4 }, (_, i) => 31 + i)
        },
        {
            jabon: "Escudo Energético",
            valor: Array.from({ length: 3 }, (_, i) => 35 + i)
        },
        {
            jabon: "Claridad Espiritual y Conexión Divina",
            valor: Array.from({ length: 3 }, (_, i) => 38 + i)
        },
    ]
    
    let jabonRecomendado = ""
    let jabonAmostrar

for (let i = 0; i < resultado.length; i++) {
    // Buscar el rango de valores en cada objeto 'jabon'
    if (resultado[i].valor.includes(sumaTotal)) {
        jabonRecomendado = resultado[i].jabon;
        break;  
    }
}

console.log(jabonRecomendado)

for (let i = 0; i < lista_Jabones.length; i++) {
    if (lista_Jabones[i].nombre === jabonRecomendado) { 
        jabonAmostrar = lista_Jabones[i]; 
        break;  
    }
}

return jabonAmostrar

}

fetch(url3)
  .then(response => response.json())
  .then(data =>{
    lista_Jabones=data.jabones
    console.log(lista_Jabones)
    loadQuestion();
  } )

