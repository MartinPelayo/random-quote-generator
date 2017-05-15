// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener('click', printQuote, false);

let quotes = [
  {
    quote: 'Aaaaaaaaaaaaaaaarrrgh!',
    source: 'Chewbacca',
    citation: 'StarWars: Episode IV'
  },
  {
    quote: 'NOOOOOO!',
    source: 'Luke Skywalker',
    citation: 'StarWars: Episode V'
  },
  {
    quote: 'How wude!',
    source: 'JarJar Binks',
    citation: 'StarWars: Episode I'
  },
  {
    quote: 'Only a Sith Lord deals in absolutes.',
    source: 'OBI-WAN KENOBI',
    citation: 'Star Wars Episode V'
  },
  {
    quote: 'Do... or do not. There is no try.',
    source: 'Yoda',
    citation: 'StarWars: Episode V'
  }
];

function getRandomQuote() { //gets a random number and uses it as a random index for the quotes' objects, then returns the random object
  let randNum = Math.floor(Math.random() * (5 - 0)) + 0;
  
  return quotes[randNum];
}

function printQuote() { //Calls getRandomQuote, uses return data to construct strings and gets/changes pertanant elements
  let randObj = getRandomQuote(); 
  let test1 = document.getElementsByClassName('qoute').innerHTML = '<p class="quote">' + randObj.quote + '</p>';
  let test2 = document.getElementsByClassName('source').innerHTML = '<p class="source">' + randObj.source;
  let test3 = document.getElementsByClassName('citation').innerHTML = '<span class="citation">' + randObj.citation + '</span></p>';
  
  document.getElementById('quote-box').innerHTML = test1 + test2 + test3;
}
