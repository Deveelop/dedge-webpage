import Element4 from '/4.svg'
import Element3 from '/3.svg'
import Element6 from '/6.svg'
import {BsPinMap, BsPhone, BsEnvelope} from 'react-icons/bs'
import {GiPhone} from 'react-icons/gi'
const Contact = () => {
  return (
    <div className="bg-[#012E6D] min-h-[100vh] relative">
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
        <div className="py-60 px-50 text-white z-10 relative">
    <h2 className="text-center text-xl font-bold">CONTACT</h2>
    <div className="md:flex md:flex-row">
      <div className=" md:w-5/12 md:ml-4 ml-2">
        <p>Contact us and we'll get back to you within 24 hours.</p>
        <p><span><BsPinMap/></span><span>NO. 5 Udik Villa Ichwa North Bank, Makurdi Benue State.</span></p>
        <p className="flex place-items-center p-3" ><span><GiPhone/></span><span>+2349033317004</span></p>
        <p className="flex place-items-center p-3" ><span ><GiPhone/></span><span>+2348065032361</span></p>
        <p className="flex place-items-center p-3" ><span><GiPhone/></span><span> +2349033988566</span></p>
        <p className="flex place-items-center p-3 gap-1" ><span><BsEnvelope/></span> <span>dedgeinstitute@gmail.com</span></p>
      </div>
      <div className=" md:w-7/12">
        <div className=" md:flex md:flex-row">
          <div className=" md:w-6/12 flex flex-row my-2 md:mx-4 py-3 px-2 rounded">
            <input className="md:w-full py-2 px-4 rounded-md" id="name" name="name" placeholder="Name" type="text" required/>
          </div>
          <div className=" md:w-6/12 flex flex-row my-2 md:mx-4 py-3 px-2 rounded">
            <input className=" md:w-full py-2 px-4 rounded-md" id="email" name="email" placeholder="Email" type="email" required/>
          </div>
        </div>
        <textarea className=" md:w-11/12 flex flex-row my-2 mx-4 py-3 px-2 rounded" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
        <div className=" md:flex md:flex-row">
          <div className=" md:w-full flex flex-row my-2 mx-4 py-3 px-2 rounded">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md float-right" type="submit">Send</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  
  
  )
}

export default Contact