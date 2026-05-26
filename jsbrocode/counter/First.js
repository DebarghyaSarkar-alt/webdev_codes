// let name="Debarghya Sarkar";
// let age=19;
// let isStudent=false;
// document.getElementById("p1").textContent=`your name is ${name}`;
// document.getElementById("p2").textContent=`your age is ${age}`;
// document.getElementById("p3").textContent=`you are a student: ${isStudent}`;


// let username = window.prompt("Enter your name");
// document.getElementById("p1").textContent=`your name is ${username}`;


// let username;
// document.getElementById("submit").onclick=function(){
//     username=document.getElementById("Name").value;
//     document.getElementById("p1").textContent=`your name is ${username}`;
// }
// console.log(Name);
// var Name="Debarghya Sarkar";//var is function scoped and is hoisted but not initialized until the line of code is executed. Hence it will print undefined instead of throwing an error. 


//type conversion
// let age = window.prompt("Enter your age");
// age = Number(age);
// age+=1;
// console.log(`Next year you will be ${age} years old`);


//constants
// const pi=3.14;
// let radius;
// let circumference;
// document.getElementById("submit").onclick=function(){
//     radius=document.getElementById("radius").value;
//     radius = Number(radius);
//     circumference = 2 * pi * radius;
//     document.getElementById("p1").textContent=`The circumference of the circle is ${circumference}`;
// }
const count=document.getElementById("countlabel");
let counter=0;
const increment=document.getElementById("increase");
const decrement=document.getElementById("decrease");
const reset=document.getElementById("reset");
increment.onclick=function(){
    counter++;
    count.textContent=counter;
}
decrement.onclick=function(){
    counter--;
    count.textContent=counter;
}
reset.onclick=function(){
    counter=0;
    count.textContent=counter;
}
