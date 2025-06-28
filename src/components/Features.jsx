import FeaturesCard from '../ui/FeaturesCard'
import { faBook, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Features() {
    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeaturesCard
                        title="Learn from Anywhere"
                        description="Access our courses anytime, anywhere — whether you're at home, traveling, or on the go. All you need is an internet connection."
                        icon={faBook}
                    />

                    <FeaturesCard
                        title="Expert Instructors"
                        description="Learn from industry professionals with years of real-world experience. Our instructors are passionate, skilled, and ready to help you succeed."
                        icon={faUser}
                    />

                    <FeaturesCard
                        title="Get Feedback"
                        description="Receive personalized feedback on your progress to help you improve faster. Our mentors are here to guide you every step of the way."
                        icon={faEnvelope}
                    />
                </div>
            </div>
        </section>
    )
}