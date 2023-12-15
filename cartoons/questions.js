const data = [
    {
        "title": "Mickey Mouse",
        "description": "The famous cartoon mouse created by Walt Disney. Originally going to be named Mortimer. Mickey Mouse first appeared in Steamboat Willie. Mickey was one of the first animals to get a star on the Hollywood Walk of Fame. Created in 1928.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Mickey-Mouse.jpg"
    },
    {
        "title": "Bugs Bunny",
        "description": "Possibly the world’s most famous rabbit, and leader of the Looney Tunes. Bugs was one of the first animals to get a star on the Hollywood Walk of Fame (other was Mickey). Not bad for cartoons. Eh… What’s up, doc? Created in 1938.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Bugs-Bunny.jpg"
    },
    {
        "title": "Homer Simpson",
        "description": "The patriarch of The Simpsons, the longest running American sitcom. Loves donuts. Doh! Created in 1987.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Homer-Simpson.jpg"
    },
    {
        "title": "Fred Flintstone",
        "description": "Head of the first primetime sitcom cartoon characters on tv, The Flintstones. Meet The Flintstones. Created in 1960.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Fred-Flintstone.jpg"
    },
    {
        "title": "Snoopy",
        "description": "When it comes to cartoon characters, not many are as cool as this dog, AKA Joe Cool. Beagle that is loyal to Charlie Brown. Created in 1950.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Snoopy.jpg"
    },
    {
        "title": "SpongeBob SquarePants",
        "description": "A happy go lucky sea sponge that lives in a pineapple under the sea, in the city of Bikini Bottom. Created in 1999.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/SpongeBob-SqaurePants.jpg"
    },
    {
        "title": "Eric Cartman",
        "description": "One of the rudest cartoon characters of all time, but respect his authority in South Park. Created in 1997.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Eric-Cartman.jpg"
    },
    {
        "title": "Daffy Duck",
        "description": "Sarcastic cartoon duck that always tries to keep up with Bugs Bunny and his antics. Created in 1937.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Daffy-Duck.jpg"
    },
    {
        "title": "Winnie-the-Pooh",
        "description": "This teddy bear likes honey, also known as Pooh Bear or plain Pooh. Based on Christopher Robin Milne’s stuffed animal. Created in 1924.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Winnie-The-Pooh.jpg"
    },
    {
        "title": "Charlie Brown",
        "description": "This lovable loser is the leader of the Peanuts. Best friend is a beagle. Nicknamed Chuck. Good grief. Created in 1950.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Charlie-Brown.jpg"
    },
    {
        "title": "Goofy",
        "description": "Silly dog, that walks on two legs unlike fellow Walt Disney pup Pluto. Gawrsh! Created in 1932 .",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Goofy.jpg"
    },
    {
        "title": "Bart Simpson",
        "description": "Troublemaker of The Simpsons family. Oldest child of Homer and Marge Simpson. Does not like school. Don’t have a cow man. Created in 1987.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Bart-Simpson.jpg"
    },
    {
        "title": "Donald Duck",
        "description": "Wears a sailor outfit, because like a sailor a duck lives on water. Bugs Bunny has his duck pal, and Mickey Mouse has Donald Duck. Created in 1934.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Donald-Duck.jpg"
    },
    {
        "title": "Garfield",
        "description": "Cartoon cat that loves lasagna, and hates Mondays. Can usually be seen tricking Odie. Created in 1978.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Garfield.jpg"
    },
    {
        "title": "Woody",
        "description": "Lead cowboy from the Toy Story franchise that belongs to Andy Davis. Created in 1995.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Woody.jpg"
    },
    {
        "title": "Betty Boop",
        "description": "All time classic cartoon character. Betty has been turning heads for almost a century. Created in 1930.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Betty-Boop.jpg"
    },
    {
        "title": "Tom Cat",
        "description": "Cartoon cat from Tom and Jerry. Always battling Jerry Mouse. Original name was Jasper. Created in 1940.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Tom-Cat.jpg"
    },
    {
        "title": "Jerry Mouse",
        "description": "Cartoon mouse from Tom and Jerry. Always driving Tom Cat nuts. Original name was Jinx. Created in 1940.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Jerry-Mouse.jpg"
    },
    {
        "title": "Scooby Doo",
        "description": "World’s most famous Great Dane, and star of the show. Overuses the letter “R”. Ruh roh. Created in 1969.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Scooby-Doo.jpg"
    },
    {
        "title": "Woody Woodpecker",
        "description": "The character Wooddrow “Woody” Woodpecker is a mischief with wild laugh, and a true prankster. Created in 1940.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Woody-Woodpecker.jpg"
    },
    {
        "title": "Hello Kitty",
        "description": "Also known as Kitty White, this girl knows how to sell merch. No, she’s not a cat according to the character’s manufacturer. Created in 1974.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Hello-Kitty.jpg"
    },
    {
        "title": "Mighty Mouse",
        "description": "Famous cartoon mouse that has super strength like Superman. Only weakness is limburger cheese. Here he comes to save the day! Created in 1942.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Mighty-Mouse.jpg"
    },
    {
        "title": "Felix The Cat",
        "description": "Cool cat. Started as a star in the silent era. Felix shared screen-time with Charlie Chaplin. Created in 1919.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Felix-The-Cat.jpg"
    },
    {
        "title": "Wile E Coyote",
        "description": "Can never quite catch the Road Runner. ACME products always let him down. Created in 1948.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Wile-E-Coyote.jpg"
    },
    {
        "title": "Minnie Mouse",
        "description": "Minnie’s full name is Minerva Mouse. Love interest and wife of Mickey Mouse. Can always been seen wearing her famous bows. Created in 1928.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Minnie-Mouse.jpg"
    },
    {
        "title": "Tweety Bird",
        "description": "Smart yellow male canary brought to you by Warner Bros. He loves to toy with Sylvester. Created in 1941.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Tweety-Bird.jpg"
    },
    {
        "title": "Pink Panther",
        "description": "Pink cat, named after a diamond. Became famous after appearing in the Pink Panther film introduction. Created in 1963.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Pink-Panther.jpg"
    },
    {
        "title": "Peter Griffin",
        "description": "He’s a Family Guy that resides in Quahog, Rhode Island. Big fan of cutaway gags. Created in 1998.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Peter-Griffin.jpg"
    },
    {
        "title": "Porky Pig",
        "description": "Cartoon character pig with a stutter and star of the show. Could also be seen at the end of Looney Tunes cartoons saying “Th-th-th-that’s all folks!” Created in 1935.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Porky-Pig.jpg"
    },
    {
        "title": "Road Runner",
        "description": "A bird that is a super fast cartoon character. Always a step ahead of Wile E Coyote. Beep beep. Created in 1948.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Road-Runner.jpg"
    },
    {
        "title": "George Jetson",
        "description": "Meet George Jetson. His boy is Elroy. Daughter Judy. Jane is his wife. Man of the future, brought to you by Hanna Barbera. Created in 1962.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/George-Jetson.jpg"
    },
    {
        "title": "Daisy Duck",
        "description": "Donald’s smart girlfriend that loves to shop. Minnie Mouse’s best friend. Aunt to April, May, and June. Created in 1940.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Daisy-Duck.jpg"
    },
    {
        "title": "Elmer Fudd",
        "description": "Silly hunter, and also one of Looney Tunes most well known characters. Always trying to catch that wascally wabbit, Bug Bunny. Created in 1937.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Elmer-Fudd.jpg"
    },
    {
        "title": "Popeye",
        "description": "A sailor that smokes a pipe, and eats spinach when he requires super strength. His girlfriend’s name is Olive Oyl, and has an adopted baby named Swee’pea. Created in 1929.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Popeye.jpg"
    },
    {
        "title": "Patrick Star",
        "description": "Best cartoon pink starfish and best buddies with SpongeBob SquarePants. Expert at the “art of doing nothing”. Created in 1999.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Patrick-Star.jpg"
    },
    {
        "title": "Sylvester The Cat",
        "description": "Domestic cartoon cat with a lisp. Often can be seen chasing Tweety and Speedy Gonzales. Sufferin’ succcotash. Created 1945.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Sylvester-The-Cat.jpg"
    },
    {
        "title": "Roger Rabbit",
        "description": "Maroon Cartoons star rabbit, and happily married to Jessica Rabbit. First appeared in the book Who Censored Roger Rabbit? and then later in the movie Who Framed Roger Rabbit? Created in 1981.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Roger-Rabbit.jpg"
    },
    {
        "title": "Beavis",
        "description": "Teenage cartoon character that starred on MTV’s Beavis and Butt-Head. His alter ego is the famous Cornholio. Has a bit of an underbite. Created in 1992.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Beavis.jpg"
    },
    {
        "title": "Butt-Head",
        "description": "Teenage cartoon character that starred on MTV’s Beavis and Butt-Head. Enjoys making fun of music videos with Beavis, and leader of the two. Shut up Beavis. Created in 1992",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Butt-Head.jpg"
    },
    {
        "title": "Kenny McCormick",
        "description": "Loves to mumble through his orange parka and always dying on South Park, then somehow comes back. Created in 1997.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Kenny-McCormick.jpg"
    },
    {
        "title": "Shrek",
        "description": "Big green ogre that lives in a swamp. The star of a 2001 film that bears his name, and based on a 90’s fairy tale. Created in 1990.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Shrek.jpg"
    },
    {
        "title": "Tigger",
        "description": "Not a tiger, but rather a Tigger. Winnie’s pal that’s based on one of Christopher Robin Milne’s stuffed animals. Loves to bounce. Created in 1928.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Tigger.jpg"
    },
    {
        "title": "Papa Smurf",
        "description": "Head smurf. The oldest and wisest of all the Smurfs. Papa Smurf is the rock the other Smurfs all turn too whenever there’s a problem. Created in 1958.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Papa-Smurf.jpg"
    },
    {
        "title": "Fat Albert",
        "description": "Leader of the Junkyard Gang. Though on the heavy side, Albert is athletic and likes playing sports and music. Hey hey hey. Fat Albert and his friends. Created in 1972.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Fat-Albert.jpg"
    },
    {
        "title": "Buzz Lightyear",
        "description": "Toy Space Ranger of Toy Story that belongs to Andy Davis. One of Pixar’s most famous characters. To infinity and beyond! Created in 1995.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Buzz-Lightyear.jpg"
    },
    {
        "title": "Ren",
        "description": "Ren Höek is a cartoon Chihuahua. Best friends with Stimpy, though Ren spends most of his time picking on him. They live in the town of Hollywood in Yugoslavia. Created in 1991.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Ren.jpg"
    },
    {
        "title": "Stimpy",
        "description": "Stimpson J. Cat is a Manx cartoon cat. His brain is the size of a peanut. Best friends with Ren, though Ren doesn’t seem to appreciate that. Created in 1991.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Stimpy.jpg"
    },
    {
        "title": "Norville “Shaggy” Rogers",
        "description": "Laid back hippy member of Mystery Inc. His best friend is a Great Dane. Bit of a coward, unless it comes to getting Scooby Snacks. Zoinks. Created in 1969.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Shaggy-Rogers.jpg"
    },
    {
        "title": "Tommy Pickles",
        "description": "Thomas Malcolm Pickles is the one year old leader of the Rugrats on Nickelodeon, and one of the channels most popular cartoons. Debuted on the same day as Ren & Stimpy. Created in 1990.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Tommy-Pickles.jpg"
    },
    {
        "title": "Yogi Bear",
        "description": "Famous cartoon bear that bears the same name as the famous Yankees player, Yogi Berra. Yogi, the bear not the ballplayer, took residence in Jellystone Park. Hey there, Boo Boo! Created in 1958.",
        "src": "https://www.loudegg.com/wp-content/uploads/2020/10/Yogi-Bear.jpg"
    }
];

const imageQuestions = data
  .map(({ description, src, title }) => ({
      answer: `${title}\n${description}`,
      category: "Cartoons",
      imageUrl: src,
      question: "Who is this cartoon character?",
      type: "open"
  }));

const descriptionQuestions = data
  .map(({ description, title }) => ({
      answer: title,
      category: "Cartoons",
      question: `Name the famous cartoon character: ${description.replaceAll(title, "***")}`,
      type: "open"
  }));

const questions = [...imageQuestions, ...descriptionQuestions];

export async function nextQuestion() {
    return questions[Math.floor(Math.random() * questions.length)];
}