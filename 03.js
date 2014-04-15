// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

//When Charles Dickens is clicked, apply the selected style to it.

$(document).on("click", ".author", function() {
	$(this).addClass("selected");
});

//When a chapter title (<h3 class="chapter-title">) is double-clicked,
//toggle the visibility of the chapter text.

$(document).on("dblclick", ".chapter-title", function() {
	$(this).siblings("p").toggle();
});

//When the user presses the right arrow key, cycle to the next body class.
//The key code for the right arrow key is 39.

$(document).on("click", "#switcher-default", function(){
	$("body").removeAttr("class");
	$("body").addClass("default");
})

$(document).on("click", "#switcher-narrow", function(){
	$("body").removeAttr("class");
	$("body").addClass("narrow");
})

$(document).on("click", "#switcher-large", function(){
	$("body").removeAttr("class");
	$("body").addClass("large");
})

//The key code for the right arrow key is 39.

var body_classes = ["default", "narrow", "large"];
var current_index = 0;

$(document).on("keydown", function(e) {
	if (e.which === 39) {
		current_index++;
		
		if (current_index > 2) {
			current_index = 0;
			$("body").removeAttr("class");
			$("body").addClass("default");
		} else {
			$("body").removeAttr("class");
			$("body").addClass(body_classes[current_index]);
		}	
	}
})

//Challenge: Use the console.log() function to log the coordinates of the mouse as it moves across any paragraph. 
//(Note: console.log() displays its results via the Firebug extension for Firefox, Safari's Web Inspector, or the
// Developer Tools in Chrome or Internet Explorer).

$(document).on("mousemove", "p", function(e) {
	console.log("Page X: " + e.pageX + "PageY:" + e.pageY);
});

//Track mouse up and down

// var downPos;
// var upPos;

// $(document).on("mousedown", function(e) {
// 	downPos = e.pageY;
// )};

// $(document).on("mouseup", function(e) {
// 	upPos = e.pageY;

// 	if (downPos > upPos) {
// 		$("p").addClass("hidden");
// 	} else {
// 		$("p").removeClass("hidden")
// 	}
// })

$(document).on("click", "#switcher-yellow", function(){
	$("p").toggleClass("yellow-background");
});

$(document).on("click", "#switcher-greyout", function(){
	$("p").toggleClass("grey-text");
});











