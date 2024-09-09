
function breakar(array){
    if(array.length === 1){
        return array;
    }
let middle = Math.floor(array.length/2)
let left = array.slice(0,middle)
let right =array.slice(middle)

return merge(breakar(left), breakar(right))
}
function merge(left,right){
    let result = []
    let i = 0;
    let j = 0;
    while(i < left.length && j < right.length){
        if(left[i] <= right[j]){
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
}
