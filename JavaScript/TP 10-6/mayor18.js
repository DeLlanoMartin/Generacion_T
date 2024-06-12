let edad=prompt("Ingrese su edad.")

if(edad<=0){
    console.log("ah sos gracioso, ERROR, su edad no es válida")
}
if(edad<18) {
    if(edad % 2 !== 0){
        console.log("sabías que tu edad es impar?")
    }
    alert("No puede pasar al bar.")
} 
else if(edad<21){
    if(edad % 2 !== 0){
        console.log("sabías que tu edad es impar?")
    }
    alert("Puede pasar al bar, pero no puede tomar alcohol.")
} 
else{
    if(edad % 2 !== 0){
        console.log("sabías que tu edad es impar?")
    }
    alert("Bienvenido crack, felicitaciones por esos 21")
    alert("Puede pasar al bar y tomar alcohol.")
}
