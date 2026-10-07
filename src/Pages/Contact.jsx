import ContactCardSect from "../Components/ContactCardSect"
import ContactDetails from "../Components/ContactDetails"
import ContactHero from "../Components/ContactHero"
import ContactQuoteCard from "../Components/ContactQuoteCard"
import Faq from "../Components/Faq"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"


const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactCardSect />
      <ContactDetails />
      <Faq />
      <ContactQuoteCard />
      <Footer />
    </>
  )
}

export default Contact
