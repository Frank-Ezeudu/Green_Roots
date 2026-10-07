import leaf_logo from '../assets/leaf-logo.png'
import CardItem from './CardItem'

import mower from '../assets/white-mower.png'
import germination from '../assets/white-germination.png'
import shears from '../assets/white-shears.png'
import bulb from '../assets/white-bulb.png'
import plane from '../assets/paper-plane.png'
import profile_leaf from '../assets/profile-leaf.png'





import lawn_care from '../assets/lawn-care.jpg'
import shearss from '../assets/shears.jpg'
import light from '../assets/garden-light.jpg'
import path from '../assets/garden-path.jpg'

const WhatWeOffer = () => {
  return (
    <div className="px-22 font-outfit bg-[#f8f7f3] w-full pt-8 pb-6" id='offer'>
      <div className='flex flex-col w-full items-center' >
        <div className='flex items-center gap-1.5'>
            <img className='w-[24px]' src={leaf_logo} alt="" />
            <p className='font-georgia-brush text-[22px] text-[#3A6034]'>What We Offer</p>
        </div>
        <h1 className=' text-3xl font-bold text-[#183a17]'>
            Professional Garden Services
        </h1>
      </div>

      <div className='grid grid-cols-4 gap-6 mt-12'>
        <CardItem 
            lead_image={path}
            lead_icon={germination}
            title="Garden Design"
            desc="Custom designs that bring beauty and functionality to your space."
        />

        <CardItem 
            lead_image={lawn_care}
            lead_icon={mower}
            title="Lawn Care"
            desc="Keep your lawn green, healthy and weed-free all year long."
        />

        <CardItem 
            lead_image={shearss}
            lead_icon={shears}
            title="Plant Care"
            desc="Trimming, prunning, and treatment to keep plants thriving."
        />

        <CardItem 
            lead_image={light}
            lead_icon={bulb}
            title="Outdoor Lighting"
            desc="Elegant lighting solutions to enhance the beauty of your garden."
        />
      </div>

      
      <div id='contact' className='w-full overflow-hidden mt-16 bg-[#3A6034] flex items-center justify-between py-2 px-16 rounded-[1rem] shadow-[7px_7px_12px_rgba(0,0,0,0.3)]'>
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
      </div>
    </div>
  )
}

export default WhatWeOffer
