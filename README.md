# Express MVC ORM

A basic MVC project with Node.js, Express and Handlebars, prepared for Sequelize.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:8000

| Script        | Description                          |
| ------------- | ------------------------------------ |
| `npm start`   | Start the server                     |
| `npm run dev` | Start the server with nodemon        |

## Project structure

```
src/
  server.js              Starts the server
  app.js                 Express setup (views, middleware, routes)
  routes/
    index.js             View routes
    api.js               API routes
  controllers/
    homeController.js    Renders views
    userController.js    Renders views
    api/
      userApiController.js  Returns JSON
  data/
    users.js             Temporary in-memory data
  models/                Sequelize models (coming later)
  views/
    layouts/main.handlebars
    home.handlebars
    users/               index, show, new, edit
  public/
    css/style.css
.sequelizerc             Paths for sequelize-cli
```

## Routes

### Views

| Method | Route             | Description       |
| ------ | ----------------- | ----------------- |
| GET    | `/`               | Home              |
| GET    | `/users`          | List users        |
| GET    | `/users/new`      | Create user form  |
| GET    | `/users/:id`      | Show user         |
| GET    | `/users/:id/edit` | Edit user form    |

The user views fetch their data from the API with `fetch` in the browser.

### API

| Method | Route            | Description    |
| ------ | ---------------- | -------------- |
| GET    | `/api/status`    | API status     |
| GET    | `/api/users`     | Get all users  |
| GET    | `/api/users/:id` | Get one user   |
| POST   | `/api/users`     | Create user    |
| PUT    | `/api/users/:id` | Update user    |
| DELETE | `/api/users/:id` | Delete user    |

## Data

Users are stored in memory in `src/data/users.js`. The data is reset every time the server restarts.

## Sequelize

The project is prepared for Sequelize, but it is not installed yet. `.sequelizerc` points sequelize-cli to these paths:

| Setting         | Path                     |
| --------------- | ------------------------ |
| config          | `src/config/database.js` |
| models-path     | `src/models`             |
| migrations-path | `db/migrations`          |
| seeders-path    | `db/seeders`             |
