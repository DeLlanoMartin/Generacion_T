let x=10
let y ="a"
y==="b" || x >= 10

// Devolverá verdadero
// ya que el || significa "o", por lo que si una de las condiciones es correcta devolverá true
// Y como x es igual a 10, y la condición es que x tiene que ser igual o mayor a 10, se cumple

let x=3
let y=8
!(x == "3" || x === y) && !(y !== 8 && x <= y)

// la primera expresión dice si "x" es igual a 3 o "x" es estrictamente igual a "y" devuelve true
// pero gracias al "!"" detrás del paréntesis, el resultado tiene que ser distinto
// o sea que esta expresión devuelve false

// la segunda expresión dice que "y" tiene que ser distinto de 8, o sea que es false
// y que "x" tiene que ser menor o igual que "y"
// entonces una condición es true y la otra false
// además como tiene un "&&"" en medio las dos condiciones deben cumplirse
// asique la segunda expresión devuelve false, pero por el "!" es true

// Como la primera expresión da true y la segunda false, están conectadas por un "&&"
// Por lo que las dos expresiones deberían ser true para cumplirse, pero no lo hacen

// La expresión devuelve false

let str = ""
let msj = "jaja!"
let esGracioso = "false"
!((str || msj) && esGracioso)

// La expresión entre los primeros paréntesis dice que str o msj tienen que ser true
// str es nulo pero msj no asique es true, y ese se compara con esGracioso 
// que pese a valer "false", es una cadena de caracteres, no el valor booleano false
// por lo que devuelve true, y por el "!" detrás, se convierte en false