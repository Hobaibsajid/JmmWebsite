import React from 'react'
import Footer from '../../components/Common/Footer'
import Scroll from '../../components/Common/Scroll'
import Forum from '../../components/Common/Forum'
import bread from '../../assets/PNG/breadcrumb.png.png'
import bread2 from '../../assets/PNG/bree.png'
import dotted from '../../assets/PNG/dotted.png'
import pd1 from '../../assets/PNG/pd1.png'
import bg from '../../assets/PNG/Background.png'
import por from '../../assets/PNG/por.png'

const Effortless = () => {
  return (
    <>
    <div className='h-[430px] bg-gradient-to-tl from-[#20D9A1]  to-[#5F39FF]'>
      <div className='absolute mt-[64px] px-[114px] h-[172px] opacity-[20%]'><img src={bread} alt="" /></div>
      <div className='absolute mt-[228px] px-[484px] h-[172px] opacity-[20%]'><img src={bread} alt="" /></div>
      
      <div className='absolute mt-[66px] px-[730px] h-[172px] opacity-[20%]'><img src={dotted} alt="" /></div>

      <div className='flex font-bebas text-[70px] text-white px-16 py-[180px] uppercase'>Effortless Document Translation</div>
      <h1 className='flex tracking-widest font-mukta text-[16px] text-white px-16 mt-[-160px] '>{"Home  >  Portfolio  >  Effortless Document Translation"} </h1>
    </div>

    <div className='h-[1990px]'>
        <div className='flex justify-center items-center mt-[100px]'><img src={pd1} alt="" /></div>
        <div className='flex flex-col h-[1020px] px-[96px] mt-14'>
            <div className='font-bebas text-[54px]'>Certified <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7]'>Translation App</span></div>
            <div className='font-mukta text-[16px] text-[#727272]'>ALSN offers certified document translation to drive digital transformation. In an interconnected world where seamless communication is essential, we are strategically positioned to cater the needs of businesses, individuals, and organizations. </div>
            <div className='font-mukta text-[16px] text-[#727272] mt-5'>Our translation services are complemented by qualified, certified, and top-tier results that align seamlessly with the highest standards of accuracy and professionalism.</div>

            <div className='grid grid-cols-2'>
                <div className='w-[845px]'>
                    <div className='font-mukta text-[28px] font-bold mt-16'>Problems</div>
                    <div className='font-mukta text-[16px] text-[#727272] mt-2'>Businesses, individuals, and organizations often struggle for accurate and certified translations of critical documents, especially when dealing with multiple languages. The process is often time-consuming, costly, and lacks the efficiency required for fast-paced environments. Additionally, concerns about data security and confidentiality further complicate the translation process, making it difficult for users to find a reliable solution.</div>
                    <div className='font-mukta text-[28px] font-bold mt-11'>Solutions</div>
                    <div className='font-mukta text-[16px] text-[#727272] mt-1'>ALSN is all in one solution to provide:</div>

                    <div className='grid grid-cols-2 mt-7 font-mukta text-[16px] font-bold'>
                        <div className='flex flex-col'>
                            <div className='flex flex-row'><img className='w-[18px] h-[18px]' src={bg} alt="" /><p className='px-3 mt-[-3px]'>Authentic Certified Translation</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg} alt="" /><p className='px-3 mt-[-3px]'>Convenient Access</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg} alt="" /><p className='px-3 mt-[-3px]'>Instant File Translation</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg} alt="" /><p className='px-3 mt-[-3px]'>Instant Text Translation</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg} alt="" /><p className='px-3 mt-[-3px]'>Live Chatting</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg} alt="" /><p className='px-3 mt-[-3px]'>SMS Tracking</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg} alt="" /><p className='px-3 mt-[-3px]'>Fast turnaround</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg} alt="" /><p className='px-3 mt-[-3px]'>Streamlined processes </p></div>
                        </div>

                        <div><img src={por} alt="" /></div>
                    </div>

                    <div className='font-mukta text-[28px] font-bold mt-16'>Results</div>
                    <div className='font-mukta text-[16px] text-[#727272] mt-5'>With ALSN, users can now efficiently manage their translation projects, reducing the time and cost associated with traditional translation services. The app provides peace of mind with its certified translations, ensuring compliance and reliability in legal and official contexts. As a result, businesses and individuals can communicate with confidence across language barriers, enhancing their global reach and operational efficiency.</div>
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

export default Effortless