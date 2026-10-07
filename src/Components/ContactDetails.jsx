import clock from '../assets/clock.png'
import { useState } from 'react'
// import leafy from '../assets/leafyy.png'
// e2e7c7
// import arrow_right from '../assets/arrow-right.png'
// import leaf from '../assets/green-leaf.png'
// import users from '../assets/users.png'
import leaf_logo from '../assets/leaf-logo.png'
import arrow_right from '../assets/arrow-right.png';
// import tending from '../assets/tending.jpg'


const ContactDetails = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(values);
        alert(`Dear ${values.firstName} ${values.lastName}, your message has been sent successfully!`)
    }

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    })
    

    const handleChange = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
    }

    

  return (
    <div className='px-22 font-outfit bg-[#f8f7f3] z-12 -mt-17 pb-8'>
      <div className='pt-30 flex  flex-row-reverse gap-20 w-full'>
            {/* right  */}
            <div  className='w-[40%] pt-8 gap-2'>
                <div className='w-full flex flex-col bg-[#E5EED8] shadow-md  shadow-[0_7px_8px_rgba(0,0,0,0.2)] p-5 rounded-[0.8rem] gap-4'>
                    <div className='flex items-start w-full'>
                        <div className='flex items-center gap-2 '>
                            <img className='w-[42px]' src={leaf_logo} alt="" />
                            <p className='font-semibold text-[28px] text-[#3b403f] '>Find Us</p>
                        </div>
                    </div>

                    <div className="flex w-full  border border-dashed border-gray-400 overflow-hidden h-[280px] rounded-[0.8rem]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.6587213186162!2d8.871940073714871!3d9.878972490220333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10537387fc85cf8b%3A0xc3317526ad656388!2snHub%20Foundation!5e0!3m2!1sen!2sng!4v1790266524425!5m2!1sen!2sng"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>
                    </div>
                </div>

            
                
                <div className='mt-4 flex flex-col shadow-md gap-4  border border-dashed border-gray-400 rounded-[1.5rem] bg-[#D8E4C4] w-full py-10 p-5'>
                    <div className='flex items-center gap-2 '>
                        <div className='flex p-2 bg-[#3A6034] rounded-[50%]'>
                            <img className='w-[25px]' src={clock} alt="" />
                        </div>
                        <p className='font-semibold text-[20px] text-[#3b403f] '>Office Hours</p>
                    </div>
                    <div className='flex flex-col p-2 text-[#3b403f] font-outfit w-full gap-3 '>
                        <div className='flex gap-2 justify-between items-center'>
                            <p className='font-semibold'>Monday – Friday</p>
                            <p>8:00 AM – 6:00 PM</p>
                        </div>

                        <div className='flex gap-2 justify-between items-center'>
                            <p className='font-semibold'>Saturday</p>
                            <p>8:00 AM – 6:00 PM</p>
                        </div>

                        <div className='flex gap-2 justify-between items-center'>
                            <p className='font-semibold'>Sunday</p>
                            <p>Closed</p>
                        </div>
                    </div>
                </div>
                
                
            </div>
    
    
            {/* left  */}
    
    
            <div className='flex w-[50%]'>
                <div className='flex flex-col gap-4  p-6 w-full shadow-md  border border-dashed border-gray-400 rounded-[1.5rem] bg-[#D8E4C4] relative' >
                    <div className='flex flex-col gap-3 items-start w-full '>
                        <div className='flex items-center gap-2 '>
                            <img className='w-[36px]' src={leaf_logo} alt="" />
                            <p className='font-semibold text-[28px] text-[#3b403f]'>Send Us a Message</p>
                        </div>
                        <p className='text-[#3b403f] leading-tight font-outfit text-[18px] w-[75%]'>Fill out the form below and we'll get back to you as soon as possible.</p>
                    </div>
                    

                    <div className=' flex flex-col w-full'>
                        <form onSubmit={handleSubmit} className="flex font-outfit flex-col w-full items-center gap-4">
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="firstName"
                                    className="font-semibold text-base text-[#3b403f]"
                                >First Name <span className="text-red-500">*</span></label>
                                <input type="text" name="firstName" placeholder="Your first name..."
                                    onChange={(e) => handleChange(e)}
                                    required
                                    value={values.firstName}
                                    className="bg-white w-full backdrop-blur-lg border border-[#3b403f]/50 placeholder-[#3b403f]/35 focus:outline-none p-3 w-78  rounded-[0.5rem] text-[#3b403f] text-sm"
                                />
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="lastName"
                                    className="font-semibold text-base text-[#3b403f]"
                                >Last Name <span className="text-red-500">*</span></label>
                                <input type="text" name="lastName" placeholder="Your last name..."
                                    onChange={(e) => handleChange(e)}
                                    required
                                    value={values.lastName}
                                    className="bg-white w-full backdrop-blur-lg border border-[#3b403f]/50 placeholder-[#3b403f]/35 focus:outline-none p-3 w-78  rounded-[0.5rem] text-[#3b403f] text-sm"
                                />
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="email"
                                    className="font-semibold text-base text-[#3b403f]"
                                >Email Address <span className="text-red-500">*</span></label>
                                <input type="email" name="email" placeholder="Your email address..."
                                    onChange={(e) => handleChange(e)}
                                    required
                                    value={values.email}
                                    className="bg-white w-full backdrop-blur-lg border border-[#3b403f]/50 placeholder-[#3b403f]/35 focus:outline-none p-3 w-78  rounded-[0.5rem] text-[#3b403f] text-sm"
                                />
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="phone"
                                    className="font-semibold text-base text-[#3b403f]"
                                >Phone Number <span className="text-red-500">*</span></label>
                                <input type="number" name="phone" placeholder="Your phone number..."
                                    onChange={(e) => handleChange(e)}
                                    required
                                    value={values.phone}
                                    className="bg-white [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full backdrop-blur-lg border border-[#3b403f]/50 placeholder-[#3b403f]/35 focus:outline-none p-3 w-78  rounded-[0.5rem] text-[#3b403f] text-sm"
                                />
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="message"
                                    className="font-semibold text-base text-[#3b403f]"
                                >Message <span className="text-red-500">*</span></label>
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Your message..."
                                    onChange={(e) => handleChange(e)}
                                    required
                                    value={values.message}
                                    rows="6"
                                    className="bg-white w-full backdrop-blur-lg border border-[#3b403f]/50 placeholder-[#3b403f]/35 focus:outline-none p-3 w-78  rounded-[0.5rem] text-[#3b403f] text-sm"
                                ></textarea>
                            </div>



                            
                            <button className="flex w-full items-center justify-center gap-2 bg-[#3A6034] px-6 py-2 rounded-[0.3rem] text-white overflow-hidden " type="submit">
                                <div className='flex gap-2 items-center'>
                                    <p>Send Message</p>
                                    <img className='w-[20px]' src= {arrow_right} alt="" />
                                </div>
                            </button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactDetails
