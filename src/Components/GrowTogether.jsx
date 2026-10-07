import leafy from '../assets/leafyy.png'

// e2e7c7
import arrow_right from '../assets/arrow-right.png'
import leaf from '../assets/green-leaf.png'
import users from '../assets/users.png'
import leaf_logo from '../assets/leaf-logo.png'
import watering from '../assets/watering-can.jpg'
import pot from '../assets/pot.png'
import green_arrow from '../assets/arrow-right-green.png'


const GrowTogether = () => {
  return (
    <div className='px-22 font-outfit bg-[#f8f9ebff] -mt-17 pb-8' id='grow'>
      <div className='pt-30 flex w-full'>
        {/* left  */}
        <div  className='w-[40%] pt-8 gap-2'>
            <div className='flex items-center gap-1.5'>
                <img className='w-[24px]' src={leaf_logo} alt="" />
                <p className='font-georgia-brush text-[22px] text-[#3A6034]'>Grow Together</p>
            </div>
            
            <div className='mt-4'>
                <p className='text-3xl font-bold leading-tight text-[#183a17] '>Your Community, <br /> Your Garden</p>
                <p className="mt-6 max-w-md text-[#3b403f] font-outfit text-[17px] w-[85%] font-normal">Connect with local gardeners, share knowledge, and build greener and healthier communities together.</p>
            </div>
            <div className='mt-8 font-outfit flex flex-col gap-8' >
                <div className='flex gap-3 items-center  '>
                    <div className='flex p-2 bg-[#e2e7c7] rounded-[50%]'>
                        <img className='w-[30px]' src={users} alt="" />
                    </div>
                    <div className=''>
                        <p className='font-semibold text-[#183a17] text-[15px]'>Stronger Together</p>
                        <p className=' text-[12px] w-[60%] text-[#494949ff]  '>Join a community that cares about nature and sustainability.</p>
                    </div>
                </div>

                <div className='flex gap-3 items-center  '>
                    <div className='flex p-2 bg-[#e2e7c7] rounded-[50%]'>
                        <img className='w-[30px]' src={leaf} alt="" />
                    </div>
                    <div className=''>
                        <p className='font-semibold text-[#183a17]  text-[15px]'>Share & Learn</p>
                        <p className=' text-[12px] w-[60%] text-[#494949ff]  '>Exchange tips, seeds, and experiences with fellow gardeners.</p>
                    </div>
                </div>
            </div>
            <div className='p-2 py-4 mt-8 flex w-40 items-center justify-center gap-2 rounded-[0.8rem] bg-[#3A6034]' >
                <p className='text-white'>learn More</p>
                <img className='w-[20px]' src= {arrow_right} alt="" />
            </div>
        </div>


        {/* right  */}


        <div className='flex w-[60%]'>
            <div className='flex flex-col p-4 pb-0 w-full shadow-lg rounded-[1.5rem] bg-[#e2e7c7] relative' >
                
                <div className=' flex w-full h-[16rem] rounded-[2rem]'>
                    <img className='w-full h-full object-cover rounded-[1rem]'  src={watering} alt="" />
                </div>
                <div className='flex flex-col p-8 pb-4'>
                    <div className='flex items-center gap-1.5'>
                        <img className='w-[24px]' src={leaf_logo} alt="" />
                        <p className=' font-semibold font-outfit text-[17px] text-[#3A6034]'>Create a Greener Tomorrow</p>
                    </div>
                    <p className='font-outfit w-[60%] mt-4'>Every plant we grow today leads to a better, cleaner, and greener tomorrow for everyone.</p>

                    <div className='flex p-4 items-start mt-6 w-[85%] gap-4 rounded-[1rem] border border-dashed border-gray-400'>
                        <div>
                            <img className='w-[70px]' src={pot} alt="" />
                        </div>
                        <div>
                            <p className='font-semibold font-outfit text-[17px] text-[#183a17]'>Start Your Community Garden</p>
                            <p className='text-[14px]  w-[70%] font-outfit'>We'll guide you step by step to start and manage a successful garden in your area.</p>

                            <div className='flex mt-4 gap-1'>
                                <p className='font-semibold text-[#3a6034ff]' >Get Started</p>
                                <img src={green_arrow} className='w-[20px]' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                
                <img className='w-[150px] absolute -right-16 -bottom-3 opacity-75 '   src= {leafy} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default GrowTogether
