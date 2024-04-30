Task:

Enhance your existing React application to include protected routes that require authentication using React Router.

Define the following routes:

- "/login": This route should render a Login component with input fields for username and password.
- "/dashboard": This route should render a Dashboard component displaying user data.
- Implement protected routes(Challenge: This is not required for completion):
  - "/dashboard" should only be accessible if the user is authenticated (i.e., logged in) (Hint: Use useState to validate if somebody is already logged in. Hard code those values).
  - If the user is not authenticated, redirect them to the "/login" route.
  - After successful login, redirect the user to the "/dashboard" route.
- Use a fake authentication mechanism (e.g., hardcode valid username/password) for demonstration purposes.

Submission Guidelines:

1. Extend your existing React application (if applicable) or create a new one using Create React App.
2. Define the new routes and implement protected routes in the App.js file using React Router.
3. Create Login and Dashboard components in the src/components directory.
