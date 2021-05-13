function buble_sort(arr)
{
    sorted = false
    while(!sorted){
        sorted = true
        for(i=1; i<arr.length; i++){
            if(arr[i]<arr[i-1]){
                sorted = false;
                tmp = arr[i];
                arr[i] = arr[i-1];
                arr[i-1] = tmp;
                break;
            }
        }
    }
}

arr = [8, 5, 6, 10, 2, 1, 50]
buble_sort(arr);
console.log(arr);