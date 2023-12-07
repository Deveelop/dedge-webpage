import Element4 from '/4.svg'
import Element3 from '/3.svg'
import Element6 from '/6.svg'

const Portfolio = () => {
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
    <h1 className=' text-xl font-bold'>Portfolio</h1>
    <p>1. Sproutgigs Freelance Guide</p>
    <p>2. Smartphone Entrepreneurship 101</p>
    <p>3. AI and Automation for Business Growth</p>
    <p>4. Podcasting for Profit</p>
    <p>5. Smart Phone Forex Course</p>
    <p>6. Whatsapp Influencer Course</p>
    <p>7. Cryptocurrency Essentials for Beginners</p>
    <p>8. Smart Phone Graphics Course</p>
    <p>9. Email Marketing Mastery Course</p>
    <p>10. Influencer Marketing 360: Building Your Personal Brand</p>
    <p>11. Real Estate Investment with a Smartphone</p>
    <p>13. SEO Fundamentals for Online Visibility</p>
    <p>14. Cybersecurity for Digital Entrepreneurs</p>
    <p>15. Copy writing mastery course</p>
    <p>16. Smartphone Video Editing Master</p>
    </div>
    <div className='ml-10 w-56 md:w-[45rem] mt-7 z-10 relative'>
      <img src='/portfolioicon.png' alt='questionicon'/>
     </div>
</div>
</div>
  )
}

export default Portfolio