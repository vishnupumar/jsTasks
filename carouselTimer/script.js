let images = document.querySelectorAll('.slide');
let count = 0;
function slider(counter){
    images.forEach((img,index)=>{
        if(index !== counter){
            img.style.display = 'none'
        }else if(index == counter){
            img.style.display = 'block'
        }
    })
}
let timeleft = 9;
let timer = setInterval(()=>{
    
    if(timeleft <= 0){
        clearInterval(timer)
    }
    let imageSilder = document.querySelector('.timer')
    imageSilder.innerText = timeleft;
    if(timeleft == 0){
        imageSilder.style.display = 'none'
    }
    timeleft -= 1;
},1000)

slider(count)
setInterval(()=>{
    let l = images.length;
    slider(count)
    if(count == l-1){
        count=0
    }else{
        count++;
    }
},5000)

