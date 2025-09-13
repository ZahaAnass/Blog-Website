# BlogSpace Backend - RESTful API

The backend server for BlogSpace, a modern blogging platform built with Node.js, Express.js, and MongoDB. This RESTful API provides robust authentication, blog management, and secure data handling for the BlogSpace frontend application.

## 🚀 Features

- **JWT Authentication** with secure token-based authorization
- **Blog Management** with full CRUD operations
- **User Management** with registration and login
- **Security Middleware** with rate limiting, CORS, XSS protection
- **Input Validation** with comprehensive error handling
- **API Documentation** with Swagger/OpenAPI integration
- **Database Integration** with MongoDB and Mongoose ODM
- **Password Encryption** with bcrypt hashing
- **Production Ready** with environment configuration

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **Password Hashing**: bcryptjs
- **Validation**: Joi
- **Security**: Helmet, CORS, XSS-Clean, Express Rate Limit
- **Documentation**: Swagger UI Express with YAML
- **Environment**: dotenv
- **Error Handling**: Express Async Errors

## 📂 Project Structure

```bash
server/
├── config/           # Configuration files
├── controllers/      # Route controllers
│   ├── auth.js      # Authentication logic
│   └── blog.js      # Blog management logic
├── db/              # Database connection
│   └── connect.js   # MongoDB connection setup
├── errors/          # Custom error classes
│   ├── bad-request.js
│   ├── custom-api.js
│   ├── not-found.js
│   ├── unauthenticated.js
│   └── index.js     # Error exports
├── middleware/      # Custom middleware
│   ├── authentification.js  # JWT auth middleware
│   ├── error-handler.js    # Global error handler
│   └── not-found.js        # 404 handler
├── models/          # Mongoose models
│   ├── User.js      # User schema and methods
│   └── Blog.js      # Blog schema and validation
├── routes/          # API routes
│   ├── auth.js      # Authentication routes
│   └── blog.js      # Blog management routes
├── .env.example     # Environment variables template
├── .gitignore       # Git ignore rules
├── app.js           # Main application file
├── swagger.yaml     # API documentation
└── package.json     # Dependencies and scripts
```

## 🔧 Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB** (v4.4 or higher) - Local or MongoDB Atlas
- **npm** (v7 or higher)

## 🚀 Getting Started

### Installation

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
   cp .env.example .env
   ```

   Configure your environment variables:

   ```env
   MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
   JWT_SECRET=your-super-secret-jwt-key-here
   JWT_LIFETIME=30d
   PORT=3000
   ```

4. **Start the server**

   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

5. **Access the API**
   - API Base URL: `http://localhost:3000/api/v1`
   - API Documentation: `http://localhost:3000/api-docs`

## 🔒 Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `MONGO_URL` | MongoDB connection string | - | ✅ |
| `JWT_SECRET` | Secret key for JWT signing | - | ✅ |
| `JWT_LIFETIME` | JWT token expiration time | 30d | ✅ |
| `PORT` | Server port number | 3000 | ❌ |

## 📚 API Documentation

### Base URL

```bash
http://localhost:3000/api/v1
```

### Authentication Endpoints

#### Register User

```http
POST /auth/register
```

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```

#### Login User

```http
POST /auth/login
```

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```

### Blog Endpoints (Protected)

> **Note:** All blog endpoints require JWT token in Authorization header:
> `Authorization: Bearer <your-jwt-token>`

#### Get All Blogs

```http
GET /blogs
```

#### Get Single Blog

```http
GET /blogs/:id
```

#### Create Blog

```http
POST /blogs
```

**Request Body:**

```json
{
  "title": "My Awesome Blog Post",
  "excerpt": "A short description of the blog post",
  "imageUrl": "https://example.com/image.jpg",
  "category": "Technology",
  "content": "The full content of the blog post..."
}
```

#### Update Blog

```http
PATCH /blogs/:id
```

#### Delete Blog

```http
DELETE /blogs/:id
```

#### Get Blog Categories

```http
GET /blogs/categories
```

## 🔐 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - bcrypt with salt rounds
- **Rate Limiting** - 100 requests per 15 minutes per IP
- **CORS Protection** - Cross-Origin Resource Sharing configured
- **XSS Protection** - Cross-site scripting prevention
- **Security Headers** - Helmet.js security headers
- **Input Validation** - Joi schema validation
- **Error Handling** - Comprehensive error management

## 🚦 Error Handling

The API uses consistent error responses with appropriate HTTP status codes:

```json
{
  "err": "Error message description"
}
```

**Common Status Codes:**

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

## 📖 Models

### User Model

```javascript
{
  name: String (required, 3-50 chars),
  email: String (required, unique, valid email),
  password: String (required, min 6 chars, hashed)
}
```

### Blog Model

```javascript
{
  title: String (required, 3-100 chars),
  excerpt: String (required),
  imageUrl: String (required),
  category: [String] (required),
  content: String (required),
  authorId: ObjectId (required, ref: User),
  date: String (auto-generated),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

## 🧪 Testing

Access the interactive API documentation at:

```bash
http://localhost:3000/api-docs
```

Use tools like Postman or Thunder Client with the provided collection in `docs.json`.

## 🌐 Deployment

### Environment Setup

1. Set production environment variables
2. Configure MongoDB Atlas connection
3. Update CORS origins for production domain
4. Set secure JWT secret

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development Guidelines

- Follow RESTful API conventions
- Use appropriate HTTP status codes
- Implement proper error handling
- Add input validation for all endpoints
- Write clear, documented code
- Use environment variables for configuration

## 🔧 Dependencies

### Production Dependencies

- **express** - Web framework
- **mongoose** - MongoDB ODM
- **jsonwebtoken** - JWT implementation
- **bcryptjs** - Password hashing
- **helmet** - Security headers
- **cors** - Cross-origin resource sharing
- **express-rate-limit** - Rate limiting
- **joi** - Input validation

### Security Dependencies

- **xss-clean** - XSS protection
- **express-async-errors** - Async error handling

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Express.js](https://expressjs.com/) - Fast, unopinionated web framework
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling
- [JWT](https://jwt.io/) - JSON Web Token standard
- [Swagger](https://swagger.io/) - API documentation tools

## 📞 Support

For support and questions:

- Create an issue on GitHub
- Check the API documentation at `/api-docs`
- Review the error messages for debugging hints
