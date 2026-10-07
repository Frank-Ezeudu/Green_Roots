import AboutHero from "../Components/AboutHero"
import AboutOptions from "../Components/AboutOptions"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import OurStory from "../Components/OurStory"
import OurValues from "../Components/OurValues"
import QuoteCard from "../Components/QuoteCard"

const About = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <OurStory />
      <OurValues />
      <AboutOptions />
      <QuoteCard />
      <Footer />
    </>
  )
}

export default About
