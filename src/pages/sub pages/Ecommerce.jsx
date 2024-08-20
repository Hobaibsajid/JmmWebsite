import React from 'react'
import Footer from '../../components/Common/Footer'
import Scroll from '../../components/Common/Scroll'
import Forum from '../../components/Common/Forum'
import bread from '../../assets/PNG/breadcrumb.png.png'
import bread2 from '../../assets/PNG/bree.png'
import dotted from '../../assets/PNG/dotted.png'
import pd4 from '../../assets/PNG/pd4.png'
import bg3 from '../../assets/PNG/Background3.png'
import por4 from '../../assets/PNG/por4.png'

const Ecommerce = () => {
  return (
    <>
    <div className='h-[430px] bg-gradient-to-tl from-[#20D9A1]  to-[#5F39FF]'>
      <div className='absolute mt-[64px] px-[114px] h-[172px] opacity-[20%]'><img src={bread} alt="" /></div>
      <div className='absolute mt-[228px] px-[484px] h-[172px] opacity-[20%]'><img src={bread} alt="" /></div>
      
      <div className='absolute mt-[66px] px-[730px] h-[172px] opacity-[20%]'><img src={dotted} alt="" /></div>

      <div className='flex font-bebas text-[70px] text-white px-16 py-[180px] uppercase'>Reliable Partner in Streamlined eCommerce Success</div>
      <h1 className='flex tracking-widest font-mukta text-[16px] text-white px-16 mt-[-160px] '>{"Home  >  Portfolio  >  Reliable Partner in Streamlined eCommerce Success"} </h1>
    </div>

    <div className='h-[1990px]'>
        <div className='flex justify-center items-center mt-[100px]'><img src={pd4} alt="" /></div>
        <div className='flex flex-col h-[1020px] px-[96px] mt-14'>
            <div className='font-bebas text-[54px]'>Reliable Partner in Streamlined <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7]'>eCommerce Success</span></div>
            <div className='font-mukta text-[16px] text-[#727272]'>Tojjar is an innovative eCommerce platform designed to offer users a seamless and intuitive online shopping experience across a wide range of product categories. This is a specialized solution for sourcing, ordering, and managing products in bulk, catering to businesses in need of wholesale procurement.</div>
            <div className='font-mukta text-[16px] text-[#727272] mt-5'>It serves multiple user roles, including customers, admins, sales agents, and drivers, ensuring a comprehensive eCommerce ecosystem.</div>

            <div className='grid grid-cols-2'>
                <div className='w-[845px]'>
                    <div className='font-mukta text-[28px] font-bold mt-16'>Problems</div>
                    <div className='font-mukta text-[16px] text-[#727272] mt-2'>Many businesses struggle with the complexities of managing bulk orders, including sourcing products, placing large-scale orders, and keeping track of them throughout the fulfillment process. Existing eCommerce platforms often lack the dedicated support and robust security for handling bulk transactions and ensuring smooth operations. Users frequently experience challenges in maintaining control over their orders and accessing reliable, real-time information on order status and payment security.</div>
                    <div className='font-mukta text-[28px] font-bold mt-11'>Solutions</div>
                    <div className='font-mukta text-[16px] text-[#727272] mt-1'>The User-friendly E-Commerce Platform offers:</div>

                    <div className='grid grid-cols-2 mt-7 font-mukta text-[16px] font-bold'>
                        <div className='flex flex-col'>
                            <div className='flex flex-row'><img className='w-[18px] h-[18px]' src={bg3} alt="" /><p className='px-3 mt-[-3px]'>Intuitive Order Management</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg3} alt="" /><p className='px-3 mt-[-3px]'>Responsive Customer Support</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg3} alt="" /><p className='px-3 mt-[-3px]'>Real-Time Order Tracking</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg3} alt="" /><p className='px-3 mt-[-3px]'>Secure Payment Gateways</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg3} alt="" /><p className='px-3 mt-[-3px]'>Streamlined Bulk Ordering</p></div>
                            <div className='flex flex-row mt-5'><img className='w-[18px] h-[18px]' src={bg3} alt="" /><p className='px-3 mt-[-3px]'>Technical Foundation</p></div>
                        </div>

                        <div><img src={por4} alt="" /></div>
                    </div>

                    <div className='font-mukta text-[28px] font-bold mt-16'>Results</div>
                    <div className='font-mukta text-[16px] text-[#727272] mt-5'>Tojjar enables businesses to efficiently manage large orders, reducing the time and effort required for procurement. It ensures a secure and transparent shopping experience, building trust with users through real-time updates and robust payment security. Additionally, support various user roles from customers to sales agents and drivers creating an efficient eCommerce environment.</div>
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

export default Ecommerce