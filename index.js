const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((word) => {
    let eachWord = word.split(" ");
    let newArr = [];
    for (let i = 0; i < eachWord.length; i++) {
      let upperCased =eachWord[i].charAt(0).toUpperCase() + eachWord[i].slice(1);
      newArr.push(upperCased);
    }
    return newArr.join(" ");
  })
}
console.log(titleCased());
