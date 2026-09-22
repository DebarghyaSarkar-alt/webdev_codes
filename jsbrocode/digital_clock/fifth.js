//callbacks are used to handle asynchronous operations in JavaScript. They allow you to pass a function as an argument to another function, which can then be executed at a later time.
//yo use call back we have to invoke a function into another function
// function goodmorning(name, callback) {
//     console.log("Good morning, " + name + "!");
//     callback(name);
// }

// function sayHello(name) {
//     console.log("Hello, " + name + "!");
// }

// goodmorning("Alice", sayHello);


//for each method is used to iterate over an array and execute a provided function once for each array element.
//array.forEach(callback);
//arr.forEach((element, index, array) => {
//});
// element,index,array are provided;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(display);//ye foreach ek ek karke har element traverse karega aur usko display  function me dega
// function display(element){
//     console.log(element);
// }
// function double(element,index,array){
//     array[index]=element*2;
// }
// numbers.forEach(double);//ye foreach ek ek karke har element traverse karega aur uska element index aur array  double function me dega
// console.log(numbers);//ye array ke sare element ko double kar dega
// let fruits = ["apple", "banana", "cherry"];
// function display(element){
//     console.log(element);

// }
// fruits.forEach(display);//ye foreach ek ek karke har element traverse karega aur usko display  function me dega
// function UPPERCASE(element,index,array){
//     array[index]=element.toUpperCase();
// }
// fruits.forEach(UPPERCASE);//ye foreach ek ek karke har element traverse karega aur uska element index aur array  UPPERCASE function me dega
// console.log(fruits);//ye array ke sare element ko UPPERCASE kar dega
// function Capitalize(element,index,array){
//     array[index]=element.charAt(0).toUpperCase()+element.slice(1).toLowerCase();
// }
// fruits.forEach(Capitalize);//ye foreach ek ek karke har element traverse karega aur uska element index aur array  Capitalize function me dega
// console.log(fruits);//ye array ke sare element ko Capitalize kar dega



//.map method is preety similar to for each but it creates a new array with the results of calling a provided function on every element in the calling array
// let numbers = [1, 2, 3, 4, 5];
// function double(element){
//     return element * 2;

// }
// let doubledNumbers = numbers.map(double);//ye map ek ek karke har element traverse karega aur usko double function me dega aur uska result ek new array me store karega
// console.log(doubledNumbers);//in for each we change thne original array but in map we create a new array with the results of calling a provided function on every element in the calling array





//filter method creates a new array with all elements that pass the test implemented by the provided function




// function even(element){
//     return element % 2 === 0;
// }
// let evenNumbers = numbers.filter(even);
// console.log(evenNumbers);


// const ages = [12, 17, 8, 21, 14];
// function isAdult(element){
//     return element >= 18;
// }
// let adults = ages.filter(isAdult);
// console.log(adults);
// const names = ["Alice", "Bob", "Charlie", "David"];
// function shortNames(element){
//     return element.length <= 4;
// }
// let shortNamesArray = names.filter(shortNames);
// console.log(shortNamesArray);

//reduce method executes a reducer function on each element of the array, resulting in a single output value.
//arr.reduce((accumulator, currentValue, currentIndex, array) => {
//}, initialValue);
//  const arr = [1, 2, 3, 4, 5];
//  function sum(accumulator, currentValue) {
//     return accumulator+currentValue;
//  }
//  let result = arr.reduce(sum);
//  console.log(result);
//  const marks = [85, 90, 78, 92, 88];
//  function max(currMax,currentValue){
//     return currMax>currentValue?currMax:currentValue
//  }
//  const highestMark = marks.reduce(max);
// console.log(highestMark);




//function expressions = way to define a function as values or variables.
// const hello = function(name){
//     console.log("Hello, " + name + "!");
// }
// hello("Alice");//function expression is invoked by calling the variable name and passing the arguments
// setTimeout(function(){
//     console.log("This message is displayed after 2 seconds.");
// },2000);
//we are now going to change the same get max marks code to function expression
// const marks = [83, 91, 78, 92, 88];
// const max = function(currMax, currentValue){
//     return currMax>currentValue?currMax:currentValue
// };
// const highestMark = marks.reduce(max);
// console.log(highestMark);
//or we can also do
// const highestMark = marks.reduce(function(currMax, currentValue){
//     return currMax>currentValue?currMax:currentValue
// });
// console.log(highestMark);
// const even = marks.filter(function(element){
//     return element%2===0;
// })
// console.log(even);
//arrow functions is a concised way of writing function expressions for example
// const hello=function(){
//     console.log("HELLO")
// }
// //this can be converted to (parameter)=>what we want to do with the parameter or with the function
// const hi = () => console.log("hi");
// hi()
// setTimeout(()=>console.log("HELOOO AFTER 3 SEC"),3000)
// const squares=marks.map((element)=> {return Math.pow(element,2)})//agr arrow function me return krna chaah rha h to curly braces use krna 
// console.log(squares)


//this keyword
// const person1 = {
//     name: "Debarghya Sarkar",
//     hello : function(){console.log(`Hi I am ${this.name}`)}//arrow function k andar this statement mat use kr

// }
// person1.hello();



//constructor:
// function Car(model,year,color){
//     this.model= model;
//     this.year = year;
//     this.color = color;

// }
// const car1 = new Car("braza","2004","yellow");
// console.log(car1.model);
// classes in javascript are similar to objects 

// class Product{
//     constructor(name,price){
//         this.name= name;
//         this.price=price;
//     }
//     display(){
//         console.log(`product:${this.name}`);
//         console.log(`price:${this.price}`);
//     }
// }
// const obj = new Product("CAR",1999);
// obj.display();
// class mathutil{
//     static PI=3.14;
//     static getDiameter(r){
//         console.log(2*r);
//     }
//     static getCircumfarence(r){
//         console.log(2*r*this.PI);
//     }
// }
// console.log(mathutil.PI);
// mathutil.getDiameter(10);
// mathutil.getCircumfarence(3);


// class user{
//     static count=0;
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//         user.count++;
//     }
//     static getUsercount(){
//         console.log(`There are ${user.count} people online`)
//     }
// }
// const obj1=new user("Dipannita",20);
// const obj2=new user("Debarghya",20);
// console.log(user.count);
// user.getUsercount()


//inheritance




//getters and setters
// class Student {
//   constructor(name, marks) {
//     this.name = name;
//     this._marks = marks;
//   }

//   // getter
//   get marks() {
//     return this._marks;
//   }

//   // setter
//   set marks(value) {
//     if (value < 0) {
//       console.log("Marks cannot be negative");
//     } else {
//       this._marks = value;
//     }
//   }
// }

// const s1 = new Student("Rahul", 85);

// console.log(s1.marks);   // getter called, output: 85

// s1.marks = 95;           // setter called
// console.log(s1.marks);   // output: 95

// s1.marks = -10;          // output: Marks cannot be negative

// let colors = ["red", "green", "blue","black","white"];

// console.log(colors); 
// // ["red", "green", "blue"]

// // swap red and blue
// [colors[0], colors[2]] = [colors[2], colors[0]];

// console.log(colors); 
// // ["blue", "green", "red"]
// const[first,second,third,...remaining]=colors;
// console.log(first)
// console.log(second)
// console.log(third)
// console.log(remaining)

//we can also use destructure to extract object details
// const person = {
//   name: "Rahul",
//   age: 21,
//   city: "Kolkata",
//   profession: "Student"
// };

// // destructuring
// const { name, age, city, profession,job = "unemployed" } = person;//u can give default values as well like here job

// console.log(name);        // Rahul
// console.log(age);         // 21
// console.log(city);        // Kolkata
// console.log(profession);  // Student
// console.log(job);


// const order = {
//   customerName: "Rahul",
//   item: "Pizza",
//   quantity: 2,
//   price: 250,
//   address: "Kolkata"
// };

// // object destructuring directly in function parameter
// function printOrderSummary({ customerName, item, quantity, price, address }) {
//   const total = quantity * price;

//   console.log(`Customer: ${customerName}`);
//   console.log(`Item: ${item}`);
//   console.log(`Quantity: ${quantity}`);
//   console.log(`Total Price: ₹${total}`);
//   console.log(`Deliver to: ${address}`);
// }

// printOrderSummary(order);


//nested objects
// const person = {
//     fullName: "Spongebob Squarepants",
//     age: 30,
//     isStudent: true,
//     hobbies: ["karate", "jellyfishing", "cooking"],
//     address: {
//         street: "124 Conch St.",
//         city: "Bikini Bottom",
//         country: "Int. Water"
//     }
// };

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[1]);
// console.log(person.address.country);


//arrray of objects
// const fruits = [
//     { name: "Apple", price: 100, quantity: 5 },
//     { name: "Banana", price: 40, quantity: 10 },
//     { name: "Orange", price: 80, quantity: 3 },
//     { name: "Mango", price: 120, quantity: 7 }
// ];
// fruits.forEach(fruit => {
//     console.log(fruit.name);
// });
// const names = fruits.map(fruit => fruit.name);

// console.log(names);
// const expensive = fruits.filter(fruit => fruit.price > 80);

// console.log(expensive);
// const totalPrice = fruits.reduce((sum, fruit) => {
//     return sum + fruit.price;
// }, 0);

// console.log(totalPrice);
// const maxfruit=fruits.reduce((max,fruit) => fruit.price>max.price?fruit:max);
// console.log(maxfruit)

//sort
// const numbers = [5, 2, 9, 1, 5, 6];
// //ascending order
// numbers.sort((a, b) => a - b);
// console.log(numbers); // [1, 2, 5, 5, 6, 9]
// //descending order
// numbers.sort((a, b) => b - a);
// console.log(numbers); // [9, 6, 5, 5, 2, 1]
// // we can sort array of objects according to a specific property
// const students = [
//     { name: "Alice", age: 20 },
//     { name: "Bob", age: 22 },
//     { name: "Charlie", age: 19 }
// ];
// students.sort((a, b) => a.age - b.age);//this sorts in ascending
// console.log(students); 
// //if we wantr to arrange a property which is string in lexicographical order we can do
// students.sort((a, b) => a.name.localeCompare(b.name));  
// console.log(students);


//shuffling an array fisher yates algorithm
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }
// const arr = [1, 2, 3, 4, 5];
// shuffleArray(arr);
// console.log(arr);


//dates

//format:year,month,day,hour,minute,second,millisecond
// const date = new Date(2024, 5, 15, 10, 30, 0, 0);//month is zero based so june is 5 u can also passed string based date here
// console.log(date);
// const year = date.getFullYear();
// const month = date.getMonth() + 1; // add 1 because months are zero-based

//closure
// function outer(){
//     let msg = "Hello from the outer function!";
//     function inner(){// this inner function has access to all the variables og the outer function 
//         console.log(msg);
//     }
//     inner();

// }
// outer()

//closure helps maintain privacy example
// let counter = 0;
// function increment() {
//     counter++;
//     console.log(counter);
// }
// increment();//1
// increment();//2
//abhi dekh ye above snippet me hum count ka value program k andar 100 daal die to output 101 and 102 ajayega but if we do..
// function createCounter() {
//     let counter = 0;
//     function increment() {
//         counter++;
//         console.log(counter);
//     }
//     return {increment}
// }
// const counter = createCounter();
// counter.increment()//1
// counter.increment()//2


//set timeout
// function greet(){
//     console.log("HELLOO")
// }
// //setTimeout(greet,5000)
// setTimeout(()=>console.log("Hiii"),3000)

//clear kisi bhi settimeout ko cancel kr deta h but uske lia ek id banana padhta h uss function ka jo tu cancel krna chahta h then pass krde
// const id=setTimeout(()=>console.log("Hiii"),3000)
// clearTimeout(id)



//digital clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
    
}
updateClock();
setInterval(updateClock, 1000);