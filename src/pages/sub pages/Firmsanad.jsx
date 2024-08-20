import React from 'react'
import Footer from '../../components/Common/Footer'
import Scroll from '../../components/Common/Scroll'
import Forum from '../../components/Common/Forum'
import bread from '../../assets/PNG/breadcrumb.png.png'
import bread2 from '../../assets/PNG/bree.png'
import dotted from '../../assets/PNG/dotted.png'
import pd2 from '../../assets/PNG/pd2.png'
import bg from '../../assets/PNG/Background.png'
import por2 from '../../assets/PNG/por2.png'

const Firmsanad = () => {
  return (
    <>
    <div className='h-[430px] bg-gradient-to-tl from-[#20D9A1]  to-[#5F39FF]'>
      <div className='absolute mt-[64px] px-[114px] h-[172px] opacity-[20%]'><img src={bread} alt="" /></div>
      <div className='absolute mt-[228px] px-[484px] h-[172px] opacity-[20%]'><img src={bread} alt="" /></div>
      
      <div className='absolute mt-[66px] px-[730px] h-[172px] opacity-[20%]'><img src={dotted} alt="" /></div>

      <div className='flex font-bebas text-[70px] text-white px-16 py-[180px] uppercase'>Gateway to Seamless Business in KSA</div>
      <h1 className='flex tracking-widest font-mukta text-[16px] text-white px-16 mt-[-160px] '>{"Home  >  Portfolio  >  Gateway to Seamless Business in KSA"} </h1>
    </div>

    <div className='h-[1990px]'>
        <div className='flex justify-center items-center mt-[100px]'><img src={pd2} alt="" /></div>
        <div className='flex flex-col h-[1020px] px-[96px] mt-14'>
            <div className='font-bebas text-[54px]'>Gateway to Seamless <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7]'>Business in KSA</span></div>
            <div className='font-mukta text-[16px] text-[#727272]'>FIRMSANAD is an innovative platform designed to streamline the intersection between business goals and regulatory requirements in Saudi Arabia. It provides support to entrepreneurs and businesses by simplifying the complexities of starting and managing a business in the region.</div>
            <div className='font-mukta text-[16px] text-[#727272] mt-5'>The platform provides a user-friendly experience, making it accessible to users with varying levels of technical expertise.</div>

            <div className='grid grid-cols-2'>
                <div className='w-[845px]'>
                    <div className='font-mukta text-[28px] font-bold mt-16'>Problems</div>
                    <div className='font-mukta text-[16px] text-[#727272] mt-2'>In Saudi Arabia, staying up to date on regulatory changes can be challenging for businesses, particularly for those looking to establish a new venture or expand existing operations. The process of registering businesses, obtaining licenses, and maintaining compliance is often time-consuming and resource-intensive. Many existing platforms lack transparency and user-friendly interfaces, making it difficult for businesses to track their application status and progress.</div>
                    <div className='font-mukta text-[28px] font-bold mt-11'>Solutions</div>
                    <div className='font-mukta text-[16px] text-[#727272] mt-1'>Simplifies business registration, licensing, and compliance with:</div>

                    <div className='grid grid-cols-2 mt-7 font-mukta text-[16px] font-bold'>
                        <div className='flex flex-col'>
                            <div className='flex flex-row'><img className='w-[18px] h-[18px]' src={bg} alt="" /><p className='px-3 mt-[-3px]'>User-Friendly Interface</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg} alt="" /><p className='px-3 mt-[-3px]'>Simplified Business Processes</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg} alt="" /><p className='px-3 mt-[-3px]'>End-to-End Support </p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg} alt="" /><p className='px-3 mt-[-3px]'>Improved Transparency</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg} alt="" /><p className='px-3 mt-[-3px]'>Increased Efficiency</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg} alt="" /><p className='px-3 mt-[-3px]'>Secure Authentication</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg} alt="" /><p className='px-3 mt-[-3px]'>Scalable Performance</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg} alt="" /><p className='px-3 mt-[-3px]'>Technical Integration</p></div>
                        </div>

                        <div><img src={por2} alt="" /></div>
                    </div>

                    <div className='font-mukta text-[28px] font-bold mt-16'>Results</div>
                    <div className='font-mukta text-[16px] text-[#727272] mt-5'>This System reduces the time and effort required for business registration and compliance management. It provides an intuitive platform that caters to users with diverse technical backgrounds. It keeps businesses informed and confident throughout the regulatory process. Additionally, allow businesses to allocate more resources to growth and operations by minimizing administrative burdens.</div>
                </div>

                <div className='absolute top-[1500px] right-[50px]'>
                    <div className='w-[430px] h-[55px] flex justify-center text-center items-center rounded-xl text-white font-semibold bg-gradient-to-l from-[#00CC85] via-[#009985] to-[#0060B7] bg-[length:220%] '>Need This Project?</div>
                    <div className='w-[430px] h-[790px] rounded-lg bg-gradient-to-r from-[#20D9A114] to-[#5F39FF14] mt-11'>
                        <div className='flex flex-col font-mukta px-10'>
                            <div className='mt-10  text-[28px] font-bold'>Project Information</div>
                            <div className=' mt-5 w-[347px] mx-auto border-b-2'></div>
                            <div className='mt-7 text-[16px] text-[#009985] font-bold'>Project Name:</div>
                            <div className='text-[#727272] mt-1'>ALSN Translation App</div>
                            <div className=' mt-7 w-[347px] mx-auto border-b-2'></div>
                            <div className='mt-7 text-[16px] text-[#009985] font-bold'>Client:</div>
                            <div className='text-[#727272] mt-1'>ALSN</div>
                            <div className=' mt-7 w-[347px] mx-auto border-b-2'></div>
                            <div className='mt-7 text-[16px] text-[#009985] font-bold'>Category:</div>
                            <div className='text-[#727272] mt-1'>Web Apps, Landing Page, Mobile Apps</div>
                            <div className=' mt-7 w-[347px] mx-auto border-b-2'></div>
                            <div className='mt-7 text-[16px] text-[#009985] font-bold'>Tag:</div>
                            <div className='text-[#727272] mt-1'>Business, Agency, Corporate, Website</div>
                            <div className=' mt-7 w-[347px] mx-auto border-b-2'></div>
                            <div className='mt-7 text-[16px] text-[#009985] font-bold'>Start Date:</div>
                            <div className='text-[#727272] mt-1'>10 July, 2023</div>
                            <div className=' mt-7 w-[347px] mx-auto border-b-2'></div>
                            <div className='mt-7 text-[16px] text-[#009985] font-bold'>End Date:</div>
                            <div className='text-[#727272] mt-1'>29 February, 2024</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='absolute mt-[155px] right-[30px]'><Scroll/></div>
    </div>

    
    <Footer/>

    </>
  )
}

export default Firmsanad