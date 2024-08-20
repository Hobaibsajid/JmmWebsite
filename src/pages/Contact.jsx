import React from 'react'
import Footer from '../components/Common/Footer'
import Forum from '../components/Common/Forum'
import bread from '../assets/PNG/breadcrumb.png.png'
import bread2 from '../assets/PNG/bree.png'
import dotted from '../assets/PNG/dotted.png'

const Contact = () => {
  return (
    <>
    <div className='h-[430px] bg-gradient-to-tl from-[#20D9A1]  to-[#5F39FF]'>
      <div className='absolute mt-[64px] px-[114px] h-[172px] opacity-[20%]'><img src={bread} alt="" /></div>
      <div className='absolute mt-[228px] px-[484px] h-[172px] opacity-[20%]'><img src={bread} alt="" /></div>
      
      <div className='absolute mt-[66px] px-[730px] h-[172px] opacity-[20%]'><img src={dotted} alt="" /></div>

      <div className='flex font-bebas text-[70px] text-white px-16 py-[180px]'>CONTACT US</div>
      <h1 className='flex tracking-widest font-mukta text-[16px] text-white px-16 mt-[-160px] '>{"Home  >  Contact Us "}</h1>
      
    </div>

  
              
              <Forum/>
              <Footer/>
    </>
  )
}

export default Contact