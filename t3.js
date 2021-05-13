function fact(num)
{
    if(Number.isInteger(num)){
        if(num > 0){
            return num*fact(num-1);
        }
        else if(num == 0){
            return 1;
        }
        else {
            return NaN;
        }
    }
    else {
        return NaN;
    }
}


num = 5;
console.log(fact(num));


