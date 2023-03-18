// Declared a num variable and assigned value
var num = 25;

// Using square root of method i converted num value
let sqaureRoot = Math.sqrt(num)

console.log(sqaureRoot)

// generated random numbers from 0 - 10
let random = Math.round(Math.random() * 10) 

console.log(random)

// declared date constructor
let today = new Date()

console.log(today)

// By using getter function to print year,month and date
console.log("Year " + today.getFullYear() + " Month " 
        + (today.getMonth()+ 1) + " Date "
         + today.getDate() + " Day "
         + today.getDay());

// By using setter function to set year, month and date
today.setFullYear(2022)
today.setMonth(11)
today.setDate(31)

console.log(today)

// Extracting the no. of milliseconds between the "birthday" object and "today" object
var birthDay = new Date("2000-10-15")

var ms =  today.getTime() - birthDay.getTime();

console.log(ms)

// Extracting the no. of days between the "birthday" object and "today" object
var days = (today.getTime() - birthDay.getTime()) / 864_00_000;

console.log(days)


