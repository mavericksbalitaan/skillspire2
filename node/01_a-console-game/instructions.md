Coding challenge
We want to create a random number guessing game.
The way it works is that the game generates a random number from 1 to 10, and the player must try to guess it in 3 tries or less.

Here’s what you will have to do:

- Generate a random number (don’t worry, we will do this for you).
- Take the player’s input from the console (don’t worry, we will do this for you as well).
- Compare the player’s guess with the generated number and check if:
  - The number of remaining tries is more than 0. If so, the player can continue guessing if they are wrong.
  - The player has won.
  - The player has lost.
- If the player has tries left, output TOO HIGH or TOO LOW to the console depending on their guess.
- If the player has won, output WINNER to the console.
- If the player has lost, output YOU LOSE! THE NUMBER WAS: X to the console, where X is the randomNumber.
// tries will be passed to your function
// you need to check if they are more than 1
// the randomNumber is what the player needs to guess
// we will generate this for you
// the guess is what the player has guessed
// we will pass it to the game function
