let FirstUI= document.querySelector(".FirstUI");
let FirstHeading= document.querySelector(".FirstHeading");
let FirstBtn= document.querySelector(".FirstBtn");
let FirstInput= document.querySelector(".FirstInput");

let SecondUI= document.querySelector(".SecondUI");
let SecondHeading= document.querySelector(".SecondHeading");
let SecondBtn= document.querySelector(".SecondBtn");
let SecondInput= document.querySelector(".SecondInput");

let ThirdUI= document.querySelector(".ThirdUI");
let ThirdHeading= document.querySelector(".ThirdHeading");
let ThirdBtn= document.querySelector(".ThirdBtn");
let ThirdInput= document.querySelector(".ThirdInput");

let FourthUI= document.querySelector(".FourthUI");
let FourthHeading= document.querySelector(".FourthHeading");
let FourthBtn= document.querySelector(".FourthBtn");
let FourthInput= document.querySelector(".FourthInput");

// First UI function
FirstBtn.addEventListener("click", () =>{
    if(FirstInput.value === ""){
        FirstHeading.textContent = "Please enter your name to proceed";
        return;
    }else{
    FirstUI.style.display = "none";
    SecondUI.style.display = "block";
    SecondHeading.textContent = "Welcome " + FirstInput.value + " Pick a number";
    }
});

// Second UI function
SecondBtn.addEventListener("click", () => {
    if(SecondInput.value === ""){
        SecondHeading.textContent = "Please enter a number to proceed";
        return;
    }else if(SecondInput.value < 1 || SecondInput.value > 10){
        SecondHeading.textContent = "Please enter a number between 1 and 10";
        SecondInput.value = "";
        return;
    }else{
    SecondUI.style.display = "none";
    ThirdUI.style.display = "block";
    }
});

// Third UI function
ThirdBtn.addEventListener("click", () => {
    if(ThirdInput.value === ""){
        ThirdHeading.textContent = "Please enter your name to proceed";
        return;
    }
    ThirdUI.style.display = "none";
    FourthUI.style.display = "block";
    FourthHeading.textContent = "Welcome " + ThirdInput.value + " Guess the number";
});

// Fourth UI function
