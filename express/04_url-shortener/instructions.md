Task: Create a URL shortener API using Express.js.

Requirements:

1. Implement the following endpoints:
 - POST /shorten: Shorten a long URL by providing it in the request body.
 - GET /:shortCode: Redirect to the original URL associated with the given short code.
2. Use in-memory storage (e.g., an object) to store the mappings between short codes and original URLs.
3. Validate the input URL to ensure it is a valid URL format before shortening.
4. Ensure that the short codes generated are unique and reasonably short.
5. Test the API endpoints using tools like Postman or curl to ensure proper functionality.
