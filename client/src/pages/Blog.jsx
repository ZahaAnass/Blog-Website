import BlogCard from "../components/Blog/BlogCard";
import Hero from "../components/Blog/Hero";
import { useState, useEffect } from "react";
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { getAllBlogs, deleteBlog, updateBlog, createBlog } from "../api/api";

export default function Blog() {

    const [blogPosts, setBlogPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fillBlogs = async () => {
        setLoading(true);
        const response = await getAllBlogs();
        setBlogPosts( response.data.blogs ?? []);
        setLoading(false);
    }

    useEffect(() => {
        fillBlogs();
    }, []);

    const createNewPost = async (newPost) => {
        try {
            const response = await createBlog(newPost);
            if(response.status === 201){
                await fillBlogs();
                return true;
            }
        } catch (error) {
            setError(error.response.data.err ?? "An error occurred")
            return false;
        }
        return false;
    };

    const editPost = async (updatedPost) => {
        try {
            const response = await updateBlog(updatedPost._id, updatedPost);
            if(response.status === 200){
                await fillBlogs();
                return true;
            }
        } catch (error) {
            setError(error.response.data.err ?? "An error occurred")
            return false;
        }
        return false;
    };
    
    const deletePost = async (id) => {
        const response = await deleteBlog(id);
        if(response.status === 200){
            fillBlogs();
        }
    };

    const dismissError = () => {
        setError(false);
    };
    
    return (
    <>
    <NavBar />
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
            <div className="mx-auto px-4 mt-8">
                <div className="max-w-7xl mx-auto py-8">
                    {/* Hero Section */}
                    <Hero createNewPost={createNewPost} />

                    {/* Error Alert */}
                    {error && (
                        <div className="mb-6 mx-auto max-w-4xl">
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 shadow-sm">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-3 flex-1">
                                        <h3 className="text-sm font-medium text-red-800">
                                            Error
                                        </h3>
                                        <div className="mt-1 text-sm text-red-700">
                                            {error}
                                        </div>
                                    </div>
                                    <div className="ml-auto pl-3">
                                        <div className="-mx-1.5 -my-1.5">
                                            <button
                                                type="button"
                                                onClick={dismissError}
                                                className="inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
                                            >
                                                <span className="sr-only">Dismiss</span>
                                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Loading Spinner */}
                    {loading && (
                        <div className="flex justify-center items-center h-64">
                            <div className="flex flex-col items-center space-y-2">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                                <div className="text-white">Loading...</div>
                            </div>
                        </div>
                    )}

                    {/* Blog Posts Grid */}
                    {blogPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <BlogCard 
                                key={index}
                                id={post._id}
                                title={post.title}
                                excerpt={post.excerpt}
                                imageUrl={post.imageUrl}
                                category={[...new Set(post.category)]}
                                date={post.date}
                                author={post.authorId.name}
                                post={post}
                                editPost={editPost}
                                deletePost={deletePost}
                            />
                        ))}
                    </div>
                    ) : (
                        <div className="flex justify-center items-center h-64">
                            <div className="flex flex-col items-center space-y-2">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                                <div className="text-white">No posts available.</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <Footer />
    </>
    )
}