import { Link } from "react-router-dom"
import { Button } from 'flowbite-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Hero() {

    return(
        <>
            <section className="container mx-auto px-4 py-20">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                    Welcome to Our Blog
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Discover amazing stories, insights, and experiences shared by our community. 
                    Join us on this journey of knowledge and inspiration.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="xl" className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800">
                            <Link to="/blog">
                            Explore Blog <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
                            </Link>
                        </Button>
                        <Button size="xl" className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 text-white hover:bg-gradient-to-br focus:ring-indigo-300 dark:focus:ring-indigo-800">
                            <Link to="/about">Learn More About Us</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}