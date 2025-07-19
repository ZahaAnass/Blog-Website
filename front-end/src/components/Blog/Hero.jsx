import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Button } from "flowbite-react";
import Form from "./Form"
import { useState } from "react";

export default function Hero({ onNewPost }) {
    const [formOpen, setFormOpen] = useState(false);
    

    return (
        <div className="text-center py-12 md:py-20 px-4">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                Our Blog
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                Discover the latest articles, tutorials, and insights from our team of experts.
                Stay updated with the newest trends and best practices in the industry.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-3xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <div className="relative flex-1">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FontAwesomeIcon 
                                icon={faSearch} 
                                className="h-5 w-5 text-gray-400" 
                                aria-hidden="true"
                            />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                            placeholder="Search articles..."
                        />
                    </div>
                    <Button 
                        size="lg"
                        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white"
                        onClick={() => setFormOpen(!formOpen)}
                    >
                        <FontAwesomeIcon icon={faPlus}/>
                        <span className="ml-2">New Post</span>
                    </Button>
                </div>

                {formOpen && (
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setFormOpen(false)}></div>
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <div className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                                <div className="p-6">
                                    <Form onClose={() => setFormOpen(false)} onNewPost={onNewPost} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Popular Tags */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                    <span className="text-sm text-gray-500 mt-1">Popular Tags:</span>
                    {['React', 'JavaScript', 'CSS', 'Web Development', 'Tutorials'].map((tag) => (
                        <button
                            key={tag}
                            className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}