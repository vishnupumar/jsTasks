// declared a variable and assigned with some sentence
var sentence = "defines a string variable called sentence"

// printing the length of the sentence
let len = sentence.length
console.log(len)

// printing the first occurance of the character "e"
let indOf = sentence.indexOf("e")
console.log(indOf)

// printing the first word from the sentence
var firstWordIndex = sentence.indexOf(" ");
var firstWord = sentence.slice(0,firstWordIndex)

console.log(firstWord)

// printing the last word from the sentence
var lastWordIndex = sentence.lastIndexOf(" ")
var lastWord = sentence.substring(lastWordIndex + 1)

console.log(lastWord)

// checking "variable" in sentence
console.log(sentence.includes("variable"));

// replacing variable to python 
sentence = sentence.replace("variable", "python")

console.log(sentence)

// spitting the sentence with space
let words = sentence.split(" ");

// converting each word first character in uppercase
let newSentence = words.map((ele) => {
    return ele[0].toUpperCase() + ele.slice(1);
})

// using join method again converting to sentence
newSentence = newSentence.join().replaceAll(","," ")
console.log(newSentence)

// using backticks printing the message
let message = `${sentence} ${indOf} ${len} ${lastWord}`

console.log(message)
