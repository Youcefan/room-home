let imgChange = document.querySelector(".image-change");
let title = document.getElementById("title");
let para = document.getElementById("para");
let next = document.getElementById("angle-right");
let back = document.getElementById("angle-left");
let angle = document.querySelector(".angle");
let info1 = document.querySelector(".info1");
let ul = document.getElementById("ul");
let turn = 0;
const mediaQuery = window.matchMedia("(max-width: 912px)");
let image = mediaQuery.matches ? "mobile" : "desktop";


let changeUl = document.getElementById("changeUl");
let test = document.querySelector(".test");
let ul2 = document.getElementById("ul2");
let size = document.querySelector(".test ul li a");
let mode = 0 ;



function cho() {
    backgroud();
    switch (turn) {
        case 0:
            imgChange.style.backgroundImage = `url(images/${image}-image-hero-1.jpg)`;
            title.innerHTML = `Discover innovative ways to decorate`;
            para.innerHTML = `We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.`;
            break;
        case 1:
            imgChange.style.backgroundImage = `url(images/${image}-image-hero-2.jpg)`;
            title.innerHTML = `We are available all across the globe`;
            para.innerHTML = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.`;
            break;
        case 2:
            imgChange.style.backgroundImage = `url(images/${image}-image-hero-3.jpg)`;
            title.innerHTML = `Manufactured with the best materials`;
            para.innerHTML = `Our modern furniture store provides a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`;
            break;
    }
}

function backgroud() {
    image = mediaQuery.matches ? "mobile" : "desktop";
    if(mediaQuery.matches){
       imgChange.appendChild(angle);
       angle.classList.remove("angle");
       angle.classList.add("angle-new");
       ul.style.display="none";
       test.style.display="flex";

    } else {
        info1.appendChild(angle);
        angle.classList.remove("angle-new");
       angle.classList.add("angle");
       ul.style.display="flex";
       test.style.display="none";
    }
    
}

function handleResize() {
    backgroud();
    cho();
}

next.onclick = function() {
    if (turn < 2) {
        turn += 1;
        cho();
    }
    console.log(turn);
};

back.onclick = function() {
    if (turn > 0) {
        turn -= 1;
        cho();
    }
    console.log(turn);
};

mediaQuery.addEventListener("change", handleResize);

cho();

changeUl.onclick = function(){
    if(mode === 0) {
    test.style.background = "white";
     ul2.innerHTML = `<li><a href="#" id="size">home</a ></li>
                    <li><a href="#" id="size">shop</a ></li>
                    <li><a href="#" id="size">about</a ></li>
                    <li><a href="#" id="size">contact</a ></li>`
     test.style.gap = "0%" 
     changeUl.src = "images/icon-close.svg" ;
     mode = 1;
    }
    else{
        test.style.background = "none";
        ul2.innerHTML = `<li><a href="#">room</a></li>`;
        test.style.gap = "20%" ;
        changeUl.src ="images/icon-hamburger.svg";
        mode = 0;
    }
}

