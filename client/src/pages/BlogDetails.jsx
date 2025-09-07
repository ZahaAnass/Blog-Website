import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCalendarAlt, faUser, faTag, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'flowbite-react';
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import { getBlogById } from '../api/api';

export default function BlogDetails() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        const getPost = async () => {
            try {
                setLoading(true);
                const response = await getBlogById(id);
                setPost(response.data.blog);
                setLoading(false);
            } catch {
                setLoading(false);
                setError(true);
            }
        };
        getPost();
    }, [id]);

    // Loading state
    if (loading) {
        return (
            <>
                <NavBar />
                <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
                    <div className="flex flex-col items-center space-y-2">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
                        <div className="text-gray-600 dark:text-gray-300">Loading post...</div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
    
    // Error or post not found
    if (error || !post || post._id !== id) {
        return (
            <>
                <NavBar />
                <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-6">
                    <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
                        {/* Header */}
                        <div className="bg-blue-600 dark:bg-blue-700 p-6 text-center">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-4">
                                <FontAwesomeIcon 
                                    icon={faTriangleExclamation} 
                                    className="h-10 w-10 text-white" 
                                    size="2xl"
                                />
                            </div>
                            <h1 className="text-5xl font-bold text-white mb-2">404</h1>
                            <h2 className="text-xl font-semibold text-blue-100">Post Not Found</h2>
                        </div>

                        {/* Content */}
                        <div className="p-8 text-center">
                            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                                Oops! The blog post you're looking for doesn't exist or has been removed.
                            </p>
                            
                            <div className="pt-4">
                                <Link 
                                    to="/blog" 
                                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                                >
                                    <FontAwesomeIcon icon={faArrowLeft} className="mr-2"/>
                                    Back to Blog
                                </Link>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 text-center border-t border-gray-200 dark:border-gray-700">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Looking for something else? <Link to="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">Browse all posts</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
        <NavBar />
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
            <div className="max-w-4xl mx-auto pt-10">
                <Link to="/blog">
                    <Button color="gray" className="mb-8">
                        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                        Back to Blog
                    </Button>
                </Link>

                <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                    {/* Featured Image */}
                    <div className="h-96 overflow-hidden">
                        <img 
                            src={post.imageUrl} 
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Article Content */}
                    <div className="p-6 md:p-8">
                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                            <div className="flex items-center mr-6 mb-2">
                                <FontAwesomeIcon icon={faUser} className="mr-2 text-green-500" />
                                {post.authorId?.name || 'Unknown Author'}
                            </div>
                            <div className="flex items-center mr-6 mb-2">
                                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-green-500" />
                                {post.date}
                            </div>
                            <div className="flex flex-wrap items-center">
                                <FontAwesomeIcon icon={faTag} className="mr-2 text-green-500" />
                                {post.category && post.category.length > 0 ? 
                                    post.category.map((cat, index) => (
                                        <span key={index} className="mr-2 last:mr-0 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-xs">
                                            {cat}
                                        </span>
                                    )) : 
                                    <span>No categories</span>
                                }
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                            {post.title}
                        </h1>

                        {/* Excerpt */}
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            {post.excerpt}
                        </p>

                        {/* Content */}
                        <div className="prose dark:prose-invert max-w-none">
                            {post.content.split('\n').map((paragraph, index) => (
                                paragraph.trim() && (
                                    <p key={index} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {paragraph.trim()}
                                    </p>
                                )
                            ))}
                        </div>

                        {/* Back to Blog Button */}
                        <div className="mt-12 text-center">
                            <Link to="/blog">
                                <Button color="gray" outline>
                                    <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                                    Back to All Articles
                                </Button>
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        <Footer />
    </>
    );
}