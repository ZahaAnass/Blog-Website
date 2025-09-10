
import { Card, Label, TextInput, Textarea, Button } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ContactInfo from "./ContactInfo";
import OfficeHours from "./OfficeHours";

export default function ContactForm() {
    return (
        <div className="w-full max-w-7xl mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Form */}
                <Card className="h-full text-gray-600 dark:text-gray-400">
                    <h2 className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-2">Send us a Message</h2>
                    <p className="text-gray-400 -mt-2 mb-6">Feel free to contact us through the form below</p>
                    
                    <form className="space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="name" value="Your Name" className="mb-1 block text-sm font-medium text-gray-600 dark:text-gray-400" />
                                <TextInput 
                                    id="name" 
                                    type="text" 
                                    placeholder="Your name" 
                                    required 
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <Label htmlFor="email" value="Your Email" className="mb-1 block text-sm font-medium text-gray-600 dark:text-gray-400" />
                                <TextInput 
                                    id="email" 
                                    type="email" 
                                    placeholder="Your email" 
                                    required 
                                    className="w-full"
                                />
                            </div>
                        </div>
                        
                        <div>
                            <Label htmlFor="subject" value="Subject" className="mb-1 block text-sm font-medium text-gray-600 dark:text-gray-400" />
                            <TextInput 
                                id="subject" 
                                type="text" 
                                placeholder="Subject" 
                                required 
                                className="w-full"
                            />
                        </div>
                        
                        <div>
                            <Label htmlFor="message" value="Message" className="mb-1 block text-sm font-medium text-gray-600 dark:text-gray-400" />
                            <Textarea 
                                id="message" 
                                placeholder="Your message here..." 
                                rows="4"
                                required 
                                className="w-full"
                            />
                        </div>
                        
                        <Button 
                            type="submit" 
                            className="w-full bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-200 hover:animate-bounce text-white dark:text-gray-900"
                            color=""
                        >
                            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                            Send Message
                        </Button>
                    </form>
                </Card>
                
                {/* Right Column - Contact Info */}
                <div className="space-y-8">
                    <ContactInfo />
                    <OfficeHours />
                </div>
            </div>
        </div>
    )
}