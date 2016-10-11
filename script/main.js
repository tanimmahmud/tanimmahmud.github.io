// Nvagiation for small device

var breadcrumb = document.getElementById("breadcrumb");
var nav = document.getElementById("nav")

breadcrumb.addEventListener("click",function(){
  if (nav.className === "navigation") {
    nav.className = "navigation show";
  } else {
    nav.className = "navigation";
  }
  });


/* Toggle between adding and removing the "active" and "show" classes when the user clicks on one of the "Section" buttons. The "active" class is used to add a background color to the current button when its belonging panel is open. The "show" class is used to open the specific accordion panel */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("showResume");
    }
}

// hide fixed scrolling contact details when it hits footer

var contact_details = document.querySelector('.contact_details');
var footer = document.querySelector('footer');

function checkOffset() {
  function getRectTop(el){
    return  el.getBoundingClientRect().top;
  }

if (window.innerWidth >= 780) {
  if((getRectTop(contact_details) + document.body.scrollTop) + contact_details.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10)
    contact_details.style.position = 'absolute';
  if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
    contact_details.style.position = 'fixed'; // restore when you scroll up

  }
}


document.addEventListener("scroll", function(){
  checkOffset();
});
