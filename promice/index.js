const numbers = new Promise((resolve, reject) => {
    try {
        setTimeout(()=>{
            const randomNum = Math.round(Math.random() * 10)
            resolve(randomNum)
        },1000) // we increase time then reject will print
        setTimeout(()=>{
            reject("It is rejected")
        },1000)
    } catch (error) {
        console.log(error)
    }
})
.then((res)=>{
    console.log(res)
})
.catch((res)=>{
    console.log("\ncatch block message :",res)
})