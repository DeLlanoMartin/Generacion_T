// *Expresiones teniendo en cuenta el valor que deben retornar*:
// Que compare 2 Strings y retorne un valor true.

let string = "cadena de caracteres"
let texto = "cadena de más caracteres"
(string || texto)

// Que compare 2 Strings y devuelva false.

let texto_fake = ""
let texto_normal = "normal"

(texto_fake && texto_normal)

// Que involucre un String y un Número y retorne false.

let num = "5"
let num_real = -0

(num && num_real)

// Que involucre un String y un Número y retorne true.

let numero = "16"
let numero_posta = 9

(num && num_real)