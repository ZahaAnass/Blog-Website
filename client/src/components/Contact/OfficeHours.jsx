import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "flowbite-react";

export default function OfficeHours() {
    return (
        <Card className="not-dark:bg-gradient-to-r from-purple-600 to-pink-600 text-white dark:bg-gray-800 dark:text-gray-400">
            <div className="office-hours">
                <h1 className="text-2xl font-bold text-white mb-4">Office Hours</h1>
                <div className="text-gray-600 dark:text-gray-400 mb-3">
                    <div className="flex justify-between">
                        <div className="left flex items-center">
                            <FontAwesomeIcon icon={faClock} className="mr-4 text-orange-500" />
                            <span>Monday - Friday:</span>
                        </div>
                        <div className="right">
                            <span>9:00 AM - 5:00 PM</span>
                        </div>
                    </div>
                </div>
                <div className="text-gray-600 dark:text-gray-400 mb-3">
                    <div className="flex justify-between">
                        <div className="left flex items-center">
                            <FontAwesomeIcon icon={faClock} className="mr-4 text-orange-500" />
                            <span>Saturday:</span>
                        </div>
                        <div className="right">
                            <span>10:00 AM - 2:00 PM</span>
                        </div>
                    </div>
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                    <div className="flex justify-between">
                        <div className="left flex items-center">
                            <FontAwesomeIcon icon={faClock} className="mr-4 text-orange-500" />
                            <span>Sunday:</span>
                        </div>
                        <div className="right">
                            <span>Closed</span>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}