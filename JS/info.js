// Objetos
const resultadosPosibles = [
    {
        id: 1,
        juego: "Piedra",
        pierde: "Papel",
        gana: "Tijera"
    },
    {
        id: 2,
        juego: "Papel",
        pierde: "Tijera",
        gana: "Piedra"
    },
    {
        id: 3,
        juego: "Tijera",
        pierde: "Piedra",
        gana: "Papel"
    }

]

// Variables
let jugadasPosibles
let btnEmpate
let puntajeCom = 0
let puntajePlayer = 0
let empates = 0

// Funciones propias del juego
const guardarJugadas = (id, juego) => localStorage.setItem(id, juego) 

const generadorDeJugadas  = juego => jugadasPosibles = juego

const jugadaComputadora = com => botonCom.innerHTML = com

const resultadoFinal = resl => botonResl.innerHTML = resl

const btnEmpateFuncion = jugada => {
    if (jugada == "Piedra") {
        btnEmpate = '<img src="./css/Imagenes/Piedra-Com.png">'
    }
    if (jugada == "Papel") {
        btnEmpate = '<img src="./css/Imagenes/Papel-Com.png">'
    }
    if (jugada == "Tijera") {
        btnEmpate = '<img src="./css/Imagenes/Tijera-Com.png">'
    }
}

const ganar = resl => {
    puntajePlayer++
    scorePlayer.innerHTML = puntajePlayer
    botonResl.removeAttribute("id")
    botonResl.setAttribute("id", "ganar")
    localStorage.setItem("Resultado", resl)
    swal({
        title: "GANASTE!! :D",
        text: "Presiona continuar",
        icon: "success",
        button: "Continuar :D",
    })
}
const perder = resl => { 
    puntajeCom++
    scoreCom.innerHTML = puntajeCom
    botonResl.removeAttribute("id")
    botonResl.setAttribute("id", "perder")
    localStorage.setItem("Resultado", resl)
    swal({
        title: "PERDISTE!! D:",
        text: "Presiona continuar",
        icon: "error",
        button: "Continuar D:",
    })
}
const empate = resl => {
    empates++
    scoreDraw.innerHTML = empates
    botonResl.removeAttribute("id")
    botonResl.setAttribute("id", "empate")
    localStorage.setItem("Resultado", resl)
    swal({
        title: "EMPATASTE...",
        text: "Presiona continuar",
        icon: "/css/Imagenes/Empate.png", 
        button: "Continuar",
    })
}
const enConsola = resl => {
    console.log(resl)
    console.log("1P: " + puntajePlayer  + " COM: " + puntajeCom + " Empates: " + empates) 
    console.log("LOADING...")
}




