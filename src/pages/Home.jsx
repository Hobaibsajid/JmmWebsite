import React from 'react'
import Footer from '../components/Common/Footer'
import Forum from '../components/Common/Forum'
import video from '../assets/MP4/animation.mp4'
import img from '../assets/PNG/Gradient (1).png'
import img1 from '../assets/PNG/container.png'
import img2 from '../assets/PNG/container (1).png'
import img3 from '../assets/PNG/container (2).png'
import img4 from '../assets/PNG/container (4).png'
import c1 from '../assets/PNG/c1.png'
import c2 from '../assets/PNG/c2.png'
import c3 from '../assets/PNG/c3.png'
import c4 from '../assets/PNG/c4.png'
import video1 from '../assets/MP4/kingdom.mp4'
import img5 from '../assets/PNG/Web Development Services.png'
import img6 from '../assets/PNG/Mobile Application Development.png'
import img7 from '../assets/PNG/Cloud Services & Solutions.png'
import img8 from '../assets/PNG/Infrastructure Services.png'
import img9 from '../assets/PNG/Icon.png'
import img10 from '../assets/PNG/Icon (1).png'
import logo from '../assets/PNG/Logo.png'
import facebook from '../assets/PNG/Link.png'
import insta from '../assets/PNG/Link (1).png'
import twitter from '../assets/PNG/Link (2).png'
import linkdin from '../assets/PNG/Link (3).png'
import phone from '../assets/PNG/Overlay.png'
import mail from '../assets/PNG/Overlay (1).png'
import location from '../assets/PNG/Overlay (2).png'
import web from '../assets/PNG/web.png'
import web2 from '../assets/PNG/web2.png'
import infa from '../assets/PNG/infa.png'
import infa2 from '../assets/PNG/infa2.png'
import mobile from '../assets/PNG/mobile.png'
import mobile2 from '../assets/PNG/mobile2.png'
import cloud from '../assets/PNG/cloud.png'
import cloud2 from '../assets/PNG/cloud2.png'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <>
    <div className='w-[100%] '>
    <div className='relative   h-[100vh] '>
      <div>
      <video className='absolute h-[100%] z-10  w-screen object-cover' autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className='absolute inset-0 z-10 opacity-80 bg-gradient-to-b from-[#21259A] to-[#009985]'></div>
      </div>

      <div className=' absolute z-30 justify-center flex w-full h-[62%] mt-44 text-[#FFFFFF] '>
        <img className='animate-moveSideways' src={img} alt='Error' />
        <div className='absolute text-white  flex flex-col text-center top-28 gap-4 items-center '>
          <div className='font-bilbo text-2xl tracking-widest'>Innovate, Elevate, Succeed</div>
          <div className='font-bebas text-5xl'>EXPERTISE IN <br /><span>DIGITAL SOLUTIONS</span></div>
          <div className='text-sm font-mukta'>Provide advanced digital solutions to promote business  growth <br />
            <span> and optimize customer experiences.</span> 
         </div>
          <div><button className='h-[40px] w-[110px] mt-2 bg-white text-purple-800 font-bold font-mukta text-[12px]  hover:bg-green-800 hover:text-white hover:transition-all hover:ease-in hover:duration-700 rounded-full px-4 py-2'>Get Started</button></div>
        </div>
      </div>
      </div>





        <div className='grid grid-cols-2 m-5 h-[670px] '>
          <div className=' flex flex-1 flex-col gap-11 px-[60px] mt-11'>
            
            <div className='gap-4 flex flex-col'>
              
              <div className='text-[32px] font-bilbo text-transparent bg-clip-text bg-gradient-to-l from-[#00CC85] via-[#009985] to-[#0060B7] bg-[length:21%]'>About Us</div>
              
              <div className='text-[54px] flex gap-1 leading-none flex-col uppercase font-bebas text-[#3A3A3A]'>Transforming Businesses <br /><span className='font-bebas bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7] bg-clip-text text-transparent '> with Digital Solutions  </span></div>
              
              <div className='text-[18px] text-[#727272] font-mukta w-[90%] leading-6'>Code World East is an innovative technology company established in the Kingdom of Saudi Arabia (KSA). With technological excellence, we offer advanced IT services to address the distinct needs of our clients across diverse industries.</div>
            </div>

             <div className='w-[596px] h-[180px] grid grid-cols-2 gap-5'>
              <div><img src={c1} alt="" /></div>
              <div><img src={c2} alt="" /></div>
              <div><img src={c3} alt="" /></div>
              <div><img src={c4} alt="" /></div>
             </div>

              <div>
                   <Link to="/about"><button className='rounded-full bg-[#3A3A3A] p-3 px-6 text-[#FFFFFF] font-mukta hover:bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7] hover:duration-500'>Read More</button></Link>
              </div>
            </div>
              {/* div for image */}

              <div className=' flex justify-center items-center '>
                <div className='flex w-[631px] h-[475px] justify-center items-center rounded-2xl overflow-hidden bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7]'>
                
                <video className='  h-[470px] z-10  w-[626px] object-cover' autoPlay loop muted>
                  <source src={video1} type="video/mp4" />
                </video>
                </div>
              </div>
            </div>


                                  {/* Home Page Main container 3 */}


        <div className='flex flex-col mt-20 h-[220px] gap-3 justify-center items-center w-full  bg-gradient-to-l from-[#00CC85] to-[#0060B7] bg-[length:150%]'>
          
          <h1 className='text-[#FFFFFF] text-4xl font-mukta  mt-[-10px] text-[46px] '>Get A Free Consultation</h1>
          
          <div><Link to="/contact"><button className='text-[#009985] bg-white p-2 px-8 rounded-full mt-4 hover:bg-[#009966] hover:duration-500  hover:text-white '>Get Started</button></Link></div>
        </div>


        {/* Home Page main Container 4 */}


          <div className='h-[900px] p-20 font-mukta bg-pink-100 bg-opacity-50'>
            
            <div className='flex flex-col text-center'>
              <div className='text-[32px] font-bilbo text-transparent bg-clip-text bg-gradient-to-l from-[#00CC85] via-[#009985] to-[#0060B7] bg-[length:12%] '>
                Our   Services
                </div>
              <div className='text-[#3A3A3A] font-bebas text-[54px]'>
                IT CONSULTANT <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7]'> SOLUTIONS</span>
              </div>
              <div className='text-[16px]'>
                We offer a comprehensive suite of high-quality solutions designed to transform your <br />
              corporation into a successful enterprise.
              </div>
            </div>
            
            <div className='flex flex-row mt-20 w-[1344px] h-[370px] '>

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
            
            <div className='flex justify-center mt-5'>
              <button className='border-[1px] rounded-full px-7 py-2  hover:bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7] hover:duration-500 text-[#5F39FF] hover:text-[white] border-green-300 mt-10'><Link to="/services">View All</Link></button>
            </div>
          
          </div>

             

              <Forum/>
              <Footer/>

      
    </div>
      
      </>

   
  )
}

export default Home