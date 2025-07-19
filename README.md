# Blog Website

A modern, full-stack blog platform built with React, Node.js, Express, and MongoDB.

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

## 🛠️ Tech Stack

- **Frontend**
  - React.js
  - Tailwind CSS
  - React Router
  - Axios for API calls
  - React Icons

- **Backend**
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - JWT Authentication
  - RESTful API

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/blog-website.git
   cd blog-website
   ```

2. **Install dependencies**

   ```bash
   # Install frontend dependencies
   cd front-end
   npm install
   
   # Install backend dependencies
   cd ../server
   npm install
   ```

3. **Environment Setup**
   - Create a `.env` file in the server directory with:

    ```bash
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. **Running the Application**

    ```bash
    # Start backend server
    cd server
    npm run dev
    
    # In a new terminal, start frontend
    cd ../front-end
    npm start
    ```

## 🌐 API Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/blogs` - Get all blogs
- `POST /api/blogs` - Create a new blog
- `GET /api/blogs/:id` - Get single blog
- `PATCH /api/blogs/:id` - Update blog
- `DELETE /api/blogs/:id` - Delete blog

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Create React App](https://create-react-app.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

## 📬 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - <your.email@example.com>

Project Link: [https://github.com/ZahaAnass/Blog-Website](https://github.com/ZahaAnass/Blog-Website)
