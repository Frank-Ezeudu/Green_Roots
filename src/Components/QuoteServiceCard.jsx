import check from '../assets/check.png'

const QuoteServiceCard = ({ quote_icon, quote, quote_desc, selected, onClick}) => {
  return (
    <div
        onClick={onClick}
        className={`flex font-outfit flex-col p-5 relative transition-all  duration-300 ease-in-out  hover:scale-102 w-[240px] bg-[#E5EED8] cursor-pointer rounded-[1.5rem]
            ${
                selected
                ? "scale-105 border border-[#3A6034]"
                : "scale-100 border border-transparent"
            }
        `}

    >
        {
            selected && (
                <div className='flex w-full absolute -right-52 top-3'>
                    <div className='p-2 bg-[#3A6034] p-[2px] rounded-[50%]'>
                        <img className=' w-[12px]' src={check} alt="" />
                    </div>
                </div>
            )
        }
        
        
        

        <div className=' flex w-14 h-14 bg-[#3A6034] items-center justify-center rounded-[50%]  top-29 left-2 border border-white '>
            <img className='w-[35px]' src={quote_icon} alt="" />
        </div>

        <div className=' pt-2'>
            <div className='flex flex-col w-full gap-2'>
                <p className='font-bold text-[20px] text-[#183a17]'>{quote}</p>
                <p className='text-[14px] leading-[1.5rem] font-medium  text-[#494949ff]'>{quote_desc}</p>
            </div>
        </div>
    </div>
  )
}

export default QuoteServiceCard
