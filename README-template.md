# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](.screenshot.jpg)




**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](http://127.0.0.1:5501)

## My process
I started with html, in the body containd my entire faq content. Starting with a container which houses everything. I put the whole content in a class Accordion. After the heading and using the Icon, I moved to the questions and answers which i put in two classes called accordion header and accordion answers. In the accordion header is the questions and the two icons which I put in a class called buttons and the accordion answers contained the answers for the question. I repeates this step until all the questions were answered.
Then I moved into the css, where I styled the background using the image from the package and the colour pack from the style. I set a font size, family ad style for the body. Then I moved onto the container making sure it was centered at the middle and making sure it was the right colour and size. I styled the header and star Icon making sure it was properly aligned and that they were on the same line. After that I moved on to styling the accordion class, I styled the accordion header making sure they were the right font color and size and that they were allingned to the left. Then I styled the buttons making them transparent and that they were on the same line as the accordion header and that the cursor activated. After I moved to the answers making them the right size and font color and styled them so that they would not show when the site is active. After I moved the media queries making sure that the size was according to every screen size. Lastly I worked on the java script, making sure the buttons were to respnd when clicked on, and that the answers were set to collapse when the minus icon was clicked on and expand when the plus button was clicked on.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I learnt how to properly style buttons and make the effect of them being clicked on. As well as collapsing and expanding elements in java script.


```css
button{
    cursor: pointer;
    background-color: transparent;
    border: 0;
}
```

```js
if(accordionAnswer.style.maxHeight) {
            accordionAnswer.style.maxHeight = null
            plusIcon.style.display = 'flex'
            minusIcon.style.display = 'none'

```
If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

I want to work on more complex projects that will challenge me more and push me to work on javascript and css more.

### Useful resources


**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Nemi](https://www.your-site.com)
- Frontend Mentor - [@nemid4](https://www.frontendmentor.io/profile/nemid4)



## Acknowledgments

Ms Nneoma

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
