// Todos los números entre -10 y 19.

let num = -10
while (num <= 19){
    console.log(num)
    num++
}

// Todos los números pares entre 10 y 40.

num = 10
while(num <= 40){
  if(!(num % 2)){
    console.log(num)
  }
  num++
}

// Todos los números impares entre 300 y 333.

num = 300
while(num <= 333){
  if(num % 2){
    console.log(num)
  }
  num++
}

// Todos los números entre 5 y 50 que sean divisibles por 5 y 3 al mismo tiempo.

num = 5
while(num <= 50){
  if(!(num % 3) && !(num%5)){
    console.log(num)
  }
  num++
}

