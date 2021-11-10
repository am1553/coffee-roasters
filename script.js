// MENU TOGGLE
// -- selectors
const menuBtn = document.getElementById("menu-button");
const menuBtnImg = menuBtn.children[0];
// -- --eventlisteners
menuBtn.addEventListener("click", ()=> {
    if(menuBtnImg.getAttribute("src") === "assets/shared/mobile/icon-hamburger.svg") {
        menuBtnImg.setAttribute("src", "assets/shared/mobile/icon-close.svg");
        document.querySelector(".navigation").style.top = "100px";
    } else {
        menuBtnImg.setAttribute("src", "assets/shared/mobile/icon-hamburger.svg");
        document.querySelector(".navigation").style.top = "-1000%";
    }
})

// TOGGLE OPEN CUSTOM OPTIONS
// -- selectors
const accordionButton = document.getElementsByClassName("heading-btn");

// -- --function
for(let i = 0; i < accordionButton.length; i++) {

    accordionButton[i].addEventListener("click", ()=> {
        
        if(accordionButton[i].nextElementSibling.style.height === "500px") {
            accordionButton[i].nextElementSibling.style.height = "0px"
            accordionButton[i].children[1].style.transform = "rotate(0deg)"
        } else {
            accordionButton[i].nextElementSibling.style.height = "500px"
            accordionButton[i].children[1].style.transform = "rotate(180deg)"
        }
    })
}

// SELECTING OPTIONS

for(let i = 0; i < accordionButton.length; i++) {
    const accordionWrapper = accordionButton[i].nextElementSibling.children;

    for(let z = 0; z < accordionWrapper.length; z++) {
            accordionWrapper[z].addEventListener("click", ()=> {
                
                accordionWrapper[z].classList.toggle("selected");
                
            })
    }
}
