import arrow_right from '../assets/arrow-right-green.png'
// import leafy from '../assets/leafyy.png'
import profile_leaf from '../assets/profile-leaf.png'


const ContactQuoteCard = () => {
  return (
    <div className='w-full bg-[#f8f7f3] px-22 pb-16'>
        <div className=' overflow-hidden  bg-[#3A6034]  flex items-center justify-between py-2 px-16 rounded-[1rem] shadow-[7px_7px_12px_rgba(0,0,0,0.3)]'>
        <img className='w-[80px] -mb-4' src= {profile_leaf} alt="" />

        <div className='-ml-16'> 
          <p className='font-bold text-[18px] text-white font-outfit'>Ready to create a greener tomorrow?</p>
          <p className='text-[14px] font-outfit text-white'>Contact us today and let's make your vision a reality.</p>
        </div>

        <div className='flex justify-center w-[35%]'>
            <div className='p-3.5 flex items-center gap-2 rounded-[1rem] bg-[#C8D8B0]' >
                <p className='font-outfit font-semibold text-[#3A6034] '>Get a Quote</p>
                <img className='w-[20px]' src= {arrow_right} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactQuoteCard
