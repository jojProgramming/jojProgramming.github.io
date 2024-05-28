
let mybutton = document.getElementById("toTopButton");



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