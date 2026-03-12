🎮 Games API (Express.js)

A simple REST API built with Node.js and Express.js that allows users to manage a collection of games.
The API supports basic CRUD operations and stores data in a JSON file.

---

📁 Project Structure

expressProject
│
├── controllers
│   └── games.controllers.js
│
├── data
│   └── games.json
│
├── routers
│   └── games.routers.js
│
├── utils
│   ├── readFile.js
│   └── writeFile.js
│
├── app.js
├── package.json
└── README.md

---

⚙️ Technologies Used

- Node.js
- Express.js
- JavaScript
- File System ("fs/promises")

---

🚀 Installation

1. Clone the repository

git clone https://github.com/your-username/your-repository-name.git

2. Navigate to the project folder

cd expressProject

3. Install dependencies

npm install

---

▶️ Running the Server

Start the server using:

node app.js

The server will run on:

http://localhost:3000

---

📡 API Endpoints

Get all games

GET /games

Returns a list of all games.

---

Get game by ID

GET /games/:id

Returns a specific game by its ID.

---

Create a new game

POST /games

Example request body:

{
  "name": "GTA V",
  "price": 60,
  "platform": ["pc", "ps"]
}

---

Update a game

PUT /games/:id

Updates an existing game.

---

Delete a game

DELETE /games/:id

Deletes a game from the database.

---

📄 Data Storage

All data is stored inside:

data/games.json

The file acts as a simple database for this project.

---

✅ Features

- REST API architecture
- CRUD operations
- JSON file database
- Basic validation
- Express Router structure

---

📚 Purpose of the Project

This project was created to practice:

- Express.js routing
- Middleware
- Controllers
- File system operations
- Building REST APIs

---

👨‍💻 Author

Created as a learning project while studying Node.js and Express.