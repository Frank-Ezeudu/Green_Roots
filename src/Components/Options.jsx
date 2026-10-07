import location from '../assets/location.png'
import card from '../assets/card.png'
import support from '../assets/support.png'
import calendar from '../assets/calendar.png'

const Options = () => {
  return (
    <div className="w-full flex justify-center font-outfit relative -mt-16 ">
        <div className="w-[85%] bg-[#183a17] flex items-center p-5 rounded-[1rem] shadow-[7px_7px_12px_rgba(0,0,0,0.3)]">
            <div className='flex justify-between py-4' >
                <div className='flex gap-3 items-center w-[25%] pl-4 border-r border-[#dfdfdfab]'>
                    <div className='flex p-2 bg-[#3A6034] rounded-[50%]'>
                        <img className='w-[30px]' src={location} alt="" />
                        
                    </div>
                    <div className='text-white'>
                        <p className='font-semibold text-[15px]'>Find Gardens</p>
                        <p className=' text-[12px] text-[#e3e3e3ff]  '>Locate nearby community and service gardens</p>
                    </div>
                </div>

                <div className='flex gap-3 items-center w-[25%] pl-4 border-r border-[#dfdfdfab]'>
                    <div className='flex p-2 bg-[#3A6034] rounded-[50%]'>
                        <img className='w-[30px]' src={card} alt="" />
                    </div>
                    <div className='text-white'>
                        <p className='font-semibold text-[15px]'>Garden Service Card</p>
                        <p className=' text-[12px] text-[#e3e3e3ff]  '>Access your service card and track your history.</p>
                    </div>
                </div>

                <div className='flex gap-3 items-center w-[25%] pl-4 border-r border-[#dfdfdfab]'>
                    <div className='flex p-2 bg-[#3A6034] rounded-[50%]'>
                        <img className='w-[30px]' src={calendar} alt="" />
                    </div>
                    <div className='text-white'>
                        <p className='font-semibold text-[15px]'>Events</p>
                        <p className=' text-[12px] text-[#e3e3e3ff]  '>Join workshops and community events.</p>
                    </div>
                </div>

                <div className='flex gap-3 items-center w-[25%] pl-4'>
                    <div className='flex p-2 bg-[#3A6034] rounded-[50%]'>
                        <img className='w-[30px]' src={support} alt="" />
                    </div>
                    <div className='text-white'>
                        <p className='font-semibold text-[15px]'>Support</p>
                        <p className=' text-[12px] text-[#e3e3e3ff]  '>Get help from our garden care experts.</p>
                    </div>
                </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default Options
