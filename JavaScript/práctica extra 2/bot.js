let opc= "si"
let espacio = 0

while (opc="si" && espacio<20){
    opc= prompt("buenos días, desea entrar a la cafetería?")
    espacio++
    console.log("¡Bienvenid@ a mi café! Su mesa es la " + espacio)
}

console.log("Adiós")