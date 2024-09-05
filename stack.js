class stack{
    constructor(){
        this.stack=[];     
    }

    Insert(...data){
        this.stack.push(...data);
    }
    takeout(){
        this.stack.pop()
    }
    length(){
         return this.stack.length
    }
    topelem(){
       return   this.stack[this.stack.length -1 ]
    }
     isempty(){
      return  this.stack.length === 0
     }
     clear(){
        return this.stack = []
     }
     contain(e){
        return this.stack.includes(e) 
     }
     reverse(){
        return this.stack.reverse()
     }
     printstack() {
        let arr=[]; 
        for (let i = 0; i < this.stack.length; i++) {
            arr.push(this.stack[i])
        }
        return arr;
    }
}
let shyam = new stack()
shyam.Insert(2,3,4,5,6,7,8)
shyam.takeout()
console.log(shyam.printstack())