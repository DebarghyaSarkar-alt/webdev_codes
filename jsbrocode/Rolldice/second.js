// let x = Math.PI;
// console.log(x);
// console.log(Math.floor(x));
// console.log(Math.ceil(x));
// console.log(Math.round(x));
// console.log(Math.max(1, 2, 3, 4, 5));
// console.log(Math.min(1, 2, 3, 4, 5));
// console.log(Math.random());
// console.log(Math.pow(2, 3));
// console.log(Math.sqrt(16));
// console.log(Math.cos(x));
// console.log(Math.sin(x));


//RANDOM NUMBER GENERATOR
// let randomNum=Math.floor(Math.random()*6)+1 ;//for a number between 1 and 6
// console.log(randomNum); 
// let min = 50;
// let max = 100;
// let randomNum=Math.floor(Math.random() * (max-min))+min ;//for a number [50, 100]


const myButton=document.getElementById("Button");
const myLabel=document.getElementById("Label");
const min=1;
const max=6;
let randomNum;
myButton.onclick=function(){
    randomNum=Math.floor(Math.random() * (max-min))+min ;
    myLabel.textContent=randomNum;
}