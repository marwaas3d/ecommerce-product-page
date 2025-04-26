let burger = document.getElementById('burger');
let menu = document.querySelector('.mobile-menu');
let closeMenu = document.getElementById('closeMenu');

let overLay = document.getElementById("blur")

burger.onclick = function () {
  menu.classList.remove('d-none');
  overLay.style.display = "block";

}

closeMenu.onclick = function () {
  menu.classList.add('d-none');
  overLay.style.display = "none";
}

/************************************************ */
let cartShopping = document.getElementById("cart-shopping");
let cartMenu = document.getElementById("cartMenu");


cartShopping.addEventListener("click", function () {
    if (cartMenu.style.display === "none") {
        cartMenu.style.display = "block";
    } else {
        cartMenu.style.display = "none";
    }
});

/************************************************ */
let links = document.querySelectorAll(".links li");
links.forEach(function(link){
    link.onclick = function(){
        links.forEach(function(li){
            li.classList.remove("active")
        })

        this.classList.add("active")
    }
})


/************************************************ */
let imageOne = document.getElementById("img-1");
let imageTwo = document.getElementById("img-2");
let imageThree = document.getElementById("img-3");
let imageFour = document.getElementById("img-4");

let changedImg = document.getElementById("changedImg")


imageOne.addEventListener("click",function(){
    changedImg.src = './images/image-product-1.jpg';

    document.querySelectorAll(".img").forEach(function (e) {
        e.classList.remove("activeImg");
    });
    this.classList.add("activeImg");
})

imageTwo.addEventListener("click",function(){
    changedImg.src = './images/image-product-2.jpg';

    document.querySelectorAll(".img").forEach(function (e) {
        e.classList.remove("activeImg");
    });
    this.classList.add("activeImg");
})

imageThree.addEventListener("click",function(){
    changedImg.src = './images/image-product-3.jpg';

    document.querySelectorAll(".img").forEach(function(e){
        e.classList.remove("activeImg");
    });
    this.classList.add("activeImg")
})

imageFour.addEventListener("click",function(){
    changedImg.src = './images/image-product-4.jpg';

    document.querySelectorAll(".img").forEach(function (e) {
        e.classList.remove("activeImg");
    });
    this.classList.add("activeImg");
})

/********************************************************* */
let emptyCart = document.getElementById("emptyCart");
let addToCart = document.getElementById("addToCart");
let addedItemDetail = document.getElementById("addedItemDetail");
let numberOfItems = document.getElementById("numberOfItems");
let number = document.getElementById("number")


let deletBtn = document.getElementById("deletBtn");

addToCart.onclick = function(){
    numberOfItems.innerHTML =1;
    emptyCart.style.display = "none"
    addedItemDetail.classList.remove("d-none");
    addedItemDetail.classList.add("d-block");    
    number.innerHTML =1;
}

deletBtn.onclick = function(){
    addedItemDetail.classList.remove("d-block");    
    addedItemDetail.classList.add("d-none");
    emptyCart.style.display = "block"
    numberOfItems.innerHTML = 0;
    number.innerHTML =0;
}


/**************************************************** */
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let multiply = document.getElementById("multiply")


plus.onclick= function(){
    if(numberOfItems.innerHTML >= 1){
        numberOfItems.innerHTML++;
        multiply.textContent = numberOfItems.innerHTML;
        number.textContent = numberOfItems.innerHTML;
    }
}


minus.onclick= function(){
    if(numberOfItems.innerHTML>0){
        numberOfItems.innerHTML--;
        multiply.textContent = numberOfItems.innerHTML;
        number.textContent = numberOfItems.innerHTML;    
    }
    if(numberOfItems.innerHTML ==0){
        addedItemDetail.classList.remove("d-block");    
        addedItemDetail.classList.add("d-none");
        emptyCart.style.display = "block"
    }
}

/**************************************************************** */
let show = document.getElementById("show");
let X = document.getElementById("X");

changedImg.onclick = function(){
    overLay.style.display = "block";
    show.style.display = "block"
}

X.onclick=function(){
    overLay.style.display = "none";
    show.style.display = "none"   
}


/***************************************************************** */


let imageOnelay = document.getElementById("img-1lay");
let imageTwolay = document.getElementById("img-2lay");
let imageThreelay = document.getElementById("img-3lay");
let imageFourlay = document.getElementById("img-4lay");

let changedImglay = document.getElementById("changedImglay")


imageOnelay.addEventListener("click",function(){
    changedImglay.src = './images/image-product-1.jpg';

    document.querySelectorAll(".img").forEach(function (e) {
        e.classList.remove("activeImg");
    });
    this.classList.add("activeImg");
})

imageTwolay.addEventListener("click",function(){
    changedImglay.src = './images/image-product-2.jpg';

    document.querySelectorAll(".img").forEach(function (e) {
        e.classList.remove("activeImg");
    });
    this.classList.add("activeImg");
})

imageThreelay.addEventListener("click",function(){
    changedImglay.src = './images/image-product-3.jpg';

    document.querySelectorAll(".img").forEach(function(e){
        e.classList.remove("activeImg");
    });
    this.classList.add("activeImg")
})

imageFourlay.addEventListener("click",function(){
    changedImglay.src = './images/image-product-4.jpg';

    document.querySelectorAll(".img").forEach(function (e) {
        e.classList.remove("activeImg");
    });
    this.classList.add("activeImg");
})
/***************************************************************** */
/***************************************************************** */
/***************************************************************** */
/***************************************************************** */
let right = document.getElementById("right");
let left = document.getElementById("left");


let images = [ 
    './images/image-product-1.jpg',
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg',
];

let currentIndex = 0; 

right.addEventListener("click", function() {
    currentIndex = currentIndex + 1; 

    if (currentIndex == images.length) {
        currentIndex = 0; 
    }
    
    changedImg.src = images[currentIndex]; 
    
});

left.addEventListener("click", function() {
    currentIndex = currentIndex - 1; 

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    
    changedImg.src = images[currentIndex]; 
    
});