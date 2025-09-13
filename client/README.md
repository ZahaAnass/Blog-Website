# BlogSpace - Modern Frontend

BlogSpace is a modern, responsive blog application built with React, Vite, and Tailwind CSS. It features a clean, user-friendly interface with dark/light mode support and a fully responsive design that works on all devices.

## 🚀 Features

- **Modern UI/UX** with responsive design
- **Dark/Light Mode** with system preference detection
- **User Authentication** (Login/Signup)
- **Blog Management** (Create, Read, Update, Delete)
- **Rich Text Editor** for blog posts
- **Responsive Navigation** with mobile menu
- **Contact Form** with validation
- **API Integration** with JSON Server

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with Flowbite components
- **Icons**: Font Awesome
- **Routing**: React Router DOM v7
- **HTTP Client**: Axios
- **Form Handling**: React Hook Form
- **State Management**: React Context API
- **Mock API**: JSON Server

## 📂 Project Structure

```bash
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── api/           # API configuration and services
├── assets/        # Static assets (images, etc.)
├── App.jsx        # Main application component
└── main.jsx       # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/ZahaAnass/Blog-Website.git
   cd Blog-Website/client
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

4. Start the JSON Server (in a separate terminal)

   ```bash
   npm run server
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 🎨 Theme Support

The application supports both light and dark themes with automatic system preference detection. Users can manually toggle between themes using the theme toggle button in the navigation bar.

## 📱 Responsive Design

- Mobile-first approach
- Responsive navigation with hamburger menu on mobile
- Adaptive layouts for all screen sizes
- Optimized images and assets

## 📝 API Integration

The application uses a mock API powered by JSON Server. The API endpoints include:

- `GET /posts` - Get all blog posts
- `GET /posts/:id` - Get a single blog post
- `POST /posts` - Create a new blog post
- `PUT /posts/:id` - Update a blog post
- `DELETE /posts/:id` - Delete a blog post

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Flowbite React](https://www.flowbite-react.com/)
- [Font Awesome](https://fontawesome.com/)
