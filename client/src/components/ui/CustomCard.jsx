import { Card } from "flowbite-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function FeaturesCard({title, description, icon}) {
    return (
        <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg">
            <div className="flex-grow flex flex-col">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50 dark:bg-blue-900/30">
                        <FontAwesomeIcon 
                            icon={icon} 
                            className="text-blue-600 dark:text-blue-400 text-2xl" 
                        />
                    </div>
                    <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                        {title}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-4">
                        {description}
                    </p>
                </div>
            </div>
        </Card>
    )
}