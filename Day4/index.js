// Created shoppingList array with some values
let shoppingList = ["rice","salt","pepper","peanuts","jaggery"]

// Using forEach method printing elements
shoppingList.forEach(element => {
    console.log(element);
});

// One item added in the end 
shoppingList.push("almonds");

// One item removed from the end 
shoppingList.pop();

// One item removed from the start 
shoppingList.shift();

// One item added in the start 
shoppingList.unshift("chilli powder");

// filtering elements with less than 6 charaters
let shortList = shoppingList.filter((ele) => {
       return ele.length < 6;
})

console.log(shortList)

// converting first letter in capital case
let capitalList = shoppingList.map((ele)=> {
    return ele[0].toUpperCase() + ele.slice(1);
})

console.log(capitalList)

// calculating total characters in the array
let totalChar = shoppingList.reduce((total,ele) => {
    return total + ele.length;
},0)

console.log(totalChar)

// printing only first three elements
let partialList = shoppingList.slice(0,3);

console.log(partialList)

// removing second and third elements from the orginal array
shoppingList.splice(1,2);

console.log(shoppingList);

// sorting the in alphabetical
shoppingList.sort()

console.log(shoppingList)