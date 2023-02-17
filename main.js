navbar = document.querySelector(".nav-bar").querySelectorAll("a");
console.log(navbar);

navbar.forEach(element => {
    element.addEventListener("click", function(){
        navbar.forEach(nav=>nav.classList.remove("active"))

        this.classList.add("active")
    })
});


// Define an array of background colors
var colors = ["#427bf5", "#ad42f5", "#f59542", "#427ef5", "#7842f5", "#8e7db5", "#e19fed", "#80a6a3"];

// Get the background element
var background = document.querySelector(".background");

// Set the initial background color
background.style.backgroundColor = colors[0];

// Set a timer to change the background color every 5 seconds
setInterval(function() {
	// Get a random color from the array
	var randomColor = colors[Math.floor(Math.random() * colors.length)];

	// Fade out the current background color
	background.style.opacity = 1;

	// Set the new background color after the fade out
	setTimeout(function() {
		background.style.backgroundColor = randomColor;
		background.style.opacity = 1;
	}, 500);

}, 1000);
