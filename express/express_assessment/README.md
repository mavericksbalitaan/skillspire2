Instructions:

- This exam consists of coding questions related to Express.js.
- Read each question carefully and write the code to solve it.
- You are allowed to refer to the Express.js documentation and any relevant resources.
- Ensure your code is well-structured, follows best practices, and handles errors appropriately.

Question 1: Implement Routing and Middleware

You are building a simple Express.js application for managing users. Implement the following routes and middleware:

1. Create a route to display a welcome message at the root URL ("/").
2. Create a route to retrieve a list of users at the "/users" endpoint. (The list of users should be hardcoded in your application)

Question 2: Build a RESTful API

You are tasked with building a RESTful API to manage a collection of products (The list of products should be hardcoded in your application). Implement the following endpoints:

1. GET /products: Retrieve a list of all products.
2. GET /products/:id: Retrieve details of a specific product by ID.
3. POST /products: Add a new product to the collection.
4. PUT /products/:id: Update details of a product by ID.
5. DELETE /products/:id: Delete a product by ID.
Ensure that each product has properties such as "name", "price", and "description".

Question 3: Implement Middleware for Validation

Create middleware functions to validate incoming data for POST and PUT requests for the "/products" endpoint from Question 2. Ensure that the required properties ("name", "price", and "description") are present in the request body. Return an error if any required property is missing.

Question 4: Build a Todo List API

Develop a simple Todo List API using Express.js (The list of todos should be hardcoded in your application). Implement the following endpoints:

1. GET /todos: Retrieve a list of all todos.
2. GET /todos/:id: Retrieve details of a specific todo by ID.
3. POST /todos: Add a new todo to the list.
4. PUT /todos/:id: Update details of a todo by ID.
5. DELETE /todos/:id: Delete a todo by ID.
Ensure that each todo has properties such as "title", "description", and "completed".

Question 5: Implement Route Handlers for GET and POST

Implement route handlers for GET and POST requests for the "/todos" endpoint from Question 4. Ensure that GET retrieves all todos, and POST adds a new todo to the list.

Good luck!
