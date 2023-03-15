// Function for multiplying number by 2
function multiplyByTwo(num){
    return num * 2; 
}

// Function for dividing number by 2
function divideByTwo(num){
    return num/2;
}

// Function to find Prime Numbers from 1 to any number
function findPrime(num){

    // looping from 2 to num
    for(let i=2;i<=num;i++){

        // checking each number
        let prime = i;
        let flag = true;

        for(let j=2;j<i;j++){
            if(i%j == 0){
                
                // if number is divisible by any digits then flag becomes false
                flag = false;
            }
        }

        // Printing only if flag is true other wise it is not a prime number
        if(flag){
            console.log(prime);
        }    
    }
}

// calling multiplyByTwo function by 20 as an argument
console.log(multiplyByTwo(20));

// calling divideByTwo function by 20 as an argument
console.log(divideByTwo(20));

// calling findPrime function by 20 as an argument
findPrime(20);