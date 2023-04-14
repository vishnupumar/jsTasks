const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const age = document.getElementById("age")
const city = document.getElementById("city")
const country = document.getElementById("country")
const btn = document.getElementById("sub")
const personInfo = document.querySelector('.personInfo')
const del = document.getElementById('del')
const inputs = document.querySelectorAll('.show')
btn.addEventListener('click', storeValue)
del.addEventListener('click', deleteValue)

function storeValue(e){
    e.preventDefault()
    let person = {
        fname : fname.value,
        lname : lname.value,
        age : age.value,
        city : city.value,
        country : country.value
    }
    console.log(person)
    let personObj = JSON.stringify(person)
    localStorage.setItem("personIn", `${personObj}`)
    let per = localStorage.getItem("personIn")
    let pers = JSON.parse(per)
    personInfo.innerHTML = `<p>${pers.fname} ${pers.lname}</p>
    <p>${pers.age}</p>
    <p>${pers.city}</p>
    <p>${pers.country}</p>
    <p class="edit">edit</p>`
    inputs.forEach((ele)=>
     ele.style.display = "none"
    )

    const edit = document.querySelector('.edit')
    edit.addEventListener('click', editVal)
    
}

function editVal(){
    inputs.forEach((ele)=>
    ele.style.display = "block"
    )
}

function deleteValue(){
    localStorage.clear()
    inputs.forEach((ele)=>
     ele.style.display = "block"
    )
    personInfo.innerHTML=''
}
let per = localStorage.getItem("personIn")
if(per){
    inputs.forEach((ele)=>
     ele.style.display = "none"
    )
    let pers = JSON.parse(per)
    personInfo.innerHTML = `<p>${pers.fname} ${pers.lname}</p>
    <p>${pers.age}</p>
    <p>${pers.city}</p>
    <p>${pers.country}</p>
    <p class="edit">edit</p>`
    const edit = document.querySelector('.edit')
    edit.addEventListener('click', editVal)

    
}



    