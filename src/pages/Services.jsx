import React from 'react'
import Footer from '../components/Common/Footer'
import Scroll from '../components/Common/Scroll'
import bread from '../assets/PNG/breadcrumb.png.png'
import bread2 from '../assets/PNG/bree.png'
import dotted from '../assets/PNG/dotted.png'
import web from '../assets/PNG/web.png'
import web2 from '../assets/PNG/web2.png'
import infa from '../assets/PNG/infa.png'
import infa2 from '../assets/PNG/infa2.png'
import mobile from '../assets/PNG/mobile.png'
import mobile2 from '../assets/PNG/mobile2.png'
import cloud from '../assets/PNG/cloud.png'
import cloud2 from '../assets/PNG/cloud2.png'
import technology from '../assets/PNG/technology.png'
import technology2 from '../assets/PNG/technology2.png'
import business from '../assets/PNG/business.png'
import business2 from '../assets/PNG/business2.png'
import customer from '../assets/PNG/customer.png'
import customer2 from '../assets/PNG/customer2.png'
import eco from '../assets/PNG/eco.png'
import eco2 from '../assets/PNG/eco2.png'
import digital from '../assets/PNG/digital.png'
import digital2 from '../assets/PNG/digital2.png'
import govern from '../assets/PNG/govern.png'
import govern2 from '../assets/PNG/govern2.png'
import analytics from '../assets/PNG/analytics.png'
import analytics2 from '../assets/PNG/analytics2.png'
import support from '../assets/PNG/support.png'
import support2 from '../assets/PNG/support2.png'
import enter from '../assets/PNG/enter.png'
import enter2 from '../assets/PNG/enter2.png'
import data from '../assets/PNG/data.png'
import data2 from '../assets/PNG/data2.png'
import services1 from '../assets/PNG/services1.png'
import services2 from '../assets/PNG/services2.png'


import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>

    <div className='h-[430px] bg-gradient-to-tl from-[#20D9A1]  to-[#5F39FF]'>
      <div className='absolute mt-[64px] px-[114px] h-[172px] opacity-[20%]'><img src={bread} alt="" /></div>
      <div className='absolute mt-[228px] px-[484px] h-[172px] opacity-[20%]'><img src={bread} alt="" /></div>
      
      <div className='absolute mt-[66px] px-[730px] h-[172px] opacity-[20%]'><img src={dotted} alt="" /></div>

      <div className='flex font-bebas text-[70px] text-white px-16 py-[180px] tracking-wider'>SERVICES</div>
      <h1 className='flex tracking-widest font-mukta text-[16px] text-white px-16 mt-[-160px] '>{"Home  >  Services "}</h1>
    </div>

    <div className='h-[1150px] p-20 font-mukta '>
            
            <div className='flex flex-col text-center justify-center items-center'>
              <div className='text-[32px] font-bilbo text-transparent bg-clip-text bg-gradient-to-l from-[#00CC85] via-[#009985] to-[#0060B7] bg-[length:12%] '>
                Our   Services
                </div>
              <div className='text-[#3A3A3A] font-bebas text-[54px] uppercase'>
              Consultancy <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7]'> Services</span>
              </div>
              <div className='text-[16px] text-[#727272] tracking-wide'>The advanced consultancy services provide comprehensive solutions to <br /> empower your businesses</div>
            </div>
            
            <div className='flex flex-row mt-20 justify-center items-center'>

              <Link to="/Technology">
              <div className='relative group'>
                <div className='absolute inset-0 opacity-0 group-hover:opacity-[100%] transition-transform duration-500 ease-in-out transform hover:scale-[101%]'>
                  <img src={technology2} alt="" />
                </div>
                <img src={technology} alt="" />
              </div>
              </Link>

              <Link to="/Business">
              <div className='relative group'>
                <div className='absolute inset-0 opacity-0 group-hover:opacity-[100%] transition-transform duration-500 ease-in-out transform hover:scale-[101%]'>
                  <img src={business2} alt="" />
                </div>
                <img src={business} alt="" />
              </div>
              </Link>

              <Link to="/Customer">
              <div className='relative group'>
                <div className='absolute inset-0 opacity-0 group-hover:opacity-[100%] transition-transform duration-500 ease-in-out transform hover:scale-[101%]'>
                  <img src={customer2} alt="" />
                </div>
                <img src={customer} alt="" />
              </div>
              </Link>

              <Link to="/Aliance">
              <div className='relative group'>
                <div className='absolute inset-0 opacity-0 group-hover:opacity-[100%] transition-transform duration-500 ease-in-out transform hover:scale-[101%]'>
                  <img src={eco2} alt="" />
                </div>
                <img src={eco} alt="" />
              </div>
              </Link>
            </div>

            <div className='flex flex-row mt-8 justify-center items-center'>

              <Link to="/DigitalCrisis">
              <div className='relative group'>
                <div className='absolute inset-0 opacity-0 group-hover:opacity-[100%] transition-transform duration-500 ease-in-out transform hover:scale-[101%]'>
                  <img src={digital2} alt="" />
                </div>
                <img src={digital} alt="" />
              </div>
              </Link>

              <Link to="/DigitalGovernance">
              <div className='relative group'>
                <div className='absolute inset-0 opacity-0 group-hover:opacity-[100%] transition-transform duration-500 ease-in-out transform hover:scale-[101%]'>
                  <img src={govern2} alt="" />
                </div>
                <img src={govern} alt="" />
              </div>
              </Link>

              <Link to="/DigitalAnalytics">
              <div className='relative group'>
                <div className='absolute inset-0 opacity-0 group-hover:opacity-[100%] transition-transform duration-500 ease-in-out transform hover:scale-[101%]'>
                  <img src={analytics2} alt="" />
                </div>
                <img src={analytics} alt="" />
              </div>
              </Link>

            </div>
          
          </div>

          <div className='h-[1300px] p-20 font-mukta bg-[#7272720c] '>
            
            <div className='flex flex-col text-center '>
              <div className='text-[32px] font-bilbo text-transparent bg-clip-text bg-gradient-to-l from-[#00CC85] via-[#009985] to-[#0060B7] bg-[length:12%] '>
                Our   Services
                </div>
              <div className='text-[#3A3A3A] font-bebas text-[54px] uppercase'>
              Development <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7]'> Services</span>
              </div>
              <div className='text-[16px] text-[#727272] tracking-wide'>The advanced digital IT services provide comprehensive solutions <br /> to empower your businesses.</div>
            </div>
            
            <div className='flex flex-row mt-20 justify-between'>

              <Link to="/WebDevelopment">
              <div className='relative group'>
                <div className='absolute inset-0 opacity-0 group-hover:opacity-[100%] transition-transform duration-500 ease-in-out transform hover:scale-[101%]'>
                  <img src={web2} alt="" />
                </div>
                <img src={web} alt="" />
              </div>
              </Link>

              <Link to="/Mobile">
              <div className='relative group'>
                <div className='absolute inset-0 opacity-0 group-hover:opacity-[100%] transition-transform duration-500 ease-in-out transform hover:scale-[101%]'>
                  <img src={mobile2} alt="" />
                </div>
                <img src={mobile} alt="" />
              </div>
              </Link>

              <Link to="/Cloud">
              <div className='relative group'>
                <div className='absolute inset-0 opacity-0 group-hover:opacity-[100%] transition-transform duration-500 ease-in-out transform hover:scale-[101%]'>
                  <img src={cloud2} alt="" />
                </div>
                <img src={cloud} alt="" />
              </div>
              </Link>

              <Link to="/Infrastructure">
              <div className='relative group'>
                <div className='absolute inset-0 opacity-0 group-hover:opacity-[100%] transition-transform duration-500 ease-in-out transform hover:scale-[101%]'>
                  <img src={infa2} alt="" />
                </div>
                <img src={infa} alt="" />
              </div>
              </Link>
            </div>

            <div className='flex flex-row mt-8 justify-betweem '>

              <Link to="/DigitalSupport">
              <div className='relative group'>
                <div className='absolute inset-0 opacity-0 group-hover:opacity-[100%] transition-transform duration-500 ease-in-out transform hover:scale-[101%]'>
                  <img src={support2} alt="" />
                </div>
                <img src={support} alt="" />
              </div>
              </Link>

              <Link to="/DataManagement">
              <div className='relative group'>
                <div className='absolute inset-0 opacity-0 group-hover:opacity-[100%] transition-transform duration-500 ease-in-out transform hover:scale-[101%]'>
                  <img src={data2} alt="" />
                </div>
                <img src={data} alt="" />
              </div>
              </Link>

              <Link to="/IntegrationServices">
              <div className='relative group'>
                <div className='absolute inset-0 opacity-0 group-hover:opacity-[100%] transition-transform duration-500 ease-in-out transform hover:scale-[101%]'>
                  <img src={services2} alt="" />
                </div>
                <img src={services1} alt="" />
              </div>
              </Link>

              <Link to="/EnterpriseDigitalPlatforms">
              <div className='relative group'>
                <div className='absolute inset-0 opacity-0 group-hover:opacity-[100%] transition-transform duration-500 ease-in-out transform hover:scale-[101%]'>
                  <img src={enter2} alt="" />
                </div>
                <img src={enter} alt="" />
              </div>
              </Link>

            </div>

          <div className='absolute mt-[80px] right-[70px]'><Scroll/></div>
          </div>

          <Footer/>

    </>
  )
}

export default Services