var childEle = document.querySelector('.child')
var parentEle = document.querySelector('.parent')


childEle.addEventListener('click', changeVal)
parentEle.addEventListener('click', changeParent)

function changeParent(e){
    let newEle = document.createElement('h2')
    newEle.innerText = `target ele --> ${e.target.classList} and
            current ele --> ${e.currentTarget.classList}`
    parentEle.append(newEle)
}

function changeVal(e){
    let newEle = document.createElement('h2')
    let clicked = 0;
    newEle.innerText = `target ele --> ${e.target.classList} and
            current ele --> ${e.currentTarget.classList}`
            e.target.innerText = `${e.target.innerText} clicked`      
    childEle.appendChild(newEle)
}

function addEle(num){
    let card = document.createElement('div')
    card.innerText = `${num}`
    card.classList.add(`card${num}`)
    childEle.append(card)
}

for(let i=0;i<10;i++){
    addEle(i)
}
console.log(abc)


