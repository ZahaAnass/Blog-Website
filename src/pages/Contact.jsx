import Hero from "../components/Contact/Hero";
import ContactForm from "../components/Contact/ContactForm";
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {

    return(
        <>
            <NavBar />
            <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 ">
                <div className=" mx-auto px-4 py-22 mt-16 dark:bg-gray-900">
                    <div className="max-w-6xl mx-auto py-4">
                        {/* Hero */}
                        <Hero />

                        {/* Contact Form */}
                        <ContactForm />

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
