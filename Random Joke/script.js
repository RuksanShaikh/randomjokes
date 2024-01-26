let jokes =[
    {
      "joke": "What did the German Shepherd say at his Nuremberg trial? \"I was just following odors.\""
    },
    {
      "joke": "I'm a social person. I'm friends with 25 letters of the alphabet. I don't know why."
    },
    {
      "joke": "You know what they say about men that have big feet? #They wear big shoes!"
    },
    {
      "joke": "What do you call the delivery boy at an Indian restaurant? Curry-er."
    },
    {
      "joke": "My uncle wanted to give all his sheep a sex change... But it entailed too many ramifications!"
    },
    {
      "joke": "Why did the cashier go to the doctor? She had a case of the twenties."
    },
    {
      "joke": "You know you're getting old when Santa starts looking younger."
    },
    {
      "joke": "Why are bears so hairy ? They don't have salons in the jungle !"
    },
    {
      "joke": "What did one slice of bread say to the other at the end of a game of chess? \"It's stale, mate.\""
    },
    {
      "joke": "All these people getting emails from the Prince of Nigeria, I got one from an Egyptian Pharaoh... But it turned out to just be a pyramid scheme."
    },
    {
      "joke": "Captain Ahab's crew were highly efficient sailors In fact, they were running like a whale oiled machine."
    },
    {
      "joke": "Did you know that it's traditional to serve Eggs Benedict on a hubcap? There's no plate like chrome for the Hollandaise."
    },
    {
      "joke": "There was a depressed sausage... he thought his life was THE WURST."
    },
    {
      "joke": "How do you make gold soup? You use 14 carrots."
    },
    {
      "joke": "What's the strongest letter in the alphabet? *P*, Even Superman can't hold it."
    },
    {
      "joke": "What's gray and all around? Everything. I'm a dog."
    },
    {
      "joke": "What' the difference between roast beef and pea soup? Anyone can roast beef, but not everyone can pea soup."
    },
    {
      "joke": "How does Gandhi measure passive resistance? In oooooohms."
    },
    {
      "joke": "I can make a movie with my hand. All it takes is a FLICK of the wrist!"
    },
    {
      "joke": "Have you seen the movie - Constipated? No? Why? Cause it hasn't come out yet!"
    },
    {
      "joke": "Why did the hippie drown? He was too *far out*!"
    },
    {
      "joke": "Will you tell you the story of the huge sad wall? I shouldn't, you'll never get over it."
    },
    {
      "joke": "What do you call a ubiquitous spud? A common-tater!"
    },
    {
      "joke": "Every journey has a beginning. -ahem- Just a small town girl Living in a lonely world..."
    },
    {
      "joke": "I invented a time machine... next week."
    },
    {
      "joke": "What goes oh oh oh? Santa walking backwards."
    },
    {
      "joke": "How many South Americans does it take to change a lightbulb? A Brazilian."
    },
    {
      "joke": "What did fish say when she hit the wall ? Dam!"
    },
    {
      "joke": "I support farming and math... I'm pro-tractor."
    },
    {
      "joke": "Where do dogs go when they lose their tails? To a retail store."
    }
  ]
  

let btn = document.querySelector("#btn");

function add() {
  let ran = Math.floor(Math.random() * jokes.length);
  document.getElementById("jokebox").innerHTML = jokes[ran].joke;
}
add();
btn.addEventListener("click", add);

