// import leafy from '../assets/leafyy.png'
// e2e7c7
// import arrow_right from '../assets/arrow-right.png'
import plus from '../assets/plus.png'
import angle from '../assets/angle.png'
import leaf_logo from '../assets/leaf-logo.png';


const Faq = () => {
  return (
    <div  className='px-22 flex pb-12 pt-16 flex-col w-full font-outfit bg-[#f8f7f3]'>
        <div className='flex flex-col gap-2 items-start w-full '>
            <div className='flex items-center gap-2 '>
                <img className='w-[36px]' src={leaf_logo} alt="" />
                <p className='font-semibold text-[28px] text-[#3b403f]'>Frequently Asked Questions</p>
            </div>
            <p className='text-[#3b403f] leading-tight font-outfit text-[18px] w-[75%]'>Quick answers to common questions. Can't find what you're looking for? Get in touch!</p>
        </div>

        <div className='w-full mt-6 flex flex-col items-center bg-white shadow-[0_7px_8px_rgba(0,0,0,0.2)] rounded-[1.5rem] py-6'>
            <div className='flex w-full pb-6 justify-between p-3 px-10'>
                <div className='flex gap-2 items-center'>
                    <img className='w-[30px]' src={angle} alt="" />
                    <p className='text-[#3b403f] text-[20px] font-semibold'>Do you offer free consultations?</p>
                </div>
                <img className='w-[30px]' src={plus} alt="" />
                
            </div>

            <hr className='border w-[97%] border-gray-200' />

            <div className='flex pt-6 w-full pb-6 justify-between p-3 px-10'>
                <div className='flex gap-2 items-center'>
                    <img className='w-[30px]' src={angle} alt="" />
                    <p className='text-[#3b403f] text-[20px] font-semibold'>Do you offer free consultations?</p>
                </div>
                <img className='w-[30px]' src={plus} alt="" />
                
            </div>

            <hr className='border w-[97%] border-gray-200' />

            <div className='flex pt-6 w-full pb-6 justify-between p-3 px-10'>
                <div className='flex gap-2 items-center'>
                    <img className='w-[30px]' src={angle} alt="" />
                    <p className='text-[#3b403f] text-[20px] font-semibold'>Do you offer free consultations?</p>
                </div>
                <img className='w-[30px]' src={plus} alt="" />
                
            </div>

            <hr className='border w-[97%] border-gray-200' />

            <div className='flex pt-6 w-full justify-between p-3 px-10'>
                <div className='flex gap-2 items-center'>
                    <img className='w-[30px]' src={angle} alt="" />
                    <p className='text-[#3b403f] text-[20px] font-semibold'>Do you offer free consultations?</p>
                </div>
                <img className='w-[30px]' src={plus} alt="" />
                
            </div>

            
        </div>
    </div>
  )
}

export default Faq
