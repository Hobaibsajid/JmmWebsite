import React from 'react'
import Scroll from './Scroll'
import img9 from '../../assets/PNG/Icon.png'
import img10 from '../../assets/PNG/Icon (1).png'
import dl from '../../assets/PNG/designleft.png'
import dr from '../../assets/PNG/design2.png'
import scroll from '../../assets/PNG/Scroll.png'

const Forum = () => {
  return (
    <div className='h-[790px] flex justify-center items-center'>
                <div className=' h-[661px] w-[1176px] p-[60px] bg-[#FAFAFC] flex justify-between rounded-3xl'>
                  
                  <div className='w-[50%] '>
                    <div className='text-[35px] font-bilbo text-transparent bg-clip-text bg-gradient-to-r from-[#20D9A1]  to-[#5F39FF] bg-[length:12%]'>Get In Touch</div>
          
                    <div className='text-black text-[50px] leading-tight font-bebas'>DO YOUR NEED DIGITAL <br /> <span className='  text-transparent bg-clip-text bg-gradient-to-r from-[#00CC85] via-[#009985] to-[#0060B7] bg-[length:100%]'> SOLUTIONS FOR YOUR PROJECT?</span></div>
          
                    <div className='font-mukta text-[18px] mt-4'>Our team is ready to assist with any inquiries, whether it’s for a <br />specific project or ongoing support. <br /> <br />
                        Contact us today to address the intricate demands of your project <br />and take your business to the advanced level.</div>
          
                    <div className=' mt-5 h-[22vh] flex flex-col gap-7 font-mukta'>
                      <div className='flex w-[45%] justify-between'>
                        <div className='bg-gradient-to-r from-[#20D9A1]  to-[#5F39FF] w-[55px] rounded-full h-[55px] flex justify-center items-center'><img className='w-[25px] h-[25px]' src={img9} alt="" /></div>
                       <div className='text-[16px] text-[#727272]'> For urgent help <br /><span className='text-[18px] text-black'>+ 0000 123-456-789</span></div>
                        </div>
                        <div className='flex w-[45%] justify-between'>
                        <div className='bg-gradient-to-r from-[#20D9A1]  to-[#5F39FF] w-[55px] rounded-full h-[55px] flex justify-center items-center'><img className='w-[25px] h-[25px]' src={img10} alt="" /></div>
                       <div className='text-[16px] mr-4 text-[#727272]'>Mail us 24/7 <br /><span className='text-[18px] text-black'>hello@gmail.com</span></div>
                        </div>
                      
                      </div>
                  </div>
                  

                        {/*Help Form */}

                  <div className=' w-[50%]'>

                  <div className="flex justify-center  h-screen ">
                        <form className=" max-w- w-full space-y-6  h-[76%]">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                            How can we help you?
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                          ></textarea>
                        </div>
                        <div className="flex justify-center">
                          <button
                                type="submit"
                                className="w-full py-3 rounded-md text-white font-semibold bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 hover:from-green-500 hover:via-teal-600 hover:to-blue-700"
                              >
                                Submit Now
                              </button>
                            </div>
                          </form>
                        </div>

                  </div>

                </div>
                <div className='absolute left-[-50px] '><img src={dl} alt="" /></div>
                <div className='absolute right-[0px]'><img src={dr} alt="" /></div>

                <div className='absolute mt-[650px] right-[70px]'><Scroll/></div>
              </div>
  )
}

export default Forum