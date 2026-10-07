

const ContactCardItem = ({ cont_icon, cont, cont_desc}) => {
  return (
    <div className="flex font-outfit gap-4 p-5 relative w-[260px] bg-white shadow-[0_7px_8px_rgba(0,0,0,0.2)] rounded-[1.5rem]">
        

        <div className=' flex w-14 h-14 bg-[#3A6034] items-center justify-center rounded-[50%]  top-29 left-2 border border-white '>
            <img className='w-[35px]' src={cont_icon} alt="" />
        </div>

        <div className=' pt-2'>
            <div className='flex flex-col w-full gap-2'>
                <p className='font-bold text-[20px] text-[#183a17]'>{cont}</p>
                <p className='text-[14px] leading-[1.5rem] font-medium  text-[#494949ff]'>{cont_desc}</p>
            </div>
        </div>
    </div>
  )
}

export default ContactCardItem
