'use strict'

//Switch

let age = 25;
let print = "";

switch(age)
   {
    case 18:
        print = "You have reached the age of majority ";
    break;
    case 25:
        print = "You are an adult";
    break;
    case 40:
        print = "the crisis of 40";
    break;
    case 75:
        print = "You are an elder";
    break;
    default:
        print = "Your age is neutral";
    break;
   } 

console.log(print);