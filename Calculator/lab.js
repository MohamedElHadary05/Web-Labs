let display = document.getElementById("display");
let current = "";

function append(value) {
  if (value === "%" && current !== "") {
    current = String(parseFloat(current) / 100);
  } else {
    current += value;
  }
  display.textContent = current;
}

function clearDisplay() {
  current = "";
  display.textContent = "0";
}

function compute() {
  if (current === "") return;
    const result = eval(current);
    display.textContent = result;
    current = result;
}
