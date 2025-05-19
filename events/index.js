const outer = document.getElementById("outer");
const inner = document.getElementById("inner");
const btn = document.getElementById("btn");

function log(which) {
  console.log(which);
}

// Events propagation

// Evnent Capturing
outer.addEventListener("click", () => log("outer"), false);
inner.addEventListener("click", () => log("inner"), false);
btn.addEventListener("click", () => log("btn"), false);

// Event Delegation
