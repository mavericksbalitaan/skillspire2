Part 1: Rendering React Elements

Task:

- Create a new React application using Create React App.
- Implement a React component called ElementRenderer that renders the following React elements:
  - A <h1> element with the text "Welcome to React".
  - A <p> element with the text "This is a paragraph".
  - A <ul> element containing three <li> elements with the text "Item 1", "Item 2", and "Item 3".
  - An <a> element with the text "Click here" and a link to https://www.example.comLinks to an external site..

Submission Guidelines:

1. Set up a new React application using Create React App.
2. Create a new file named ElementRenderer.js in the src/components directory.
3. Define the ElementRenderer component in the ElementRenderer.js file.
4. Use JSX syntax to render the provided React elements within the ElementRenderer component.
5. Ensure your React app runs without errors and displays the ElementRenderer component correctly.

Part 2: Managing State with useState()

Task:

- Implement a React component called Counter that displays a counter starting from 0.
- Add two buttons labeled "Increment" and "Decrement" to increment and decrement the counter value respectively.
- Use the useState() hook to manage the state of the counter.

Submission Guidelines:

1. Create a new file named Counter.js in the src/components directory.
2. Define the Counter component in the Counter.js file.
3. Implement the logic to increment and decrement the counter using the useState() hook.
4. Ensure your React app runs without errors and displays the Counter component correctly.

Part 3: Adding Side Effects with useEffect()

Task:

- Create a React component called RandomNumberGenerator that generates a random number between 1 and 100.
- Display the random number and update it every 3 seconds.
- Use the useEffect() hook to add the side effect of updating the random number.

Submission Guidelines:

1. Create a new file named RandomNumberGenerator.js in the src/components directory.
2. Define the RandomNumberGenerator component in the RandomNumberGenerator.js file.
3. Implement the logic to generate and update the random number using the useEffect() hook.
4. Ensure your React app runs without errors and displays the RandomNumberGenerator component correctly.

Part 4: React Router and Routing

Task:

- Implement routing in your React application using React Router.
- Define the following routes:
  - "/randomnumber" for the RandomNumberGenerator component.
  - "/counter" for the Counter component.
  - "/courses" for the Courses component that will be created in part 5

Submission Guidelines:

1. Set up React Router in your application by installing react-router-dom.
2. Define routes for each component using React Router's <Route> component.
3. Ensure your React app runs without errors and navigates to the correct components based on the defined routes.


Part 5: Redux and State Management (Challenge)

Use Redux to recreate the functionality in the wireframe below. No CSS is required for this task.
