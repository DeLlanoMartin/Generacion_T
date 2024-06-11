let genero = prompt("por favor indique su género")

if (genero=="hombre"){
    let edad_jubilatoria=65
}else if(genero=="mujer"){
    let edad_jubilatoria=60
}

let edad = pormpt("ingrese su edad")

if (edad<60 && genero=="mujer"){
    console.log("usted todavía no está en edad de jubilarse")
}
if (edad<65 && genero=="hombre"){
    console.log("usted todavía no está en edad de jubilarse")
}
if (edad>=60 && genero=="mujer"){
    console.log("usted está en edad de jubilarse")
}

if (edad>=65 && genero=="hombre"){
    console.log("usted está en edad de jubilarse")
}
