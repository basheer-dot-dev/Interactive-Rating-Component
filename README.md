# Interactive rating component challenge

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](https://i.ibb.co/wBjv4jR/ezgif-1-08126b51de.gif)

### Links

- Live Solution URL: [projects.basheer.dev/interactive-rating-component/live/index.html](https://projects.basheer.dev/interactive-rating-component/live/index.html)
- My Personal Portfolio/Website: [basheer.dev](https://basheer.dev)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

I gained experience in dynamically updating a webpage via the HTML DOM API.

The following is an application of the classlist method contained in my code:

```html
            <div class="rating-bar">
                <span onclick="rate(1);" id="1" class="rating unselected">1</span>
                <span onclick="rate(2);" id="2" class="rating unselected">2</span>
                <span onclick="rate(3);" id="3" class="rating unselected">3</span>
                <span onclick="rate(4);" id="4" class="rating unselected">4</span>
                <span onclick="rate(5);" id="5" class="rating unselected">5</span>
            </div>
```
```js
function rate(value) {
    rateValue = value.toString();
    newArray = rateArray.splice(value, value);
    if (rateElement !== undefined) {
        prevElement = rateElement;
    }
    rateElement = document.getElementById(rateValue);
    if (rateElement.classList.contains("selected")) {
        rateElement.classList.remove("selected");
        rateElement.classList.add("unselected");
    } else if (rateElement.classList.contains("unselected")) {
        rateElement.classList.remove("unselected");
        rateElement.classList.add("selected");
    }
    newArray.forEach(function (item) {
        tempElement = document.getElementById(item.toString());
        if (tempElement.classList.contains("selected")) {
            tempElement.classList.remove("selected");
            tempElement.classList.add("unselected");
        }
    })
}

```

I also gained experience in applying CSS Grids in my styling.

Check out an example here:

```html
       <div class="after-rate hidden" id="af">
            <img class="thank-you-illustration" src="src/images/illustration-thank-you.svg" alt="thank you illustration" />
            <p class="thank-you-p1">You selected <span class="chosen-rating"></span> out of 5</p>
            <p class="thank-you-p2">Thank you!</p>
            <p class="thank-you-p3">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>
```

```css
.after-rate {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 15px;
}
```


## Author

- Website - [basheer.dev](https://basheer.dev)
- LinkedIn - [@basheer-dev](https://www.linkedin.com/in/basheer-dev)
- Twitter - [@basheer_dev](https://www.twitter.com/basheer_dev)

## Acknowledgments

Many thanks to freeCodeCamp, FrontEnd Mentor and CodeWars.
