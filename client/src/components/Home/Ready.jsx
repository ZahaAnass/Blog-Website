import { Button } from "flowbite-react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function Ready() {
    return (
        <>
            <section className="bg-white dark:bg-gray-900 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Ready to Start Reading?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        Join thousands of readers who trust us for quality content and meaningful discussions.
                    </p>
                    <div className="flex justify-center">
                        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-500 dark:hover:to-indigo-500">
                            <Link to="/blog">
                                Start Reading Now <FontAwesomeIcon className="ml-2 h-4 w-4" icon={faArrowRight} />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}