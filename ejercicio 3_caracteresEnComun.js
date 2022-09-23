function caracteresEnComun(str1,str2){
    str1=("Hola");
    str2=("Mundo");
    list=[];    
    if (str1.length>=str2.length){
      for (let i=0;str1.length;i++){
        for (let j=0;str2.length;j++){
          if (str2[j]==str1[i]){
            list.push(str2[i]);
          }
        }
      } 
    }
    else {
      for (let k=0;str2.length;k++){
        for (let l=0;str1.length;l++){
          if (str2[k]==str1[l]){
            list.push(str1[l]);
          }     
        }
      }
    }
    console.log (list);
      return list;//*/
    }
    
    console.log (caracteresEnComun("Hola", "Mundo")); // ["o"]
    console.log (caracteresEnComun("German", "Gabriela")); // ["G", "e", "r", "a"]*/
    console.log (caracteresEnComun("Hola", "Bye")); // []*/