function selection(array){
    let n = array.legnth
    for(let i =0; i < n-1;i++){
        let minindex = i
        for(let j = i + 1; j<n;j++ ){
            if(array[j]< array[minindex]){
                minindex = j 
            }
        }
        if(minindex !== i){
        [array[i], array[minindex]] = [array[minindex], array[i]]
        }
    }
}