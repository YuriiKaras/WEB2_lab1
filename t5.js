function maxdate(arr)
{
    max = new Date(arr[0]);
    for(i = 1; i < arr.length; i++){
        tmp = new Date(arr[i]);
        if(tmp>max){
            max = tmp;
        }
    }
    return max
}


dates = ['1970-12-31', '2010-01-01', '2077-07-17', '2021-05-05'];
console.log(maxdate(dates));
