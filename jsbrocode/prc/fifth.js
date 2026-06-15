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
let fruits = ["apple", "banana", "cherry"];
function display(element){
    console.log(element);

}
fruits.forEach(display);//ye foreach ek ek karke har element traverse karega aur usko display  function me dega
function UPPERCASE(element,index,array){
    array[index]=element.toUpperCase();
}
fruits.forEach(UPPERCASE);//ye foreach ek ek karke har element traverse karega aur uska element index aur array  UPPERCASE function me dega
console.log(fruits);//ye array ke sare element ko UPPERCASE kar dega