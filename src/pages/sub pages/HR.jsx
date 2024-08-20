import React from 'react'
import Footer from '../../components/Common/Footer'
import Forum from '../../components/Common/Forum'
import Scroll from '../../components/Common/Scroll'
import bread from '../../assets/PNG/breadcrumb.png.png'
import bread2 from '../../assets/PNG/bree.png'
import dotted from '../../assets/PNG/dotted.png'
import pd5 from '../../assets/PNG/pd5.png'
import bg from '../../assets/PNG/Background.png'
import por5 from '../../assets/PNG/por5.png'

const HR = () => {
  return (
    <>
    <div className='h-[430px] bg-gradient-to-tl from-[#20D9A1]  to-[#5F39FF]'>
      <div className='absolute mt-[64px] px-[114px] h-[172px] opacity-[20%]'><img src={bread} alt="" /></div>
      <div className='absolute mt-[228px] px-[484px] h-[172px] opacity-[20%]'><img src={bread} alt="" /></div>
      
      <div className='absolute mt-[66px] px-[730px] h-[172px] opacity-[20%]'><img src={dotted} alt="" /></div>

      <div className='flex font-bebas text-[70px] text-white px-16 py-[180px] uppercase'>Streamline Your Human Resource Operations </div>
      <h1 className='flex tracking-widest font-mukta text-[16px] text-white px-16 mt-[-160px] '>{"Home  >  Portfolio  >  Streamline Your Human Resource Operations "} </h1>
    </div>

    <div className='h-[1990px]'>
        <div className='flex justify-center items-center mt-[100px]'><img src={pd5} alt="" /></div>
        <div className='flex flex-col h-[1020px] px-[96px] mt-14'>
            <div className='font-bebas text-[54px]'>Streamline Your <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7]'>Human Resource Operations</span></div>
            <div className='font-mukta text-[16px] text-[#727272]'>A growing company recognized the need for an efficient way to manage its expanding workforce. To address this, a comprehensive Human Resource Management System (HRMS) was developed to integrate key HR functions seamlessly.</div>
            <div className='font-mukta text-[16px] text-[#727272] mt-5'>This system ensures that tasks such as attendance tracking, payroll processing, and performance evaluation are handled efficiently, leading to smoother operations and improved workforce management.</div>

            <div className='grid grid-cols-2'>
                <div className='w-[845px]'>
                    <div className='font-mukta text-[28px] font-bold mt-16'>Problems</div>
                    <div className='font-mukta text-[16px] text-[#727272] mt-2'>Managing a diverse and expanding workforce possess a significant challenge. The company required an effective system to handle various HR tasks, such as tracking employee attendance, managing payroll, evaluating performance, and maintaining accurate records.</div>
                    <div className='font-mukta text-[16px] text-[#727272] mt-5'>The complexity of these tasks made it difficult for managers to access real-time data and insights, compromising their ability to make informed decisions.</div>
                    <div className='font-mukta text-[28px] font-bold mt-11'>Solutions</div>
                    <div className='font-mukta text-[16px] text-[#727272] mt-1'>The all-in-one HRMS provides:</div>

                    <div className='grid grid-cols-2 mt-7 font-mukta text-[16px] font-bold'>
                        <div className='flex flex-col'>
                            <div className='flex flex-row'><img className='w-[18px] h-[18px]' src={bg} alt="" /><p className='px-3 mt-[-3px]'>Payroll Management</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg} alt="" /><p className='px-3 mt-[-3px]'>Employee Information Management</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg} alt="" /><p className='px-3 mt-[-3px]'>Attendance Tracking</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg} alt="" /><p className='px-3 mt-[-3px]'>Performance Evaluation</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg} alt="" /><p className='px-3 mt-[-3px]'>Facilitate Administration</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg} alt="" /><p className='px-3 mt-[-3px]'>Role-Based Access</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg} alt="" /><p className='px-3 mt-[-3px]'>Analytics and Reporting</p></div>
                        </div>

                        <div><img src={por5} alt="" /></div>
                    </div>

                    <div className='font-mukta text-[28px] font-bold mt-16'>Results</div>
                    <div className='font-mukta text-[16px] text-[#727272] mt-5'>The implementation of the HRMS has significantly improved workforce management. It offers a streamlined automated HR process that reduces manual errors, enhances operational efficiency, and facilitates precise payroll management. Real-time monitoring and reporting capabilities empower managers with the insights to make informed decisions quickly.</div>
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

export default HR