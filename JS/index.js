// Variables de HTML
const botonP1 = document.getElementById("jugadaPiedra")
const botonP2 = document.getElementById("jugadaPapel")
const botonP3 = document.getElementById("jugadaTijera")
const botonJugada = document.getElementById("judadaPlayer")
const botonCom = document.getElementById("jugadaCom")
const botonResl = document.getElementById("resultado")
const cuadroPosibilidades = document.getElementById("cuadro")
const mesaDeJuego = document.getElementById("mesaDeJuego")
const cuadroPuntaje = document.getElementById("cuadroPuntaje")
const scorePlayer = document.getElementById("score1P")
const scoreCom = document.getElementById("scoreCOM")
const scoreDraw = document.getElementById("scoreDraw")


// Eventos botones ("Game Start")
botonP1.onclick = () => {
    comienzaJuego("Piedra")
    botonJugada.innerHTML = '<img src="./css/Imagenes/Piedra.png">'
}
botonP2.onclick = () => {
    comienzaJuego("Papel")
    botonJugada.innerHTML = '<img src="./css/Imagenes/Papel.png">'
}
botonP3.onclick = () => {
    comienzaJuego("Tijera")
    botonJugada.innerHTML = '<img src="./css/Imagenes/Tijera.png">'
}

// Botones Resultados
botonJugada.onclick = () => {
    console.log("Jugada 1P = " + localStorage.getItem("JugadaPlayer"))
}
botonCom.onclick = () => {
    console.log("Jugada COM = " + localStorage.getItem("JugadaCOM"))
}
botonResl.onclick = () => {
    console.log("Resultado = " + localStorage.getItem("Resultado"))
}

// DOM & Promesas
fetch("data.json") // Cuadro de posibilidades
    .then(resp => resp.json())
    .then(data => {
        data.forEach( resultado => {
            const divCuadro = document.createElement("table")   
            divCuadro.innerHTML = `
                <tr>
                    <th>JUEGO</th> 
                    <th>PIERDE</th> 
                    <th>GANA</th> 
                </tr>

                <tr>
                    <td>${resultado.juego}</td>
                    <td>${resultado.pierde}</td>
                    <td>${resultado.gana}</td>
                </tr>
            `
        cuadroPosibilidades.appendChild(divCuadro)
        })
    })

