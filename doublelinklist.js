class node{
    constructor(prev,data,next){
        this.prev = prev
        this.data = data
        this.next= next
    }
}
class doublelinkedlist{
    constructor(){
        this.head = null
        this.tail = null
    }

   insertatstart(data){
    let newnode = new node(this.head,data,null)
    let current = this.head
    if(this.head !==null){
        current.prev = newnode
    }
    if(this.tail === null){
        this.head = newnode
    }
     current = newnode
   } 
   inseratend(data){
    let newnode = new node(null,data,this.tail)
    if(this.tail !==null){
        this.tail.next = newnode

    }
    this.tail=newnode
    if(this.head == null){
        this.head = newnode
    }
   }
   insertatgiven(){
    let newnode = new node(prev,data,prev.next)
    if(prev.next != null){
     prev.next.prev = newnode
    }
        prev.next = newnode
 if(newnode.next === null){
    this.tail = newnode
 }

   }

   deletefirstnode(){
   if ( this.head === null){
    "empty linkedlist"
   }
   if(this.head != null){
    this.head = this.head.next
    this.head.prev =null
   }
   }
   deletelasdtnode(){
    if(this.tail ===  null){
        console.log("empty hsi bhai")
    }
   this.tail = this.tail.prev
   this.tail.next = null
   }
   reversedoublelinklist(){
    let current = this.head
    let temp = null;
    while(current != null){
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;
    current=current.prev
    }
    if(temp != null){
        this.tail =this.head
        this.head = temp.prev
    }
   }
}
