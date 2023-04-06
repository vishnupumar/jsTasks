const password = document.getElementById('password')

password.addEventListener('keyup',checker)
function checker(){
    const disp = document.querySelector('.strength')

    if(password.value.match(/[0-9]/) && 
        password.value.match(/[a-z]/) &&
        password.value.match(/[A-Z]/) &&
        password.value.match(/[!\@\#\$\%\^\*\&\(\)\_\+\~\=\-\`\,\.\<\>\?]/) &&
        password.value.length > 7){
        disp.innerText = 'Strong'
        disp.style.display = 'block'
        disp.style.color = 'green'
    }else if(password.value.length == 0){
        disp.style.display = 'none'
    }else{
        disp.innerText = 'Weak'
        disp.style.color = 'red'
        disp.style.display = 'block'
    }
    
}