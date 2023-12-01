import Element4 from '/4.svg'
import Element3 from '/3.svg'
import Element6 from '/6.svg'
import { BsArrowRight } from 'react-icons/bs'

const HomePage = () => {
  return (
    <div className='bg-[#012E6D] min-h-[100vh] relative'>
    <span className="absolute md:top-1/2 top-1/4 left-1/2 -translate-x-1/4 -translate-y-1/2">
      <img src={Element4} alt="tins"/>
    </span>
    <span className="absolute top-1/3 md:top-1/2 md:left-2/4 left-1/2 -translate-x-1/4 -translate-y-1/2  md:-translate-x-96 md:translate-y-1/3">
      <img src={Element3} alt="tins"/>
    </span>
    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <img src={Element6} alt="tins"/>
    </span>
    
      
   <div className=" p-3 grid md:grid-cols-2 md:gap-10 z-10 relative">
     <div className=" mt-5 md:ml-20 md:m-auto">
        <h1 className=" text-gray-400">Smart Phone Monitizaton</h1>
        <p className=" text-3xl md:text-5xl text-white">Learn High Paying Digital Skills That Can Earn You A Fortune Online With Just Your SMART PHONE</p>
        <div className=' flex justify-center place-content-center bg-white px-5 p-0 rounded-xl font-bold gap-2 w-1/2 mt-5 cursor-pointer'>
                <p>Enroll Now</p>
            <span> <BsArrowRight size={22} /> </span>
            </div>
    </div>

    <div className=" mt-10 md:mt-30 md:ml-10">
    <div className=' w-80 p-4'> 
     <img src='/renew.png' alt='phone item' className='w-56 md:w-96' />
     </div>
   
    </div>
    </div>
    </div>
   
    
  )
}

export default HomePage