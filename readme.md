# Portfolio Site of Tanim Mahmud

## Aim

My aim was to develop a clean accessible website for prospective employers and fellow developers. I used bigger font size and black and white color combinations for accessible reasons. I tried to create a simple website with no fancy animation or parallax because it suits me better. I decided to go with different html and css file for each page because it is easy to debug and as I used Jekyll, it helped me organize my files and folders.

### Home

Home page has all basic information about me, some of my recent projects and all links to find my details . For time-poor employers, home page will be enough to learn about me.

### Resume

Resume Page has all of my contact details , education, skills and experiences details. I also have download resume option so that prospective employers can download my resume for official use.

### Portfolio

If visitors want to see more of my projects then they can visit portfolio page. I put all of my projects here with live link, information about what tools I used and a link to github repository if they are interested to see the codes. I have used JavaScript to print projects in the page because it will be easy to add projects in the future.

### Blog

Blog page has nothing in it right now but I am planing to write blogs and upload them in this page.

### Contact

Contact page has a contact form to make it easy for visitors to contact me without opening any webpage or apps. It also has social media link if they are interested to check them.

In every page navigation tabs are available in the footer so that visitors can easily navigate through the pages. links are at least 16px x 16px for making tapping easy in touch and small devices.  I also made all the links available using keyboard for make it more accessible. I used color combinations considering color blind people.

## Usability heuristics checklist

  * Only relevant informations was provided.
  * Has enough navigation options to jump through pages.
  * Choice of words was not too technical.
  * Design, navigations, font sizes and color combinations were consistent across the pages.
  * Useful informations are less than 3 clicks away.
  * Page height is not long to preventing more scrolling.
  * Bigger font size and design was used to make it more accessible and less stress for low vision people.

# Design

## Wireframes

### Hand Scratch

  I scratch my initial design in a paper.

  ![hand scratch image](/images/markdown_images/wireframe.jpg)  

## Style guide

### Personal Logo

The websites logo should be used at all times left corner of the site.

![website logo](/images/markdown_images/logo.jpg)

#### Spacing and Sizes

The logo should always be surrounded by a minimum area of space. The area of isolation ensures that headlines, text or other visual elements do not encroach on the logo.

#### Minimum Size
There are no predetermined sizes for the  logo. Scale and proportion should be determined by the available space, aesthetics, function and visibility.

There is no preset maximum size for the  logo. However, minimum sizes font size of the logo is 24 px with 10 px padding.

### Colors

#### Primary Colors

The Primary Palette should be used in all occasions specially in navigation and text color.

![Primary colors](/images/markdown_images/primary_color.jpg)

#### Secondary Colors

##### Buttons

Colors for different type of buttons used in the website

![button colors](/images/markdown_images/buttons.jpg)

##### Social Icon

Colors used to highlight different social icon used in the site

![social icon colors](/images/markdown_images/social_colors.jpg)

#### Color Usage

 Portfolio site has 3 main colors.

1. Cod Gray was used as a background color of navigation bar.
2. Wild Sand was used as a background color of footer.
3. White was used as a general body color.

### Typography

Exo should be used for all header and sub header text, where Open Sans should be used for all other copy (body, quotes etc). To ensure a consistent look, make sure fonts are used in a consistent manner and the weights of the font have been considered, using heavier weights for headers and the highlight key messages.

#### Web Fonts

##### Exo

![exo font](/images/markdown_images/exo.jpg)

##### Open Sans

![open sans font](/images/markdown_images/open_sans.jpg)

#### Web Styles

##### Heading Styles

![home page heading](/images/markdown_images/home_page_heading.jpg)

![resume page heading](/images/markdown_images/resume_page_heading.jpg)

##### Paragraph Styles

![home page paragraph](/images/markdown_images/home_page_paragraph.jpg)

![resume page paragraph](/images/markdown_images/resume_page_paragraph.jpg)

#### Icons

Font Awesome icon was used.

![resume page paragraph](/images/markdown_images/social_icon_footer.jpg)

- LinkedIn
- GitHub
- Twitter
- CodePen

#### Screenshots

##### Mobile Device

___

Portrait view in Mobile devices
___

![resume page paragraph](/images/markdown_images/iphone_se.jpg)

___

Top Navigation Bar
___

![resume page paragraph](/images/markdown_images/breadcrum_dropdown.jpg)

___

Landscape view in Mobile devices
___

![resume page paragraph](/images/markdown_images/iphone_landscape.jpg)

___

Tablet devices  
___

![resume page paragraph](/images/markdown_images/ipad.jpg )

___

Desktop view
___

![resume page paragraph](/images/markdown_images/dextop.jpg)

## Building

I tried to go as minimal as possible with HTML , CSS and JavaScript.

### HTML

I built my website in HTML5, to make it more semantic I tried using less `<div> `and replace them with `<header>`,`<footer>` and `<main>`.

### Meta tags

I add `description` and `author` meta tags to my primary pages.

### CSS

I wrote my CSS mobile-first. I have few media queries to oriented different sections in desktop version differently.

### Images & Icons

My images are very low size for optimization reason. I All my images are in jpg formet as their file sizes were small.

 I use [Font Awesome](http://fontawesome.io/), as they have good catalog of logos.

## Performance

load time result using google chrome developer tools.

### Network

![Network](/images/markdown_images/network.jpg)

### Timeline

![Timeline](/images/markdown_images/timeline.jpg)


## Assets Links

### HTML
- [Navigation HTML](_includes/nav.html)
- [Footer HTML](_includes/footer.html)
- [Home HTML](_includes/intro.html)
- [Portfolio HTML](/portfolio/index.html)
- [Resume HTML](_includes/resume.html)
- [Contacts HTML](_includes/contact-form.html)

### CSS
- [Navigation Bar CSS](/css/navigation.css)
- [Footer CSS](/css/footer.css)
- [Home CSS](/css/home.css)
- [Portfolio CSS](/css/portfolio.css)
- [Resume CSS](/css/resume.css)
- [Contacts CSS](/css/contacts.css)

## Script
- [Main JS](/script/main.js)
- [Projects JS](/script/projects.js)

## Fonts
- [Open Sans](https://fonts.google.com/specimen/Open+Sans)
- [Exo](/script/main.js)

## Icons
- [Font Awesome](http://fontawesome.io/)

## Live

https://tanimmahmud.github.io/
