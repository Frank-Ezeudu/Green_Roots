// import hero_1 from '../assets/test-1.jpg'
import lead from '../assets/about-lead.jpg'
import arrow_right from '../assets/arrow-right.png'
import half_d from '../assets/half-divide.png'


const AboutHero = () => {
  return (
    <section className="relative mt-[6rem] flex max-h-[600px] w-full items-center justify-between overflow-hidden bg-[#f8f7f3]" >
        {/* 1. LEFT TEXT CONTENT */}
        <div className="z-10 flex-1  px-16 pl-24 py-12  -mt-8 ">
        <div className='flex flex-col justify-center gap-4'>
            <p className='text-2xl font-bold leading-tight text-[#183a17] '>
                About Us
            </p>
            <img src={half_d} className='w-[130px] -mt-[1.6rem] ml-[8px]' alt="" />
            <h1 className="text-4xl font-bold leading-tight text-[#183a17]  text-[2.8rem]">
                {/* <span className='text-2xl'>
                    About Us
                </span> 
                <br /> */}
                Growing With
            </h1>
            <h1 className="font-georgia-brush text-[5rem] text-[#3A6034]">
                Purpose
            </h1>
        </div>
        
        {/* <img className='w-[230px]' src={divide} alt="" /> */}

        <p className="mt-6 max-w-md text-[#3b403f] font-outfit text-[18px] font-semibold">
            At GreenRoots Landscaping, we believe that beautiful spaces create healthier happier lives. We're a team of passionate landscapers dedicated to designing, building and maintaining green spaces that bring people and nature closer together.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="rounded-[1rem] flex items-center gap-2 bg-[#3A6034] px-6 py-3 font-medium text-white transition hover:bg-[#2A4725]">
            Our Services
            <img className='w-[20px]' src= {arrow_right} alt="" />
            </button>
            
        </div>
        </div>


        {/* 2. RIGHT IMAGE CONTAINER WITH AMPLIFIED S-CURVE */}
        <div className="relative h-[580px] flex-1 -ml-72">
        
        {/* Uncut Background Image */}
        <img
            src={lead}
            alt="Gardener"
            className="h-full w-full object-cover "
        />

        {/* HIGH-CURVATURE S-SWEEP SVG */}
        <svg
            className="pointer-events-none absolute inset-y-0 -left-20 h-full w-auto text-[#F8F9F5]"
            viewBox="0 0 400 580"
            preserveAspectRatio="xMinYMin slice"
        >
            {/* LAYER 1: Light Green Accent Ribbon */}
            <path
            d="M 0,0 L 320,0 C -20,180 350,350 80,580 L 0,580 Z"
            fill="#C8D8B0"
            />

            {/* LAYER 2: Main Background Cutout */}
            <path
            d="M 0,0 L 280,0 C -50,180 350,350 50,580 L 0,580 Z"
            fill="currentColor"
            />
        </svg>

        </div>

    </section>
  )
}

export default AboutHero
