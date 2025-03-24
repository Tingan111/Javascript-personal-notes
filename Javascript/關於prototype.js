function Person(name){
    this.name=name;
    this.sayHello=function(){
        console.log(`Hello,my name is ${this.name}`);
    }
}

const p1= new Person("Andy");
const p2= new Person("SSS");
console.log(p1.sayHello === p2.sayHello);
//false
p1.sayHello();
p2.sayHello();


function Person1(name){
    this.name=name;
}

Person1.prototype.sayHello=function(){
    console.log(`Hello, my name is ${this.name}`);
};

const p3 =new Person1("Alice");
const p4 =new Person1("Bob");

console.log(p3.sayHello===p4.sayHello);
//true
console.log(Object.getPrototypeOf(p3.sayHello)); 


//語法糖
class xyz {
    constructor(x,y,z){
    this.x=x;
    this.y=y;
    this.z=z;

}}
const a=new xyz();
a.x=1;
a.y=2;
a.z=3;
console.log(a);

const b=new xyz(1,2,3);
console.log(b.x+a.x);
console.log(a===b);



