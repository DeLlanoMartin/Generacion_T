let num = 1
let lista = []

while (num>=0 && num%1){
    num = prompt("ingrese un número")
    if (num>=0 && num%1){
        lista.push(num)
    }
}
console.log("Los números enteros y positivos que ingresaste: " + lista)