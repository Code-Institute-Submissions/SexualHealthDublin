# Sexual Health Dublin Website

![Multi-Device Screenshot](./wireframes/multideviceNVCR.JPG "Mutli-Device Screenshot")

Thank you for taking the time to come visit my project! I welcome any comments, questions, 
and suggestions, and can be reached with my GitHub contact details.

## Contents
  * [UX User Experience](#ux-user-experience)
    + [Project Goals](#project-goals)
  * [User Requirements and Expectations](#user-requirements-and-expectations)
      - [Requirements](#requirements)
      - [Expectations](#expectations)
  * [Design Choices](#design-choices)
      - [Fonts](#fonts)
      - [Icons](#icons)
      - [Colors](#colors)
      - [Background](#background)
    + [Wireframes](#wireframes)
  * [Features](#features)
  * [Technologies Used](#technologies-used)
    + [Languages](#languages)
    + [Tools and Libraries](#tools-and-libraries)
  * [Testing](#testing)
      - [Test Planning](#test-planning)
      - [Testing Stories](#testing-stories)
    + [Overall](#overall)
    + [Features](#features-1)
  * [Bugs](#bugs)
      - [Bugs During Development](#bugs-during-development)
      - [Known Bugs](#known-bugs)
  * [Deployment](#deployment)
      - [Running Sexual Health Dublin Locally](#running-sexual-health-dublin-locally)
  * [Closing Notes](#closing-notes)
  * [Credits](#credits)

Sexual Health Dublin is a spot where people looking for assistance with their sexual health 
can seek out information on clinics and other supports in the Dublin area.

## UX User Experience
### Project Goals
The goal of this project is to provide users with infromation pertaining to their sexual health. 
It is aimed at people living in the Dublin area. The finished site will be clean and simple 
enough to be easily accessible, with usability as the top priority - there are currently other 
sites like this one in use, but they are cluttered and sometimes difficult to navigate.

#### User Goals
* Easy communication with professionals at SHD through a contact form.
* Ability to fill out and submit questionnaire.
* Ability to browse service locations.
* Responsiveness to different devices.

#### User Stories:

* As a user I expect to be able to contact professionals at SHD for assistance.
* As a user I expect to be able to fill out and submit the SHD questionnaire.
* As a user I expect to be able to browse services by location.

#### Site Owner Goals
* Provide information to users about various sexual health services.
* Provide users with the ability to contact us for further information.

## User Requirements and Expectations
##### Requirements
* Navigate the site using the navbar.
* Be provided with an accurate, up to date map.
* Be able to browse services by location via map.
* Be able to fill out and submit questionnaire.
* Be able to contact the SHD office.
* Website is displayed appealingly.

##### Expectations
* Can tap/click on navbar links to direct around the site.
* Map is up to date.
* Contact form is functional.
* Questionnaire is easy to fill out and submit.
* Navbar condenses to drop down menu in mobile/tablet view.
* Website is appealing and provides accurate information.

## Design Choices

The color palette for this site is inspired by the color palette for the Welcome To Night Vale podcast logo and 
[official website](http://www.welcometonightvale.com/), which relies heavily on different shades of purple. 

##### Fonts

The two fonts I used for this site are [Open Sans](https://fonts.google.com/specimen/Open+Sans) 
and [Roboto](https://fonts.google.com/specimen/Roboto). I chose these two because I found after cursory
research that in 2020, Open Sans was the top used font on hospital websites, according to 
[ilovewp.com](https://www.ilovewp.com/resources/medical/wordpress-for-hospitals/most-used-google-fonts-on-hospital-websites/).
I then chose Roboto because it was one of the top paired fonts on Google Fonts.

##### Icons

I chose to use only two kinds of icons: footer icons that serve as links to Night Vale Community Radio's other social 
media pages, and a hamburger icon that serves as a drop-down navbar menu on mobile devices and tablets. All icons used 
are widely recognizable for their use.

##### Colors

As mentioned just under the Design Choices header, the 
[color palette](https://coolors.co/10002b-240046-3c096c-5a189a-7b2cbf-9d4edd-c77dff-e0aaff) I used was from 
[Coolors.co](coolors.co). I attributed different colors to different sections in a gradient pattern, and named 
them after the sections or functions they were predominantely used for in the site.

![NVCR Color Palette](./wireframes/paletteNVCR.png "NVCR Color Palette")

* .contact-color: #240046 **“Russian Violet”** I decided to use this color as the color for the contact section 
because the I planned to have the contact section be at the bottom of the site. It being at the bottom of the site 
played out well for the plan to have the main section colors work in a gradient.
* .apply-color: #3c096c **“Persian Indigo”** I decided to use this color for the apply section because I planned it 
as the section above the contact section, and that was the next color for the gradient. I planned it as the navbar because I 
thought it worked well with the link text color, and for the footer because I didn't want it to blend in with the last
section color.
* .weather-color: #7b2cbf **“French Violet”** I decided to use this color for the weather section because I planned 
it as the section above the about section, and that was the next color for the gradient.
* .calendar-color: #9d4edd **"Dark Orchid"** I decided to use this color for the calendar section because I planned 
it as the section above the weather section, and that was the next color for the gradient.
* .btn-color and .link-color: #E0AAFF **"Mauve"** This color was perfect for the site's buttons, links and text as 
it was light enough to be clearly legible over even the lightest section color, and it really pops off of the dark navbar, footer, 
and contact section.
* .btn-color:hover and .link-color:hover: #FFF **"White"** When link text or a button is hovered over, it goes white. 
This color was chosen because it is easy to read, indicates to the user what they are about to select, and still looks clean.

##### Background

The [hero image](../images/dublin.jpg) was selected because it was available for use without broaching usage rights, 
and is a photograph of Dublin. I found the image [here](https://sharpmagazine.com/2015/12/22/the-travelling-man-dublin-ireland/).

### Wireframes 

I used [Balsamiq](https://balsamiq.com/) to build this project’s wireframe. You can view them [here](wireframes/wireframesSHCO.pdf).

## Features

* Site-wide consistent navbar and footer
* Community calendar
* Internship application form
* Communication form
* Link to instruct the user on how to add their event to the community calendar
* Weather videos for the week

## Technologies Used

### Languages
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JS](https://www.popper.JS.org/)

### Tools and Libraries
* [Bootstrap](https://getbootstrap.com)
* [Favicon](https://favicon.io/)
* [Font-Awesome](https://fontawesome.com/icons?d=gallery)
* [Git](https://git-scm.com/)
* [Google Fonts](https://fonts.google.com/)
* [jQuery](https://jquery.com/)

## Testing

Since this was my first website, I wanted to make sure that I was thurough in my testing. Thankfully, I was able
to accomplish this with the help of the Slack community and my dedicated mentor. 

##### Test Planning

Before creating this site, I made wireframes that allowed me to plan out my testing methods. Essentially, I decided
that I would test as I went along, clearing interactive elements in particular before moving on. Of course, things
don't always go to plan and there were a few times where I hopped around in order to not burn myself out one single points.

##### Testing Stories

* Originally, I had wanted to use a carousel for the weather videos. After implementing and testing this, I realized that
the only way I would be able to successfuly implement the carousel (so that videos would automatically stop when 
the user scrolled past to the next one) would require JS. So, I removed the carousel.

* My original plan for the apply section was to have a file upload button. However, again it seemed like JS would be the best
way to get it to sit on the page the way I needed it to. Again, I removed it and replaced it with a form check.

* I quickly became well aquainted with `target=_blank` for the links I created! 

* Figuring out the jumbotron took a bit longer than I had anticipated. I was confused as to why, even though I had been using
rem units, the text size wasn't responding well. In the end, media queries were what saved the day!


### Overall

**Responsiveness**
* **Plan**: Following the principle of mobile-first design, I knew that this had to be entirely responsive. 
Given this, my level of education, and the guidelines of this project, this meant Bootstrap as a core framework, with 
regular use of dev tools to run tests throughout and a post-peer-review test before submission.
* **Implementation**: As I wrote my code, I frequently pulled from Bootstrap, modifying as needed. Modifications
were almost entirely regarding aesthetic/design, and testing was fairly simple thanks to dev tools and being told by my
fellow students about ctrl+shift+r.
* **Result**: After some modifications (i.e., media query for .jumbotron-text), the site is fully responsive,
with no overflow or illegible information.
* **Verdict**: The site is responsive! The test passes.

**Design**
* **Plan**: I wanted the site to be inline with the podcast's official color scheme, which lead to the use of
purples. Using the darkest shade in the header and footer allowed for a sense of bordering, while the lightest shade popped
well against all of the other colors, making it the perfect choice for text and links.
* **Implementation**: Creating classes for the colors allowed for very easy, understandable and smooth design. 
* **Result**: The color palette I chose to use works well.
* **Verdict**: Because the color palette works well, this test passes!

### Features

**Navbar and Footer**
* **Plan**: In the planning phase, I decided that I wanted the navbar to be fixed and for the links to shrink 
into a dropdown menu for mobile and tablet screens. I wanted the footer to only be visible when the user scrolls to the 
bottom of the page, and for it to have links to other Night Vale sites (Instagram, Tripadvisor, etc.)
* **Implementation**: I used Bootstrap to build these.
* **Result**: The navbar and footer are both positioned where I want them and are fully responsive.
* **Verdict**: Regarding these results, this test passes.

**Community Calendar**
* **Plan**: I wanted this calendar to look something like a table, but was advised by Simen to not use an
actual Bootstrap table, as those are not very workable re: responsivness. I planned to have the different rows be different
colors in the reverse of the section color gradient rather than having borders, as I found this more aesthetically pleasing.
* **Implementation**: I used Bootstrap to build these rows.
* **Result**: The community calendar is responsive, clean and easily readable.
* **Verdict**: Regarding these results, this test passes.

**Application Form**
* **Plan**: Originally, I wrote this part to include a file upload form. However, toying around with it I 
discovered that the only way to make it fit in the page the way that I wanted was to implement JS, which I am not
educated in yet. So, I reworked it a bit to have the two links, three input fields, two form-checks, and a submit button.
* **Implementation**: I used Bootstrap to implement the various form elements.
* **Result**: While the end result isn't what I had envisioned, it is clean, responsive, and understandable.
* **Verdict**: Regarding these results, this test passes.

**Communication Form**
* **Plan**: What I planned for this section is exactly how it turned out! First name, last name, email, and
text input boxes with a submit button.
* **Implementation** : I used Bootstrap to implement the necessary form elements.
* **Result**: The end result is exactly what I had envisioned! It is clean, responsive, and understandable.
* **Verdict**: Regarding these results, this test passes.

**Add Event Button**
* **Plan**: While in the planning phase, I wanted a button that would lead the user from the calendar down to 
the contact section, because I figured that that would be a primary user need.
* **Implementation**: I used Bootstrap to add in this button.
* **Result**: The end result is responsive and clean.
* **Verdict**: Regarding these results, this test passes.

**Weather Videos**
* **Plan**: While in the planning phase, I wanted this to be a carousel of videos. However, I learned that
in order to command the videos to stop playing once the user scrolled by, I would need to use JS, which is currently out of 
my paygrade. So, I reworked the layout so all videos were on display. In mobile, they line up down the screen. While I wanted
the lines of text to reorder between mobile and tablet+, I was informed by a tutor that this can only be completed with JS, 
so I decided to leave it be.
* **Implementation**: I used Bootstrap to make this new layout responsive and clean.
* **Result**: While the end result isn't what I had envisioned, it is clean, responsive, and understandable.
* **Verdict**: Regarding these results, this test passes.

## Bugs
#### Bugs During Development

Over the process of creating this site, I ran into a few bugs, but thankfully between Simen, Slack, and the tutors, 
I sorted these out! Here are a few examples:

**Jumbotron text overflow**
* Bug: The text over the jumbotron wasn't behaving like I wanted it to. It wasn't responsive enough to small screens.
* Fix: Creating media queries!
* Verdict: Simen reminded me of this - I didn't end up using it in the spot he originally suggested because it felt like 
I had less control than I wanted in that area, but it was perfect for this bug.

**Footer icon alignment** 
* Bug: I was struggling to align the icons in the footer in a way that was aesthetically pleasing.
* Fix: Using flex rules in the css #footer id.
* Verdict: Simen had me take some time playing with [Flexbox Froggy](boxfroggy.com), which is what gave me 
the tools to fix this!

**Navbar hamburger size**
* Bug: In small screens, the navbar dropdown hamburger icon was inconveniently small.
* Fix: Overrode .container in style.css by applying font-size: 2vw;
* Verdict: Fixed with course tools!

#### Known Bugs

Sometimes, when in dev tools the site works smoothly. Other times, the screen doesn't automatically fit, 
and there is a horizontal scroll.

## Deployment

Sexual Health Dbulin was developed in GitPod, hosted by GitHub and using git.

The following steps were followed to deploy Sexual Health Check Online through GitHub Pages:

* Loaded **GitHub** in Chrome web browser.
* Signed into GitHub.
* Clicked on my **repositories**.
* Navigated to **'mcalistm/SexualHealthDublin'**.
* Selected **'settings'**.
* Navigated to the **GitHub Pages** area of the page. 
* Selected **'Master Branch'** from the **'Source'** dropdown menu.
* Confirmed my selection.
* Sexual Health Check Online is now live on GitHub Pages.

#### Running Sexual Health Dublin Online Locally

Cloning Sexual Health Check Online from GitHub:
* Navigate your screen to **/mcalistm/SexualHealthDublin**.
* Click on the green **Copy** button.
* Copy the provided URL.
* Start up the terminal of your choice with the IDE of your choice.
* Navigate to the file location of your choice.
* To clone, copy this code and input it into your terminal: 

```
https://github.com/mcalistm/SexualHealthDublin.git
```

## Closing Notes

This project has encouraged me to think about how I think in order to provide information in a clean, 
concise and friendly way to users. It has also helped me get a better grasp on bootstrap, 
and has increased my confidence in my abilities as a very junior web developer. I very much look 
forward to continuting to build my skills! There were a few times where problems I came across 
could easily be solved by javascript, so I am particularly excited to learn this. Creating this website 
has been incredibly fun and rewarding, while also being one of the more challenging 
undertakings I've committed to in quite a while. I'm so, so glad I did it.

## Credits
* [My MS1 Project](https://mcalistm.github.io/NightValeCommunityRadio/)
* [Simen Daehlin](https://github.com/Eventyret)
* Code Institute Slack Community
* Code Institute Tutors
* [George Pyott](https://github.com/Geomint)'s Holiday Destinations
[README.md file](https://github.com/Geomint/holiday-destinations/blob/master/README.md),
shown to me by Simen.
* [Get Lat Long from Address](https://www.latlong.net/convert-address-to-lat-long.html)