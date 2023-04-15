const url = document.getElementById("url")
const size1 = document.getElementById("size1")
const size2 = document.getElementById("size2")

url.innerHTML = window.location.href;
size1.innerHTML = `Using window - Height : ${window.innerHeight}, Width : ${window.innerWidth}`
size2.innerHTML = `Using screen - Height : ${screen.height}, Width : ${screen.width}, colorDepth : ${screen.colorDepth}`
