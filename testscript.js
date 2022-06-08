class LiteracyNote {
    constructor(name,value){
        this._name = name;
        this._value = value;
        this._appearance = `gameimages\\${name.toLowerCase()}.png`;
        this._attempts = 0;
        this._correct = false;
        
    }
    get name(){
        return this._name;
    }
    get value(){
        return this._value;
    }
    get appearance(){
        return this._appearance;
    }
    get correct(){
        return this._correct;
    }
    increaseAttempts(){
        return this._attempts++;
    }
    isCorrect(changeCorrect){
        return this._correct = changeCorrect; 
    }
}

const crotchet = new LiteracyNote('Crotchet', 1);
const quaver = new LiteracyNote('Quaver', 0.5);
const minum = new LiteracyNote('Minum', 2);
const semibreve = new LiteracyNote('Semibreve', 4);

const listOfLit = [quaver,crotchet,minum,semibreve];
let editListOfLit = listOfLit.slice();
let randomQSelector;
let elolRanQ;

const generateQuestion = () =>{
    randomQSelector = (editListOfLit.length == 0) ? 0 : Math.floor(Math.random() * editListOfLit.length);
    elolRanQ = editListOfLit[randomQSelector];//Ease of Access for array
    /*This places the information from the lit objects into the DOM*/
    document.getElementById("litTitle").innerHTML = `${elolRanQ.name}`;
    document.getElementById("litImage").src= elolRanQ.appearance;




        //checks answer to see if it is correct. If it is then it sets correct to true and increasesAttempt Value
        // const checkAnswer = () =>{
        //     if(/*the correct answer is given variable*/){
        //     elolRanQ.isCorrect(true);
        //     elolRanQ.isCorrect(true);
        //     editListOfLit.splice(randomQSelector, 1);
        //     elolRanQ.increaseAttempts();
        //     }else{
        //         elolRanQ.isCorrect(false);
        //         elolRanQ.increaseAttempts();
        //     }
        // }
}

const resetQuestion = () =>{
    randomQSelector = null; //resets the randomnumgen to null
}
const testFunction = () =>{
        elolRanQ.isCorrect(true);
        editListOfLit.splice(randomQSelector, 1);
        elolRanQ.increaseAttempts();
        console.log(editListOfLit);
        console.log(randomQSelector);
        generateQuestion();
}

