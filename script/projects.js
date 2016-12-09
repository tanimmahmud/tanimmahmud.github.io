var projects = [
  {
    alt: " portfolio website",
    image: "/images/portfolio/portfolio.jpg",
    url_title: "Portfolio Process",
    url: "https://github.com/tanimmahmud/tanimmahmud.github.io/blob/master/readme.md",
    type: "Website Development",
    type_link: "https://github.com/tanimmahmud/tanimmahmud.github.io",
    tools: "HTML, CSS, JavaScript"
  },
  {
    alt: "Terminal App",
    image: "/images/portfolio/banking_app.jpg",
    url_title: "Banking App",
    url: "https://github.com/tanimmahmud/Banking-App",
    type: "Application",
    type_link: "https://github.com/tanimmahmud/Banking-App",
    tools: "Ruby"
  },
  {
    alt: "JrDevJobs",
    image: "/images/portfolio/jrdevjobs.jpg",
    url_title: "JrDevJobs",
    url: "http://jrdevjobs.heroku.com/",
    type: "Application",
    type_link: "https://github.com/tanimmahmud/JrDevJobs",
    tools: "HTML, CSS, Ruby on Rail, JavaScript, Bootstrap, jQuery"
  }
];

var html = document.getElementById('project').innerHTML;

for (var i = 0 ; i < projects.length ; i++) {
  html += '<figure>';
  html += '<img class ="portfolio_figure" width="250px" height="auto" src =' + projects[i].image + ' alt = ' + projects[i].alt + '>';
  html += '</img>';
  html += '<figcaption>';
  html += '<a target="_blank" href=' +projects[i].url+ ' ><p><strong>' + projects[i].url_title + '</strong> <span><i class="fa fa-external-link-square" aria-hidden="true"></i></span></p></a>';
  html += '<a target="_blank" href=' +projects[i].type_link + ' ><p><em>' + projects[i].type + '</em> <span><i class="fa fa-angle-double-right pull-right" aria-hidden="true"></i></span><span><i class="fa fa-github" aria-hidden="true"></i></span></p></a>';
  html += '<p>' +projects[i].tools + "</p>";
  html += '</figure>';
};

document.getElementById('project').innerHTML = html;
