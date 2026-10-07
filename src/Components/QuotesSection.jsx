import { useState } from 'react';
import leaf_logo from '../assets/leaf-logo.png';
import QuoteServiceCard from './QuoteServiceCard';
import leaf from '../assets/leaf.png'
import mower from '../assets/white-mower.png'
import shears from '../assets/white-shears.png'
import bulb from '../assets/white-bulb.png'
import arrow_right from '../assets/arrow-right.png';
import lock from '../assets/lock.png';
import leafy from '../assets/leafyy.png'
import leafyy from '../assets/leafyyy.png'


const QuotesSection = () => {

    const [selectedCards, setSelectedCards] = useState([]);
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
        projectType: "",
        projectDesc: "",
        propertySize:"",
        budgetRange:"",
        date:"",
    })
    

    const handleChange = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
    }

  return (
    <div className="px-22 flex  bg-[#f8f7f3] py-10 w-full">
        <div className='flex gap-4 rounded-[0.8rem] pt-4 px-[3px] pb-[3px] flex-col w-full bg-[#E5EED8] '>
            <div className='flex flex-col px-4 gap-2 items-start w-full '>
                <div className='flex items-center gap-2 '>
                    <img className='w-[36px]' src={leaf_logo} alt="" />
                    <p className='font-semibold text-[28px] text-[#3b403f]'>Get Your Free Quote</p>
                </div>
                <p className='text-[#3b403f] ml-11 leading-tight font-outfit text-[17px] w-[75%]'>Select your services, share a few details about your project, <br /> and we'll get back to you with a personalized quote.</p>
            </div>

            <div className='flex flex-col bg-[#f8f7f3] gap-6 overflow-hidden relative rounded-[0.8rem] px-8 p-4 pb-14 w-full'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center w-full ' action="">
                    <div className='flex  flex-col w-full'>
                        <div className='flex flex-col'>
                            <p className='font-bold text-[#3b403f]'>1. Select Services</p>
                            <p className='font-outfit text-[#3b403f]/40 text-[14px]'>Choose all that apply</p>
                        </div>

                        
                        <div className='w-full flex items-center justify-center'>
                            <div className=' grid grid-cols-4 gap-6 mt-4'>
                                <QuoteServiceCard 
                                    id={1}
                                    quote_icon = {leaf}
                                    quote = "Garden Design"
                                    quote_desc ="Custom designs for your space"
                                    selected={selectedCards.includes(1)}
                                    onClick={() => {
                                        setSelectedCards((prev) =>
                                            prev.includes(1)
                                                ? prev.filter((id) => id !== 1)
                                                : [...prev, 1]
                                        );
                                    }}
                                />

                                <QuoteServiceCard 
                                    id={2}
                                    quote_icon = {mower}
                                    quote = "Lawn Care"
                                    quote_desc ="Healthy, green lawns all year"
                                    selected={selectedCards.includes(2)}
                                    onClick={() => {
                                        setSelectedCards((prev) =>
                                            prev.includes(2)
                                                ? prev.filter((id) => id !== 2)
                                                : [...prev, 2]
                                        );
                                    }}
                                />

                                <QuoteServiceCard 
                                    id={3}
                                    quote_icon = {shears}
                                    quote = "Plant Care"
                                    quote_desc ="Planting, pruning & maintenance"
                                    selected={selectedCards.includes(3)}
                                    onClick={() => {
                                        setSelectedCards((prev) =>
                                            prev.includes(3)
                                                ? prev.filter((id) => id !== 3)
                                                : [...prev, 3]
                                        );
                                    }}
                                />

                                <QuoteServiceCard 
                                    id={4}
                                    quote_icon = {bulb}
                                    quote = "Outdoor Lighting"
                                    quote_desc ="Beautiful spaces, day and night"
                                    selected={selectedCards.includes(4)}
                                    onClick={() => {
                                        setSelectedCards((prev) =>
                                            prev.includes(4)
                                                ? prev.filter((id) => id !== 4)
                                                : [...prev, 4]
                                        );
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex mt-6 gap-4 flex-col w-full'>
                        <div className='flex flex-col'>
                            <p className='font-bold text-[#3b403f]'>2. Project Details</p>
                        </div>

                        <div className='flex w-full'>
                            <div className='flex w-[50%]'>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="projectType"
                                        className="font-semibold text-base text-[#3b403f]"
                                    >Type of Project <span className="text-red-500">*</span></label>
                                    
                                    <select 
                                        name="projectType" 
                                        id="projectType"
                                        value={values.projectType}
                                        onChange={handleChange}
                                        required
                                        className="bg-white w-[95%] border border-[#3b403f]/50 p-3 rounded-[0.5rem] font-normal  text-[#3b403f]/80  px-4  text-[16px] focus:outline-none"
                                    >
                                        <option value="">Select project type</option>
                                        <option value="web-design">Garden Design</option>
                                        <option value="web-development">Lawn Care</option>
                                        <option value="branding">Plant Care</option>
                                        <option value="consulting">Outdoor Lighting</option>
                                    </select>
                                    
                                </div>
                            </div>

                            <div className='flex w-[50%]'>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="projectDesc"
                                        className="font-semibold text-base text-[#3b403f]"
                                    >Project Description <span className="text-red-500">*</span></label>
                                    <textarea
                                        name="projectDesc"
                                        id="projectDesc"
                                        placeholder="Tell us more about your vision..."
                                        onChange={(e) => handleChange(e)}
                                        required
                                        value={values.projectDesc}
                                        rows="4"
                                        className="bg-white w-full backdrop-blur-lg border border-[#3b403f]/80 placeholder-[#3b403f]/80 focus:outline-none p-3 w-78  rounded-[0.5rem] text-[#3b403f] text-sm"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className='flex mt-6 gap-4 flex-col w-full'>
                        <div className='flex flex-col'>
                            <p className='font-bold text-[#3b403f]'>3. Property Information</p>
                        </div>

                        <div className='flex w-full'>
                            <div className='flex flex-col items-center gap-6 w-[50%]'>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="propertySize"
                                        className="font-semibold text-base text-[#3b403f]"
                                    >Property Size <span className="text-red-500">*</span></label>
                                    
                                    <select 
                                        name="propertySize" 
                                        id="propertySize"
                                        value={values.propertySize}
                                        onChange={handleChange}
                                        required
                                        className="bg-white w-[95%] border border-[#3b403f]/50 p-3 rounded-[0.5rem] font-normal  text-[#3b403f]/80  px-4  text-[16px] focus:outline-none"
                                    >
                                        <option value="">Select Size</option>
                                        <option value="below-100">Below 100 m²</option>
                                        <option value="100-250">100 - 250 m²</option>
                                        <option value="250-500">250 - 500 m²</option>
                                        <option value="500-1000">500 - 1,000 m²</option>
                                        <option value="1000-2000">1,000 - 2,000 m²</option>
                                        <option value="2000-5000">2,000 - 5,000 m²</option>
                                        <option value="above-5000">Above 5,000 m²</option>
                                    </select>
                                    
                                </div>

                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="budgetRange"
                                        className="font-semibold text-base text-[#3b403f]"
                                    >Budget Range <span className="text-red-500">*</span></label>
                                    
                                    <select 
                                        name="budgetRange" 
                                        id="budgetRange"
                                        value={values.budgetRange}
                                        onChange={handleChange}
                                        required
                                        className="bg-white w-[95%] border border-[#3b403f]/50 p-3 rounded-[0.5rem] font-normal  text-[#3b403f]/80  px-4  text-[16px] focus:outline-none"
                                    >
                                        <option value="">Select budget range</option>
                                        <option value="below-500k">Below ₦500,000</option>
                                        <option value="500k-1m">₦500,000 - ₦1,000,000</option>
                                        <option value="1m-5m">₦1,000,000 - ₦5,000,000</option>
                                        <option value="5m-10m">₦5,000,000 - ₦10,000,000</option>
                                        <option value="10m-25m">₦10,000,000 - ₦25,000,000</option>
                                        <option value="25m-50m">₦25,000,000 - ₦50,000,000</option>
                                        <option value="50m-100m">₦50,000,000 - ₦100,000,000</option>
                                        <option value="above-100m">Above ₦100,000,000</option>
                                    </select>
                                    
                                </div>
                            </div>

                            <div className='flex w-[50%]'>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="date"
                                        className="font-semibold text-base text-[#3b403f]"
                                    >Preferred Start Date <span className="text-red-500">*</span></label>
                                    <input type="date" name="date" placeholder="Choose a date..."
                                        onChange={(e) => handleChange(e)}
                                        required
                                        value={values.date}
                                        className="bg-white [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full backdrop-blur-lg border border-[#3b403f]/50 placeholder-[#3b403f]/35 focus:outline-none p-3 w-78  rounded-[0.5rem] text-[#3b403f] text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex mt-6 gap-4 flex-col w-full'>
                        <div className='flex flex-col'>
                            <p className='font-bold text-[#3b403f]'>4. Your Contact Details</p>
                        </div>

                        <div className='flex w-full'>
                            <div className='flex flex-col items-center gap-6 w-[50%]'>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="firstName"
                                        className="font-semibold text-base text-[#3b403f]"
                                    >First Name <span className="text-red-500">*</span></label>
                                    <input type="text" name="firstName" placeholder="Your first name..."
                                        onChange={(e) => handleChange(e)}
                                        required
                                        value={values.firstName}
                                        className="bg-white w-[95%] backdrop-blur-lg border border-[#3b403f]/50 placeholder-[#3b403f]/80 focus:outline-none p-3 w-78  rounded-[0.5rem] text-[#3b403f] text-sm"
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
                                        className="bg-white w-[95%] backdrop-blur-lg border border-[#3b403f]/50 placeholder-[#3b403f]/80 focus:outline-none p-3 w-78  rounded-[0.5rem] text-[#3b403f] text-sm"
                                    />
                                </div>

                                
                            </div>

                            <div className='flex flex-col items-center gap-6 w-[50%]'>
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
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-center gap-4 w-full mt-8'>
                        <button className="flex w-[50%] items-center justify-center gap-2 bg-[#3A6034] px-6 py-2 rounded-[0.5rem] text-white overflow-hidden " type="submit">
                            <div className='flex gap-2 items-center'>
                                <p className='font-semibold'>Request My Quote</p>
                                <img className='w-[20px]' src= {arrow_right} alt="" />
                            </div>
                        </button>
                        
                        <div className='flex items-center gap-2'>
                            <img className='w-[20px]' src={lock} alt="" />
                            <p className='font-outfit text-[#3b403fff] font-semibold'>Your information is safe and secure with us.</p>
                        </div>
                    </div>
                </form>
                <img className='w-[150px] absolute -left-5 -bottom-6 opacity-75 '   src= {leafy} alt="" />
                <img className='w-[150px] absolute -right-5 -bottom-6 opacity-75 '   src= {leafyy} alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default QuotesSection
