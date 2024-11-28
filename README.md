
# To-Do List Backend
---

## Routes Overview

### 1. **Create a To-Do**
- **URL**: `POST /todos`
- **Description**: Creates a new To-Do task.
- **Request Body** (JSON):
  ```json
  {
    "title": "Buy groceries",
    "description": "Milk, eggs, bread, butter",
    "priority": "high"
  }
  ```
### 2. **Get All To-Dos**
- **URL**: `GET /todos`
- **Description**: Fetches all To-Do tasks. You can filter by `status` using  parameters (`status=pending` or `status=completed`).
- **Parameters**:
  - `status` (optional): Filter tasks by their status (`"pending"` or `"completed"`).
- **Example Request**:
  `GET /todos?status=pending`


### 3. **Get a Single To-Do**
- **URL**: `GET /todos/:id`
- **Description**: Fetches a single To-Do task by its unique ID.
- **Example Request**:
  `GET /todos/63aa5b2c88d1b3ad2c8b4e8c`


### 4. **Update a To-Do**
- **URL**: `PUT /todos/:id`
- **Description**: Updates the details of an existing To-Do task.
- **Request Body** (JSON):
  ```json
  {
    "title": "Buy groceries and snacks",
    "description": "Milk, eggs, bread, butter, chips, cookies",
    "status": "completed",
    "priority": "high"
  }
  ```

### 5. **Delete a To-Do**
- **URL**: `DELETE /todos/:id`
- **Description**: Deletes a To-Do task by its unique ID.
- **Example Request**:
  `DELETE /todos/63aa5b2c88d1b3ad2c8b4e8c`

---
### How to run this project locally?

To run this project locally on your machine, follow these steps:

1. **Clone the repository**:

   Clone the repository to your local machine by running the following command:

   ```bash
   git clone https://github.com/hgjajoo/todo-backend.git
   ```
2. **Install dependencies**:

   Navigate into the project directory and install the required dependencies using npm:
   ```bash
   cd todo-backend
   npm install
   ```
3. **Run the application**:

   After installing the dependencies, start the application by running:

   ```bash
   node index.js
   ```

   The server will start running on `http://localhost:5000`.

---
### Tech stack 
- NodeJS
- ExpressJS
- MongoDB