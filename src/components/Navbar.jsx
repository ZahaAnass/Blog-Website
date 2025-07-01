import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faBook } from "@fortawesome/free-solid-svg-icons"
import { Button } from "flowbite-react";

function NavBar(){

    const ToggleNav = () => {
        document.getElementById('navbar-default').classList.toggle('hidden');
    }

    return(
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-800 backdrop-blur-3xl dark:backdrop-blur-3xl fixed top-0 left-0 right-0 z-50">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <FontAwesomeIcon icon={faBook} color="white" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Blogspace</span>
                    </Link>
                    <Button color="light" id="toggle-nav" type="button" onClick={ToggleNav} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
                        <span className="sr-only">Open main menu</span>
                        <FontAwesomeIcon icon={faBars} />
                    </Button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
                            <li>
                                <Link onClick={ToggleNav} to="/" className="block py-2 px-3 border-b-2 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link onClick={ToggleNav} to="/about" className="block py-2 px-3 border-b-2 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                            </li>
                            <li>
                                <Link onClick={ToggleNav} to="/blog" className="block py-2 px-3 border-b-2 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</Link>
                            </li>
                            <li>
                                <Link onClick={ToggleNav} to="/contact" className="block py-2 px-3 border-b-2 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;