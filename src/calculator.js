function calculator(input1,operation,input2){
    if(operation==='+'){
        return input1+input2;
    }
    if(operation==='-'){
        return input1-input2;
    }
    if(operation==='*'){
        return input1*input2;
    }
    if(operation==='/'){
        return input1/input2;
    }
    return -1;
};
module.exports=calculator;