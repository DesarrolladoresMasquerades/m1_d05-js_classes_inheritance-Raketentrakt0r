const person1 = {
    firtName:"Ali",
    age:23
}

const person2 = {
    firstName: "Giovanni",
    age:55
}

class Person { // Classes are with capital letters
    
    constructor(firstName, age){ // constructur is a function that will contruct the object, si se olvida poner algun parametro,  constructor(firstName = "", age = 0)
        this.firstName = firstName || "",   //in the constructor we define and assign to create properties
        this.age = age || 0                // 2da forma de hacerlo de los parametros olvidados
    }

    tellAge(){
        return this.age
    }

}

const marco = new Person("Marco","48")    // here we use the constructor function invoked 
const carlos = new Person("Carlos","28") 
const carol = new Person("Carol") 

console.log(carol.tellAge())
console.log(marco.tellAge())
console.log(carlos.tellAge())

class Animal {
    constructor(nameOfAnimal, ageOfAnimal){
        this.fur=""
        this.weight=0
        this.age=ageOfAnimal
        this.legs = 4
        this.name = nameOfAnimal
    }
    speak(){
        return `Hello I am ${this.name}`
    }
    walk(){
        return `I am going out alone beacause I am ${this.age} years old`
    }
}

const snowflake = new Animal("snowflake",3)

console.log(
    snowflake.speak(),
    snowflake.walk()
)

class Cat extends Animal {
    constructor(nameOfAnimal, ageOfAnimal){
        super(nameOfAnimal, ageOfAnimal)  // To add properties we use super() method
        this.kind = "cat"

    }
    speak(){
    return super.speak() + `and I am a ${this.kind}`
    }
}

class Dog extends Animal{
    constructor(nameOfAnimal, ageOfAnimal){
        super(nameOfAnimal, ageOfAnimal)           // To add properties
        this.kind = "dog"

    }
    speak(){
        return super.speak() + `and I am a ${this.kind}`
    }
}

const martini = new Dog("Martini", 12)
console.log("speaks and walks: ",martini.speak(), martini.walk())

const santana = new Cat("Santana",9)
console.log("speaks an walks: " , santana.speak(),santana.walk())