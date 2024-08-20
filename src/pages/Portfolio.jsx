import React from 'react'
import Forum from '../components/Common/Forum'
import Footer from '../components/Common/Footer'
import bread from '../assets/PNG/breadcrumb.png.png'
import bread2 from '../assets/PNG/bree.png'
import dotted from '../assets/PNG/dotted.png'
import port1 from '../assets/PNG/portfolio1.png'
import port2 from '../assets/PNG/portfolio2.png'
import port3 from '../assets/PNG/portfolio3.png'
import port4 from '../assets/PNG/portfolio4.png'
import port5 from '../assets/PNG/portfolio5.png'
import port6 from '../assets/PNG/portfolio6.png'
import img from '../assets/PNG/Gradient (1).png'
import About from '../pages/About';
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <>
    <div className='h-[430px] bg-gradient-to-tl from-[#20D9A1]  to-[#5F39FF]'>
      <div className='absolute mt-[64px] px-[114px] h-[172px] opacity-[20%]'><img src={bread} alt="" /></div>
      <div className='absolute mt-[228px] px-[484px] h-[172px] opacity-[20%]'><img src={bread} alt="" /></div>
      
      <div className='absolute mt-[66px] px-[730px] h-[172px] opacity-[20%]'><img src={dotted} alt="" /></div>

      <div className='flex font-bebas text-[70px] text-white px-16 py-[180px]'>OUR PORTFOLIOS</div>
      <h1 className='flex tracking-widest font-mukta text-[16px] text-white px-16 mt-[-160px] '>{"Home  >  Our Portflios "}</h1>
    </div>

    <div className='h-[2300px]'>
      <div className='p-20'>  
        <div className='flex flex-col text-center'>
          <div className='text-[32px] tracking-widest font-bilbo text-transparent bg-clip-text bg-gradient-to-l from-[#00CC85] via-[#009985] to-[#0060B7] bg-[length:12%] '>
            Portfolio
          </div>
          <div className='text-[#3A3A3A] font-bebas text-[54px]'>
            OUR <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7]'> PROJECTS</span>
          </div>
          <div className='text-[20px] mt-4 font-mukta'>
          Explore our projects portfolio to see our expertise to turn businesses' visions into reality, <br /> helping them succeed in a rapidly changing competitive world.
          </div>
        </div>
      </div>

      <div className='grid grid-cols-3 h-[1074px] w-[1481px]'>

      <Link to="/effortless">
        <div className='relative group left-10 '>
          <div style={{ borderTopRightRadius: '28px', borderTopLeftRadius: '28px', borderBottomRightRadius:'28px'}} className='absolute inset-0 h-[328.5px] w-[424px] opacity-0 bg-gradient-to-t from-[#00CC85] via-[#009985] to-[#0060B7] group-hover:opacity-[40%] transition-opacity duration-300'>  
          </div>
          <div className='absolute inset-0 opacity-0 group-hover:opacity-[100%] '>
              <img className=' absolute mt-[20px] left-[70px] object-cover opacity-0 h-[280px] w-[280px] group-hover:opacity-[100%] transition-opacity duration-300' src={img} alt="" />
              </div>
              <div className='absolute right-20 inset-0 opacity-0 group-hover:opacity-[100%] transition-opacity duration-300'>
              <p className='flex mt-[110px]  justify-center text-center overflow-hidden font-mukta text-white text-[14px] font-light'>Mobile and Web Apps</p>
              <p className='mt-[15px] font-bebas text-[25px] text-white flex justify-center text-center leading-8 font-light'>EFFORTLESS DOCUMENT <br />TRANSLATION</p>
              </div>
              <img className='' src={port1} alt="" /> 
        </div>
        </Link>

        <Link to="/firmsanad">
        <div className='relative group left-10 '>
          <div style={{ borderTopRightRadius: '28px', borderTopLeftRadius: '28px', borderBottomRightRadius:'28px'}} className='absolute inset-0 h-[328.5px] w-[424px] opacity-0 bg-gradient-to-t from-[#00CC85] via-[#009985] to-[#0060B7] group-hover:opacity-[40%] transition-opacity duration-300'>  
          </div>
          <div className='absolute inset-0 opacity-0 group-hover:opacity-[100%] '>
              <img className=' absolute mt-[20px] left-[70px] object-cover opacity-0 h-[280px] w-[280px] group-hover:opacity-[100%] transition-opacity duration-300' src={img} alt="" />
              </div>
              <div className='absolute right-20 inset-0 opacity-0 group-hover:opacity-[100%] transition-opacity duration-300'>
              <p className='flex mt-[110px]  justify-center text-center overflow-hidden font-mukta text-white text-[14px] font-light'>Web Apps</p>
              <p className='mt-[15px] font-bebas text-[25px] text-white flex justify-center text-center leading-8 font-light uppercase'>FirmSanad Empowering <br /> Entrepreneurs</p>
              </div>
              <img className='' src={port2} alt="" /> 
        </div>
        </Link>

        <Link to="/elamsanad">
        <div className='relative group left-10 '>
          <div style={{ borderTopRightRadius: '28px', borderTopLeftRadius: '28px', borderBottomRightRadius:'28px'}} className='absolute inset-0 h-[328.5px] w-[424px] opacity-0 bg-gradient-to-t from-[#00CC85] via-[#009985] to-[#0060B7] group-hover:opacity-[40%] transition-opacity duration-300'>  
          </div>
          <div className='absolute inset-0 opacity-0 group-hover:opacity-[100%] '>
              <img className=' absolute mt-[20px] left-[70px] object-cover opacity-0 h-[280px] w-[280px] group-hover:opacity-[100%] transition-opacity duration-300' src={img} alt="" />
              </div>
              <div className='absolute right-20 inset-0 opacity-0 group-hover:opacity-[100%] transition-opacity duration-300'>
              <p className='flex mt-[110px]  justify-center text-center overflow-hidden font-mukta text-white text-[14px] font-light'>Web Apps</p>
              <p className='mt-[15px] font-bebas text-[25px] text-white flex justify-center text-center leading-8 font-light uppercase'>Transforming <br /> Education Management</p>
              </div>
              <img className='' src={port3} alt="" /> 
        </div>
        </Link>

        <Link to="/ecommerce">
        <div className='relative group left-10 '>
          <div style={{ borderTopRightRadius: '28px', borderTopLeftRadius: '28px', borderBottomRightRadius:'28px'}} className='absolute inset-0 h-[328.5px] w-[424px] opacity-0 bg-gradient-to-t from-[#00CC85] via-[#009985] to-[#0060B7] group-hover:opacity-[40%] transition-opacity duration-300'>  
          </div>
          <div className='absolute inset-0 opacity-0 group-hover:opacity-[100%] '>
              <img className=' absolute mt-[20px] left-[70px] object-cover opacity-0 h-[280px] w-[280px] group-hover:opacity-[100%] transition-opacity duration-300' src={img} alt="" />
              </div>
              <div className='absolute right-20 inset-0 opacity-0 group-hover:opacity-[100%] transition-opacity duration-300'>
              <p className='flex mt-[110px]  justify-center text-center overflow-hidden font-mukta text-white text-[14px] font-light'>Mobile and Web Apps</p>
              <p className='mt-[15px] font-bebas text-[25px] text-white flex justify-center text-center leading-8 font-light uppercase'>Seamless Shopping <br /> Experience</p>
              </div>
              <img className='' src={port4} alt="" /> 
        </div>
        </Link>
        
        <Link to="/hr">
        <div className='relative group left-10 '>
          <div style={{ borderTopRightRadius: '28px', borderTopLeftRadius: '28px', borderBottomRightRadius:'28px'}} className='absolute inset-0 h-[328.5px] w-[424px] opacity-0 bg-gradient-to-t from-[#00CC85] via-[#009985] to-[#0060B7] group-hover:opacity-[40%] transition-opacity duration-300'>  
          </div>
          <div className='absolute inset-0 opacity-0 group-hover:opacity-[100%] '>
              <img className=' absolute mt-[20px] left-[70px] object-cover opacity-0 h-[280px] w-[280px] group-hover:opacity-[100%] transition-opacity duration-300' src={img} alt="" />
              </div>
              <div className='absolute right-20 inset-0 opacity-0 group-hover:opacity-[100%] transition-opacity duration-300'>
              <p className='flex mt-[110px]  justify-center text-center overflow-hidden font-mukta text-white text-[14px] font-light'>Web Apps</p>
              <p className='mt-[15px] font-bebas text-[25px] text-white flex justify-center text-center leading-8 font-light uppercase'>HRMS: Elevate Employee <br /> Management</p>
              </div>
              <img className='' src={port5} alt="" /> 
        </div>
        </Link>

        <Link to="/telehealth">
        <div className='relative group left-10'>
          <div style={{ borderTopRightRadius: '28px', borderTopLeftRadius: '28px', borderBottomRightRadius:'28px'}} className='absolute inset-0 h-[328.5px] w-[424px] opacity-0 bg-gradient-to-t from-[#00CC85] via-[#009985] to-[#0060B7] group-hover:opacity-[40%] transition-opacity duration-300'>  
          </div>
          <div className='absolute inset-0 opacity-0 group-hover:opacity-[100%] '>
              <img className=' absolute mt-[20px] left-[70px] object-cover opacity-0 h-[280px] w-[280px] group-hover:opacity-[100%] transition-opacity duration-300' src={img} alt="" />
              </div>
              <div className='absolute right-20 inset-0 opacity-0 group-hover:opacity-[100%] transition-opacity duration-300'>
              <p className='flex mt-[110px]  justify-center text-center overflow-hidden font-mukta text-white text-[14px] font-light'>Web Apps</p>
              <p className='mt-[15px] font-bebas text-[25px] text-white flex justify-center text-center leading-8 font-light uppercase'>TELEHEALTH: <br /> Stay Healthy</p>
              </div>
              <img className='' src={port6} alt="" /> 
        </div>
        </Link>

        <Link to="/firmsanad">
        <div className='relative group left-10  '>
          <div style={{ borderTopRightRadius: '28px', borderTopLeftRadius: '28px', borderBottomRightRadius:'28px'}} className='absolute inset-0 h-[328.5px] w-[424px] opacity-0 bg-gradient-to-t from-[#00CC85] via-[#009985] to-[#0060B7] group-hover:opacity-[40%] transition-opacity duration-300'>  
          </div>
          <div className='absolute inset-0 opacity-0 group-hover:opacity-[100%] '>
              <img className=' absolute mt-[20px] left-[70px] object-cover opacity-0 h-[280px] w-[280px] group-hover:opacity-[100%] transition-opacity duration-300' src={img} alt="" />
              </div>
              <div className='absolute right-20 inset-0 opacity-0 group-hover:opacity-[100%] transition-opacity duration-300'>
              <p className='flex mt-[110px]  justify-center text-center overflow-hidden font-mukta text-white text-[14px] font-light'>Web Apps</p>
              <p className='mt-[15px] font-bebas text-[25px] text-white flex justify-center text-center leading-8 font-light uppercase'>FirmSanad Empowering <br /> Entrepreneurs</p>
              </div>
              <img className='' src={port2} alt="" /> 
        </div>
        </Link>

        <Link to="/effortless">
        <div className='relative group left-10  '>
          <div style={{ borderTopRightRadius: '28px', borderTopLeftRadius: '28px', borderBottomRightRadius:'28px'}} className='absolute inset-0 h-[328.5px] w-[424px] opacity-0 bg-gradient-to-t from-[#00CC85] via-[#009985] to-[#0060B7] group-hover:opacity-[40%] transition-opacity duration-300'>  
          </div>
          <div className='absolute inset-0 opacity-0 group-hover:opacity-[100%] '>
              <img className=' absolute mt-[20px] left-[70px] object-cover opacity-0 h-[280px] w-[280px] group-hover:opacity-[100%] transition-opacity duration-300' src={img} alt="" />
              </div>
              <div className='absolute right-20 inset-0 opacity-0 group-hover:opacity-[100%] transition-opacity duration-300'>
              <p className='flex mt-[110px]  justify-center text-center overflow-hidden font-mukta text-white text-[14px] font-light'>Mobile and Web Apps</p>
              <p className='mt-[15px] font-bebas text-[25px] text-white flex justify-center text-center leading-8 font-light'>EFFORTLESS DOCUMENT <br />TRANSLATION</p>
              </div>
              <img className='' src={port1} alt="" /> 
        </div>
        </Link>

        <Link to="/elamsanad">
        <div className='relative group left-10  '>
          <div style={{ borderTopRightRadius: '28px', borderTopLeftRadius: '28px', borderBottomRightRadius:'28px'}} className='absolute inset-0 h-[328.5px] w-[424px] opacity-0 bg-gradient-to-t from-[#00CC85] via-[#009985] to-[#0060B7] group-hover:opacity-[40%] transition-opacity duration-300'>  
          </div>
          <div className='absolute inset-0 opacity-0 group-hover:opacity-[100%] '>
              <img className=' absolute mt-[20px] left-[70px] object-cover opacity-0 h-[280px] w-[280px] group-hover:opacity-[100%] transition-opacity duration-300' src={img} alt="" />
              </div>
              <div className='absolute right-20 inset-0 opacity-0 group-hover:opacity-[100%] transition-opacity duration-300'>
              <p className='flex mt-[110px]  justify-center text-center overflow-hidden font-mukta text-white text-[14px] font-light'>Web Apps</p>
              <p className='mt-[15px] font-bebas text-[25px] text-white flex justify-center text-center leading-8 font-light'>Transforming <br /> Education Management</p>
              </div>
              <img className='' src={port3} alt="" /> 
        </div>
        </Link>
      </div>
      <Forum/>

    </div>
    <Footer/>
    </>
  )
}

export default Portfolio