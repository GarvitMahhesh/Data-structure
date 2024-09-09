function insertion(arr){
    for(i=1;i<arr.length;i++){
        current = arr[i]
        j = i -1;
    while(j >= 0 && arr[j] > current) {
        arr[j+1] = arr[j]
        j--
    }

    arr[j+1] = current
}
return arr
}
let array = [4,5,2,3,1]
console.log(insertion(array))