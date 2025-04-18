class user{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
const one=new user('kevin',18)
const two=new user('Mary',20)
if(one.age>two.age){
    console.log(`${one.name}比${two.name}大${Math.abs(one.age-two.age)}歲`);    
}else if(one.age<two.age){
    console.log(`${one.name}比${two.name}小${Math.abs(one.age-two.age)}歲`);    
}else{
    console.log(`${one.name}跟${two.name}一樣大`);
}
