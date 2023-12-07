import Element4 from '/4.svg'
import Element3 from '/3.svg'
import Element6 from '/6.svg'

const About = () => {
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
        <div className='grid md:grid-cols-2 '>
     <div className='w-[100%] md:ml-10 text-white space-y-4 p-10 z-10 relative'>
         <h1 className=' text-xl font-bold'>About Us</h1>
         <p>At dEDGE Institute, we are on a mission to transform lives and elevate financial futures. We believe that the path to prosperity lies within the palm of your hand, and we are here to guide you on that journey.</p>
         <p>Our platform is dedicated to empowering individuals with the knowledge and skills to make money online from the comfort of their homes, using just their smartphones. We understand the profound impact that financial freedom can have on one's life and their ability to serve a higher purpose.</p>
         <p>As a community, we strive to raise financial stewards - individuals who not only manage their resources wisely but also use their financial abundance to selflessly advance the kingdom of God. Our approach is built on a foundation of education, empowerment, and faith.</p>
         <p>We offer accessible and comprehensive online courses that equip you with the tools to create sustainable online income streams. Through our supportive community, you'll find encouragement, inspiration, and shared learning experiences that foster your financial growth.</p>
         <p>dEDGE Institute is more than a platform; it's a movement. Our core values of education, stewardship, community, and faith drive everything we do. We believe that financial empowerment can be a force for good in the world, and we invite you to join us on this transformative journey.</p>
         <p>Discover how to unlock the potential of your smartphone, your financial resources, and your heart's desire to make a difference. Welcome to dEDGE Institute, where we are "Empowering Digital Entrepreneurship" to change lives and impact the world.</p>
     </div>
     <div className='ml-10 w-56 md:w-[25rem] mt-7 z-10 relative'>
      <img src='/personvision.png' alt='questionicon'/>
     </div>
     </div>
        <div className='grid md:grid-cols-2 '>
     <div className='w-[100%] md:ml-10 text-white space-y-4 p-10 z-10 relative'>
         <h1 className=' text-xl font-bold'>Our Mission</h1>
         <p>- Provide accessible and comprehensive online courses on money-making strategies using smartphones.</p>
         <p>- Cultivate financial stewardship principles, encouraging responsible and impactful wealth management.</p>
         <p>- Inspire a generation committed to advancing the kingdom of God through selfless financial contributions.</p>
         <p>- Foster a supportive dEdge community where knowledge-sharing and mentorship thrive.</p>
         <p>- Strive to create a world where financial empowerment leads to meaningful contributions to society.</p>
     </div>
     <div className='ml-10 w-56 md:w-[25rem] mt-7 z-10 relative'>
      <img src='/personvision.png' alt='questionicon'/>
     </div>
     </div>
        <div className='grid md:grid-cols-2 '>
     <div className='w-[100%] md:ml-10 text-white space-y-4 p-10 z-10 relative'>
         <h1 className=' text-xl font-bold'>Our Vision</h1>
         <p>- Empower individuals worldwide to achieve financial independence through digital skills and online opportunities.</p>
         <p>- Foster a community of self-sufficient digital entrepreneurs.</p>
         <p>- Cultivate a global network of empowered individuals contributing to positive change.</p>
     </div>
     <div className='ml-10 w-56 md:w-[25rem] mt-7 z-10 relative'>
      <img src='/personvision.png' alt='questionicon'/>
     </div>
     </div>



     
    </div>
  )
}

export default About