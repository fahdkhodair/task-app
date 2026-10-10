# Task App

A Task Management application built with **Node.js, Express.js, TypeScript, and MongoDB**. The project provides a simple web interface for managing tasks through RESTful API endpoints.

## Features

- **Create Tasks** — Add tasks with a title, description, status, and assignee.
- **Get Tasks** — Retrieve and display tasks from the database.
- **Update Tasks** — Modify existing task information.
- **Delete Tasks** — Remove tasks by ID.
- **Task Status Management** — Track tasks using `pending` and `completed` statuses.
- **MongoDB Integration** — Store and manage task data using Mongoose.
- **Responsive UI** — Simple frontend built with HTML, CSS, and JavaScript.

## Tech Stack

- **Backend:** Node.js, Express.js, TypeScript
- **Database:** MongoDB, Mongoose
- **Frontend:** HTML5, CSS3, JavaScript
- **Development Tools:** Git, GitHub, Nodemon, TSX

## Project Structure

```text
task-app/
├── src/
│   ├── config/
│   │   └── db.ts
│   ├── models/
│   │   └── Task.model.ts
│   ├── routes/
│   │   └── task.route.ts
│   ├── public/
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── js/
│   │   │   └── main.js
│   │   └── index.html
│   └── app.ts
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or a local MongoDB instance
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/fahdkhodair/task-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd task-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root:

   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   ```

   Replace the MongoDB placeholder with your actual connection string. Never commit your `.env` file.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the application:

   ```text
   http://localhost:3000
   ```

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Compile TypeScript |
| `npm start` | Run the compiled application |

These commands assume the scripts are configured in `package.json` as described.

## API Endpoints

The following endpoints describe the intended task CRUD API. Confirm the route definitions in `src/routes/task.route.ts` to ensure they match your implementation.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks` | Retrieve all tasks |
| POST | `/api/tasks` | Create a task |
| PATCH | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

### Example: Create a Task

**Request**

```http
POST /api/tasks
Content-Type: application/json
```

**Request Body**

```json
{
  "title": "Learn TypeScript",
  "description": "Practice TypeScript fundamentals",
  "status": "pending",
  "assignedBy": "fahd"
}
```

The `assignedBy` field and other validation requirements depend on your Task model and controller implementation.

## Task Statuses

- `pending` — The task has not been completed.
- `completed` — The task has been completed.

## Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Port used by the Express server |
| `MONGODB_URI` | MongoDB connection string |

## Future Improvements

- Add user authentication and authorization.
- Add input validation and centralized error handling.
- Improve task filtering and search.
- Add automated API tests.
- Deploy the application to a cloud platform.

## Author

**Fahd Khodair**

GitHub: [@fahdkhodair](https://github.com/fahdkhodair)

---

*This project was developed to practice backend development, REST API design, TypeScript, MongoDB, and frontend-to-backend integration.*
