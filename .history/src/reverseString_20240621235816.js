function reverseString(string){
    for(int i=0,j=string.length;i<=j;i++,j--){
        let temp=string[i];
        string[i]=string[j];
        string[j]=temp;
    }
    return string;
}
console.log(reverseString('abcd'));
module.exports= reverseString;