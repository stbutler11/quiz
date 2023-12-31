const data = [
  { name: "Harry Potter", src: "https://ik.imagekit.io/hpapi/harry.jpg" },
  {
    name: "Hermione Granger",
    src: "https://ik.imagekit.io/hpapi/hermione.jpeg",
  },
  { name: "Ron Weasley", src: "https://ik.imagekit.io/hpapi/ron.jpg" },
  { name: "Draco Malfoy", src: "https://ik.imagekit.io/hpapi/draco.jpg" },
  {
    name: "Minerva McGonagall",
    src: "https://ik.imagekit.io/hpapi/mcgonagall.jpg",
  },
  {
    name: "Cedric Diggory",
    src: "https://ik.imagekit.io/hpapi/cedric.png",
  },
  { name: "Cho Chang", src: "https://ik.imagekit.io/hpapi/cho.jpg" },
  { name: "Severus Snape", src: "https://ik.imagekit.io/hpapi/snape.jpg" },
  { name: "Rubeus Hagrid", src: "https://ik.imagekit.io/hpapi/hagrid.png" },
  {
    name: "Neville Longbottom",
    src: "https://ik.imagekit.io/hpapi/neville.jpg",
  },
  { name: "Luna Lovegood", src: "https://ik.imagekit.io/hpapi/luna.jpg" },
  { name: "Ginny Weasley", src: "https://ik.imagekit.io/hpapi/ginny.jpg" },
  { name: "Sirius Black", src: "https://ik.imagekit.io/hpapi/sirius.JPG" },
  { name: "Remus Lupin", src: "https://ik.imagekit.io/hpapi/lupin.jpg" },
  {
    name: "Arthur Weasley",
    src: "https://ik.imagekit.io/hpapi/arthur.jpg",
  },
  {
    name: "Bellatrix Lestrange",
    src: "https://ik.imagekit.io/hpapi/bellatrix.jpg",
  },
  {
    name: "Lord Voldemort",
    src: "https://ik.imagekit.io/hpapi/voldemort.jpg",
  },
  {
    name: "Horace Slughorn",
    src: "https://ik.imagekit.io/hpapi/slughorn.JPG",
  },
  {
    name: "Kingsley Shacklebolt",
    src: "https://ik.imagekit.io/hpapi/kingsley.jpg",
  },
  {
    name: "Dolores Umbridge",
    src: "https://ik.imagekit.io/hpapi/umbridge.jpg",
  },
  { name: "Lucius Malfoy", src: "https://ik.imagekit.io/hpapi/lucius.jpg" },
  {
    name: "Vincent Crabbe",
    src: "https://ik.imagekit.io/hpapi/crabbe.jpg",
  },
  { name: "Gregory Goyle", src: "https://ik.imagekit.io/hpapi/goyle.jpg" },
  { name: "Mrs Norris", src: "https://ik.imagekit.io/hpapi/norris.JPG" },
  { name: "Argus Filch", src: "https://ik.imagekit.io/hpapi/filch.jpg" },
];

const questions = data.map(d => ({
    answer: d.name,
    category: "Harry Potter",
    imageUrl: d.src,
    question: "Name this Harry Potter character",
    type: "open"
}));

export async function nextQuestion() {
    return questions[Math.floor(Math.random() * data.length)];
}
