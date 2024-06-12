let num = 1
while (num>=1 && num<=100){
    
    if (num%3 && !(num%5)){
        console.log("Fizz")
    }else if (num%5 && !(num%3)){
        console.log("Buzz")
    }else if (num%3 && num%5){
        console.log("FizzBuzz")
    }else{
        console.log(num)
    }
}