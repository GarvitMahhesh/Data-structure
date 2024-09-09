function partition(arr,low,high){
let p = arr[high];
let i = low -1
 for(let j = low; j< high; j++){
    if(arr[j] < p){
        i++;
        [arr[j] , arr[i]] = [arr[i],arr[j]]
    }
 }
[ arr[i+1],arr[high] ]= [arr[high],arr[i+1]]
return i +1

}
function quicksort(arr,low=0,high=arr.length-1){
 if( low  < high ){
    let pivit = partition(arr,low,high)
    quicksort(arr,low,pivit-1)
    quicksort(arr,pivit+1,high)
 }
}