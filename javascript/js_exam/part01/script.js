const btn = document.querySelector("[type='button']");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  output.textContent = "Button Clicked!";
});
