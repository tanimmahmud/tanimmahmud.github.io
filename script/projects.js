var projects = [
  {
    alt: "website",
    image: "/images/portfolio/selfiebd.jpg",
    url_title: "Selfie BD",
    url: "selfiebd.com",
    type: "Website Design",
    type_link: "https://github.com/tanimmahmud/selfie"
  },
  {
    alt: "website",
    image: "/images/portfolio/selfiebd.jpg",
    url_title: "Selfie BD",
    url: "selfiebd.com",
    type: "Website Design",
    type_link: "https://github.com/tanimmahmud/selfie"
  },
  {
    alt: "website",
    image: "/images/portfolio/selfiebd.jpg",
    url_title: "Selfie BD",
    url: "selfiebd.com",
    type: "Website Design",
    type_link: "https://github.com/tanimmahmud/selfie"
  }
];

var html = document.getElementById('project').innerHTML;

for (var i = 0 ; i < projects.length ; i++) {
  html += '<figure>';
  html += '<img class ="portfolio_figure" width="250px" height="auto" src =' + projects[i].image + ' alt = ' + projects[i].alt + '>';
  html += '</img>';
  html += '<figcaption>';
  html += '<a target="_blank" href=' +projects[i].url+ ' ><p><strong>' + projects[i].url_title + '</strong> </p></a>';
  html += '<a target="_blank" href=' +projects[i].type_link + ' ><p><em>' + projects[i].type + '</em><span><i class="fa fa-angle-double-right pull-right" aria-hidden="true"></i></span></p></a>';
  html += '</figure>';
};

document.getElementById('project').innerHTML = html;
