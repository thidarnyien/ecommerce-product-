// cart and cart-active
let cartCard = document.querySelector(".active-cart");
let cart= document.querySelector(".cart");
let ulTag =document.querySelector(".itemListToBuy");
const itemsQuantity = document.querySelector(".badge");
const checkoutBtn = document.querySelector("#checkoutBtn");
const selectItem = document.querySelector(".selectItem");
let quantityToBuy = document.querySelector(".quantity");
let totalAmount = document.querySelector(".totalAmount");


// thumbnail effect
let thumbnails = document.querySelector(".thumbnails").children;
let changeImage = (event) => {
    document.querySelector('.pro-img').src = event.children[0].src;
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove("active"); 
        thumbnails[i].children[1].classList.remove('d-block');  
    }
    event.classList.add('active');
    event.children[1].classList.add('d-block');
}
//lightbox
let closeBtn = document.querySelector("#closeBtn");
let leftBtn = document.querySelector("#leftBtn");
let rightBtn = document.querySelector("#rightBtn");

document.querySelector('.pro-img').onclick = ()=>{document.querySelector(".lightbox").style.display ="block"}
closeBtn.onclick = () => {document.querySelector(".lightbox").style.display="none"}
let lightboxThumbnails = document.querySelector(".lightbox-thumbnails").children;
let changeImageLightbox = (event) => {
    document.querySelector('.lightbox-proImg').src = event.children[0].src;
    
    for (let i = 0; i < lightboxThumbnails.length; i++) {

        lightboxThumbnails[i].classList.remove("active"); 
        lightboxThumbnails[i].children[1].classList.remove('d-block');  
    }
    event.classList.add('active');
    event.children[1].classList.add('d-block');
}
let i = 0;
rightBtn.onclick = ()=>{
    i +=1;
    if(i>3) {
        i=0;
    }
    document.querySelector('.lightbox-proImg').src = lightboxThumbnails[i].children[0].src;

}
leftBtn.onclick = ()=>{
        i -= 1;
    if(i < 0){
        i= 3;
    }
    document.querySelector('.lightbox-proImg').src = lightboxThumbnails[i].children[0].src;
    }

 cart.addEventListener("click",()=>{
    ulTag.textContent = "";
    createLi();
    cartCard.classList.toggle("d-block");
})
let createLi = () =>{
    let li = document.createElement("li");
    li.classList.add("list-unstyled")
    if(itemsQuantity.textContent == '0'){
        li.textContent = "Your cart is empty";
        li.classList.add("my-5");
        checkoutBtn.style.display = "none";
        selectItem.style.display="none"
    }else{
        checkoutBtn.style.display = "inline";
        selectItem.style.display = "block";
        li.append(selectItem);
        let price = 125.00;
        quantityToBuy.textContent = itemsQuantity.textContent;
        totalAmount.textContent ="$" + ( price * parseInt(quantityToBuy.textContent));
    }
    ulTag.append(li);
    return ulTag;
}
let deleteItem = () =>{
    ulTag.innerHTML = "";
    itemsQuantity.textContent = '0';
    createLi();
}

let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus");
let inputItemCount = document.querySelector(".itemCount");

let itemCount = 0;
plus.addEventListener("click", ()=>{
    itemCount += 1;
    inputItemCount.value = itemCount;

});
minus.addEventListener("click", ()=> {
    if(itemCount == 0){
        return;
    }else{
        itemCount -= 1;
        inputItemCount.value = itemCount;

    }
})
//click addToCart and update count(cart)

document.querySelector("#addToCart").addEventListener("click", ()=>{
    itemsQuantity.textContent = inputItemCount.value;

})

//nav

let menu = document.querySelector('.fa-bars');
menu.addEventListener("click", ()=> {
    document.querySelector("nav").classList.add("activeMenu");
})
document.querySelector(".closeMenu").onclick= ()=>{
    document.querySelector("nav").classList.remove("activeMenu");
}