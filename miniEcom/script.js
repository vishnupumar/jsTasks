const users = document.querySelector('.users')
const products = document.querySelector('.products')
const productimg = document.querySelector('.left-img-products')
const productContent = document.querySelector('.right-product')
const productCategory = document.querySelector('.left-product')

 const fetchUser = async() =>{
    let userData = await fetch("https://randomuser.me/api/?results=1");
    let data = await userData.json();
    let result = await data.results;
    console.log(result)
    users.innerHTML = `
        <div class="image" ><img src=${result[0].picture.medium} alt="image"/>
        </div>
        <div class="username">
            <h4>${result[0].name.title} ${result[0].name.first} ${result[0].name.last}</h4>
        </div
    `
}
fetchUser()
const fetchProduct = async(num) =>{
    let userData = await fetch(`https://fakestoreapi.com/products/${num}`);
    let data = await userData.json();
    let result = await data;
    console.log(result)
    productimg.innerHTML = '';
    productContent.innerHTML = '';
    productimg.innerHTML = `<img src="${result.image}" alt="productImg" />`

    productContent.innerHTML = `<h2>${result.category.toUpperCase()}</h2>
        <h4>Title</h4>
        <p>${result.title}</p>
        <h4>Price</h4><p>${result.price}</p>
        <h4>Description</h4><p>${result.description}</p>
        <h4>Rating</h4><p>${result.rating.rate}</p>
    `
}

productCategory.addEventListener('click' ,(e)=>{
    if(e.target.innerText == "Electronics"){
        fetchProduct(14)
    }else if(e.target.innerText == "Jewellery"){
        fetchProduct(5)
    }else if(e.target.innerText == "MensWearing"){
        fetchProduct(1)
    }else if(e.target.innerText == "WomensWearing"){
        fetchProduct(16)
    }
    
})
fetchProduct(14)


