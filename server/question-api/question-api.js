// const { getQuestionsFromDB } = require("./db");

// // Defining the index and the max amount of questions. 
// let lastQuestionIndex = 0;
// const maxQuestions = 10;
// let cacheQuestions = null;

// // Function that shuffles the questions array using the Fisher-Yates shuffle algorithm
// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// async function getQuestions() {
//   console.log("questions being fetched");
//   if (!cacheQuestions) {
//     let dbQuestions = await getQuestionsFromDB();
//     shuffleArray(dbQuestions);
//     cacheQuestions = dbQuestions.slice(0, maxQuestions);
//   }
//     //This is selecting the first 10 Questions in the shuffled array.
//     return cacheQuestions;
// }

// app.post('/api/reset-cache', (req, res) => {
//   cacheQuestions = null;
// });

// module.exports = {getQuestions}