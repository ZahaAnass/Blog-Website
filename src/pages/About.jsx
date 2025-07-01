import FeaturesCard from "../components/ui/CustomCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faRocket, faHeart, faAward } from "@fortawesome/free-solid-svg-icons";
import Hero from "../components/About/Hero";

const About = () => {
  const values = [
    {
      icon: faRocket,
      title: "Our Mission",
      description: "To create a platform where knowledge flows freely and meaningful conversations happen."
    },
    {
      icon: faUsers,
      title: "Community First",
      description: "We believe in building a supportive community of writers and readers."
    },
    {
      icon: faHeart,
      title: "Quality Content",
      description: "Every piece of content is carefully curated to provide real value to our readers."
    },
    {
      icon: faAward,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from content to user experience."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 ">
      <div className=" mx-auto px-4 py-20 mt-16 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <Hero />

          {/* Story Section */}
          <div className="bg-white dark:bg-gray-800 my-12">
            <FeaturesCard title="Our Journey" 
                        description="Founded with a simple belief that everyone has a story worth telling, our blog platform has grown into a vibrant community of writers, readers, and thinkers from around the world.
                                    What started as a small project has evolved into a comprehensive platform where ideas flourish, creativity thrives, and meaningful discussions take place. We're proud to be the bridge that connects passionate writers with engaged readers.
                                    Today, we continue to innovate and improve, always keeping our community at the heart of everything we do. Join us as we write the next chapter of our story together"
                        icon={faRocket}
            />
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <FeaturesCard key={index} className="hover:shadow-lg transition-shadow"
                title={value.title}
                description={value.description}
                icon={value.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
