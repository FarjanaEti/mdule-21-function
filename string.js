function string(str){
      const size=str.length;
      console.log(str,size); 
      if(size%2===0){
         return true;                     
      } 
      return false;                      
}
console.log(string('rafi'));
console.log(string('talat'));