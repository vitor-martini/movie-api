# Movie API

This repository contains the backend for the "movie-web" application, a platform for registering and organizing movies by tags. The primary goal of the movie-api project was to practice Node.js with Express, SQLite, and Knex.js for database interactions.
## Features
- Create, read, update, and delete movie entries
- Organize movies with tags
- Simple and clean API structure
## Technologies Used
- Node.js
- Express
- SQLite
- Knex.js
## Setup Instructions 
1. Clone the repository:

```bash
git clone https://github.com/vitor-martini/movie-api.git
cd movie-api
``` 
2. Install dependencies:

```bash
npm install
``` 
3. Set up the database:

```bash
npm run migrate
npm run seed
``` 
4. Start the server:

```bash
npm start
```