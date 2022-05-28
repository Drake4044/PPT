
// Comienza el juego 
const comienzaJuego = (jugada) => {

    guardarJugadas("Posibilidades", JSON.stringify(resultadosPosibles))

    // Jugada COM
    let jugadaBoton = localStorage.getItem("Posibilidades")

    let posibilidades = JSON.parse(jugadaBoton)

    generadorDeJugadas(posibilidades.map(resl => resl.juego))

    let computadora = jugadasPosibles[Math.floor(Math.random() * jugadasPosibles.length)]

    localStorage.setItem("JugadaCOM", computadora) 

    console.log("La Computadora jugo " + computadora)

    //Jugada Player

    jugada == "Piedra" && jugada == jugadasPosibles[0]  
    jugada == "Papel"  && jugada == jugadasPosibles[1] 
    jugada == "Tijera" && jugada == jugadasPosibles[2] 

    localStorage.setItem("JugadaPlayer", jugada) 

    console.log("Tu jugada es " + jugada)

    btnEmpateFuncion(jugada)

    // Empate
    if (jugada == computadora) {

        jugadaComputadora(btnEmpate)

        empate("Empaste")

        resultadoFinal("EMPATE")

        enConsola("EMPATE!!")

    } else {

    // Gana o Pierde
        switch(computadora) {

            case jugadasPosibles[0] :

                if (jugada == jugadasPosibles[1]) { // GANA

                    jugadaComputadora('<img src="./css/Imagenes/Piedra-Com.png">')

                    ganar("Ganaste")

                    resultadoFinal("GANASTE")

                    enConsola("GANASTE!!")

                } else if (jugada = jugadasPosibles[2]) { // PIERDE

                    jugadaComputadora('<img src="./css/Imagenes/Piedra-Com.png">')

                    resultadoFinal("PERDISTE")

                    perder("Perdiste")

                    enConsola("PERDISTE!!")

                } 

                break

                case jugadasPosibles[1] :

                    if(jugada == jugadasPosibles[2]) { // GANA

                    jugadaComputadora('<img src="./css/Imagenes/Papel-Com.png">')

                    resultadoFinal("GANASTE")

                    ganar("Ganaste")

                    enConsola("GANASTE!!")

                } else if (jugada = jugadasPosibles[0]) { // PIERDE

                    jugadaComputadora('<img src="./css/Imagenes/Papel-Com.png">')

                    resultadoFinal("PERDISTE")

                    perder("Perdiste")

                    enConsola("PERDISTE!!")

                } 

                break

                case jugadasPosibles[2] :

                if(jugada == jugadasPosibles[0]) { // GANA

                    jugadaComputadora('<img src="./css/Imagenes/Tijera-Com.png">')

                    resultadoFinal("GANASTE")

                    ganar("Ganaste")

                    enConsola("GANASTE!!")

                } else if (jugada = jugadasPosibles[1]){ // PIERDE

                    jugadaComputadora('<img src="./css/Imagenes/Tijera-Com.png">')

                    resultadoFinal("PERDISTE")

                    perder("Perdiste")

                    enConsola("PERDISTE!!")

                } 

                break
        }    

    }

}


