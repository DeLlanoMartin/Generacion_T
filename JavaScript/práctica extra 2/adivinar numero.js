let intento = prompt("ingrese un número entre el 1 y el 10")

let min = 1;
let max = 10;
let numSecreto = Math.floor(Math.random() * (max - min + 1)) + min;

let cant_intentos = 0

while (intento!=numSecreto){
    while (!(Number.isFinite(intento))){
        intento = prompt("ingrese un valor numérico entre el 1 y el 10")
    }
    if(numSecreto>intento){
        console.log("el número secreto es mayor")
    } else if (numSecreto<intento){
        console.log("el número secreto es menor")
    }
    cant_intentos ++
    intento = prompt("Nt, intentá de nuevo ")
}

console.log("Lo lograste! El número era " + numSecreto)
console.log("Y sólo te tomó " + cant_intentos + " intentos!")