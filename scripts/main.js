
let mybutton = document.getElementById("toTopButton");
let TopHeader = document.getElementById("pagetitle");
let TopHeaderText = "Student. Designer. Developer.";
let Mode = 1;

// Top header
function TypingEffect(){
	if (Mode === 1) {
		var tempString = "";
		for (var i = 0; i < TopHeader.innerHTML.length - 1; i++) {
			tempString += TopHeader.innerHTML[i];
		}
		TopHeader.innerHTML = tempString;

		if (TopHeader.innerHTML === "")
		{
			Mode = 0;
			setTimeout(TypingEffect, 1500);
			return;
		}
	}
	else {
		var tempString = "";
		for (var i = 0; i < TopHeader.innerHTML.length + 1; i++) {
			tempString += TopHeaderText[i];
		}
		TopHeader.innerHTML = tempString;
		if (TopHeader.innerHTML === TopHeaderText) {
			Mode = 1;
			setTimeout(TypingEffect, 1500);
			return;
		}
	}

	setTimeout(TypingEffect, 50);
}
TypingEffect();

// Buttons
function jump(myVal){
	document.body.scrollTop = myVal;
	document.documentElement.scrollTop = myVal;

}

const goToTop = () => {
	document.body.scrollIntoView("smooth");
};

// When the user scrolls down, show the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if ( document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		console.warn("activated");
		document.getElementById("navbar").style.opacity = "1";
	}
	else {
		document.getElementById("navbar").style.opacity = "0";
	}

}