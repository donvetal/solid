 //Interface segregation principle - говорит что те классы которые наследуются от базового класса,
// если они не используют методы базового класса, то не должны от них зависеть

//============================Primer 1 не очень хороший подход, не выполняется Interface segregation principle
// class Animal {
//   constructor(name) {
//     this.name = name
//   }
//
//   walk() {
//     console.log(`${this.name} can walk`);
//   }
//
//   swim() {
//     console.log(`${this.name} can swim`);
//   }
//
//   fly(){
//     console.log(`${this.name} can fly`);
//   }
// }
//
// class Dog extends Animal{
//   fly(){
//     return null
//   }
// }
//
// class Eagle extends Animal{
//   swim(){
//     return null
//   }
//
// }
//
// class Whale extends Animal{
//   fly() {
//     return null
//   }
//   walk(){
//     return null
//   }
//
// }
//
// const dog = new Dog('Rex')
// console.log(dog);
// dog.walk()
// dog.swim()
// dog.fly()
//
// const eagle = new Eagle('Hunter')
// console.log(eagle);
// eagle.fly()
// eagle.swim()
// eagle.walk()
//
// const whale = new Whale('Rick')
// console.log(whale);
// whale.swim()
// whale.walk()
// whale.fly()

//=====================================Primer2 будем использовать композицию

class Animal {
  constructor(name) {
    this.name = name;
  }
}

const swimmer = {
  swim() {
    console.log(`${this.name} can swim`);
  }
};

const flyer = {
  fly(){
    console.log(`${this.name} can fly`)
  }
}

const walker = {
  walk(){
    console.log(`${this.name} can walk`)
  }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, walker, swimmer)
Object.assign(Eagle.prototype, flyer, walker)
Object.assign(Whale.prototype, swimmer)



const dog = new Dog('Rex')
console.log(dog);
dog.walk()
dog.swim()

const eagle = new Eagle('Hunter')
console.log(eagle);
eagle.fly()
eagle.walk()

const whale = new Whale('Rick')
console.log(whale);
whale.swim()
