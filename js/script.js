/* script.js contains main functions for the Random Quote Generator project */

/*
* Project name:         Random Quote Generator
* Student name:         Alex Khant (https://github.com/grashupfer99)
* Updated:              2018-05-12
*/

// Setting up variables for our timer
let timer;
let delay = 20000;
// To store last color and quote numbers 
let lastQuote;
let lastColor;

// Storing DOM strings in one place in case they are changed
const DOMstrings = {
    body: 'body',
    loadQuote: 'loadQuote', 
    quoteBox: 'quote-box'
}

// Selecting a random quote from the array of quotes and returning a randomly selected quote object.
function getRandomQuote() {
<<<<<<< HEAD
    let rand = randNum(quotes);

    // Make sure current and prev rand numbers for quotes aren't the same  
    if(rand === lastQuote){
        rand = randNum(quotes);
    } 

    // Storing the last rand number for quotes
    lastQuote = rand;
    
    return quotes[rand];   
=======
    const rand = Math.floor(Math.random() * quotes.length);
    return quotes[rand];
>>>>>>> origin/master
}

// Printing out the randomly selected quote
function printQuote() {

    const randQuote = getRandomQuote();

    // Building an HTML template using a string
    let html = '';
    html += '<p class="quote">' + randQuote.quote + '</p>';
    html += '<p class="source">' + randQuote.source;
    
    // Add a citation if it's found in the array object
    if(randQuote.hasOwnProperty('citation')){
        html += '<span class="citation">' + randQuote.citation + '</span>';
    } 

    // Add a year if it's found in the array object
    if (randQuote.hasOwnProperty('year')){
        html += '<span class="year">' + randQuote.year + '</span>';
    }

    if(randQuote.hasOwnProperty('tags')){
        // Handling cases with two or more tags
        let tag = randQuote.tags.split(' ').join(' #');
        html += '<span class="tags">' + '#' + tag + '</span>';
    }
    html += '</p>';

    // Selecting the body tag and changing its background color  
    document.getElementsByTagName(DOMstrings.body)[0].style.backgroundColor = randColorGenerator();

    // Returning the result
    return document.getElementById(DOMstrings.quoteBox).innerHTML = html;
}

// Random hex color generator
function randColorGenerator() {
    let hexColor = "#";
    let color = randNum(colors);

    // Make sure current and prev rand numbers for bg color aren't the same
    if(color === lastColor){
        color = randNum(colors);
    }

    hexColor += colors[color];

    // Storing the last rand number for bg color
    lastColor = color;

    return hexColor;
}

// Updating the timer
function updateTimer(){
    clearInterval(timer);
    timer = setInterval(printQuote, delay);
}

// Random number generator
function randNum(obj){
    return Math.floor(Math.random() * obj.length);
}

// Invoking the printQuote function
printQuote(); 
// Setting up a timer to display quotes every delay(the value is stored in delay variable) ms. 
timer = setInterval(printQuote, delay);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById(DOMstrings.loadQuote).addEventListener("click", function () {
    // Implementing two actions: printing out a new quote and updating the timer  
    printQuote();
    updateTimer();
}, false);


