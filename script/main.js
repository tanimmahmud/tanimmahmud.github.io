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
    url_title: "Portfolio Process",
    url: "https://github.com/tanimmahmud/tanimmahmud.github.io/blob/master/readme.md",
    type: "Website Development",
    type_link: "https://github.com/tanimmahmud/tanimmahmud.github.io",
    tools: ["HTML", "CSS", "JavaScript"]
  },
  {
    alt: "JrDevJobs",
    image: "/images/portfolio/jrdevjobs.jpg",
    url_title: "JrDevJobs",
    url: "http://jrdevjobs.heroku.com/",
    type: "Application",
    type_link: "https://github.com/tanimmahmud/JrDevJobs",
    tools: ["HTML", "CSS", "Ruby on Rail", "JavaScript", "Bootstrap", "jQuery"]
  },
  {
    alt: "Terminal App",
    image: "/images/portfolio/banking_app.jpg",
    url_title: "Banking App",
    url: "https://github.com/tanimmahmud/Banking-App",
    type: "Application",
    type_link: "https://github.com/tanimmahmud/Banking-App",
    tools: ["Ruby"]
  }
];


var html2 = document.getElementById('latest-work').innerHTML;

for (var i = 0 ; i < latest_projects.length ; i++) {
  html2 += '<figure class="imghvr-push-up">';
  html2 += '<img class ="portfolio_figure" width="200px" height="auto" src =' + latest_projects[i].image + ' alt = ' + latest_projects[i].alt + '>';
  html2 += '</img>';
  html2 += '<figcaption>';
  html2 += '<a target="_blank" href=' +latest_projects[i].url+ ' ><p style="color:#337ab7;"><span><i class="fa fa-globe" aria-hidden="true"></i></span>  <strong>' + latest_projects[i].url_title + '</strong> </p></a>';
  html2 += '<a target="_blank" href=' +latest_projects[i].type_link + ' ><p><span><i class="fa fa-github" aria-hidden="true"></i></span>  <em>' + latest_projects[i].type + '</em> </p></a>';
  var html3 = '';
  for (var j = 0; j < latest_projects[i].tools.length ; j++){
    html3 += ' <span class="badge">'+latest_projects[i].tools[j]+'</span> ';
  }
  html2 += '<hr><p>' +html3 + "</p>";
  html2 += '</figcaption>';
  html2 += '</figure>';
};

document.getElementById('latest-work').innerHTML = html2;
