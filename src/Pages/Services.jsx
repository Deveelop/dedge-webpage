import Element4 from '/4.svg'
import Element3 from '/3.svg'
import Element6 from '/6.svg'

const Services = () => {
  return (
    <div className='bg-[#012E6D] min-h-[100vh] relative'>
    <span className="absolute md:top-1/2 top-1/4 left-1/2 -translate-x-1/4 -translate-y-1/2 ">
  <img src={Element4} alt="tins"/>
</span>
<span className="absolute top-1/3 md:top-1/2 md:left-2/4 left-1/2 -translate-x-1/4 -translate-y-1/2  md:-translate-x-96 md:translate-y-1/3">
  <img src={Element3} alt="tins"/>
</span>
<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  <img src={Element6} alt="tins"/>
</span>
<div className='absolute inset-0 bg-black bg-opacity-40'></div>

<div className='p-10 md:ml-10 text-white z-10 relative'>
    <div className=' text-center'>
<h1 className=' text-xl font-bold'>SERVICES</h1>
<h2>What We Offer</h2>
</div>
<div className="grid md:grid-cols-3">
    <div className="">
      <img src='/graduationcap.png'/>
      <h4 className=' text-lg font-bold'>Comprehensive Online Courses</h4>
      <p>Accessible learning modules designed to equip you with practical skills for generating income online.</p>
    </div>
    <div className="">
      <img src='/scaleup.png'/>
      <h4  className=' text-lg font-bold'>Financial Empowerment Guidance</h4>
      <p>Personalized guidance on leveraging your smartphone to create sustainable income streams and Strategies to optimize your financial resources and navigate the online landscape effectively</p>
    </div>
    <div className="">
      <img src='/community.png'/>
      <h4  className=' text-lg font-bold'>Supportive dEDGE Community</h4>
      <p>Engage with a vibrant community of like-minded individuals on a similar journey and exchange insights, challenges, and success stories through our interactive forums and events</p>
    </div>
  </div>


</div>
</div>
  )
}

export default Services;