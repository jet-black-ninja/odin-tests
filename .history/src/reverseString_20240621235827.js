function reverseString(string){
    for(let i=0,j=string.length;i<=j;i++,j--){
        let temp=string[i];
        string[i]=string[j];
        string[j]=temp;
    }
    return string;
}
console.log(reverseString('abcd'));
module.exports= reverseString;