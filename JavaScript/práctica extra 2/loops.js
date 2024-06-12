let num = 1
while(num <=10){
  console.log(num)
  num += 2
} 

// En la consola se mostrará 1, luego 3, 5, 7, 9
// Ya que la condición es que se repita mientras num sea igual o menor a 1
// y si va aumentando de 2 en 2, en un momento será 11 y la condición ya no se cumplirá

num = 1
while(num <= 20){
  if(!(num % 4)){
    console.log(num)
  }
  num++
}

// La consola mostrará todos los números entre 1 y 20 divisibles por 4
// ya que dentro del while, la condición es que un número tiene que ser divisible por 4 para mostrarlo
// Y luego aumenta el número en 1

num = 100
while(num < 150 ){
  console.log(num+1)
  num--
}

// es un bucle infinito, ya que el número inicial es 100 y el while se ejecuta si num es menor a 150
// por pantalla siempre se mostrará un número más alto que num, pero luego se restará uno
// Por lo que estará restando constantemente a num, siendo infinito ya que nunca superará 150