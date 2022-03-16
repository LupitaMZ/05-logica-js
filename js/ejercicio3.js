/* var num=prompt ("Dame 3 numeros: ")
if (num>8){
    alert("el numero es mayos")
}else{
    alert("no es mayor")
} */
/* function compararNum(num1,num2,num3){
    num1=prompt("dame un numero")
    num2=prompt("dame un numero")
    num3=prompt("dame un numero")
    var resultado= num1+num2+num3

    return resultado
}
var resultadoTotal=compararNum
alert("la suma es" + resultadoTotal) */
var num1=prompt("Da un número por favor: ")//pregunto al usuario 
var num2=prompt("Da OTRO número por favor: ")
var num3= prompt("Da OTRO número por favor: ")

num1 = parseInt(num1)
num2 = parseInt(num2)
num3 = parseInt(num3)
//la comporacion
if(num1>num2 && num1>num3){
    alert ("el numero es el #1 mayor " + num1)
}
else if (num2>num1 && num2>num3){
    alert("el #2 es el mayor " + num2)
}
else {
    alert ("el #3 es el mayor " + num3)
}


