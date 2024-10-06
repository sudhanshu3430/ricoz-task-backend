# Task Management API

## Backend Deployed link - https://ricoz-task-backend.onrender.com

## Overview
This repository contains a RESTful API for managing user authentication and task management. Built with Node.js and Express, the API allows users to sign up, log in, and manage their tasks efficiently. The application uses MongoDB for data storage, with JSON Web Token (JWT) for authentication, Bcrypt for password hashing, and Zod for input validation.

## Features
- User registration and login
- Secure password hashing
- Task management (create, read, update, delete)
- Input validation for all requests
- Token-based authentication

## Technology Stack
- **Node.js**: JavaScript runtime for server-side applications
- **Express**: Web framework for building APIs
- **MongoDB**: NoSQL database for data storage
- **JSON Web Token (JWT)**: Authentication mechanism
- **Bcrypt**: Password hashing library
- **Zod**: Schema validation library

## API Endpoints

### User Controller
- **POST /api/v1/user/signup**: Create a new user
- **POST /api/v1/user/signin**: Authenticate a user and return a token

### Task Controller
- **POST /api/v1/task/add**: Create a new task
- **GET /api/v1/task/all**: Retrieve all tasks for the authenticated user
- **PUT /api/v1/task/update**: Update an existing task
- **DELETE /api/v1/task/delete?taskId=id**: Delete a task

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (running locally or use a cloud service like MongoDB Atlas)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/task-management-api.git
   cd task-management-api
   ```

2. Install the dependencies
   ```bash
   npm install
   ```
3. Create a .env file
   ```bash
    PORT=3000
    MONGODB_URI=your_mongodb_connection_string
   ```
4. Start the server
    ```bash
     npm run dev
    ```
### Postman testing screenshot

   ![Screenshot 2024-10-06 113441](https://github.com/user-attachments/assets/93225283-b74b-490a-afef-b25de45f649b)
![Screenshot 2024-10-06 113628](https://github.com/user-attachments/assets/eb05488e-92bd-4636-8353-6826110a90c0)
![Screenshot 2024-10-06 113613](https://github.com/user-attachments/assets/3aa0f3bb-f5ee-4d35-bcb8-85e094de6d5a)
![Screenshot 2024-10-06 113553](https://github.com/user-attachments/assets/8a814047-ddcf-44f2-b6f7-731da7461e8c)
![Screenshot 2024-10-06 113534](https://github.com/user-attachments/assets/a7ccf746-f0e3-4822-839c-3a69b2c25549)
![Screenshot 2024-10-06 113512](https://github.com/user-attachments/assets/fb58059e-33f0-4936-b7dd-03450a9c8e55)


