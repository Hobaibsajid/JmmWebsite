import React, { useState, useEffect } from 'react';
import logo from '../../assets/PNG/Logo.png'
import { Link } from 'react-router-dom'
  

const Navbar = () => {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`flex w-full fixed z-20 justify-around  text-white h-[12vh] items-center shadow-sm  shadow-black transition duration-300 ${scroll ? 'bg-black' : 'bg-transparent'}`} >
        
        <div className='ml-[-100px] w-36'>
          <img src={logo} alt="" />
        </div>

          <div className='flex w-[30%] justify-between'>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
          </div>

        <div>
          <button className='h-[50px] w-[150px] rounded-full py-2 px-4 text-white border-[1px] hover:bg-[#FFFFFF] hover:font-semibold hover:text-[#20D9A1] hover:duration-500 '><Link to="/contact">Contact Us</Link></button>
        </div>
      </header>
    </>
  )
}

export default Navbar