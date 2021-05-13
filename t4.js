function binsearch(arr, number)
{
    beg = 0, end = arr.length;
    while(1){
        mid = Math.trunc((end-beg)/2)+beg;
        if(end-beg>0){
            if(arr[mid] == number){
                return mid;
            }
            else if(arr[mid] > number){
                end = mid;
            }
            else if(arr[mid] < number){
                beg = mid;  
            }
            else 
                return NaN;
        }
        else 
            return NaN;
    }
}

const arr = [0, 1, 2, 3, 4, 5, 6, 8, 20, 50]
console.log(binsearch(arr, 20));

