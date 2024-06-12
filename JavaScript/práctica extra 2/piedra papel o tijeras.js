function determinar_ganador(jugador1, jugador2){
if (jugador1 == jugador2){
    return "Empate"
}else if ((jugador1 == "piedra" && jugador2 == "tijeras") ||
    (jugador1 == "tijeras" && jugador2 == "papel") ||
    (jugador1 == "papel" && jugador2 == "piedra")){
    return "Perdiste"
    }else{
    return "Ganaste"
    }
}

do {
    let eleccion = prompt("vamos a jugar, elegí piedra papel o tijera")
    eleccion = eleccion.toLocaleLowerCase()
    let juego = []
    juego = [piedra, papel, tijeras]
    if (!(juego.includes(eleccion))){
        while (!(juego.includes(eleccion))){
            eleccion = prompt("por favor elige un valor válido: piedra papel o tijera")
            eleccion = eleccion.toLocaleLowerCase()
        }
    }else{
        let max = 3
        let numeroAleatorio = Math.floor(Math.random() * max);
        let resultado = determinar_ganador(juego[numeroAleatorio], eleccion)
    }
    console.log(resultado)
}while (opc=="si")