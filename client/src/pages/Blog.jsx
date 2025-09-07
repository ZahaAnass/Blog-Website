import BlogCard from "../components/Blog/BlogCard";
import Hero from "../components/Blog/Hero";
import { useState, useCallback, useEffect } from "react";
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import { getAllBlogs } from "../api/api";

export default function Blog() {

    const [blogPosts, setBlogPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fillBlogs = async () => {
        setLoading(true);
        const response = await getAllBlogs();
        setBlogPosts( response.data.blogs ?? []);
        setLoading(false);
    }

    useEffect(() => {
        fillBlogs();
    }, []);

    // Function to update blog posts from child components
    const updateBlogPosts = useCallback((newPost) => {
        setBlogPosts(prevPosts => [...prevPosts, newPost]);
    }, []);

    const editPost = (updatedPost) => {
        setBlogPosts(prevPosts => prevPosts.map(post => post.id === updatedPost.id ? updatedPost : post));
    };
    
    const deletePost = (id) => {
        setBlogPosts(prevPosts => prevPosts.filter(post => post.id !== id));
    };
    
    return (
    <>
    <NavBar />
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
            <div className="mx-auto px-4 mt-8">
                <div className="max-w-7xl mx-auto py-8">
                    {/* Hero Section */}
                    <Hero onNewPost={updateBlogPosts}/>

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