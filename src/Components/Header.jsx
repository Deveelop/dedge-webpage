import {React,  useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineShoppingCart  } from 'react-icons/ai'
import { BsPerson, BsPersonPlus, BsPersonLock, BsPeople, BsPersonWorkspace, BsCashCoin, BsPhone } from 'react-icons/bs'
import AccountItems from './AccountItems'

import { Link } from 'react-router-dom'




const Header = () => {
    const [nav, setnav] = useState(true)
    const [account, setAccount] = useState(true)
    const handlenav = () => { setnav(!nav) }
 

  return (
    <header className='w-screen fixed top-0 left-0 border-b-2 border-[#012E6D] bg-[#012E6D] shadow-xl z-20'>    
        {/* Nav for mobile only */}
        <nav className="w-full flex flex-wrap justify-between place-items-center p-4 pt-3 md:hidden text-white">
            <button onClick={handlenav} className='md:hidden hover:text-[--col] zi-10'>
                { !nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} /> }
            </button>

            {/* <Logo /> */}

            <div className="flex">
                <button  className='md:hidden hover:text-[--col] zi-10 text-white'>
                    <span> <BsPerson size={22} /> </span>
                </button>
                
                <div to='/cart' className='flex place-items-center cursor-pointer px-3 p-2 relative text-white'> 
                    <AiOutlineShoppingCart size={ 22 } />
                    <span className='bg-red-600  animate-ping absolute top-1 right-1 rounded-full flex items-center justify-center w-3 h-3' />
                    <span className='bg-red-600  absolute top-1 right-1 rounded-full flex items-center justify-center w-3 h-3' /> 
                </div>

            </div>

           

        </nav>

        <nav className="md:flex hidden justify-between place-items-center h-20 max-w-[1240px] m-auto px-4">
            {/* <div className="w-24 min-w-max"> <Logo /> </div> */}
           

            <ul className='md:flex hidden'>
                <p 
                className='bg-gray-200 cursor-pointer rounded font-semibold relative'> 
                <Link to='/'>
                <span 
                   
                    className='flex justify-between place-items-center gap-x-3 w-15 h-10  px-2 p-0'>
                  <img src='/company_logo.png' alt='company' className=' w-100 h-full'/>
                </span>
                </Link>
                </p>
                <div className='flex place-items-center cursor-pointer px-3 p-2 relative font-semibold text-md text-white'>
                <li className='pl-1'><Link to='/about'>About</Link></li>
                </div>
                <div className='flex place-items-center cursor-pointer px-3 p-2 relative font-semibold text-md text-white'>
                <li className='pl-1'><Link to='/services'>Services</Link></li>
                </div>
                <div className='flex place-items-center cursor-pointer px-3 p-2 relative font-semibold text-md text-white'>
                <li className='pl-1'><Link to='/portfolio'>Portfolio</Link></li>
                </div>
                <div className='flex place-items-center cursor-pointer px-3 p-2 relative font-semibold text-md text-white'>
                <li className='pl-1'><Link to='/contact'>Contact</Link></li>
                </div>
            </ul>

            <div className=' flex justify-center place-content-center bg-white px-5 p-0 rounded-xl font-bold gap-2'>
            <span> <BsPerson size={22} /> </span>
                <p>Sign In</p>
            </div>
        </nav>


        {/* Side Nav for Mobile Only */}
        <nav className={ !nav ? 'fixed left-0 top-0 w-full h-screen flex md:hidden' : 'fixed hidden md:hidden'}>
            <figure className="w-[70%] h-full pb-4 bg-[#012E6D] overflow-y-scroll">
                <div className="flex justify-between p-4 pl-3 mt-1 border-b-2 border-gray-400 text-white">
                    <Link to='/' className=' bg-white rounded'>
                    <span >
                    <img src='/company_logo.png' alt='company' className=' w-10'/>
                    </span>
                    </Link>
                    <button onClick={handlenav} className='md:hidden hover:text-[--col] zi-10'>
                        { !nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} /> }
                    </button>
                </div>

                <ul>
                    <li className='flex flex-col border-b-2 border-gray-400 text-white'>
                        <span> <AccountItems name='Login' icon={<BsPersonLock  className=' text-white' />} /> </span>
                        <span> <AccountItems name='Sign Up' icon={<BsPersonPlus  className=' text-white' />} /> </span>
                    </li>

                    <Link to='/about' className='flex flex-col text-white'>
                        <p className="font-md text-[--col] p-3">{/**/} </p>
                        <div
            className="flex place-items-center p-3 hover:bg-[#3f6eb1] border-b-[1px] font-thin">
            <span className='text-white'><BsPeople/></span>
            <p className=' cursor-pointer ml-3 '>About Us </p>
        </div>
                    </Link>
                    <Link to='/services' className='flex flex-col text-white'>
                    <div
            className="flex place-items-center p-3 hover:bg-[#3f6eb1] border-b-[1px] font-thin">
            <span className='text-white'><BsPersonWorkspace/></span>
            <p className=' cursor-pointer ml-3 '>Service</p>
        </div>
          
        </Link>
                    <Link to='/portfolio' className='flex flex-col text-white'>
                    <div
            className="flex place-items-center p-3 hover:bg-[#3f6eb1] border-b-[1px] font-thin">
            <span className='text-white'><BsCashCoin/></span>
            <p className=' cursor-pointer ml-3 '>Portfolio</p>
        </div>
         
        </Link>
                    <Link to='/contact' className='flex flex-col text-white'>
                    <div
            className="flex place-items-center p-3 hover:bg-[#3f6eb1] border-b-[1px] font-thin">
            <span className='text-white'><BsPhone/></span>
            <p className=' cursor-pointer ml-3 '>Contact Us</p>
        </div>
        </Link>

                </ul>
            </figure>
            <figure className="w-[30%] h-full bg-black opacity-[0.6]"></figure>
        </nav>

    </header>
  )
}

export default Header