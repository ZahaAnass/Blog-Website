import { Card } from "flowbite-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook } from "@fortawesome/free-solid-svg-icons"

export default function FeaturesCard({title, description, icon = faBook}){

    return(
        <>
            <Card className="bg-white">
                <FontAwesomeIcon icon={icon} className="text-2xl" /> 
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
            </Card>
        </>
    )
}