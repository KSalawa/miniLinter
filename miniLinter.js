let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(' ');

/*
console.log(storyWords.length);
console.log(storyWords);
*/

let betterWords = storyWords.filter(unwanted => !unnecessaryWords.includes(unwanted))

/*
console.log(storyWords);
console.log(storyWords.length);
console.log(betterWords.length);
*/

//console.log(betterWords);



//step 4 below
let useOfReally = 0;
let useOfVery = 0;
let useOfBasically = 0;

//iterate through betterWords to see how many time overusedWord occured
let overusedWordsCount = betterWords.forEach(word => {
    if(word === 'really') {
        useOfReally += 1;
    } else if (word === 'very') {
        useOfVery += 1;
    } else if (word === 'basically') {
        useOfBasically += 1;
    }
});
  
function overusedWordsTotal(){
    console.log(`You've used REALLY ${useOfReally} times.`)
    console.log(`Word VERY has been used ${useOfVery}`)
    console.log(`BASICALLY has been used ${useOfBasically} time.`)
};

overusedWordsTotal();

/* step 5:
Now, count how many sentences are in the paragraph.
This may seem tricky, but remember that all of the 
sentences in this paragraph end with a period (.) 
or an exclamation mark (!). You could iterate over 
the array and add 1 to a sentence counter variable 
for each word that has a period or exclamation mark
 as its final character. */

 let sentences = 0;
 
betterWords.forEach(word => {
    if (word[word.length-1]=== '.' || word[word.length-1]=== '!'){
        sentences += 1;
    }
})

 console.log(`There are ${sentences} in the paragraph.`);

 console.log(betterWords.join(' '));