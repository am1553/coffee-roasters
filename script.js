// MENU TOGGLE
// -- selectors
const menuBtn = document.getElementById("menu-button");
const menuBtnImg = menuBtn.children[0];

menuBtn.addEventListener("click", ()=> {
    if(menuBtnImg.getAttribute("src") === "assets/shared/mobile/icon-hamburger.svg") {
        menuBtnImg.setAttribute("src", "assets/shared/mobile/icon-close.svg");
        document.querySelector(".navigation").style.top = "100px";
    } else {
        menuBtnImg.setAttribute("src", "assets/shared/mobile/icon-hamburger.svg");
        document.querySelector(".navigation").style.top = "-1000%";
    }
})

function navigatePlan() {
    location.href = "plan.html";
} 

// OPTION INPUT IN SUMMARY
// -- text-selectors-inputs
const preferenceInputText = document.querySelector(".preference-input");
const typeInputText = document.querySelector(".type-input");
const quantityInputText = document.querySelector(".quantity-input");
const grindInputText = document.querySelector(".grind-input");
const deliveryInputText = document.querySelector(".delivery-input");

const preferenceInputTextId = document.getElementById("preference-input");
const typeInputTextId = document.getElementById("type-input");
const quantityInputTextId = document.getElementById("quantity-input");
const grindInputTextId = document.getElementById("grind-input");
const deliveryInputTextId = document.getElementById("delivery-input");



// TOGGLE OPEN CUSTOM OPTIONS
// -- selectors
const accordionButton = document.getElementsByClassName("heading-btn");

for(let i = 0; i < accordionButton.length; i++) {

    accordionButton[i].addEventListener("click", ()=> {
        
        if(accordionButton[i].nextElementSibling.style.height === "450px") {
            accordionButton[i].nextElementSibling.style.height = "0px"
            accordionButton[i].children[1].style.transform = "rotate(0deg)"
        } else {
            accordionButton[i].nextElementSibling.style.height = "450px"
            accordionButton[i].children[1].style.transform = "rotate(180deg)"
        }
    })
}

// SELECTING OPTIONS
for(let i = 0; i < accordionButton.length; i++) {
    const accordionWrapper = accordionButton[i].nextElementSibling.children;

    for(let j = 0; j < accordionWrapper.length; j++) {
        accordionWrapper[j].addEventListener("click", ()=> {
            
            for(let k = 0; k < accordionWrapper.length; k++) {
                accordionWrapper[k].classList.remove("selected");
            }
            accordionWrapper[j].classList.add("selected");
            
            document.getElementById("price-input").innerText = accordionWrapper[j].lastChild.previousSibling.children[0].innerText;
            console.log(accordionWrapper[j].lastChild.previousSibling.children[0]);


// -- -----------------------------------------------------adding text to inputText
            const preference = document.querySelectorAll(".preference-button");
            const bean = document.querySelectorAll(".bean-button");
            const quantity = document.querySelectorAll(".quantity-button");
            const grind = document.querySelectorAll(".grind-button");
            const delivery = document.querySelectorAll(".delivery-button");

            for(let i = 0; i < preference.length; i++) {
                
                if(preference[i].classList.contains("selected") === true) {
                    const preferenceName = preference[i].children[0].innerHTML;
                    preferenceInputText.innerText = preferenceName;
                    preferenceInputTextId.innerText = preferenceName;
                }
            }
            for(let i = 0; i < bean.length; i++) {
                
                if(bean[i].classList.contains("selected") === true) {
                    const beanName = bean[i].children[0].innerHTML;
                    typeInputText.innerText = beanName;
                    typeInputTextId.innerText = beanName;
                }
            }
            for(let i = 0; i < quantity.length; i++) {
                
                if(quantity[i].classList.contains("selected") === true) {
                    const quantityName = quantity[i].children[0].innerHTML;
                    quantityInputText.innerText = quantityName;
                    quantityInputTextId.innerText = quantityName;
                }
            }
            for(let i = 0; i < grind.length; i++) {
                
                if(grind[i].classList.contains("selected") === true) {
                    const grindName = grind[i].children[0].innerHTML;
                    grindInputText.innerText = grindName;
                    grindInputTextId.innerText = grindName;
                }
            }
            for(let i = 0; i < delivery.length; i++) {
                
                if(delivery[i].classList.contains("selected") === true) {
                    const deliveryName = delivery[i].children[0].innerHTML;
                    deliveryInputText.innerText = deliveryName;
                    deliveryInputTextId.innerText = deliveryName;
                }
            }
            
        })
    }
}

document.getElementById("create-my-plan").addEventListener("click", ()=> {
    document.querySelector(".complete-order").style.top = "100px";
    document.querySelector(".complete-order").scrollIntoView();
})