//-----Defining constants and variables----------
const errorMessage = document.querySelector(".error-message");
const sendBtn = document.getElementById("send-btn");
const emailContainer = document.querySelector(".email");
const emailInput = document.querySelector(".email input");
const emailRegXep = new RegExp("(^[a-z0-9])([a-z0-9\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\]\*]*)@[a-z0-9]+[\.]{1}.+[a-z0-9]+$", "i");

//------prepare page--------
// errorMessage.style.opacity = "0";

//-------add EventListeners------
sendBtn.addEventListener("click", ()=> {
    let userInput = emailInput.value;
    if (emailRegXep.test(userInput)) {
        errorMessage.style.opacity = "0";
        emailContainer.style.border = null;
    }
    else {
        errorMessage.style.opacity = "1";
        emailContainer.style.border = "2px solid hsl(0, 93%, 68%)";
    }
})
