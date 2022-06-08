//grab elements from HTML
const eGamePlate = document.getElementsByClassName("gameplate");
const eGameScene1 = document.getElementsByClassName("gamescene1");
const eQuestionImages = document.getElementsByClassName("questionelements");
const eQuestionTexts = document.getElementsByClassName("questiontexts");
    //Question images
const eQuestionPic1 = document.getElementById("questionpic1");
const eQuestionPic2 = document.getElementById("questionpic2");
const eOperator = document.getElementById("operator");
    //Question Text
const eQuestionText1 = document.getElementById("questiontext1");
const eQuestionText2 = document.getElementById("questiontext2");
const eOperatorText = document.getElementById("operatortext");

//Class creator
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
//Going to place the questions into forming an object and use this to keep a log
  
//Create Notes
const quaver = new LiteracyNote("Quaver", 0.5);
const crotchet = new LiteracyNote("Crotchet", 1);
const minum = new LiteracyNote("Minum", 2);
const semibreve = new LiteracyNote("Semibreve", 4);
//Create Music Note Value array
const MNVArray = [quaver, crotchet, minum, semibreve];
const noOfNotes = [];

let orderOfNotes;
let questionsOverallArray = [];
let questionsNameArray = [];
let questionsValueArray = [];
let questionNumberArray = [];
let currentQuesionNumberArrayPosition;
let noOfQuestions = 4;
let rherring1;
let rherring2;
//Presetting Variables
//noOfNotes Array
for (i = 0; i<MNVArray.length;i++){
  noOfNotes.push(i);
  console.log(`${i} and ${noOfNotes}`)

}
console.log(noOfNotes);

//Durestenfield Shuffle 

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

//random num generator
const randNumGen = (span) =>{
  return Math.floor(Math.random()*span);
}

//Create Array of random numbers

const randomNumberOrderArray = () =>{
  let tempRNum = randNumGen(MNVArray.length);
  questionNumberArray.push(randNumGen(MNVArray.length));
  

  for(i = 1; i <(noOfQuestions*2); i++){ //set i to 1 because one number has already been pushed
    tempRNum = randNumGen(MNVArray.length);
    //console.log(tempRNum)
    console.log
    if (tempRNum === questionNumberArray[i-1]){ //if the previous number is the same as the current gen restart app and dont increase the iteration number.
      /* console.log(`Perform Skip.`)
      console.log(`${i-1} and also ${tempRNum}`) */

      i--;      
      continue;
    } else {
      questionNumberArray.push(tempRNum);
      console.log(questionNumberArray);
    }
    
  }

}
//console.log(MNVArray[0]);
randomNumberOrderArray();

//Order of Questions
const orderOfQuestions = () =>{
  
}


//Send the possible questions into an array.
for (i=0, j=(questionNumberArray.length/2); i < MNVArray.length;i++,j++){
  orderOfNotes = JSON.parse(JSON.stringify(noOfNotes));
  questionsOverallArray.push(MNVArray[questionNumberArray[i]]);
  questionsNameArray.push(MNVArray[questionNumberArray[i]].name);
  questionsValueArray.push(MNVArray[questionNumberArray[i]].value); 
  
  
}
console.log(questionsOverallArray);
console.log(questionsNameArray);
console.log(questionsValueArray);
//console.log(`Can you do ${}`)

//Changing QUestions
const newQuestion = () =>{
  let newQ1 = 1;
  let newQi = 0;
  let newQj = 0;
  const redHerrings = () =>{

    eQuestionText1 = questionsOverallArray[newQi];
    eQuestionText2 = questionsOverallArray[newQi];

    rherring1 = questionNumberArray[newQi];  
    rherring2 = questionNumberArray[newQj];
    newQi++;
    newQj++;
  }

  const answeredCorrect = () =>{
    MNVArray[newQi].isCorrect(true)
    MNVArray[newQi].increaseAttempts;
  }
  
}
//create the red herrings



