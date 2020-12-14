let menu = document.getElementById("ulitem");
menu.style.maxHeight = "0px";

function menubtn() {
    if (menu.style.maxHeight == "0px") {
        menu.style.maxHeight = "200px"
    } else {
        menu.style.maxHeight = "0px"
    }
}



// js for single product page----------------------------------------------

let productImg = document.getElementById("product_img");
let smallImg = document.getElementsByClassName("small_img");

smallImg[0].onclick = function() {
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function() {
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function() {
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function() {
    productImg.src = smallImg[3].src;
}

// js for single product page----------------------------------------------


// js for form---------------------------------------




function register() {
    var indicator = document.getElementById("indicator");
    var logform = document.getElementById("logform");
    var regform = document.getElementById("regform");
    regform.style.transform = "translateX(0px)";
    logform.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(106px)";

}

function login() {
    var indicator = document.getElementById("indicator");
    var logform = document.getElementById("logform");
    var regform = document.getElementById("regform");
    regform.style.transform = "translateX(300px)";
    logform.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";

}