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