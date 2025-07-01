import BlogCard from "../components/Blog/BlogCard";
import Hero from "../components/Blog/Hero";

export default function Blog() {
    // Sample blog posts data - replace with your actual data
    const blogPosts = [
        {
            id: 1,
            title: "Getting Started with React Hooks",
            excerpt: "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
            imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            category: ["React", "JavaScript", "Hooks"],
            date: "June 15, 2023",
            author: "John Doe"
        },
        {
            id: 2,
            title: "Mastering Tailwind CSS",
            excerpt: "Discover how to build beautiful, responsive designs with Tailwind CSS utility-first framework.",
            imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            category: ["CSS", "Tailwind", "Design"],
            date: "June 10, 2023",
            author: "Jane Smith"
        },
        // Add more blog posts as needed
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
            <div className="mx-auto px-4 mt-8">
                <div className="max-w-7xl mx-auto py-8">
                    {/* Hero Section */}
                    <Hero />

                    {/* Blog Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <BlogCard 
                                key={post.id}
                                title={post.title}
                                excerpt={post.excerpt}
                                imageUrl={post.imageUrl}
                                category={post.category}
                                date={post.date}
                                author={post.author}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}