let mensaje

for(x = 1; x<=5;x++){
    mensaje = "Bienvenido " + x + "!"
    if (x>2){
        mensaje = mensaje + "Te presento a " + (x-1)
    }
    if (x>3){
        mensaje = mensaje + ", a " + (x-2)
    }
    if (x>4){
        mensaje = mensaje + ", a " + (x-3)
    }
    if (x=5){
        mensaje = mensaje + "y a " + (x-4)
    }    
}