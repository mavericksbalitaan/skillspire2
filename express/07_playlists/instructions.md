Task: Develop a Music Playlist API using Express.js.

Requirements:

1. Implement the following endpoints:

- GET /playlists: Retrieve a list of all playlists.
- GET /playlists/:id: Retrieve details of a specific playlist by ID.
- POST /playlists: Add a new playlist to the collection.
- PUT /playlists/:id: Update details of a playlist by ID.
- DELETE /playlists/:id: Delete a playlist by ID.
- GET /playlists/:id/songs: Retrieve a list of songs in a specific playlist.
- POST /playlists/:id/songs: Add a new song to a playlist.
- DELETE /playlists/:id/songs/:songId: Remove a song from a playlist.

2. Use in-memory storage (e.g., an array) to store playlist and song data.
3. Ensure that playlists have properties such as title, description, and creator.
4. Ensure that songs have properties such as title, artist, and duration.
5. Validate incoming data for POST and PUT requests to ensure required properties are present.
6. Test the API endpoints using tools like Postman or curl to ensure all endpoints work as expected.
