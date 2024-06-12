//*Condicionales*:


// Escribir una sentencia if que siempre ejecute su bloque de código.
if (true){
    //código a ejecutar
}

// Escribir una sentencia if que nunca ejecute su bloque de código.
if (false){
    //código a nunca ejecutar
}

// Escribir una sentencia que le pregunte al usuario cómo está y, si responde que está "triste"
// Le deje un mensaje de aliento en la consola.

let opc = prompt("como andas crack?")

if (opc="triste"){
    console.log("no pasa nada master, ganador, fiera, máquina, ídolo, mastodonte, número 1")
    console.log("La vida no puede con vos, Dios le da sus batallas más duras a sus soldados más fuertes")
}

// Escribir una sentencia que le pregunte al usuario cuál es el número secreto.
 
let num_secreto = 69420

console.log("a que no adivinas el número que estoy pensando")
let intento = prompt("pista: es un número natural positivo")

while(intento != num_secreto){
    console-log("sos malo en esto")
}
console.log("tuviste suerte")

// Pedir al visitante que ingrese una contraseña cuando visite el sitio. Si es correcta, redirigilo usando esta línea de código: 

let contraseña = "contraseña"
contraseña_cliente = prompt("introduzca la contraseña")

if(contraseña === contraseña_cliente){
    window.location = "http://www.google.com"
} else{
    console.log("contraseña incorrecta crack")
}

// Par o impar?:

let num = prompt("ingresa un número para ver si es par o no")

if (num % 2 !== 0){
    console.log("el número es impar")
}else{
    console.log("el número es par")
}
