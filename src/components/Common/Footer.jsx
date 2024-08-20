import React from 'react'

import logo from '../../assets/PNG/Logo.png'
import facebook from '../../assets/PNG/Link.png'
import insta from '../../assets/PNG/Link (1).png'
import twitter from '../../assets/PNG/Link (2).png'
import linkdin from '../../assets/PNG/Link (3).png'
import phone from '../../assets/PNG/Overlay.png'
import mail from '../../assets/PNG/Overlay (1).png'
import location from '../../assets/PNG/Overlay (2).png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='h-[60vh] bg-gradient-to-l space-x-24 from-[#00CC85] via-[#009985] to-[#0060B7] bg-[length:220%] p-14 flex text-white '>
                  
                  <div className='gap-10 flex flex-col'>
                    <div><img src={logo} alt="" /></div>
                    <div className='font-mukta text-[16px] text-white'>The point of using Lorem Ipsum is that it <br />
                        has a more-or-less normal distribution of <br />
                        letters, as opposed to using.</div>
                    
                    <div className='flex justify-between w-[90%]'>
                      <div><img src={facebook} alt="" /></div>
                      <div><img src={insta} alt="" /></div>
                      <div><img src={twitter} alt="" /></div>
                      <div><img src={linkdin} alt="" /></div>
                    </div>
                  </div>
                  
                  <div className='flex flex-col gap-6 w-[260px]'>
                     <div className='font-mukta text-[20px] text-white font-semibold'>Consultancy Services</div>
                     <div className='font-mukta text-[16px] text-white leading-9 '><Link className='hover:font-semibold transition duration-500' to="/Technology">Technology Innovation</Link> <br /> <Link className='hover:font-semibold transition duration-500' to="/Business">Business Case & Pricing</Link> <br /> <Link className='hover:font-semibold transition duration-500' to="/Customer">Customer Support</Link> <br /><Link className='hover:font-semibold transition duration-500' to="/Aliance">Alliance & Eco-Systems</Link> <br /> <Link className='hover:font-semibold transition duration-500' to="/DigitalCrisis">Digital Crisis & Disaster Management</Link> <br /> <Link className='hover:font-semibold transition duration-500' to="/DigitalGovernance">Digital Governance & Policy</Link> <br /> <Link className='hover:font-semibold transition duration-500' to="/DigitalAnalytics">Digital Analytics</Link></div>
                  </div>
                  
                  <div className='flex flex-col gap-6 '> 
                    <div className='font-mukta text-[20px] font-semibold mt-[-2px]'>Technology Development Services</div>
                    <div className='font-mukta text-[16px] text-white leading-9'><Link className='hover:font-semibold transition duration-500' to="/WebDevelopment">Web Development</Link> <br /> <Link className='hover:font-semibold transition duration-500' to="/Mobile">Mobile Application Development</Link> <br /> <Link className='hover:font-semibold transition duration-500' to="/Cloud">Cloud Services & Solutions</Link> <br /> <Link className='hover:font-semibold transition duration-500' to="/Infrastructure">Infrastructure Services</Link> <br /><Link className='hover:font-semibold transition duration-500' to="/DigitalSupport">Digital Support</Link> <br /><Link className='hover:font-semibold transition duration-500' to="/DataManagement">Data Management</Link> <br /><Link className='hover:font-semibold transition duration-500' to="/IntegrationServices">Integration Services</Link> <br /><Link className='hover:font-semibold transition duration-500' to="/EnterpriseDigitalPlatforms">Enterprise Digital Platforms</Link></div>
                  </div>
                  
                  
                  
                  
                  <div className='space-y-7'>
                    <div className='font-mukta text-[22px] font-semibold'>Get in touch</div>
                    
                    
                    <div className='space-y-2'>
                    <div className='flex space-x-4 items-center'>
                      
                      <div>
                          <img src={phone} alt="" />
                      </div>
                      
                      <div>
                          +966 5687 9999 <br />
                          +966 1234 5678
                      </div>
                    
                    </div>
                    
                    
                    <div className='flex space-x-4 items-center'>
                        <div><img src={mail} alt="" /></div>
                        <div>Info@codeworldeast.com</div>
                    </div>
                    
                    <div className='flex space-x-4 items-center'>
                      <div><img src={location} alt="" /></div>
                      <div>
                            225 Marion Street, <br /> 
                            Riyadh, KSA</div>
                    </div>
                    </div>
                  
                  </div>
              
              </div>

              {/* Main Container 7 */}

              <div className='bg-gradient-to-l from-[#00CC85] via-[#009985] to-[#2b8ce6da] bg-[length:200%] p-5 px-16 font-mukta flex justify-between text-white items-center'>
                <div>Copyright © 2024  Code World East  All Rights Reserved.</div>
                <div>Privacy Policy <span className='px-4'> Terms & Condition</span></div>
              </div>
    </>
  )
}

export default Footer