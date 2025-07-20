# Blog Website - Backend

This is the backend server for the Blog Website, built with Node.js, Express, and MongoDB. It provides a RESTful API for the frontend application.

## 🏗️ Project Structure

```bash
server/
├── config/           # Configuration files
├── controllers/      # Route controllers
├── db/              # Database connection
├── middleware/      # Custom middleware
├── models/          # Mongoose models
├── routes/          # API routes
├── utils/           # Utility functions
├── .env             # Environment variables
├── app.js           # Main application file
└── package.json     # Project dependencies
```

## 🚀 Features

- **Authentication**
  - JWT-based authentication
  - Protected routes
  - Role-based access control

- **Blog Management**
  - CRUD operations for blog posts
  - Image upload support
  - Categories and tags

- **API Documentation**
  - Swagger/OpenAPI documentation
  - Request/Response validation

## 🔧 Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm (v6 or higher)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ZahaAnass/Blog-Website.git
   cd Blog-Website/server
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the server directory:

   ```bash
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   JWT_LIFETIME=1d
   NODE_ENV=development
   ```

4. **Start the server**

   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

## 📚 API Documentation

API documentation is available at `http://localhost:5000/api-docs` when the server is running.

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Blogs

- `GET /api/blogs` - Get all blogs
- `POST /api/blogs` - Create a new blog
- `GET /api/blogs/:id` - Get single blog
- `PATCH /api/blogs/:id` - Update blog
- `DELETE /api/blogs/:id` - Delete blog

## 🔒 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| MONGODB_URI | MongoDB connection string | - |
| JWT_SECRET | Secret for JWT signing | - |
| JWT_LIFETIME | JWT token lifetime | 1d |
| NODE_ENV | Application environment | development |

## 🛡️ Security

- Input validation
- Rate limiting
- CORS enabled
- Secure HTTP headers
- JWT authentication
- Request sanitization
