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

let PlayerOneName;
let PlayerOneNumber;
let PlayerTwoName;

// First UI function
FirstBtn.addEventListener("click", () =>{
    PlayerOneName = FirstInput.value;
    FirstUI.style.display = "none";
    SecondUI.style.display = "block";
    SecondHeading.textContent = "Welcome " + PlayerOneName + " Pick a number";
});

// Second UI function
SecondBtn.addEventListener("click", () => {
    PlayerOneNumber = SecondInput.value;
    SecondUI.style.display = "none";
    ThirdUI.style.display = "block";
});

// Third UI function
ThirdBtn.addEventListener("click", () => {
    PlayerTwoName = ThirdInput.value;
    ThirdUI.style.display = "none";
    FourthUI.style.display = "block";
    FourthHeading.textContent = "Welcome " + PlayerTwoName + " Guess the number";
});

// Fourth UI function
FourthBtn.addEventListener("click", () => {
    if(FourthInput.value == PlayerOneNumber){
        FourthHeading.textContent = "Congratulations! You guessed the number!";
    } else {
        FourthHeading.textContent = "Sorry, that's not correct. Try again!";
    }
});