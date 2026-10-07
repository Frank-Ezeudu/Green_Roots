import location from '../assets/location.png'
import phone from '../assets/phone-vol.png'
import envelope from '../assets/envelope.png'
import ContactCardItem from './ContactCardItem'

const ContactCardSect = () => {
  return (
    <div className="px-22 font-outfit bg-[#f8f7f3] w-full">
      <div className='w-full flex justify-center'>
        <div className=' grid grid-cols-3 gap-6 mt-12'>
            <ContactCardItem 
                cont_icon = {phone}
                cont = "Phone"
                cont_desc ={<>+234 812 345 6789 <br /> Mon – Sat, 8am – 6pm</>}
            />

            <ContactCardItem 
                cont_icon = {envelope}
                cont = "Email"
                cont_desc ={<>hello@greenroots.com <br /> We reply within 24hrs</>}
            />

            <ContactCardItem
                cont_icon = {location}
                cont = "Office"
                cont_desc ={<>12 Greenway Road, <br/> Jos, Plateau State, <br /> Nigeria</>}
            />
        </div>
      </div>
    </div>
  )
}

export default ContactCardSect
