
import green_arrow from '../assets/arrow-right-green.png'




// lead_image, lead_icon, title, desc 
const CardItem = ({lead_image, lead_icon, title, desc}) => {
  return (
    <div className="flex font-outfit flex-col relative w-[250px] bg-white shadow-[0_0px_10px_rgba(0,0,0,0.2)] rounded-[1.5rem]">
      <div className='overflow-hidden rounded-t-[24px]'>
        <img className='w-full h-36 object-cover' src={lead_image} alt="" />
      </div>

      <div className=' flex w-14 h-14 bg-[#3A6034] items-center justify-center rounded-[50%] absolute top-29 left-2 border border-white '>
        <img className='w-[35px]' src={lead_icon} alt="" />
      </div>

      <div className='p-5 pt-10'>
        <div className='flex flex-col w-full gap-2'>
            <p className='font-bold text-[#183a17]'>{title}</p>
            <p className='text-[12px] font-medium w-[75%] text-[#494949ff]'>{desc}</p>
        </div>

        <div className='flex mt-4 gap-1'>
            <p className='font-semibold text-[12px] text-[#3a6034ff]' >Learn More</p>
            <img src={green_arrow} className='w-[20px]' alt="" />
        </div>
      </div>
    </div>
  )
}

export default CardItem
