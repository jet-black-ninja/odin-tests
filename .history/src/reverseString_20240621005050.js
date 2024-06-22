function reverseString(string){
    let i=0,j=string.length;
    while(i<j){
        let temp=string[i];
        string[i]=string[j];
        string[j]=temp;
        i++;
        j--;
    }
    return string;
}

module.exports= reverseString;