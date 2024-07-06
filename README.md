# Here is the portfolio project
I am work on the portfolio of a webdesigner, videographer, photographer, web designer, blogger.
# Frontend design
## Header <br/>
   HTML: Header class has a nav bar which contain different responsive buttons named as "home", "about" , " services" , "portfolio" , "contact"
         also a theme changing button by which light or dark mode enables. <br />
   CSS: import font using website-> "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
        Global style : margin, padding, box designing , text decoration, scroll behavior <br />
        CSS variable : "root for light mode while dark-mode of dark theme" set color, shadow etc.
                        To prevent horizontal scrolling x-overflow: hidden. <br/>
   JS: querySelector selects the HTML with id. onclick ensures the fuction intialization on click the             button. classList ensures the function calling wether it it dark or light mode.
<br/>
## hero section <br/>
1. Home section <br/>
   HTML: Home section the id="home" allows it to be referenced by the navigation menu. It contain social media menu buttons, Download CV button in
         class social-media.<br/>
          There is a class profession-container which contain skills in a circular formate. <br/>
   CSS: @keyframes fadeInUp an animation that fades elements in from below by changing their opacity and vertical position.
        fadeInUp animation to these elements, starting from hidden.<br/>
        @keyframes professionRotate profession box to rotate continuously in a circular motion, rotating 72 degrees at each step to display each skill.
   <br/>
2. About Section <br/>
   HTML :  providing a brief image, heading, subheading, some descriptive text, and a call-to-action                  button.
   CSS :  The Flexbox layout ensures that the image and content are aligned properly, while the font sizes           and text alignment settings ensure readability.
   <br/>
## Project section <br/>
1. Services <br/>
 HTML : It cantain service boxes in which service is listed in different boxes along with decription of            the services. Link button navigates to the specific service page.
 CSS : flexbox for alignment and transitions for interactive effects. hoveer on button changes the color.
<br/>

2. portfolio <br/>
    HTML: Each portfolio-box represents a different project with its own image, description, and link to             more details or the live project site. The use of classes allows for structured styling and                JavaScript interactions if needed.<br/>

   CSS : The design is responsive and focuses on enhancing user interaction through subtle animations and           visual. Displaying project details such as title, description, and a link icon.
   <br/>
3. Testimonials <br/>
    HTML : Each testimonial (testimonial-slide) includes an image, the name of the person giving the                  testimonial, and their feedback. <br/>
    CSS :  testimonial section that utilizes the Swiper.js library for creating a slider. The use of CSS               variables (--bg-color, --main-color, --shadow-color, etc.) allows for consistent theming. <br/>

   ## footer <br/>
    HTML : It includes copyright information and a scroll-to-top button for user convenience.<a> element                is a link (href="#home") that, when clicked, would navigate the user to the element with the               ID home. <br/>
    CSS : The styles ensure the footer is visually appealing and responsive (flex-wrap: wrap; allows items           to wrap to a new line on smaller screens).
 
   
 
        
