//ifelse same as cpp
//switch same as cpp
//ternary operator same as cpp
//loops same as cpp

//these are string methods
// let username = "admin";
// console.log(username.at(0)); //a
// console.log(username.length); //5
// console.log(username.toUpperCase()); //ADMIN
// console.log(username.toLowerCase()); //admin
// console.log(username.includes("min")); //true
// console.log(username.startsWith("ad")); //true
// console.log(username.endsWith("in")); //true
// console.log(username.indexOf("n")); //4
// console.log(username.slice(1, 4)); //dmin
// console.log(username.replace("admin", "user")); //user
// console.log(username.trim()); //admin (removes whitespace) 
// let phoneNumber = "123-456-7890";
// let cleanedNumber = phoneNumber.replace(/-/g, ""); //1234567890
// console.log(phoneNumber.padStart(14, "+1-")); //+1-123-456-7890
// console.log(phoneNumber.padEnd(14, "-ext"));
// //a good exmple of how slicing works is seperating aa name into 1st and laast naame
// let fullName = "John Doe";
// let firstName = fullName.slice(0, fullName.indexOf(" ")); //John
// let lastName = fullName.slice(fullName.indexOf(" ") + 1); //Doe
// console.log(firstName);
// console.log(lastName);


//method chaining
// let username = window.prompt("Enter your username:");
// username=username.trim();
// let letter= username.at(0);
// letter=letter.toUpperCase();
// let extra= username.slice(1);
// extra=extra.toLowerCase();
// let finalUsername= letter+extra;
// console.log(finalUsername);
// username=username.trim().at(0).toUpperCase()+username.slice(1).toLowerCase();
// console.log(username);


//functiones
// function square(x){
//     console.log("The square of "+x+" is "+x*x);
//     return x*x;
    
// }
// square(5);

// function isValidEmail(email) {
//     if(email.includes("@")){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let email = window.prompt("Enter your email:");
// if(isValidEmail(email)){
//     console.log("Valid email");
// }
// else{
//     console.log("Invalid email");
// }

//globle vs local scope


//temperature converter

const textbox = document.getElementById("textbox");
const toFahrenheitBtn = document.getElementById("toFahrenheit");
const toCelsiusBtn = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;
function convert(){
    if(toFahrenheitBtn.checked){
        temp = Number(textbox.value);
        temp = (temp * 9/5) + 32;
        result.textContent = temp.toFixed(2) + " °F";
    }
    else if(toCelsiusBtn.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * 5/9;
        result.textContent = temp.toFixed(2) + " °C";
    }
    else{
        result.textContent = "Please select a conversion type.";
    }

}


//Arrays 
// let fruits = ["apple", "banana", "cherry"];
// console.log(fruits[0]); //apple
// console.log(fruits.length); //3
// fruits.push("date"); //adds date to the end of the array
// console.log(fruits);
// fruits.pop(); //removes the last element (date)
// fruits.unshift("avocado"); //adds avocado to the beginning of the array
// console.log(fruits);
// fruits.shift();
// let index = fruits.indexOf("banana");
// if(index !== -1){
//     console.log("Banana is at index: " + index);
// }
// else{
//     console.log("Banana not found in the array.");
// }


//spread operator is used to unpack elements of an array or object
// let arr=[1,2,3];
// let maax = Math.max(...arr); //3
// console.log(maax);
// let arr2 = [...arr, 4, 5];
// //u caan also use spread operator on strings
// let str = "hello";
// let chars = [...str]; //['h', 'e', 'l', 'l', 'o']
// console.log(chars);

// //shallow copy
// let fruits = ["apple", "banana"];
// let newfruits=[...fruits];
// console.log(newfruits); //['apple', 'banana']

// let vegetables = ["carrot", "broccoli"];
// let combined = [...fruits, ...vegetables];
// console.log(combined); //['apple', 'banana', 'carrot', 'broccoli']


//rest parameters are used to collect multiple elements into an array




