import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
// import Contact from './pages/Contact'
// import Blog from './pages/Blog'
// import BlogDetails from './pages/Blog-details'
function App() {


  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact /> } /> */}
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/*<Route path="/blog/:id" element={<BlogDetails />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
