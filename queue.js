class queue{
    constructor(){
        this.queue=[]
    }

   Intert(...data){
    this.queue.push(...data)
   } 
   delete(){
    if(this.isempty()){
        return "empty hai bhai "
    }
     return this.queue.shift()
   }
   length(){
     return this.queue.length
   }
   isempty(){
    this.queue.length === 0
   }
   peek(){
    this.queue[0]
   }
   clear(){
    return this.queue =[]
   }
   printqueue(){
    let str=""
    for(let i=0;i< this.queue.length; i++){
        str +=this.queue[i]
    }
    return str;
   }
}
let jasmine = new queue()
jasmine.Intert(1,2,3,4,4,5)
jasmine.peek()
console.log(jasmine.printqueue())