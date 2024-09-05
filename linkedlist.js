
class node{
    constructor(data,next= null){
        this.data =data 
        this.next=next
    }
    
}
class linkedlist{
    constructor(){
        this.head=null
    }


   insertatsrtart(){
    let newnode = new node(data)
    this.head = newnode;
   } 

   insertatlast(data){
    let newnode = new node(data)
    if(this.head===null){
        console.log("khali hai lodu ")
        this.head =newnode;
    }
    let last = this.head
    while(last.next != null){
        last = last.next
    }
    last.next = newnode;
   }

   insertatgivenposition(previous,data){
    let newnode = new node(data,previous)
    if(this.head===null){
        this.head=newnode;
    }
    previous.next = newnode.next
    previous.next = newnode;
   }
   deletefirstnode(){
    if(this.head === null){
        console.log("empty hai bhai ")
        return 
    }
    this.head = this.head.next
   }
   deletelastnode(){
    if(this.head===null){
        console.log("emoty bidu")
        return 
    }
    let secondlast = this.head
    if(secondlast.next===null){
        secondlast=null;
    }
   while(secondlast.next.next){
    secondlast = secondlast.next
   }
   secondlast.next = null;

   }
   deletewithgivenkey(key){
    if(this.head===null){
        console.log("empty bhai")
        return
    }
    let current = this.head
    if(current.data === key){
        current = current.next;
    }
    while(current.next != null){
    if(current.next.data === key ){
        current.next = current.next.next; 
    }
    current =current.next
   }
}
 searchinlinkedlist(data){
    while(this.head){
        if (this.head.data === data){
            console.log("milgya")
            return 
        }{
        this.head = this.head.next
        }   

    }
 }
 traverse(){
    let arr = []
    let current = this.head
    while(current){
       arr.push(current.data)
       current =  current.next
    } return arr;
 }

 reversealinkedlist(){
    let next = null
    let prev = null
    let current = this.head
    while(current){
     next = current.next;
     current.next = prev;
     prev = current;
     current = next
    }
    current=prev;
 }
 
}

