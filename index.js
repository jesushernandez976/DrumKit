// Loop through all drum buttons and add click event listeners
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML; // Get the button's inner HTML (e.g., 'w', 'a', etc.)
    makeSound(buttonInnerHTML);           // Call the makeSound function with the button's innerHTML
    buttonAnimation(buttonInnerHTML);     // Trigger the animation for the button
  });
}

// Add event listener for keydown event
document.addEventListener("keydown", function(event) {
  makeSound(event.key);          // Call makeSound when a key is pressed
  buttonAnimation(event.key);    // Trigger the animation for the button based on the key
});

// Function to handle sound for a given key
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(key);  // Just in case an unexpected key is pressed
      break;
  }
}

// Function to handle button animation (e.g., changing the button color briefly)
function buttonAnimation(currentKey) {
  var buttonElement = document.querySelector("." + currentKey); // Select the button element with class equal to the current key
  if (buttonElement) {
    buttonElement.style.color = "white"; // Change the button's color to white
    setTimeout(function() {
      buttonElement.style.color = ""; // Reset to the original color after 100ms
    }, 100); // Delay in milliseconds
  }
}
