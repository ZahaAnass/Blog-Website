import Hero from '../components/Hero'
import Features from '../components/Features'
import Ready from '../components/Ready'
import FooterComponent from '../components/Footer'

export default function Home(){

    return(
        <>
            <div className="bg-gray-100 dark:bg-gray-900">
                <Hero />
                <Features />
                <Ready />
                <FooterComponent />
            </div>
        </>
    )
}