document.addEventListener('keydown', cd)

let container = document.querySelector('.container')

function cd(e){
    console.log(e)
    if(e.code == 'Space'){
        container.innerHTML = `<div class="box">you pressed : <span class="key">${e.code}</span></div><div class="key-code">${e.keyCode}</div>`
    }else{
    container.innerHTML = `<div class="box">you pressed : <span class="key">${e.key}</span></div><div class="key-code">${e.keyCode}</div>`
    }
}
