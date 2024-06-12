// En este ejercicio deberás pensar qué devuelve cada Función sin ejecutarla en la consola:
// 1

function test1(x, y) {
    return y - x
  }
  
  test1(10, 40)

// Devolverá 30, ya que en el orden en que se pasan los parámetros, x vale 10 e y vale 40
// y 40 - 10 = 30

//2

function test2(x, y) {
    return x * 2
    console.log(x)
    return x / 2
}
  
test2(10)

// devuelve 20, porque x vale 10 y lo multiplica por 2
// Y el return detiene la función y devuelve el valor  