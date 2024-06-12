// Una función que se llame triplicador que tome un número como input (osea, como Parámetro) y retorne el triple de ese valor.

let triplicador = x => x*3

// Una función multiplicador que tome dos números como Parámetros y devuelva el producto de los dos.

let multiplicador = (x,y) => x*y

// Una función division que tome dos números como Parámetros y devuelva el resultado de dividir el primero por el segundo.

let division = (x,y) => x/y

//Una función resto que tome dos números como Parámetros y devuelva el resultado del módulo del primero sobre el segundo.

let resto = (x,y) => x%y

let num = 5

num = triplicador(num)
num = multiplicador(num, 12)
num = division(num / 12)
num = resto(num, 3)
