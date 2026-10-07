import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import logo_1 from '../assets/logo.png'
import arrow_right from '../assets/arrow-right.png'




const Navbar = () => {

  const [hidden, setHidden] = useState(false);


  useEffect(() => {
    let lastScroll = 0;

    const tolerance = 10;
    const hidePoint = 80;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Hide/show navbar based on scroll direction
      if (Math.abs(currentScroll - lastScroll) > tolerance) {
        if (currentScroll > lastScroll && currentScroll > hidePoint) {
          // Scrolling DOWN → hide
          setHidden(true);
        } else {
          // Scrolling UP → show
          setHidden(false);
        }

        lastScroll = currentScroll;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);






  return (
    <nav className={` w-full h-[6rem] text-[#3b403f] font-outfit px-22 p-2 fixed top-0 left-0 flex items-center justify-between z-50 bg-white transition-transform duration-300 ease-in-out ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
      <Link to="/" smooth={true} offset={-98} duration={500} className='cursor-pointer'> <img className='w-[170px]' src={logo_1}  alt="" /> </Link>
      

      <ul >
        <li className='inline-block list-none cursor-pointer my-[5px] mx-5 font-semibold text-[18px]'><Link className='hover:text relative inline-block after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#3b403f] after:transition-all after:duration-300 after:-translate-x-1/2 cursor-pointer hover:after:w-full' to="/" smooth={true} offset={-98} duration={500}> Home</Link></li>
        <li className='inline-block list-none cursor-pointer my-[5px] mx-5 font-semibold text-[18px]'><Link className='hover:text relative inline-block after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#3b403f] after:transition-all after:duration-300 after:-translate-x-1/2 cursor-pointer hover:after:w-full' to="/about" smooth={true} offset={0} duration={500}> About Us</Link> </li>
        <li className='inline-block list-none cursor-pointer my-[5px] mx-5 font-semibold text-[18px]'><Link className='hover:text relative inline-block after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#3b403f] after:transition-all after:duration-300 after:-translate-x-1/2 cursor-pointer hover:after:w-full' to="/contact" smooth={true} offset={0} duration={500}> Contact Us</Link></li>
      </ul>


      <div className='p-3.5 flex items-center gap-2 rounded-[1rem] bg-[#3A6034]' >
        <p className='text-white'><Link to={"/quote"}>Get a Quote</Link></p>
        <img className='w-[20px]' src= {arrow_right} alt="" />
      </div>
    </nav>
  )
}

export default Navbar
