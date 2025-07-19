import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faCamera, faSignOutAlt, faCheck, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function UserSettings() {
    const [activeTab, setActiveTab] = useState('profile');
    const [profilePic, setProfilePic] = useState(null);
    const [formData, setFormData] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        bio: 'Web Developer & Blogger',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleProfilePicChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProfilePic(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8 py-12">
            <div className="max-w-6xl mx-auto">
                {/* Back Button - Sticky on larger screens */}
                <div className="mb-6 md:sticky md:top-6 z-10">
                    <Link 
                        to="/" 
                        className="inline-flex items-center px-4 py-2.5 bg-white dark:bg-gray-800 rounded-lg shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} className="mr-2 h-4 w-4"/>
                        Back to Home
                    </Link>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">

                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-center">
                        <h2 className="text-2xl font-bold text-white">Account Settings</h2>
                        <p className="text-blue-100 mt-1">Manage your profile and preferences</p>
                    </div>

                    <div className="flex flex-col lg:flex-row">
                        {/* Sidebar - Sticky on large screens */}
                        <div className="w-full lg:w-72 xl:w-80 bg-gray-50 dark:bg-gray-700 p-6 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-600 lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)] lg:overflow-y-auto">
                            <div className="flex flex-col items-center py-4">
                                <div className="relative mb-4">
                                    <img 
                                        src={profilePic || 'https://ui-avatars.com/api/?name=John+Doe&background=4f46e5&color=fff&size=128'} 
                                        alt="Profile" 
                                        className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-600"
                                    />
                                    <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition">
                                        <FontAwesomeIcon icon={faCamera} className="h-4 w-4" />
                                        <input 
                                            type="file" 
                                            className="hidden" 
                                            accept="image/*"
                                            onChange={handleProfilePicChange}
                                        />
                                    </label>
                                </div>
                                <h3 className="font-semibold text-gray-800 dark:text-white">John Doe</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">john@example.com</p>
                            </div>

                            <nav className="mt-4">
                                <button
                                    onClick={() => setActiveTab('profile')}
                                    className={`w-full text-left px-4 py-3 rounded-lg mb-1 flex items-center ${activeTab === 'profile' ? 'bg-blue-100 text-blue-700 dark:bg-gray-600 dark:text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
                                >
                                    <FontAwesomeIcon icon={faUser} className="mr-3" />
                                    Profile Information
                                </button>
                                <button
                                    onClick={() => setActiveTab('password')}
                                    className={`w-full text-left px-4 py-3 rounded-lg mb-1 flex items-center ${activeTab === 'password' ? 'bg-blue-100 text-blue-700 dark:bg-gray-600 dark:text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
                                >
                                    <FontAwesomeIcon icon={faLock} className="mr-3" />
                                    Change Password
                                </button>
                                <button className="w-full text-left px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center mt-4">
                                    <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
                                    Sign Out
                                </button>
                            </nav>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 p-6 md:p-8 lg:p-10">
                            {activeTab === 'profile' ? (
                                <form onSubmit={handleSubmit}>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Profile Information</h3>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Full Name
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FontAwesomeIcon icon={faUser} className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    placeholder="Your full name"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Email Address
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    placeholder="Your email address"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Bio
                                            </label>
                                            <textarea
                                                id="bio"
                                                name="bio"
                                                rows="3"
                                                value={formData.bio}
                                                onChange={handleChange}
                                                className="block w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Tell us about yourself..."
                                            ></textarea>
                                        </div>

                                        <div className="pt-4">
                                                <button
                                                type="submit"
                                                className="w-full md:w-auto px-8 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5"
                                            >
                                                Save Changes
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Change Password</h3>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Current Password
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FontAwesomeIcon icon={faLock} className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                    id="currentPassword"
                                                    name="currentPassword"
                                                    type="password"
                                                    value={formData.currentPassword}
                                                    onChange={handleChange}
                                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    placeholder="Enter current password"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                New Password
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FontAwesomeIcon icon={faLock} className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                    id="newPassword"
                                                    name="newPassword"
                                                    type="password"
                                                    value={formData.newPassword}
                                                    onChange={handleChange}
                                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    placeholder="Enter new password"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Confirm New Password
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FontAwesomeIcon icon={faCheck} className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                    id="confirmPassword"
                                                    name="confirmPassword"
                                                    type="password"
                                                    value={formData.confirmPassword}
                                                    onChange={handleChange}
                                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    placeholder="Confirm new password"
                                                />
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                                <button
                                                type="submit"
                                                className="w-full md:w-auto px-8 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5"
                                            >
                                                Update Password
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserSettings;