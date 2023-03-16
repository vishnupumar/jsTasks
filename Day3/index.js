// Created person object
const person = {
    name : "vishnu",
    age : 26,
    email : "Vishnu@mail.com",
    hobbies : ["playing chess", "reading books"],
}

console.log(person)

// Using dot notation created location property and assigned value
person.location = "hyderabad"

// Using braket notation assigned value to email property
person["email"] = "vishnu123@gmail.com"

// Using dot notation created family property and assigned nested Objects
person.family = {
    mother : {
        name : "mom",
        age : 50
    },
    father : {
        name : "dad",
        age : 55
    },
    sibilings : [
        {
            name : "anu",
            age : 12
        },
        {
            name : "abhi",
            age : 14
        }
    ]
}

console.log(person)

function greet(name){
    console.log(`Welcome to my world -> ${name}`);
}

// Using dot notation created greet property and assigned function
person.greet = greet;

// Using dot notation calling function property and assigned value
person.greet("vishnu")

console.log("////// SHALLOW COPY ///////////");
let shallowCopy = person;

console.log(shallowCopy);

console.log("////// ORIGINAL ONE ///////////");

console.log(person);

console.log("////// DEEP CLONE ///////////");
let deepClone = JSON.parse(JSON.stringify(person));

deepClone.name = "Anu";

console.log(deepClone)

console.log("////// ORIGINAL ONE ///////////");
console.log(person);

console.log("////// OBJECT KEYS ///////////");
console.log(Object.keys(person))

console.log("////// OBJECT VALUES ///////////");
console.log(Object.values(person))

console.log("////// OBJECT ENTRIES ///////////");
console.log(Object.entries(person))

