const { getQuestionsFromDB } = require("./db");

// Defining the index and the max amount of questions. 
let lastQuestionIndex = 0;
const maxQuestions = 10;

// Function that shuffles the questions array using the Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

async function getQuestions() {
    let dbQuestions = await getQuestionsFromDB();
    shuffleArray(dbQuestions);
    
    //This is selecting the first 10 Questions in the shuffled array.
    return dbQuestions.slice(lastQuestionIndex, maxQuestions);
}

module.exports = {getQuestions}