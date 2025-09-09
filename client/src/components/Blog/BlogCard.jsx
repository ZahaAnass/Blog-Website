import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarAlt, faArrowRight, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "flowbite-react";
import { useState } from "react";
import Form from "./Form";

export default function BlogCard({id, title, excerpt, imageUrl, category, date, author, post, editPost, deletePost}) {

    const [openEditForm, setOpenEditForm] = useState(false);

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
            {/* Image */}
            <div className="h-48 overflow-hidden">
                <img 
                    src={imageUrl} 
                    alt={title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>
            
            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
                {/* Category/Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                    {category.map((cat, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                            {cat}
                        </span>
                    ))}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                    {title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {excerpt}
                </p>
                
                {/* Meta Information */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faUser} className="mr-2 h-4 w-4" />
                            {author}
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 h-4 w-4" />
                            {date}
                        </div>
                    </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-6 flex items-center gap-2 w-full">
                    <Link to={`/blog/${id}`} state={{ post }} className="flex-2">
                        <Button color="blue" size="sm" className="group flex w-full justify-center">
                            Read More
                            <FontAwesomeIcon 
                                icon={faArrowRight} 
                                className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" 
                            />
                        </Button>
                    </Link>
                    <div className="flex-1 flex justify-end space-x-2">
                        <Button 
                            color="gray" 
                            size="sm" 
                            className="!p-2 !px-4 flex-1" 
                            onClick={() => setOpenEditForm(true)}
                            aria-label="Edit post"
                        >
                            <FontAwesomeIcon icon={faEdit} className="h-4 w-4" />
                        </Button>
                        <Button color="red" size="sm" className="!p-2 !px-4 flex-1" onClick={() => deletePost(id)}>
                            <FontAwesomeIcon icon={faTrash} className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>

            {openEditForm && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
                        onClick={() => setOpenEditForm(false)}
                    ></div>
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <div className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                            <div className="p-6">
                                <Form 
                                    onClose={() => setOpenEditForm(false)} 
                                    onNewPost={async (updatedPost) => {
                                        const success = await editPost(updatedPost);
                                        if (success) {
                                            setOpenEditForm(false);
                                        }
                                    }} 
                                    post={{
                                        ...post,
                                        authorId: post.authorId?._id ? post.authorId : { _id: post.authorId }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}