# CFG Final Project - Fullstack 1 Group 3

This project was created by Eleri, Maddy, Meg, Niki and Kudzai 

## Table of Contents
- Game Overview
- Getting Started
  - Installation
  - How to Play
- Gameplay
- Results

## Game Overview
"It's Not You, It's Me!" is a 2-player game designed for friends to play together. The game asks a series of questions about the players, and the goal is to match responses to earn points. The game is designed for fun and entertainment, connecting friends in an engaging and interactive way.

## Getting Started
### Helpful Tips
The 'client' folder stores the frontend React code. The 'server' folder contains the backend express code. The 'database' folder contains the database SQL code. The 'resources' folder contains any miscellaneous code.
The key client files are App.js, App.css and all files in the components folder
The key server file is index.js

### Installation
1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Open a new terminal and navigate to the server folder: 
    `cd server` to navigate to the server folder
    `nodemon index.js` to run the server
4. Open a new terminal and navigate to the client folder: 
    `cd client` to navigate to the client folder
    `npm start` to launch the browser
5. When you’re finished, stop the development server:
    Open both terminals and type `ctrl + C` for windows or `cmd + C` for Mac
    When it says  “Terminate batch job (Y/N)?" you can type Y and press enter.”

### How to Play
1. Open the game's homepage in a web browser.
2. Use the "Log In to Play" component to sign in with your username and password.
3. Explore the "About Us" section to learn about the developers' roles.
4. Scroll down for the "How to Play" instructions to understand the game mechanics.
5. Click the "Play" button on the homepage.
6. Share the provided link with a friend to invite them to play.
7. Wait for your friend to join the game.
8. Once both players are ready, the game will load.
9. Select answers to 10 questions regarding each player's likelihood to perform certain actions.
10. Earn points for matching responses.
11. Progress through the questions using the "Next Question" button.
12. After answering all 10 questions, view your score on the results page.

### Gameplay
- Two players join the game using a unique link.
- Each player selects an icon: a purple dragon or an orange dragon.
- The game presents a carousel with 10 questions.
- Players select the player they think is most likely to perform the action described in the question.
- Points are awarded for matching responses.
- A card pops up indicating "Match" or "No Match" for each question.
- Stars at the bottom track question progress.
- The "Next Question" button advances the carousel until the game is over

### Results
- The results page displays the final score out of 10.
