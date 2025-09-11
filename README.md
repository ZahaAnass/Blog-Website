# Blog Website

A modern, full-stack blog platform built with React, Node.js, Express, and MongoDB.

> **Note:** This is the main repository containing both frontend and backend code. For detailed backend documentation, see the [server README](./server/README.md).

## 🚀 Features

- **User Authentication**
  - Secure login/signup with JWT
  - Protected routes and API endpoints
  - User profile management

- **Blog Management**
  - Create, read, update, and delete blog posts
  - Rich text editor for content creation
  - Image upload support
  - Categories and tags

- **Responsive Design**
  - Mobile-first approach
  - Dark/Light mode
  - Clean and intuitive UI

## 🏗️ Project Structure

```bash
Blog-Website/
├── front-end/       # React frontend application
├── server/          # Node.js/Express backend server
└── README.md        # This file
```

## 🛠️ Tech Stack

### Frontend

- React.js
- Tailwind CSS
- React Router
- Axios for API calls
- React Icons

### Backend

- Node.js & Express.js
- MongoDB with Mongoose
- JWT Authentication
- RESTful API
- Swagger/OpenAPI documentation

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ZahaAnass/Blog-Website.git
   cd Blog-Website
   ```

2. **Set up the backend**

   ```bash
   cd server
   npm install
   cp .env.example .env  # Update with your credentials
   npm run dev
   ```

3. **Set up the frontend**

   ```bash
   cd ../front-end
   npm install
   npm start
   ```

4. **Access the application**

   - Frontend: <http://localhost:3000>
   - Backend API: <http://localhost:5000>
   - API Documentation: <http://localhost:5000/api-docs>

## 📚 Documentation

### Frontend

See the [frontend documentation](./front-end/README.md) for detailed setup and usage instructions.

### Backend API

For complete API documentation, please refer to the [server documentation](./server/README.md).

Key endpoints include:

- Authentication: `POST /api/auth/register`, `POST /api/auth/login`
- Blogs: `GET /api/blogs`, `POST /api/blogs`, `GET /api/blogs/:id`, etc.

Interactive API documentation is available at `http://localhost:5000/api-docs` when the server is running.

## 🙏 Acknowledgments

- [Create React App](https://create-react-app.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

## 🐛 Issues

If you find any issues, please [open an issue](https://github.com/ZahaAnass/Blog-Website/issues) and we'll get to it as soon as possible.

## Project Link

Project Link: [https://github.com/ZahaAnass/Blog-Website](https://github.com/ZahaAnass/Blog-Website)
