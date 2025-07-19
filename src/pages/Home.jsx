import Hero from '../components/Home/Hero'
import Features from '../components/Home/Features'
import Ready from '../components/Home/Ready'
import FooterComponent from '../components/Footer'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home(){

    return(
        <>
            <NavBar />
            <div className="bg-gray-100 dark:bg-gray-900">
                <Hero />
                <Features />
                <Ready />
            </div>
            <Footer />
        </>
    )
}