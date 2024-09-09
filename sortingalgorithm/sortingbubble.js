function bubble(arr){
  let isswap;
  do{
    isswap = false
  for(i=0; i<arr.length;i++)
     if(arr[i] && arr[i+1] && arr[i] > arr[i+1] ){
      const temp = arr[i] 
        arr[i] =  arr[i+1]
        arr[i+1] = temp
        isswap = true 
     }
     } while(isswap)
 return arr
}

let array = [2,1,5,7,3]
console.log(bubble(array))