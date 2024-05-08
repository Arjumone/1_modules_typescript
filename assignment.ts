// problem:1
const repeatString = (param: string, param2: number): string => {
  let repeat: string = "";
  for (let i = 0; i < param2; i++) {
    repeat += param;
  }
  return repeat;
};

const result1 = repeatString("Hello!", 3);
console.log(result1);

//problem:2
function findLargestNumber(numbers: number[]): number {
  let largestNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
}

const largeNo = findLargestNumber([10, 5, 8, 20, 3]);
console.log(largeNo);

//problem:3
function filterEvenNumbers(arr:number[]):number[]{
    const array = arr.filter(a=>a%2===0);
    return array;

}

const arrNo = filterEvenNumbers([1,2,3,4,5,6]);
console.log(arrNo);

// /problem:4
function reverseArray<T>(array: T[]): T[] {
  return array.reverse();
}

const reversArray = reverseArray(["apple", "banana", "cherry"]);
console.log(reversArray);
const reversNumber = reverseArray([10, 20, 30]);
console.log(reversNumber);

//problem:5
interface Student {
  name: string;
  age: number;
  grades: number[];
}
const student1: Student = {
  name: "Bob",
  age: 17,
  grades: [75, 80, 82, 88, 90],
};

function calculateAverageGrade(student1: Student): number {
  const totalGrade = student1.grades.reduce((acc, curr) => acc + curr, 0);
  return totalGrade / student1.grades.length;
}

const averageGrade = calculateAverageGrade(student1);
console.log(averageGrade);

//problem:6
type Book = {
  title: string;
  author: string;
  publishedYear: number;
};

const book1: Book = {
  title: "Sample Book",
  author: "John Doe",
  publishedYear: 2022,
};
function isRecentBook(book1: Book): boolean {
  const currentYear = new Date().getFullYear();
  const year = currentYear - book1.publishedYear <= 5;
  return year;
}

const recentBook = isRecentBook(book1);
console.log(recentBook);

//problem:7
function logString(param: unknown): void {
  if (typeof param === "string") {
    console.log(param);
  } else {
    console.error("Input is not a string");
  }
}

const strings = logString("Hello,Typescript");
// console.log(strings);

const numbers = logString(42);
// console.log(numbers);

//problem:8
class Car {
    brand:string;
    model:string;
    year:number;


    constructor(brand:string,model:string,year:number){
        this.brand = brand;
        this.model= model;
        this.year= year;
    }

    displayInfo():void{
        console.log(`Your car model is : ${this.year} ${this.brand} ${this.model}`);
    }
}

const myCar = new Car('Toyota','Corolla',2020);
const car = myCar.displayInfo();
// console.log(car);

