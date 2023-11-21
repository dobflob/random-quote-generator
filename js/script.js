/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: 'The problem with going to restaurants is that they\'re not in my room.',
    source: 'Daria Morgendorffer',
    citation: 'Daria, Season 5: My Night at Daria\s',
    year: 2001,
    tags: ['Comedy', 'Drama', 'Satire', 'Slice-of-Life', 'Cult Classic', '90s'],
    foundURL: 'https://quotecatalog.com/quotes/tv/daria'
  },
  {
    quote: 'I\m an adult and I\'m responsible. Let\'s go get some candy.',
    source: 'Abbi Abrams',
    citation: 'Broad City, Season 1',
    year: 2014,
    tags: ['Comedy', 'Feminism'],
    foundURL: 'https://quotecatalog.com/quotes/tv/broad-city'
  },
  {
    quote: 'I once worked with a guy for three years and never learned his name. Best friend I ever had. We still never talk sometimes.',
    source: 'Ron Swanson',
    citation: 'Parks and Recreation, Season 3: Flu Season',
    year: 2011,
    tags: ['Comedy', 'Satire'],
    foundURL: 'https://quotecatalog.com/quotes/tv/parks-and-recreation'
  },
  {
    quote: 'Look at that font! What is this? Amateur hour? At least use Palatino.',
    source: 'Nick Miller',
    citation: 'New Girl, Season 2: Pepperwood',
    year: 2013,
    tags: ['Comedy', 'Drama'],
    foundURL: 'https://quotecatalog.com/quotes/tv/new-girl'
  },
  {
    quote: 'The economy stinks, bees are dying, and movies are pretty much all sequels now.',
    source: 'Schmidt',
    citation: 'New Girl, Season 1: Backslide',
    year: 2012,
    tags: ['Comedy', 'Drama'],
    foundURL: 'https://quotecatalog.com/quotes/tv/new-girl'
  },
  {
    quote: 'Oh, look. Another glorious morning. Makes me sick!',
    source: 'Winifred Sanderson',
    citation: 'Hocus Pocus',
    year: 1993,
    tags: ['Comedy', 'Halloween', 'Cult Classic', '90s'],
    foundURL: 'https://www.boredpanda.com/90s-movie-quotes/'
  },
  {
    quote: 'The only true currency in this bankrupt world is what you share with someone else when you\'re uncool.',
    source: 'Lester Bangs',
    citation: 'Almost Famous',
    year: 2000,
    tags: ['Comedy', 'Drama', 'Rock \'n\' Roll'],
    foundURL: 'https://www.pastemagazine.com/movies/almost-famous/the-15-best-quotes-from-almost-famous'
  },
  {
    quote: 'I don\'t need another friend. I already have two. I mean, how many more friends does a guy need?',
    source: 'Sam Weir',
    citation: 'Freaks and Geeks, Season 1: Girlfriends and Boyfriends',
    year: 2000,
    tags: ['Comedy', 'Drama', 'Cult Classic'],
    foundURL: 'https://quotecatalog.com/quotes/tv/freaks-and-geeks'
  },
  {
    quote: 'Now we\'re going to do the most human thing of all: attempt something futile with a ton of unearned confidence and fail spectacularly!',
    source: 'Michael',
    citation: 'The Good Place, Season 2: Best Self',
    year: 2018,
    tags: ['Comedy', 'Feel Good', 'Satire'],
    foundURL: 'https://www.boredpanda.com/the-good-place-quotes/'
  },
  {
    quote: 'It turns out life isn\'t a puzzle that can be solved one time and it\'s done. You wake up every day, and you solve it again.',
    source: 'Chidi Anagonye',
    citation: 'The Good Place, Season 4: The Answer',
    year: 2019,
    tags: ['Comedy', 'Feel Good', 'Reflective'],
    foundURL: 'https://www.boredpanda.com/the-good-place-quotes/'
  },
  {
    quote: 'Nothing in this universe happens just once. Infinity goes in both directions. There is no unique event, no singular moment.',
    source: 'Dr. Temperance Brennan',
    citation: 'Bones, Season 1: The Skull in the Desert',
    year: 2006,
    tags: ['Drama', 'Reflective'],
    foundURL: 'https://quotecatalog.com/quotes/tv/bones'
  },
  {
    quote: 'I am not warm and fuzzy, and you are basically a stuffed animal made by grandma.',
    source: 'Dr. Gregory House',
    citation: 'House, Season 1: Role Model',
    year: 2005,
    tags: ['Drama', 'Medical', 'Comedy'],
    foundURL: 'https://quotecatalog.com/communicator/dr-gregory-house'
  },
  {
    quote: 'Just because there is a door does not mean you use it. A door does not represent infinite possibilities.',
    source: 'Abe Weissman',
    citation: 'The Marvelous Mrs. Maisel, Season 1: Pilot',
    year: 2017,
    tags: ['Comedy', 'Drama', 'Feminism', 'Period Piece'],
    foundURL: 'https://parade.com/895436/solanahawkenson/19-of-the-best-quotes-from-the-marvelous-mrs-maisel-about-life-love-and-being-a-woman/'
  },
  {
    quote: 'Who knows where thoughts come from? They just appear.',
    source: 'Lucas',
    citation: 'Empire Records',
    year: 1995,
    tags: ['Comedy', 'Rock \'n\' Roll', 'Cult Classic', '90s'],
    foundURL: 'https://maybeillshowertoday.com/2016/04/08/empire-record-quotes-that-apply-directly-to-parenting/'
  },
  {
    quote: 'What is this? A center for ants? How can we be expected to teach children to learn how to read if they can\'t even fit inside the building?',
    source: 'Derek Zoolander',
    citation: 'Zoolander',
    year: 2001,
    tags: ['Humor', 'Satire', 'Cult Classic'],
    foundURL: 'https://www.imdb.com/title/tt0196229/characters/nm0002071'
  }
];

/***
 * `getRandomQuote` function
***/

/**
 * Generates a random number between 0-14
 * Stores that number as randomIndex
 * @returns quote object at the randomIndex of quotes array
 */
const getRandomQuote = () => {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let quote = quotes[randomIndex];
  return quote;
};

/***
 * `getRandomBGColor` function
***/

/**
 * Generates a random number between 0-255
 * Create array with a length of 3 to hold the random numbers
 * Uses array because array.join() will output 3 comma separated values, which is format for setting background color
 * Sets background color of body element to new rgb value
 * @returns rgb array [x, x, x]
 */
const getRandomBGColor = () => {
  let rgb = [0, 0, 0]; //set rgb array to hold 0 in each position for red, green, blue
  for (i = 0; i < rgb.length; i++) {
    let colorValue = Math.floor(Math.random() * 256);
    rgb[i] = colorValue;
  }
  document.querySelector("body").attributeStyleMap.set("background-color", `rgb(${rgb.join(', ')})`); 
}; 

/***
 * `printQuote` function
***/

/**
 * Calls getRandomBGColor() to apply new background color
 * Calls getRandomQuote()
 * Creates string of HTML with quote properties
 * Displays created string in the browser
 */
const printQuote = () => {
  getRandomBGColor();
  let quote = getRandomQuote();
  let html = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}`;

  if (quote.citation) {
    html += `<span class="citation">${quote.citation}</span>`;
  }
  if (quote.year) {
    html += `<span class="year">${quote.year}</span>`;
  }
  if (quote.tags) {
    html += `<br><span class="tags">${quote.tags.join(' | ')}</span>`;
  }
  html += `</p>`;

  document.getElementById('quote-box').innerHTML = html;
};

/**
 * Global method that calls a function repeatedly every 15 seconds
 */
const autoRefresh = setInterval(printQuote, 15000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);