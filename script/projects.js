var projects = [
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

var html = document.getElementById('project').innerHTML;

for (var i = 0 ; i < projects.length ; i++) {
  html += '<figure class="imghvr-push-up col-lg-6">';
  html += '<img class ="portfolio_figure" width="250px" height="auto" src =' + projects[i].image + ' alt = ' + projects[i].alt + '>';
  html += '</img>';
  html += '<figcaption>';
  html += '<a target="_blank" href=' +projects[i].url+ ' ><p style="color:#337ab7;"><span><i class="fa fa-globe" aria-hidden="true"></i></span>  <strong>' + projects[i].url_title + '</strong> </p></a>';
  html += '<a target="_blank" href=' +projects[i].type_link + ' ><p><span><i class="fa fa-github" aria-hidden="true"></i></span>  <em>' + projects[i].type + '</em> </p></a>';
  var html4 = '';
  for (var j = 0; j < projects[i].tools.length ; j++){
    html4 += ' <span class="badge">'+projects[i].tools[j]+'</span> ';
  }
  html += '<hr><p>' +html4 + "</p>";
  html += '</figcaption>';
  html += '</figure>';
};

document.getElementById('project').innerHTML = html;
