# Product Recommendation Backend API

A RESTful API backend service built with Node.js and Express that provides authentication, product management, quiz functionality, and recommendation services.

## Features

- User authentication (register, login)
- User profile management
- Product catalog management
- Product recommendation system
- Interactive quiz system
- User response tracking

## Tech Stack

- **Runtime Environment**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **API Security**: CORS enabled

## Prerequisites

Before running this application, make sure you have:

- Node.js (v14 or higher)
- MongoDB instance (local or cloud-based)
- NPM or Yarn package manager

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Choukseyshrutii/Backend_Mymirro
   cd backend-assignment
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret-key>
   ```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get authentication token

### User Management
- `GET /api/user/:id` - Get user profile
- `PUT /api/user/:id` - Update user profile
- `DELETE /api/user/:id` - Delete user profile

### Product Management
- `GET /api/product` - Get all products
- `GET /api/product/:id` - Get product by ID
- `POST /api/product` - Create a new product
- `PUT /api/product/:id` - Update a product
- `DELETE /api/product/:id` - Delete a product

### Quiz Management
- `GET /api/quiz` - Get all quizzes
- `GET /api/quiz/:id` - Get quiz by ID
- `POST /api/quiz` - Create a new quiz
- `PUT /api/quiz/:id` - Update a quiz
- `DELETE /api/quiz/:id` - Delete a quiz

### User Responses
- `POST /api/response` - Submit user response to quiz
- `GET /api/response/user/:userId` - Get responses by user ID

### Recommendations
- `GET /api/recommendation/user/:userId` - Get product recommendations for user

## Project Structure

```
backend-assignment/
├── .env                # Environment variables
├── package.json        # Project dependencies and scripts
├── server.js           # Entry point for the application
└── src/
    ├── app.js          # Express app configuration
    ├── config/         # Database configuration
    ├── controllers/    # Route controllers
    ├── middleware/     # Custom middleware
    ├── models/         # Mongoose models
    └── routes/         # API routes
```
