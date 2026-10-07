import leaf_logo from '../assets/leaf-logo.png'
import leaf from '../assets/leaf.png'
// import plane from '../assets/paper-plane.png'
// import profile_leaf from '../assets/profile-leaf.png'
import users from '../assets/users-solid.png'
import AboutCardItem from './AboutCardItem'
import award from '../assets/award.png'


// import shearss from '../assets/shears.jpg'
// import light from '../assets/garden-light.jpg'
// import path from '../assets/garden-path.jpg'

const OurValues = () => {
  return (
    <div className="px-22 font-outfit bg-[#f8f7f3] w-full pt-8 pb-6" id='offer'>
      <div className='flex flex-col w-full items-center' >
        <div className='flex items-center gap-1.5'>
            <img className='w-[42px]' src={leaf_logo} alt="" />
            <p className='font-georgia-brush text-[36px] text-[#3A6034]'>Our Values</p>
        </div>
        <h1 className=' text-4xl font-bold text-[#183a17]'>
            What Drives Us
        </h1>
      </div>

      <div className='w-full flex justify-center'>
        <div className=' grid grid-cols-3 gap-6 mt-12'>
            <AboutCardItem 
                drive_icon = {leaf}
                drive = "Sustainability"
                drive_desc ="We use eco-friendly practices that protect our environment for future generations."
            />

            <AboutCardItem 
                drive_icon = {users}
                drive = "Community"
                drive_desc ="We're stronger together. We support and uplift the communities we serve."
            />

            <AboutCardItem 
                drive_icon = {award}
                drive = "Quality"
                drive_desc ="We deliver lasting results with attention to detail and professional care."
            />
        </div>
      </div>

      

      
      {/* <div id='contact' className='w-full overflow-hidden mt-16 bg-[#3A6034] flex items-center justify-between py-2 px-16 rounded-[1rem] shadow-[7px_7px_12px_rgba(0,0,0,0.3)]'>
        <img className='w-[80px] -mb-4' src= {profile_leaf} alt="" />

        <div className='-ml-16'> 
          <p className='font-semibold text-white font-outfit'>Stay Updated With Gardening Tips & Offers</p>
          <p className='text-[14px] font-outfit text-white'>Subscribe to our newsletter and never miss an update</p>
        </div>

        <div className='flex items-center w-[35%]'>
          <input type="email" placeholder='enter email here' className='h-10 text-[12px] font-semibold pl-3 rounded-tl-[0.5rem] rounded-bl-[0.5rem] w-64 bg-white' />
          <div className='flex w-32 h-10 px-3 items-center gap-2 bg-[#183a17] rounded-tr-[0.5rem] rounded-br-[0.5rem]'>
            <p className='font-outfit font-bold text-white'>Subscribe</p> 
            <img src={plane} className='w-[15px]' alt="" />
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default OurValues
