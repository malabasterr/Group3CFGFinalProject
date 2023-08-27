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
"It's Not You, It's Me!" is an interactive 2-player game, allowing users to connect across two different devices. The game asks a series of questions about the players, and the goal is to match responses to earn points. The game is designed for entertainment, connecting friends and families in an engaging quiz format.

## Getting Started
### Helpful Tips
The 'client' folder stores the frontend React code. The 'server' folder contains the backend Node (Express) code. The Project Documentation file contains the PDF of our project documentation report.

### Installation
1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Open a new terminal and navigate to the server folder with 
    `cd server`. Then run the server with 
    `nodemon index.js`.
4. Open a new terminal and navigate to the client folder with 
    `cd client`. Then run the development server with
    `npm start`.
When you’re finished, stop the development server. To do so, open both terminals and type `ctrl + C` for windows or `cmd + C` for Mac. If it says “Terminate batch job (Y/N)?" type Y and press enter.

### How to Play
1. Open the game's homepage in a web browser.
2. Explore the About Us and How to Play sections of the homepage, to understand more about the background of the application and game mechanics.
3. Create a new account using the Sign Up button located on the navbar.
4. With the created username and password, Log in with the "Log in to Play" box.
7. Click "Start Game".
8. Share the provided link with a friend to invite them to play.
9. Wait for your friend to join the game* *(*while the development server is running on localhost, a second player will need to be simulated by opening up a browser in incognito mode, and pasting the link into this to act as player 2's browser)*.
10. Once both players are in the virtual 'room', the game will load.
11. Select answers to 10 questions regarding each player's likelihood to perform certain actions.
12. Earn a point for each matching response.
13. Progress through the questions using the "Next Question" button.
14. After answering all 10 questions, follow the "Show results" button to review the final score.
15. Navigate back to the Homepage with the "Back to Homepage" button.

### Gameplay
- Two players join the game using a unique game room ID which is shared via a url.
- The game presents a carousel with 10 questions.
- Users select which player they think is most likely to perform the action described in the question.
- A points is awarded for each matching response.
- A card pops up indicating "Match" or "No Match" for each question.
- Stars at the bottom track question progress.
- The "Next Question" button advances the carousel until the game is over

### Results
- The results popup displays the final score out of 10 that the players achieved.
- A Back to Homepage button navigates the users back to the homepage of the application.
