# Express Assignment 1

This project is a simple Express.js server built for an assignment. It includes basic routes for testing and a POST route that echoes back JSON data.

## Features
- A `GET /` route that responds with "Welcome to the Express server!"
- A `GET /about` route that responds with "This is the about page."
- A `POST /data` route that accepts JSON data and responds with the same data.

## Setup Instructions

Follow these steps to set up and run the project locally:

1. **Clone the Repository:**
   ```bash
   git clone https://theonly1adia.github.io/express-assignment-1/

    Navigate into the project directory
    ```bash 
    cd express-assignmen-1
    

2. **Install Dependencies:** Ensure you have Node.js installed. Then, run:
    ```bash

    npm install

3.  **Run the Server:**  Use the development script to start the server with Nodemon:
    ```bash
    npm run dev


    ```bash

    npm start

4.  **Access the Server:** The server runs on http://localhost:3000.

## Routes and Testing

You can test the routes using tools like Thunder Client, Postman, or a web browser:

GET /
URL: http://localhost:3000/
Response: "Welcome to the Express server!"

GET /about
URL: http://localhost:3000/about
Response: "This is the about page."

POST /data
URL: http://localhost:3000/data
Request Body (example):

{
  "city": "New Orleans",
  "state": "LA",
  "population": "364,000",
  "message": "Data received successfully"
}

## Development Tools

Express.js: Framework used to create the server.
Nodemon: Development tool for automatically restarting the server upon file changes.
Scripts
npm start: Starts the server using node.
npm run dev: Starts the server using nodemon for live reloading.


