const parentEle = document.getElementById("parent").children;
console.log(parentEle)


for(let i=0;i < parentEle.length;i++){
    if(i === 0){
        parentEle[i].style.background = "blue"
        parentEle[i].style.color = "white"
    }else if(i === 8){
        parentEle[i].style.background = "green"
        parentEle[i].style.color = "white"
    }else if(i === (parentEle.length-1)){
        parentEle[i].style.background = "palevioletred"
        parentEle[i].style.color = "white"
    }else if(i%2 === 1){
        parentEle[i].style.background = "lime"
        parentEle[i].style.color = "white"
    }
}




