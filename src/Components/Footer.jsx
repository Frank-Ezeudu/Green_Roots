import { Link } from 'react-router-dom'
import profile_leaf from '../assets/profile-leaf.png'
import copyright from '../assets/copyright.png'
import fb from '../assets/fb.png'
import ig from '../assets/ig.png'
import logo_2 from '../assets/ft-logo.png'
import yt from '../assets/yt.png'
import location from '../assets/location.png'
import phone from '../assets/phone.png'
import envelope from '../assets/envelope.png'

const Footer = () => {
  return (
    <div className=" flex flex-col overflow-hidden relative w-full font-outfit py-6 justify-center items-center px-24 bg-[#183a17]">

      <div className='w-full justify-between flex'>
        <div className='flex flex-col w-[20%] px-2 gap-5'>
            <Link to="/" smooth={true} offset={-98} duration={500} className='cursor-pointer'> <img className='w-[140px]' src={logo_2}  alt="" /> </Link> 
            <p className='w-[95%] text-[12px] text-[#e3e3e3ff]'>We are passionate about helping you grow greener spaces and stronger communities.</p>
            <div className='flex gap-5'>
                <div className='bg-[#3A6034] h-7 w-7 flex items-center justify-center rounded-[50%]' > 
                    <img className='w-[20px]' src={fb} alt="" />
                </div>

                <div className='bg-[#3A6034] h-7 w-7 flex items-center justify-center rounded-[50%]' > 
                    <img className='w-[20px]' src={ig} alt="" />
                </div>

                <div className='bg-[#3A6034] h-7 w-7 flex items-center justify-center rounded-[50%]' > 
                    <img className='w-[20px]' src={yt} alt="" />
                </div>
            </div>
        </div>

        <div className='flex font-outfit justify-evenly w-[60%]'>
            <div className='flex flex-col gap-3'>
                <p className='font-semibold text-white'>Quick Links</p>
                <ul className='flex flex-col gap-1'>
                    <li className='text-[#e3e3e3ff] text-[14px]'> <Link className='hover:text relative inline-block after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#e2e7c7] after:transition-all after:duration-300 after:-translate-x-1/2 cursor-pointer hover:after:w-full' to="/" smooth={true} offset={-98} duration={500}> Home</Link> </li>
                    <li className='text-[#e3e3e3ff] text-[14px]'> <Link className='hover:text relative inline-block after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#e2e7c7] after:transition-all after:duration-300 after:-translate-x-1/2 cursor-pointer hover:after:w-full' to="/about" smooth={true} offset={0} duration={500}> About Us</Link> </li>
                    <li className='text-[#e3e3e3ff] text-[14px]'> <Link className='hover:text relative inline-block after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#e2e7c7] after:transition-all after:duration-300 after:-translate-x-1/2 cursor-pointer hover:after:w-full' to="/contact" smooth={true} offset={0} duration={500}> Contact Us</Link> </li>
                </ul>
            </div>

            <div className='flex flex-col gap-3'>
                <p className='font-semibold text-white'>Resources</p>
                <ul className='flex flex-col gap-1'>
                    <li className='text-[#e3e3e3ff] text-[14px]'> <Link className='hover:text relative inline-block after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#e2e7c7] after:transition-all after:duration-300 after:-translate-x-1/2 cursor-pointer hover:after:w-full'>Garden Guides</Link> </li>
                    <li className='text-[#e3e3e3ff] text-[14px]'> <Link className='hover:text relative inline-block after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#e2e7c7] after:transition-all after:duration-300 after:-translate-x-1/2 cursor-pointer hover:after:w-full'>Plant Library</Link> </li>
                    <li className='text-[#e3e3e3ff] text-[14px]'> <Link className='hover:text relative inline-block after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#e2e7c7] after:transition-all after:duration-300 after:-translate-x-1/2 cursor-pointer hover:after:w-full'>Seasonal Tips</Link> </li>
                    <li className='text-[#e3e3e3ff] text-[14px]'> <Link className='hover:text relative inline-block after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#e2e7c7] after:transition-all after:duration-300 after:-translate-x-1/2 cursor-pointer hover:after:w-full'>FAQ</Link> </li>
                    <li className='text-[#e3e3e3ff] text-[14px]'> <Link className='hover:text relative inline-block after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#e2e7c7] after:transition-all after:duration-300 after:-translate-x-1/2 cursor-pointer hover:after:w-full'>Blog</Link> </li>
                </ul>
            </div>

            <div className='flex flex-col gap-3'>
                <p className='font-semibold text-white'>Support</p>
                <ul className='flex flex-col gap-1'>
                    <li className='text-[#e3e3e3ff] text-[14px]'> <Link className='hover:text relative inline-block after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#e2e7c7] after:transition-all after:duration-300 after:-translate-x-1/2 cursor-pointer hover:after:w-full'>Help Center</Link> </li>
                    <li className='text-[#e3e3e3ff] text-[14px]'> <Link className='hover:text relative inline-block after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#e2e7c7] after:transition-all after:duration-300 after:-translate-x-1/2 cursor-pointer hover:after:w-full'>Contact Support</Link> </li>
                    <li className='text-[#e3e3e3ff] text-[14px]'> <Link className='hover:text relative inline-block after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#e2e7c7] after:transition-all after:duration-300 after:-translate-x-1/2 cursor-pointer hover:after:w-full'>Privacy Policy</Link> </li>
                    <li className='text-[#e3e3e3ff] text-[14px]'> <Link className='hover:text relative inline-block after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#e2e7c7] after:transition-all after:duration-300 after:-translate-x-1/2 cursor-pointer hover:after:w-full'>Terms & Conditions</Link> </li>
                </ul>
            </div>

            
        </div>

        <div className='flex flex-col gap-3 w-[20%]'>
            <p className='font-semibold text-white'>Contact Us</p>
            <div className='flex flex-col justify-center gap-2'>
                <div className='flex items-center gap-3'>
                    <img src={phone} className='w-[20px]' alt="" />
                    <p className='text-[14px] text-[#e3e3e3ff]'>(234) - 913 583 3995</p>
                </div>

                <div className='flex items-center gap-3'>
                    <img src={envelope} className='w-[20px]' alt="" />
                    <p className='text-[14px] text-[#e3e3e3ff]'> hello@gardenroots.com</p>
                </div>

                <div className='flex items-center gap-3'>
                    <img src={location} className='w-[20px]' alt="" />
                    <p className='text-[14px] text-[#e3e3e3ff]'> 123 Greenway Lane, <br /> Springfield IL 62701</p>
                </div>
            </div>
        </div>
      </div>

      <hr className='mt-6 w-[50%] border-[#dfdfdfab]' />



      <div className='flex gap-2 mt-4'>
        <img src={copyright} className='w-[22px] ' alt="" />
        <p className='text-[#e3e3e3ff]'>2026. GreenRoots Landscaping. All rights reserved.</p>
      </div>

      <img className='w-[160px] absolute right-1 -bottom-7 opacity-75' src= {profile_leaf} alt="" />
    </div>
  )
}

export default Footer
