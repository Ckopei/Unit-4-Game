# Crystal Game

For this project I built a number guessing game.
Here's how the app works:

* There will be four crystals displayed as buttons on the page.

* The player will be shown a random number at the start of the game.

* When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

* The game will hide this amount until the player clicks a crystal.
* When they do click one, it update the player's score counter.

* The player wins if their total score matches the random number from the beginning of the game.

* The player loses if their score goes above the random number.

* The game restarts whenever the player wins or loses.

* When the game begins again, the player will see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

* The app will show the number of games the player wins and loses. To that end, players do not have to refresh the page as a means to restart the game.

##### Game mechanic details

* The random number shown at the start of the game will always be between 19 - 120.

* Each crystal will always have a random hidden value between 1 - 12.
