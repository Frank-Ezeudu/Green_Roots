import { Link } from 'react-router-dom'
import leafy from '../assets/leafyy.png'
import arrow_right from '../assets/arrow-right.png'
// import plane from '../assets/paper-plane.png'
// import profile_leaf from '../assets/profile-leaf.png'


const QuoteCard = () => {
  return (
    <div className='w-full px-22 mb-16'>
        <div className=' overflow-hidden mt-16 bg-[#C8D8B0]  flex items-center justify-between py-2 px-16 rounded-[1rem] shadow-[7px_7px_12px_rgba(0,0,0,0.3)]'>
        <img className='w-[80px] -mb-4' src= {leafy} alt="" />

        <div className='-ml-16'> 
          <p className='font-bold text-[18px] text-[#3b403f] font-outfit'>Ready to Transform Your Space?</p>
          <p className='text-[14px] font-outfit font-semibold text-[#3b403f]'>Subscribe to our newsletter and never miss an update</p>
        </div>

        <div className='flex justify-center w-[35%]'>
          <div className='p-3.5 flex items-center gap-2 rounded-[1rem] bg-[#3A6034]' >
            <p className='font-outfit text-white'><Link to={"/quote"}>Get a Quote</Link></p>
            <img className='w-[20px]' src= {arrow_right} alt="" />
        </div>
        </div>
      </div>
    </div>
    
  )
}

export default QuoteCard
