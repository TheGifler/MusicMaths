class LiteracyNote {
  constructor(name, value) {
    this._name = name;
    this._value = value;
    this._appearance = `gameimages\\${name.toLowerCase()}.png`;
    this._attempts = 0;
    this._correct = false;
  }
  get name() {
    return this._name;
  }
  get value() {
    return this._value;
  }
  get appearance() {
    return this._appearance;
  }
  get correct() {
    return this._correct;
  }
  increaseAttempts() {
    return this._attempts++;
  }
  isCorrect(changeCorrect) {
    return (this._correct = changeCorrect);
  }
}
/* const MusicNoteValues = {
  crotchet: new LiteracyNote("Crotchet", 1),
  quaver: new LiteracyNote("Quaver", 0.5),
  minum: new LiteracyNote("Minum", 2),
  semibreve: new LiteracyNote("Semibreve", 4),
}; */

const crotchet = new LiteracyNote("Crotchet", 1);
const quaver = new LiteracyNote("Quaver", 0.5);
const minum = new LiteracyNote("Minum", 2);
const semibreve = new LiteracyNote("Semibreve", 4);

const MNVArray = [quaver, crotchet, minum, semibreve];
let randomQSelector;
let currentQuestion;

function shuffle(array) {
  var i = array.length,
    j = 0,
    temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));

    // swap randomly chosen element with current element
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

const resetQuestions = () => {
  randomQSelector = 0;
  currentQuestion = null;
};

const randomArrayNumGen = (whichArray) => {
  console.log(whichArray.length);
  return randomQSelector =
    whichArray.length == 0 ? 0 : Math.floor(Math.random() * whichArray.length);
};

let flexArray = JSON.parse(JSON.stringify(MNVArray));
let iteration;
const questionGeneration = () => {
  const chooseQuestion = () =>{
      currentQuestion = flexArray[randomQSelector];
      console.log(currentQuestion);
  }
  const removeMemberOfArray = () => {
    flexArray.splice(randomQSelector,1)
    console.log(flexArray);
  };
  const randomBox = (whichArray) =>{
    let temp = JSON.parse(JSON.stringify(whichArray))
    let temp2 = [];
    let temp3 = [];
    for (let i = 0; i < (whichArray.length);i++){
      temp2.push(i);
    }
    //return the shuffled array in an Array
    temp3 = JSON.parse(JSON.stringify(temp2));
    shuffle(temp3);
    console.log(`The original array is ${temp2} The shuffled box array is ${temp3}`)
  return temp3; 
 }
  chooseQuestion();
  removeMemberOfArray();
  randomBox(flexArray);
};

const test = () => {
  // console.log(flexArray);
   randomArrayNumGen(MNVArray);
   console.log(randomQSelector);
  // resetQuestions();
  // console.log(randomQSelector);
  questionGeneration();
  
};
test();
