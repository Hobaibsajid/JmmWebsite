import React from 'react'
import Footer from '../../components/Common/Footer'
import Scroll from '../../components/Common/Scroll'
import Forum from '../../components/Common/Forum'
import bread from '../../assets/PNG/breadcrumb.png.png'
import bread2 from '../../assets/PNG/bree.png'
import dotted from '../../assets/PNG/dotted.png'
import pd6 from '../../assets/PNG/pd6.png'
import bg4 from '../../assets/PNG/Background4.png'
import por6 from '../../assets/PNG/por6.png'

const Telehealth = () => {
  return (
    <>
    <div className='h-[430px] bg-gradient-to-tl from-[#20D9A1]  to-[#5F39FF]'>
      <div className='absolute mt-[64px] px-[114px] h-[172px] opacity-[20%]'><img src={bread} alt="" /></div>
      <div className='absolute mt-[228px] px-[484px] h-[172px] opacity-[20%]'><img src={bread} alt="" /></div>
      
      <div className='absolute mt-[66px] px-[730px] h-[172px] opacity-[20%]'><img src={dotted} alt="" /></div>

      <div className='flex font-bebas text-[70px] text-white px-16 py-[180px] uppercase'>Global Healthcare, Just a Click Away!</div>
      <h1 className='flex tracking-widest font-mukta text-[16px] text-white px-16 mt-[-160px] '>{"Home  >  Portfolio  >  Global Healthcare, Just a Click Away!"} </h1>
    </div>

    <div className='h-[1990px]'>
        <div className='flex justify-center items-center mt-[100px]'><img src={pd6} alt="" /></div>
        <div className='flex flex-col h-[1020px] px-[96px] mt-14'>
            <div className='font-bebas text-[54px]'>Global Healthcare, <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7]'>Just a Click Away!</span></div>
            <div className='font-mukta text-[16px] text-[#727272]'>Telehealth is developed to facilitate the seamless connection between Saudi patients and international doctors. Individuals can consult with highly qualified healthcare professionals from around the world without the need to travel.</div>
            <div className='font-mukta text-[16px] text-[#727272] mt-5'>It offers a user-friendly interface that simplifies the process of finding and booking appointments with doctors, making global healthcare more accessible and convenient.</div>

            <div className='grid grid-cols-2'>
                <div className='w-[845px]'>
                    <div className='font-mukta text-[28px] font-bold mt-16'>Problems</div>
                    <div className='font-mukta text-[16px] text-[#727272] mt-2'>Many Saudi patients face challenges accessing specialized medical consultations due to geographical barriers and the high cost of traveling abroad.</div>
                    <div className='font-mukta text-[16px] text-[#727272] mt-5'>Traditional healthcare systems often require physical visits, which can be inconvenient and time-consuming, especially for follow-up consultations.</div>
                    <div className='font-mukta text-[16px] text-[#727272] mt-5'>Patients may struggle with language barriers, payment processes, and coordinating appointments with international doctors.</div>
                    <div className='font-mukta text-[28px] font-bold mt-11'>Solutions</div>
                    <div className='font-mukta text-[16px] text-[#727272] mt-1'>The system provides convenient access to:</div>

                    <div className='grid grid-cols-2 mt-7 font-mukta text-[16px] font-bold'>
                        <div className='flex flex-col'>
                            <div className='flex flex-row'><img className='w-[18px] h-[18px]' src={bg4} alt="" /><p className='px-3 mt-[-3px]'>Web Portal & Mobile App</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg4} alt="" /><p className='px-3 mt-[-3px]'>Seamless Communication & Consultation</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg4} alt="" /><p className='px-3 mt-[-3px]'>Appointment Management</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg4} alt="" /><p className='px-3 mt-[-3px]'>Payment Integration</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg4} alt="" /><p className='px-3 mt-[-3px]'>Notification System</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg4} alt="" /><p className='px-3 mt-[-3px]'>Time Slots Sharing</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg4} alt="" /><p className='px-3 mt-[-3px]'>Payment Management</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg4} alt="" /><p className='px-3 mt-[-3px]'>Prescription Management</p></div>
                        </div>

                        <div><img src={por6} alt="" /></div>
                    </div>

                    <div className='font-mukta text-[28px] font-bold mt-16'>Results</div>
                    <div className='font-mukta text-[16px] text-[#727272] mt-5'>Telehealth has significantly enhanced the accessibility of specialized medical care for Saudi patients, reducing the need for international travel. It offers a convenient and efficient way for patients to consult with doctors worldwide, saving time and resources. This solution has expanded the reach of global healthcare services to the Saudi population, bridging the gap between local patients and international doctors.</div>
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

export default Telehealth