/*Escribe una función llamada numDuplicados que reciba un string y retorne el número de caracteres que aparecen más de una vez.*/
function numDuplicados (repeticiones){
    let duplicados=[];
    for (let i=0; i<repeticiones.length;i++){
        if (i+1<repeticiones.length && repeticiones.slice(i+1).indexOf(repeticiones[i])!=-1&&duplicados.indexOf(repeticiones[i])==-1){
          duplicados.push(repeticiones[i]);
        }
    }
    duplicados=duplicados.length
    return duplicados
}
console.log(numDuplicados("abcaa"));
console.log(numDuplicados("abab"));
console.log(numDuplicados("abc")); 