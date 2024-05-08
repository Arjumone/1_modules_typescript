// * 1.The significance of union and intersection types in Typescript.....

// * What are Union Types?
// Union types let us have a variable that can hold different kinds of values. For example, we can have a variable that can be either a number or a string.

// example:
type Numbers = string | number

function rollNumber(number: Numbers) {
    console.log(`My Roll is: ${number}`);
}

const rollNo = rollNumber("hello");
console.log(rollNo);


// In this example, Number is a union type that can hold either a string or a number. The rollNumber function can work with both strings and numbers because of this.

// * What are Intersection Types?
// Intersection types let us combine multiple types into one. This is helpful when we want to make an object that has properties or methods from different types.

// example:
interface Named {
    name: string;
}

interface Roll {
    roll: number;
}

type NamedAndRoll = Named & Roll;

function logName(obj: NamedAndRoll) {
    console.log(`Name: ${obj.name}`);
    console.log(`Roll: ${obj.roll}`);
  
}

const myObject: NamedAndRoll = {
    name: "Arju",
    roll: 333
};

logName(myObject);

// Here, Named and Roll are two types. By using an intersection type (NamedAndRoll), we can create objects that have properties or methods from both types.

// Moral:
// Types like union and intersection help us write better code in TypeScript. They make our code more flexible and allow us to work with different types of data in powerful ways. By using these types, we can write cleaner, easier to understand code and build better software.


// * 3.Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

// * What are Type Guards?
// Type guards are like guardians in our code. They help TypeScript understand the types of our data, especially when things get a bit confusing. Think of them as detectives that investigate and determine the type of a value at runtime.

// * Why are Type Guards Necessary?
// Imagine we have a variable that could be either a number or a string. Without type guards, TypeScript might get confused about what type the variable is. Type guards step in to clarify things for TypeScript, making sure our code works correctly.

// Various Examples:::
// * 1.typeof Type Guard: This type guard checks the type of a variable using the typeof operator.
// Example:::
function values(value: string | number) {
    if (typeof value === 'string') {
        console.log(`String value: ${value}`);
    } else {
        console.log(`Number value: ${value}`);
    }
}

values("Hello");
values(222);


// * 2.instanceof Type Guard: This type guard checks if an object is an instance of a particular class.
// Example:::
class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog barks");
    }
}

function speakOrBark(animal: Animal) {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.speak();
    }
}

speakOrBark(new Dog()); 
speakOrBark(new Animal()); 


// * 3.Custom Type Guard: This type guard is a function we define ourselves to check a specific condition.
// Example:::

interface Bird {
    sound: string;
}

interface Fish {
    color: string;
}

function isBird(animal: Bird | Fish): animal is Bird {
    return 'sound' in animal;
}

function performAction(animal: Bird | Fish) {
    if (isBird(animal)) {
        console.log(`The bird makes a sound: ${animal.sound}`);
    } else {
        console.log(`The fish is of color: ${animal.color}`);
    }
}

const bird: Bird = { sound: "kichirmichir" };
performAction(bird);

const fish: Fish = { color: "Blue" };
performAction(fish); 

// * Moral
// Type guards are essential tools in TypeScript that help us write safer and more reliable code. By understanding the different types of type guards and how to use them, we can make our code easier to understand and maintain.
