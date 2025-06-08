let button = document.getElementById("btn");
button.addEventListener("click", function () {
    button.textContent = "Clicked!";
})

let add = function () {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(add(1, 2, 3)); // Outputs: 6

//or

function add2(sum) {
    console.log(sum);
    
}

let sum = add2(1 + 2 + 3);

let text = document.getElementById("text");
text.textContent = "Hello Js";

const input_container = document.getElementById("input_container");
let input_text = document.getElementById("input_field");
input_text.addEventListener("input", function () {
    input_container.textContent = input_text.value;
});

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
    let text_visible = document.getElementById("text_visible");
    text_visible.style.display = 'none';
});

let div1 = document.getElementById("div1");
div1.addEventListener("click", function () {
    div1.style.backgroundColor = "yellow";
});