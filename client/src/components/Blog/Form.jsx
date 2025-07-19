import { Button } from "flowbite-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const Form = ({ onClose, onNewPost, post = "" }) => {
    const isEditMode = !!post;
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            id: isEditMode ? post.id : Date.now(),
            title: e.target.title.value,
            excerpt: e.target.excerpt.value,
            content: e.target.content.value,
            imageUrl: e.target.imageUrl.value,
            category: e.target.categories.value.split(",").map(cat => cat.trim()),
            date: isEditMode ? post.date : new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            author: isEditMode ? post.author : 'Anass'
        };

        onNewPost(formData);
        onClose();
    }

    const handleClose = () => {
        onClose();
    }

    const renderForm = () => (
        <form onSubmit={handleSubmit} className="space-y-6 relative">
            <button
                type="button"
                onClick={handleClose}
                className="absolute -top-2 -right-2 p-1 rounded-full bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Close form"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                    <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-300">Image URL</label>
                    <input 
                        id="imageUrl"
                        name="imageUrl"
                        type="url" 
                        placeholder="https://example.com/image.jpg" 
                        defaultValue={isEditMode ? post.imageUrl : ''}
                        required 
                        className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-300">Title</label>
                    <input 
                        id="title"
                        name="title"
                        type="text" 
                        placeholder="Enter post title" 
                        defaultValue={isEditMode ? post.title : ''}
                        required 
                        className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                    />
                </div>
                <div className="space-y-2 md:col-span-2">
                    <label htmlFor="excerpt" className="block text-sm font-medium text-gray-300">Excerpt</label>
                    <textarea 
                        id="excerpt"
                        name="excerpt"
                        rows="3"
                        placeholder="Write a brief summary of your post..." 
                        defaultValue={isEditMode ? post.excerpt : ''}
                        required 
                        className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                    ></textarea>
                </div>
                <div className="space-y-2 md:col-span-2">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-300">Content</label>
                    <textarea 
                        id="content"
                        name="content"
                        rows="6"
                        placeholder="Write your full post content here..." 
                        defaultValue={isEditMode ? post.content : ''}
                        required 
                        className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 min-h-[150px]"
                    ></textarea>
                </div>
                <div className="space-y-2 md:col-span-2">
                    <label htmlFor="categories" className="block text-sm font-medium text-gray-300">Categories</label>
                    <input 
                        id="categories"
                        name="categories"
                        type="text" 
                        placeholder="e.g., technology, programming, web development" 
                        defaultValue={isEditMode ? post.category.join(', ') : ''}
                        required 
                        className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                    />
                    <p className="text-xs text-gray-400 mt-1">Separate categories with commas</p>
                </div>
            </div>
            <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium py-2.5 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                {isEditMode ? 'Update Post' : 'Create Post'}
            </Button>
        </form>
    )

    return renderForm();

}
export default Form;