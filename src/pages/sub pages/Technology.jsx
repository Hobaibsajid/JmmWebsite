import React from 'react'
import v1 from '../../assets/MP4/v1.mp4'
import bgimg from '../../assets/PNG/bgimg.jpg'
import vector from '../../assets/PNG/Vector.png'
import vector1 from '../../assets/PNG/Vector1.png'
import Scroll from '../../components/Common/Scroll'
import Footer from '../../components/Common/Footer'
import { Link } from 'react-router-dom'


const Technology = () => {
  return (
    <>
    <div className=' h-[200vh]'>
      {/* div main container 1 */}
        <div className='bg-teal-200 h-[50vh] flex flex-col justify-center  pl-14 pt-14 bg-gradient-to-br from-[#5F39FF] to-[#20D9A1] text-white '>
            <div className='text-[70px] font-bebas'>TECHNOLOGICAL INNOVATION</div>
            <div className='text-[16px]'>Home &gt;  Services &gt;  TECHNOLOGICAL  INNOVATION</div>
        </div>
                          {/* div main container 2 */}
        <div className='h-[70vh]   flex justify-between'>
          <div className=' p-14 w-[100%] '>
            <video className='  object-cover h-[100%] w-[100%] rounded-[50px]' autoPlay loop muted>
              <source src={v1} typeof='video/mp4'/>sdnam,nds,am
            </video>
          </div>
              
          <div className='h-[50vh] w-[50%] flex  mt-20  '>
            <div className='h-[100%]   flex relative  w-[100%] '><img className='rounded-md w-[85%] h-[100%] ' src={bgimg} alt="" />  
            <div className='absolute text-transparent bg-clip-text bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7] font-mukta text-[28px] font-[700] mt-5 ml-9'>Consultancy Services</div>
            <div className='h-[3px] w-32 absolute top-[17%] ml-10 bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7]'></div>
            <div className='absolute top-10 leading-10 py-7 text-[18px] text-[700] font-mukta px-10 text-[#727272]'><span className=' absolute bg-clip-text  font-mukta text-[18px] top-8 text-[#0060B7]'><Link to="/Technology">Technology Innovation</Link></span><br /><span className='hover:text-[#0060B7]'><Link to="/Business">Business Case and Pricing</Link></span><br /><span className='hover:text-[#0060B7]'><Link to="/Customer">Customer Support</Link></span> <br /><span className='hover:text-[#0060B7]'><Link to="/Aliance">Alliance & Eco System</Link></span><br /><span className='hover:text-[#0060B7]'><Link to="/DigitalCrisis">Digital Crisis & Disaster Management</Link></span><br /><span className='hover:text-[#0060B7]'><Link to="/DigitalGovernance">Digital Governance & Policy</Link></span><br /><span className='hover:text-[#0060B7]'><Link to="/DigitalAnalytics">Digital Analytics</Link></span></div>
            </div>
          </div>
        </div>

        {/* div main container 3 */}

        <div className='px-14  relative h-[80vh]'>
          <div>
            <div>
              <div className='text-[#3A3A3A] text-[54px] font-bebas'>TEHNOLOGICAL <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7]'> INNOVATION </span></div>
              <div className='font-mukta'>Staying ahead in today’s fast-paced digital landscape requires constant innovation. Our approach to technological innovation is <br /> comprehensive, from initial technology assessments to full-scale implementation plans. <br />

                 <br />  By understanding your unique business needs, we tailor our recommendations and strategies to maximize your return on <br /> investment and minimize disruption.</div>
            </div>

            <div className='mt-10 flex gap-5'>
              <div className='relative bg-[#00CC851A] h-[30vh] w-[33%] mt-[2%] rounded-3xl'>
                <div className='bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7] px-5 py-5 rounded-lg absolute top-[-30px] left-[6%]'><img className='w-[28px] h-[25px]' src={vector} alt="error vector" /></div>
                <div className='top-20 absolute ml-[10%] font-mukta text-[22px] text-[#3A3A3A]'>Technology Assessments</div>
                <div className='text-[#727272] absolute top-28 ml-[10%]  font-mukta text-[16px] '>In-depth evaluations to pinpoint technological <br /> opportunities for business growth and efficiency.</div>
              </div>
              
              
              <div className='relative bg-[#00CC851A] h-[30vh] w-[33%] mt-[2%] rounded-3xl'>
                <div className='bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7] px-5 py-5 rounded-lg absolute top-[-30px] left-[6%]'><img className='w-[28px] h-[25px]' src={vector1} alt="error vector" /></div>
                <div className='top-20 absolute ml-[10%] font-mukta text-[22px] text-[#3A3A3A]'>Technology Assessments</div>
                <div className='text-[#727272] absolute top-28 ml-[10%]  font-mukta text-[16px] '>In-depth evaluations to pinpoint technological <br /> opportunities for business growth and efficiency.</div>
              </div>
            
          </div>

          <div>
              <div className='h-[60vh] w-[32%] flex  mt-20 absolute top-[-20px] right-[0px]'>
                <div className='h-[100%]   flex relative  w-[100%] '><img className='rounded-md w-[85%] h-[100%] ' src={bgimg} alt="" />  
                <div className='absolute text-transparent bg-clip-text bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7] font-mukta text-[26px] font-[700] mt-8 ml-9'>Development Services</div>
                <div className='h-[3px] w-32 absolute top-[17%] ml-10 bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7]'></div>
                <div className='absolute top-20 leading-10 text-[18px] font-mukta text-[500] py-7 px-10 text-[#727272]'><span className=' text-[#727272] font-mukta text-[18px] top-8 absolute'><Link className='hover:text-[#0060B7]' to="/WebDevelopment">Web Development</Link> </span><br /><Link className='hover:text-[#0060B7]' to="/Mobile">Mobile Application Development</Link> <br /> <Link className='hover:text-[#0060B7]' to="/Cloud">Cloud Services & Solutions</Link> <br /> <Link className='hover:text-[#0060B7]' to="/Infrastructure">Infrastructure Services</Link> <br /> <Link className='hover:text-[#0060B7]' to="/DigitalSupport">Digital Support</Link> <br /> <Link className='hover:text-[#0060B7]' to="/DataManagement">Data Management</Link> <br /> <Link className='hover:text-[#0060B7]' to="/IntegrationServices">Integration Services</Link> <br /> <Link className='hover:text-[#0060B7]' to="/EnterpriseDigitalPlatforms">Enterprise Digital Platforms</Link></div>
                </div>
              </div> 
            </div>
          </div>
          <div className='absolute mt-[27px] right-[30px]'><Scroll/></div>
         </div>

{/* div main container 4 */}

            
            

    </div>
    <Footer/>
    </>
  )
}

export default Technology
