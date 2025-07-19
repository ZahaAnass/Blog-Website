import { faEnvelope, faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "flowbite-react";

export default function ContactInfo() {

    return(
        <Card className="not-dark:bg-gradient-to-r from-purple-600 to-pink-600 text-white dark:bg-gray-800 dark:text-gray-400">
            <div className="contact-info">
                <h1 className="text-2xl font-bold text-white">Contact Information</h1>
            </div>
            <div className="card-description">
                <p className="text-gray-600 dark:text-gray-400">Here are different ways you can reach us.</p>
            </div>
            <div className="container">
                <a href="mailto:anass@gmail.com" target="_blank" className="flex relative pb-10 pt-2 hover:scale-110 transition-all duration-300">
                    <FontAwesomeIcon icon={faEnvelope} className="text-orange-500" size="2xl" />
                    <div className="absolute left-16 -top-0.5">
                        <p>Email Us</p>
                        <p>anass@gmail.com</p>
                    </div>
                </a>
                <a href="tel:+21655555555" target="_blank" className="flex relative pb-10 hover:scale-110 transition-all duration-300">
                    <FontAwesomeIcon icon={faPhone} className="text-orange-500" size="2xl" />
                    <div className="absolute left-16 -top-2">
                        <p>Call Us</p>
                        <p>+216 55 55 55 55</p>
                    </div>
                </a>
                <a href="https://www.google.com/maps/place/Mohammedia,+Morocco" target="_blank" className="flex relative hover:scale-110 transition-all duration-300">
                    <FontAwesomeIcon icon={faLocation} className="text-orange-500" size="2xl" />
                    <div className="absolute left-16 -top-2">
                        <p>Vist Us</p>
                        <p>Mohammedia, Morroco</p>
                    </div>
                </a>
            </div>
        </Card>
    )
}