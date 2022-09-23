/*Escribir una función llamada ajustarTexto que reciba dos argumentos:  un string y un número (que representa una longitud).  La función debe retornar la cadena ajustada a la longitud recibida. Si la longitud de la cadena es mayor al número, debes recortar la cadena. De lo contrario agrega espacios en blanco hasta completar la longitud.*/

function ajustarTexto(str, num){
    list=[]
    for (let i=0;str.length;i++){
      if (str>=num){
        lista.push(str[i])
      }
    return list.split(num)
  }
  
  
  console.log (ajustarTexto("hola", 2));