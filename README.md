# Todo with MEAN
A todo app using MEAN stack.

Only api is functional as of now. Front end is under development.

To run the api-

Run 'npm install' from the project folder( Ensure Node.js and MongoDB are installed).
Then run 'npm start', the app will be hosted at port 3000
Execute the http://localhost:3000/api/setupTodo to insert seed data.
Now the api is setup and its various endpoints are-

GET  - http://localhost:3000/api/todos/:uname - returns all the todos for the given user
GET  - http://localhost:3000/api/todo/:id     - returns a todo based on an id
POST - http://localhost:3000/api/todo         - updates/adds a todo
DELETE - http://localhost:3000/api/todo       - deletes a todo   
