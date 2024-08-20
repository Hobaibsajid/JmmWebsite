import React from 'react'
import Footer from '../components/Common/Footer'
import Scroll from '../components/Common/Scroll'
import bread from '../assets/PNG/breadcrumb.png.png'
import bread2 from '../assets/PNG/bree.png'
import dotted from '../assets/PNG/dotted.png'
import vid from '../assets/MP4/ana.mp4'
import frame from '../assets/PNG/frame.png'
import excellent from '../assets/PNG/excellence.png'
import innov from '../assets/PNG/innovation.png'
import colla from '../assets/PNG/colla.png'
import inclusive from '../assets/PNG/inclusi.png'

const About = () => {
  return (
    <>
    <div className='h-[430px] bg-gradient-to-tl from-[#20D9A1]  to-[#5F39FF]'>
      <div className='absolute mt-[64px] px-[114px] h-[172px] opacity-[20%]'><img src={bread} alt="" /></div>
      <div className='absolute mt-[228px] px-[484px] h-[172px] opacity-[20%]'><img src={bread} alt="" /></div>
      
      <div className='absolute mt-[66px] px-[730px] h-[172px] opacity-[20%]'><img src={dotted} alt="" /></div>

      <div className='flex font-bebas text-[70px] text-white px-16 py-[180px]'>About US</div>
      <h1 className='flex tracking-widest font-mukta text-[16px] text-white px-16 mt-[-160px] '>{"Home  >  About Us "}</h1>
      
    </div>

    <div className='h-[550px]'>
      <div className='grid grid-cols-2 h-[470px]'>
      <div className=' flex justify-center items-center mt-16'>
                <div className='flex w-[626px] h-[470px] justify-center items-center rounded-2xl overflow-hidden bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7]'>
                
                <video className='  h-[99.5%] z-10  w-[99.5%] object-cover' autoPlay loop muted>
                  <source src={vid} type="video/mp4" />
                </video>
                </div>
              </div>
              <div className='flex mt-28 flex-col'>
                <div className='absolute left-[1230px] mt-14 '><img src={dotted} alt="" /></div>
                <div className='text-[32px] font-bilbo text-transparent bg-clip-text bg-gradient-to-l from-[#00CC85] via-[#009985] to-[#0060B7] bg-[length:21%]'>About Us</div>
                <div className='text-[54px] mt-[10px] flex gap-1 leading-none flex-col uppercase font-bebas text-[#3A3A3A]'>Transforming Businesses <br /><span className='font-bebas bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7] bg-clip-text text-transparent '> with Digital Solutions  </span></div>
                <div className='text-[18px] mt-7 text-[#727272] font-mukta w-[90%] leading-6'>Code World East is an innovative technology company established in the Kingdom of <br /> Saudi Arabia (KSA), dedicated to delivering advanced digital and consulting services <br /> that promote business growth and enhance customer experiences. </div>
                <div className='text-[18px] mt-5 text-[#727272] font-mukta w-[90%] leading-6'>With a strong focus on technological excellence and a customer-oriented approach, <br /> we provide advanced IT services specific to meet the unique needs of our clients in <br /> various industries.</div>
              </div>
      </div>

    </div>

    <div className='flex flex-col mt-20 h-[10rem] gap-3 justify-center items-center w-full  bg-gradient-to-l from-[#00CC85] to-[#0060B7] bg-[length:140%]'>
          
          <h1 className='text-[#FFFFFF] text-4xl font-mukta font-bold'>Get A Free Consultation</h1>
          
          <div><button className='text-[#009985] bg-white p-2 px-8 rounded-full hover:bg-[#009966] hover:duration-500  hover:text-white '>Get Started</button></div>
    </div>

    <div className='h-[555px] bg-[#F9F9F9]'>
      <div className='grid grid-cols-2 '>
        
        <div className='px-[140px]'>
        <div className=' w-[650px] mt-16 rounded-3xl shadow-xl p-[2px] bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7]'>
        <div className=' h-[190px] rounded-[calc(1.5rem-1px)] p-7 bg-white '>
          <p className='font-bebas text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7] bg-[length:37%]'>Vision Statement</p>
          <p className='font-mukta text-[20px] text-black'>To shape the future of digital transformation in the Middle East by <br /> delivering innovative IT solutions that promote growth, efficiency, <br /> and excellence.</p>
        </div>
      </div>
      <div className=' w-[650px] mt-9 rounded-3xl shadow-xl p-[2px] bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7]'>
        <div className=' h-[190px] rounded-[calc(1.5rem-1px)] p-7 bg-white '>
          <p className='font-bebas text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7] bg-[length:37%]'>Mission Statement</p>
          <p className='font-mukta text-[20px] text-black'>To shape the future of digital transformation in the Middle East by <br /> delivering innovative IT solutions that promote growth, efficiency, <br /> and excellence.</p>
        </div>
      </div>
        </div>
      
      <div className='px-[180px] py-[70px]'>
        <div className=' w-[405px] h-[264px] mt-16 rounded-3xl shadow-xl  p-[2px] bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7]'>
          <div className=' h-[260px] flex items-center justify-center rounded-[calc(1.5rem-1px)] p-7 bg-[#F9F9F9] '>
            <img className='bg-transparent' src={frame} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className='h-[680px]'>
    <div className='flex flex-col p-16 text-center'>
    <div className='font-bebas text-[54px]'>OUR <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7]'>PRINCIPLES</span></div>
    </div>

    <div className='grid grid-cols-2'>
      <div className='flex flex-row px-[200px] '>
        <div className=' absolute h-[80px] w-[69px] bg-[#61fac472] rounded-2xl flex  justify-center items-center'><img className='w-[40px] h-[40px]' src={innov} alt="" /></div>
        <div className='flex flex-col px-[100px]  bg-slate-500'>
        <div className='font-mukta text-[24px] absolute font-bold'>Innovation</div>
        <div className='absolute font-mukta text-[18px] py-12'>We constantly pursue innovation to deliver <br /> solutions with the latest technologies that <br /> make us stand out in the marketplace.</div>
        </div>
      </div>

      <div className='flex flex-row px-[20px] '>
        <div className=' absolute h-[80px] w-[69px] bg-[#61fac472] rounded-2xl flex  justify-center items-center'><img className='w-[40px] h-[40px]' src={excellent} alt="" /></div>
        <div className='flex flex-col px-[100px]  bg-slate-500'>
        <div className='font-mukta text-[24px] absolute font-bold'>Excellence</div>
        <div className='absolute font-mukta text-[18px] py-12'>We are committed to excellence, ensuring the highest <br /> quality in every service to empower our clients and <br /> achieve long-term success..</div>
        </div>
      </div>

      <div className='flex flex-row px-[200px] py-[230px] '>
        <div className=' absolute h-[80px] w-[69px] bg-[#61fac472] rounded-2xl flex  justify-center items-center'><img className='w-[40px] h-[40px]' src={colla} alt="" /></div>
        <div className='flex flex-col px-[100px]  bg-slate-500'>
        <div className='font-mukta text-[24px] absolute font-bold'>Collaboration</div>
        <div className='absolute font-mukta text-[18px] py-12'>We value collaboration, building strong <br /> partnerships through mutual communication <br /> and expertise to drive success.</div>
        </div>
      </div>

      <div className='flex flex-row px-[20px] py-[230px] '>
        <div className=' absolute h-[80px] w-[69px] bg-[#61fac472] rounded-2xl flex  justify-center items-center'><img className='w-[40px] h-[40px]' src={inclusive} alt="" /></div>
        <div className='flex flex-col px-[100px]  bg-slate-500'>
        <div className='font-mukta text-[24px] absolute font-bold'>Inclusivity</div>
        <div className='absolute font-mukta text-[18px] py-12'>We encourage diversity, fostering an inclusive culture <br /> where every idea is valued, enriching our solutions <br /> with a broad range of perspectives.</div>
        </div>
      </div>
    </div>
    <div className='absolute mt-[-100px] right-[70px]'><Scroll/></div>
  </div>

  <Footer/>

    
    </>
  )
}

export default About