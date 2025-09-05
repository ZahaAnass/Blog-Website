import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faBook } from "@fortawesome/free-solid-svg-icons"
import { Button } from "flowbite-react";
import { useLocation, useNavigate } from "react-router-dom";

function NavBar(){

    const location = useLocation();
    const user = localStorage.getItem('user') ?? null;
    const navigate = useNavigate()

    const ToggleNav = () => {
        document.getElementById('navbar-default').classList.toggle('hidden');
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/');
    }

    return(
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-50 dark:bg-gray-800 backdrop-blur-lg border-gray-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link 
                                to="/" 
                                className="flex items-center space-x-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                aria-label="Home"
                            >
                                <FontAwesomeIcon icon={faBook} className="h-6 w-6" />
                                <span className="text-xl font-bold">Blogspace</span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                            {[
                                { path: '/', name: 'Home' },
                                { path: '/about', name: 'About' },
                                { path: '/blog', name: 'Blog' },
                                { path: '/contact', name: 'Contact' }
                            ].map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        location.pathname === item.path
                                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700/50'
                                            : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700/30'
                                    }`}
                                    aria-current={location.pathname === item.path ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Authentication */}
                        {user ? (
                            <div className="ml-6 flex items-center">
                                <Link
                                    to="/blog"
                                    className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700/30"
                                >
                                    Blog
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="ml-4 px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700/30"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="ml-6 flex items-center">
                                <Link
                                    to="/login"
                                    className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700/30"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="ml-4 px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700/30"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        )}

                        {/* Mobile menu button */}
                        <div className="-mr-2 flex items-center md:hidden">
                            <Button
                                onClick={ToggleNav}
                                type="button"
                                color="light"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <FontAwesomeIcon icon={faBars} className="block h-6 w-6" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className="md:hidden hidden" id="navbar-default">
                    <div className="pt-2 pb-3 space-y-1 px-4">
                        {[
                            { path: '/', name: 'Home' },
                            { path: '/about', name: 'About' },
                            { path: '/blog', name: 'Blog' },
                            { path: '/contact', name: 'Contact' }
                        ].map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={ToggleNav}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${
                                    location.pathname === item.path
                                        ? 'bg-blue-50 text-blue-700 dark:bg-gray-700 dark:text-blue-400'
                                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50'
                                }`}
                                aria-current={location.pathname === item.path ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;