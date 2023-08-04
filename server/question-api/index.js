/*
THE FILE

This file contains the API that generates 10 random questions for the duration of the game.

THE LOGIC

- There is an array of questions.
- Each time a new game is started there is a function that shuffles the array.
- The first 10 questions in the array will appear in the game.
- This stops repeated questions in the same game. 

*/

const express = require('express');
const app = express();
const port = 3000;

//Array of questions
const questions = [
    {id: 1, text: 'Who is more likely to spend hours playing video games?'},
    {id: 2, text: 'Who is more likely to forget important dates like anniversaries or birthdays?'},
    {id: 3, text: 'Who is more likely to sing or dance in public?'},
    {id: 4, text: 'Who will likely be the first to apologise after an argument?'},
    {id: 5, text: 'Who is more likely to binge-watch an entire TV series in one sitting?'},
    {id: 6, text: 'Who is the better cook in the relationship?'},
    {id: 7, text: 'Who is more likely to be the first one to suggest trying something adventurous or daring?'},
    {id: 8, text: 'Who is the most hopeless romantic?'},
    {id: 9, text: 'Who is more likely to get lost in a new place without a map or GPS?'},
    {id: 10, text: 'Who is the better gift-giver in the relationship?'},
    {id: 11, text: 'Who is more likely to initiate a spontaneous trip or outing?'},
    {id: 12, text: 'Who is the better driver?'},
    {id: 13, text: 'Who is more likely to be the first one to cry during a sad movie?'},
    {id: 14, text: 'Who is the better planner for special occasions?'},
    {id: 15, text: 'Who is more likely to talk their way out of a parking ticket?'},
    {id: 16, text: 'Who is more likely to try a new type of cuisine?'},
    {id: 17, text: 'Who is is better at DIY?'},
    {id: 18, text: 'Who is more likely to be the first one to wake up early in the morning?'},
    {id: 19, text: 'Who is more likely to be the better negotiator in a conflict?'},
    {id: 20, text: 'Who is more likely to get excited about attending social events or parties?'},
    {id: 21, text: 'Who is the better dancer?'},
    {id: 22, text: 'Who is more likely to be the first to admit they are wrong in an argument?'},
    {id: 23, text: 'Who is more likely to get startled by horror movies?'},
    {id: 24, text: 'Who is the better saver in the relationship?'},
    {id: 25, text: 'Who is more likely to enjoy outdoor activities like hiking or camping?'},
    {id: 26, text: 'Who is more likely to be the first one to try strange or exotic food?'},
    {id: 27, text: 'Who is the better storyteller?'},
    {id: 28, text: 'Who will likely be the first to suggest a spontaneous date night?'},
    {id: 29, text: 'Who is more likely to take on a dare without thinking twice?'},
    {id: 30, text: 'Who is more likely to spend hours scrolling through social media?'},
    {id: 31, text: 'Who is better gift wrapper?'},
    {id: 32, text: 'Who will likely be the first to suggest a movie night at home?'},
    {id: 33, text: 'Who is more likely to remember important details, like passwords or phone numbers?'},
    {id: 34, text: 'Who is more likely to be the first one to ask for directions when lost?'},
    {id: 35, text: 'Who is the better secret keeper?'},
    {id: 36, text: 'Who is the better comedian and make others laugh?'},
    {id: 37, text: 'Who will likely be the first to suggest adopting a pet?'},
    {id: 38, text: 'Who spends more time in front of the mirror getting ready?'},
    {id: 39, text: 'Who is more likely to be the first one to initiate a deep conversation about life and dreams?'},
    {id: 40, text: 'Who does the most chores in the house?'}


];

//Function that shuffles the questions array using the 'Fisher-Yates shuffle algorithm' to avoid repeated questions.

function shuffleArray(array) {

   for(let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];

   }
}

shuffleArray(questions);
let lastQuestionIndex = 0;

//Now that the questions have been shuffled the game will select the first 10 questions in the array.
//After 10 questions have been shown. It will display game over.
app.get('/api/questions/random', (req, res) => {
  if (lastQuestionIndex >= 10) {
    res.json({ text: 'Game has finished' });
    return;
  }

//This is the range (0 - 10) for the amount of questions we want to show per game.
  const randomQuestion = questions[lastQuestionIndex];
  lastQuestionIndex++;
  res.json(randomQuestion);
  
});

//This is to signal that the application is listening and ready to go.
app.listen(port, () => {
    console.log(`Server is listening at http://localhost: ${port}`);
});