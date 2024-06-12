let fizz_num
let buzz_num

function FizzBuzz2(palabra1, palabra2, fizz_num, buzz_num){
    let lista = ""
    for(x=1;x<=100;x++){
        if(x%fizz_num && !(x%buzz_num)){
            console.log(palabra1)
        }else if(x%buzz_num && !(x%fizz_num)){
            console.log(palabra2)
        }else if(x%buzz_num && x%fizz_num){
            console.log(palabra1 + palabra2)
        }else{
            console.log(x)
            lista = lista + x
        }
    }
}

FizzBuzz2("caramelo", "dulce", 8, 4)
console.log(lista)