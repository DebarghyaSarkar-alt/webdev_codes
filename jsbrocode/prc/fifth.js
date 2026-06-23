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
//we ar enow going to change the same get max marks code to function expression
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
// setTimeout(()=>console.log("HELOOO FTER 3 SEC"),3000)
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
