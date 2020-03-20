class Parent{
    constructor(){
        this.fatherName="Alom Hossain";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
    }
    getFullName(){
        return this.name +" "+ this.fatherName;
    }
}


const baby =new Child("Shamim");
const baby2= new Child("Shahadut");
console.log(baby.getFullName());
console.log(baby2.getFullName());