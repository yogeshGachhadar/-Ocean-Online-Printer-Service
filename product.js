// Get the modal element
const model = document.getElementById("java");

// Get all buttons that open the modal
const btns = document.querySelectorAll(".order");

// Get the close button element
const closeBtn = document.querySelector(".can");

// Function to show the modal
function showModel() {
  model.style.display = "block";

  // Automatically hide the modal after 3 seconds (adjust the time in milliseconds)
  setTimeout(() => {
    hideModel();
  }, 3000);
}

// Function to hide the modal
function hideModel() {
  model.style.display = "none";
}

// Event listener for each button to open the modal
btns.forEach(btn => {
  btn.addEventListener("click", showModel);
});

// Event listener for the close button to hide the modal
closeBtn.addEventListener("click", hideModel);

// Event listener to close the modal when clicking anywhere outside of it
window.addEventListener("click", event => {
  if (event.target === model) {
    hideModel();
  }
});
