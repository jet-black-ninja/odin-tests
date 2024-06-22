function ceasar(string,key){
return [...string]
    .map((l,i)=>{
        const c=string.charCodeAt(i);
        if(c>=65 && c<=90)
            return String.fromCharCode((c-65+key)%26+65);
        if(c>=97 && c<=122)
            return String.fromCharCode((c-97+key)%26+97);
        return l;
    })
    .join('');
}
module.exports=ceasar;