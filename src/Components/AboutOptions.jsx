import project from '../assets/project.png'
import client from '../assets/client.png'
import exp from '../assets/exp.png'
import quality from '../assets/quality.png'


const AboutOptions = () => {
  return (
    <div className="w-full flex justify-center font-outfit relative bg-[#f8f7f3] pt-4 ">
        <div className="w-[85%] bg-[#183a17] flex items-center p-5 rounded-[1rem] shadow-[7px_7px_12px_rgba(0,0,0,0.3)]">
            <div className='flex w-full justify-between py-4' >
                <div className='flex flex-col gap-3 items-center w-[25%] pl-4 border-r border-[#dfdfdfab]'>
                    <div className='flex p-2 bg-[#3A6034] rounded-[50%]'>
                        <img className='w-[30px]' src={project} alt="" />
                        
                    </div>
                    <div className='text-white flex flex-col items-center flex flex-col items-center'>
                        <p className='font-semibold text-[24px]'>500+</p>
                        <p className=' text-[16px] text-[#e3e3e3ff]  '>Projects Completed</p>
                    </div>
                </div>

                <div className='flex flex-col gap-3 items-center w-[25%] pl-4 border-r border-[#dfdfdfab]'>
                    <div className='flex p-2 bg-[#3A6034] rounded-[50%]'>
                        <img className='w-[30px]' src={client} alt="" />
                    </div>
                    <div className='text-white flex flex-col items-center'>
                        <p className='font-semibold text-[24px]'>200+</p>
                        <p className=' text-[16px] text-[#e3e3e3ff]  '>Happy Clients</p>
                    </div>
                </div>

                <div className='flex flex-col gap-3 items-center w-[25%] pl-4 border-r border-[#dfdfdfab]'>
                    <div className='flex p-2 bg-[#3A6034] rounded-[50%]'>
                        <img className='w-[30px]' src={exp} alt="" />
                    </div>
                    <div className='text-white flex flex-col items-center'>
                        <p className='font-semibold text-[24px]'>5+</p>
                        <p className=' text-[16px] text-[#e3e3e3ff]  '>Years of Experience.</p>
                    </div>
                </div>

                <div className='flex flex-col gap-3 items-center w-[25%] pl-4'>
                    <div className='flex p-2 bg-[#3A6034] rounded-[50%]'>
                        <img className='w-[30px]' src={quality} alt="" />
                    </div>
                    <div className='text-white flex flex-col items-center'>
                        <p className='font-semibold text-[24px]'>100%</p>
                        <p className=' text-[16px] text-[#e3e3e3ff]  '>Commitment to Quality</p>
                    </div>
                </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default AboutOptions
