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

// printing latest work

var latest_projects = [
  {
    alt: " portfolio website",
    image: "/images/portfolio/portfolio.jpg",
    url_title: "Portfolio",
    url: "https://tanimmahmud.github.io/",
    type: "Website Development",
    type_link: "https://github.com/tanimmahmud/tanimmahmud.github.io",
    tools: "HTML, CSS, JavaScript"
  },
  {
    alt: "website",
    image: "/images/portfolio/selfiebd.jpg",
    url_title: "Selfie BD",
    url: "selfiebd.com",
    type: "Website Design",
    type_link: "https://github.com/tanimmahmud/selfie",
    tools: "HTML, CSS, Bootstrap"
  },
  {
    alt: "Terminal App",
    image: "/images/portfolio/banking_app.jpg",
    url_title: "Banking App",
    url: "https://github.com/tanimmahmud/Banking-App",
    type: "Application",
    type_link: "https://github.com/tanimmahmud/Banking-App",
    tools: "Ruby"
  }
];


var html2 = document.getElementById('latest-work').innerHTML;

for (var i = 0 ; i < latest_projects.length ; i++) {
  html2 += '<figure>';
  html2 += '<img class ="portfolio_figure" width="250px" height="auto" src =' + latest_projects[i].image + ' alt = ' + latest_projects[i].alt + '>';
  html2 += '</img>';
  html2 += '<figcaption>';
  html2 += '<a target="_blank" href=' +latest_projects[i].url+ ' ><p><strong>' + latest_projects[i].url_title + '</strong> <span><i class="fa fa-external-link-square" aria-hidden="true"></i></span></p></a>';
  html2 += '<a target="_blank" href=' +latest_projects[i].type_link + ' ><p><em>' + latest_projects[i].type + '</em> <span><i class="fa fa-angle-double-right pull-right" aria-hidden="true"></i></span><span><i class="fa fa-github" aria-hidden="true"></i></span></p></a>';
  html2 += '<p>' +latest_projects[i].tools + "</p>";
  html2 += '</figure>';
};

document.getElementById('latest-work').innerHTML = html2;
