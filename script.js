const colorPicker = document.getElementById("colorPicker");
const saveBtn = document.getElementById("saveBtn");
const animateBtn = document.getElementById("animateBtn");

// Load saved color preference from localStorage
window.onload = () => {
  const savedColor = localStorage.getItem("buttonColor");
  if (savedColor) {
    animateBtn.style.backgroundColor = savedColor;
    colorPicker.value = savedColor;
  }
};

// Save selected color to localStorage
saveBtn.addEventListener("click", () => {
  const color = colorPicker.value;
  localStorage.setItem("buttonColor", color);
  animateBtn.style.backgroundColor = color;
});

// Add animation class on button click
animateBtn.addEventListener("click", () => {
  animateBtn.classList.remove("animate");
  void animateBtn.offsetWidth; // Force reflow to restart animation
  animateBtn.classList.add("animate");
});
