/*Escribe una función llamada `frecuencias` que reciba una cadena de texto y retorne un objeto con el número de veces que aparece cada caracter (exceptuando el espacio en blanco)*/

let contador=1;
function frecuencias(dato){
  dato=Array.from(dato);
  dato=dato.sort();
  let datos=[];
  for (let k=0;k<dato.length;k++){
    if(dato[k]!=" "){
    datos.push(dato[k]);
  }
}
  let lista=[];
  let repeticiones=[];
  for (let i=0; i<datos.length;i++){
    if(datos[i+1]===datos[i]){
      contador++;
       }
    else{
      lista.push(datos[i]);
      repeticiones.push(contador);
      contador=1;
      }
    }
  let c=[];
  for (let j=0;j<lista.length;j++){
       c.push(lista[j]+":"+repeticiones[j]);
  }
  return (c)
}

console.log(frecuencias("hola mundo"));
// { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }

console.log(frecuencias("anita lava la tina"));
//{ a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }