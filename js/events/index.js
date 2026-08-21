const button = document.getElementById("btn");
const input = document.getElementById("input");
const output = document.getElementById("output");

// click event
button.addEventListener("click", () => {
    output.textContent = "Button clicked!";
});

// input event
input.addEventListener("input", (event) => {
    output.textContent = event.target.value;
});

// keyboard event
input.addEventListener("keydown", (event) => {
    console.log("Key pressed:", event.key);
});

// mouse event
button.addEventListener("mouseenter", () => {
    console.log("Mouse entered button");
});