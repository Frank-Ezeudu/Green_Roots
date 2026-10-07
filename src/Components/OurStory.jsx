// import leafy from '../assets/leafyy.png'

// e2e7c7
import arrow_right from '../assets/arrow-right.png'
// import leaf from '../assets/green-leaf.png'
// import users from '../assets/users.png'
import leaf_logo from '../assets/leaf-logo.png'
import tending from '../assets/tending.jpg'
// import pot from '../assets/pot.png'
// import green_arrow from '../assets/arrow-right-green.png'

const OurStory = () => {
  return (
    <div className='px-22 font-outfit bg-[#f8f9ebff] z-12 -mt-17 pb-8'>
      <div className='pt-30 flex  flex-row-reverse gap-20 w-full'>
            {/* left  */}
            <div  className='w-[40%] pt-8 gap-2'>
                <div className='flex items-center w-full justify-start'>
                    <div className='flex items-center gap-2 '>
                        <img className='w-[42px]' src={leaf_logo} alt="" />
                        <p className='font-georgia-brush text-[36px] text-[#3A6034]'>Our Story</p>
                    </div>
                </div>
                
                <div className='mt-4'>
                    {/* <p className='text-3xl font-bold leading-tight text-[#183a17] '>Your Community, <br /> Your Garden</p> */}
                    <p className="mt-6 max-w-md text-[#3b403f] font-outfit text-[17px]  font-normal">GreenRoots Landscaping started with a simple idea — to turn ordinary spaces into living, breathing environments. What began as a small local team with a big dream has grown into a trusted landscaping service in our community, serving homes, businesses and public spaces across the region.</p>
                </div>
                
                <div className='p-2 py-4 mt-8 flex w-60 items-center justify-center gap-2 rounded-[0.8rem] bg-[#3A6034]' >
                    <p className='text-white'>learn More About Us</p>
                    <img className='w-[20px]' src= {arrow_right} alt="" />
                </div>
            </div>
    
    
            {/* right  */}
    
    
            <div className='flex w-[60%]'>
                <div className='flex  p-4 w-full shadow-lg rounded-[1.5rem] bg-[#e2e7c7] relative' >
                    
                    <div className=' flex w-full h-full rounded-[2rem]'>
                        <img className='w-full h-full object-cover rounded-[1rem]'  src={tending} alt="" />
                    </div>
                    
                    
                    {/* <img className='w-[150px] absolute -right-16 -bottom-3 opacity-75 '   src= {leafy} alt="" /> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurStory
