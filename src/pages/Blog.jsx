import BlogCard from "../components/Blog/BlogCard";
import Hero from "../components/Blog/Hero";
import { useState, useCallback } from "react";

export default function Blog() {
    // Sample initial blog posts data
    const initialBlogPosts = [
        {
            id: 1,
            title: "Getting Started with React Hooks",
            excerpt: "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
            imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            category: ["React", "JavaScript", "Hooks"],
            date: "June 15, 2023",
            author: "John Doe",
            content: `
                Getting Started with React Hooks
                React Hooks transformed how we write React components when they launched in version 16.8. They allow you to use state and other React features in functional components, eliminating the need for class components in most cases.
                The most essential Hook is useState, which lets you add state to functional components. Instead of writing a class with a constructor and this.state, you can simply declare state variables and their update functions in one line.
                The useEffect Hook handles side effects like API calls, subscriptions, and DOM manipulation. It combines the functionality of componentDidMount, componentDidUpdate, and componentWillUnmount from class components into a single, more intuitive API.
                Hooks follow two important rules: they must be called at the top level of your component (never inside loops or conditions), and they can only be used in functional components or other custom Hooks.
                The beauty of Hooks lies in their composability. You can create custom Hooks to share stateful logic between components, making your code more reusable and organized. This was difficult to achieve with class components without complex patterns.
                useContext simplifies consuming React Context, while useReducer provides a Redux-like pattern for complex state management. These Hooks give you powerful tools for managing application state without external libraries.
                Converting from class components to Hooks often results in cleaner, more readable code. You'll find yourself writing less boilerplate and focusing more on your application's actual logic.
                The learning curve is gentle if you start with useState and useEffect, then gradually explore other Hooks as your needs grow. The React DevTools extension helps visualize Hook state during development.
                Hooks represent React's modern approach to component development. They make functional programming patterns more accessible and lead to more maintainable, testable code. Once you start using Hooks, you'll wonder how you ever managed without them.
            `
        },
        {
            id: 2,
            title: "Mastering Tailwind CSS",
            excerpt: "Discover how to build beautiful, responsive designs with Tailwind CSS utility-first framework.",
            content: `
                Mastering Tailwind CSS
                Tailwind CSS is a utility-first CSS framework that's revolutionizing how developers approach styling. Instead of writing custom CSS classes, you compose designs using pre-built utility classes directly in your HTML markup.
                The utility-first approach means you'll use classes like "bg-blue-500", "text-white", and "p-4" instead of creating custom CSS classes. This might feel strange at first, but it leads to faster development and more maintainable code once you get used to it.
                Tailwind's design system is built around consistent spacing, typography, and color scales. The framework provides a carefully crafted set of values that ensure your designs look professional and cohesive without needing to make design decisions from scratch.
                Responsive design becomes incredibly simple with Tailwind's mobile-first breakpoint system. You can add responsive variants like "md:text-lg" or "lg:grid-cols-3" to apply styles at specific screen sizes, making responsive layouts intuitive and declarative.
                The framework excels at component-based development. You can create reusable components by extracting common utility combinations, either through CSS classes or component templates in your JavaScript framework of choice.
                Tailwind's configuration system is highly customizable. You can extend the default theme, add custom colors, modify spacing scales, and even create your own utility classes to match your brand and design requirements.
                The purge feature ensures your production builds only include the CSS you actually use, resulting in incredibly small file sizes. This makes Tailwind performant even though it includes thousands of utility classes by default.
                State variants like "hover:", "focus:", and "disabled:" make interactive styling straightforward. You can handle complex state combinations without writing custom CSS or managing class toggling in JavaScript.
                The framework integrates seamlessly with modern build tools and popular frameworks like React, Vue, and Angular. Most bundlers can automatically detect and include only the utilities you use.
                Mastering Tailwind means embracing its philosophy of utility-first design. Once you stop fighting the approach and start thinking in utilities, you'll find yourself building interfaces faster and with more consistency than traditional CSS methods allow.
                Smart, efficient model for everyday use Learn more
                Artifacts
                Content
                No content added yet
                Add images, PDFs, docs, spreadsheets, and more to summarize, analyze, and query content with Claude.
            `,
            imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            category: ["CSS", "Tailwind", "Design"],
            date: "June 10, 2023",
            author: "Jane Smith"
        },
    ];

    const [blogPosts, setBlogPosts] = useState(initialBlogPosts);

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
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
            <div className="mx-auto px-4 mt-8">
                <div className="max-w-7xl mx-auto py-8">
                    {/* Hero Section */}
                    <Hero onNewPost={updateBlogPosts}/>

                    {/* Blog Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <BlogCard 
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                excerpt={post.excerpt}
                                imageUrl={post.imageUrl}
                                category={post.category}
                                date={post.date}
                                author={post.author}
                                post={post}
                                editPost={editPost}
                                deletePost={deletePost}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}