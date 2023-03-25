function fun(val){
    console.log(val)
}

const selectOpt = document.getElementById("mytech")

selectOpt.addEventListener("change", cb)

function cb(){
    console.log("selected tech is --> ",selectOpt.value)
}