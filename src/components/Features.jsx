import FeaturesCard from "../ui/FeaturesCard"
import { faBook, faUser, faMailBulk } from "@fortawesome/free-solid-svg-icons"

export default function Features(){


    return(
        <>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="container mx-auto px-4 py-14 grid grid-cols-3 gap-4">
                    <FeaturesCard title="Feature 1" description="Description 1" icon={faBook}/>
                    <FeaturesCard title="Feature 2" description="Description 2" icon={faUser}/>
                    <FeaturesCard title="Feature 3" description="Description 3" icon={faMailBulk}/>
                </div>
            </div>
        </>
    )
}