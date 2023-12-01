import React from 'react';
// import Logo from './Logo';
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="grid md:grid-cols-3 bg-black relative z-20 text-white md:p-8 p-4">

      <div className="flex flex-col col-span-3 md:col-span-1 py-2">
            {/* <Logo /> */}
            <p>
               Empowering Digital Entrerenuership
            </p>
      </div>

      <figure className="grid md:grid-cols-2 grid-cols-1 col-span-3 md:col-span-1 py-2">
        <div className="text-gray-400">
          <h1 className="text-white font-bold text-2xl"> Quick Links </h1>
            <div className="pl-3 my-2">
              <p> Categories </p>
              <p> About Us </p>
              <p> FAQs </p>
              <p> Accounts </p>
            </div>
        </div>
        
        <div className="text-gray-400">
          <h1 className="text-white font-bold text-2xl"> Quick Links </h1>
            <div className="pl-3 my-2">
              <p> Categories </p>
              <p> About Us </p>
              <p> FAQs </p>
              <p> Accounts </p>
            </div>
        </div>
      </figure>

      <div className="flex md:justify-end justify-center gap-x-8 col-span-3 md:col-span-1 py-2 mt-8 md:mt-0">
          <a href="http://" target="_blank" rel="noopener noreferrer"> <BsLinkedin size={25} /> </a>
          <a href="http://" target="_blank" rel="noopener noreferrer"> <BsInstagram size={25} /> </a>
          <a href="http://" target="_blank" rel="noopener noreferrer"> <BsTwitter size={25} /> </a>
      </div>

      <div className="w-full col-span-3 mt-6">
        <hr className="border-gray-700 mb-6" />
        <p className="text-center text-gray-500">
          &copy; {new Date().getFullYear()} dEDGE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
