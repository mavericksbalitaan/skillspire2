JavaScript Exam: Application Development
(NOTE: The exam will have multiple files so the final submission should be a zipped folder containing all of the necessary HTML and Javascript files)

Part 1: Connecting JavaScript and HTML

Task: Write JavaScript code to connect with HTML elements and manipulate their content dynamically.

- Create an HTML file with a button element and a <div> element with an id of "output".
- Write JavaScript code that listens for a click event on the button.
- Upon clicking the button, change the text content of the <div> element to "Button clicked!".
Submission Guidelines:

- Ensure the HTML and JavaScript files are properly linked.
- Test the functionality by clicking the button and verifying the text change.

Part 2: JavaScript Conditions and Loops

Task: Write JavaScript code to implement conditional statements and loops.

- Write JavaScript code that retrieves a number value from a user. (Using the prompt() function).
- Implement a loop that iterates from 1 to the entered number.
- If the current number is even, display it in the console with the message "Even number". Do this inside the loop.
- If the current number is odd, display it in the console with the message "Odd number". Do this inside the loop.
Submission Guidelines:

- Ensure the HTML and JavaScript files are properly linked.
- Test the functionality by entering different numbers and observing the console output.

Part 3: JavaScript Functions and Arrays

Task: Write JavaScript functions to manipulate arrays and perform calculations.

- Write a JavaScript function that generates an array of random numbers (between 1 and 100) with a length of 5.
- Write another JavaScript function that sorts the array in ascending order. Google how to do this.
Submission Guidelines:

- Ensure the HTML and JavaScript files are properly linked.
- Test the functionality by clicking the button and observing the sorted array displayed as list items.

Part 4: JavaScript Classes and Objects (Do this in a separate JS file)

1. Create a base Human class with five attributes: name, strength, intelligence, dexterity, and health.
2. Give a default value of 3 for strength, intelligence, and dexterity. Health should have a default of 100.
3. When an object is constructed from this class it should have the ability to pass a name
4. Let's create an additional constructor that accepts 5 parameters, so we can set custom values for every field.
5. Now add a new method called attack, which when invoked, should attack another Human object that is passed as a parameter. The damage done should be 5 * strength (5 points of damage to the attacked, for each 1 point of strength of the attacker).
6. Create a class for a Ninja, a Wizard, and a Samurai (All of them should inherit from the human class)
7. Wizard should have a default health of 50 and intelligence of 25
8. Wizard should have a method called heal, which when invoked, heals the Wizard by 10 * intelligence
9. Wizard should have a method called fireball, which when invoked, decreases the health of whichever object it attacked by some random integer between 20 and 50
10. Ninja should have a default dexterity of 175
11. Ninja should have a steal method, which when invoked, attacks an object and increases the Ninjas health by 10
12. Ninja should have a get_away method, which when invoked, decreases its health by 15
13. Samurai should have a default health of 200
14. Samurai should have a method called death_blow, which when invoked should attack an object and decreases its health to 0 if it has less than 50 health
15. Samurai should have a method called meditate, which when invoked, heals the Samurai back to full health
