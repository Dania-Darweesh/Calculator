
const btns = document.querySelectorAll(".grid-item");

const screen = document.querySelector(".result");
let number_one = 0;
let number_two = 0;
let operation = "";
let content = '';

//Show numbers on screen
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.innerText !== "=") {
            if (number_one === 0 && btn.classList.contains('item')) {
                screen.innerText += btn.innerText;
            } else if (btn.classList.contains('operation')) {
                number_one = screen.innerText;
                screen.innerText += btn.innerText;
                operation = btn.innerText;
            } else if (operation !== '' && btn.classList.contains('item')) {
                screen.innerText = '';
                content += btn.innerText;
                screen.innerText = content;
                number_two = content;
            }
        } else {
            show();
            resetNum();
        }
    });
});
//Empty Screen
const clear_btn = document.querySelector(".clear");
clear_btn.addEventListener("click", () => {
    screen.innerText = "";
});

// reset numbers
function resetNum() {
    number_one = 0;
    number_two = 0;
    operation = "";
    content = '';
}
// do mathematics operations
function calculation() {
    if (operation === "+") {
        return parseInt(number_one) + parseInt(number_two);
    } else if (operation === "-") {
        return parseInt(number_one) - parseInt(number_two);
    } else if (operation === "*") {
        return parseInt(number_one) * parseInt(number_two);
    } else if (operation === "/") {
        return parseInt(number_one) / parseInt(number_two);
    }
}
//show the result
function show() {
    screen.innerText = calculation();
}



/*

var plus = document.querySelector('.op1');
clear.addEventListener('click', function( num1,num2){
    cardsContainer .innerHTML=" ";
});

var result = document.querySelector('.result');
clear.addEventListener('click', function( num1,num2){
    cardsContainer .innerHTML=" ";
});*/