import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';
import {CV_HREF} from '../constants'
const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen pt-[20vh]'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Wei Li</h2>
                <p>Full-Stack Developer</p>
                <p className='py-6'>
                  I am available for internship, contractor or full-time permanent positions. 
                </p>
                <p className=' pt-2'>Connect with me and let&apos;s talk.</p>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4 grid grid-cols-2 gap-2 '>
              <Link className="flex mb-6 hover:text-primary" href={"https://www.linkedin.com/in/wei-li-5779b5230/"} target='_blank' >
                  <FaLinkedinIn className="mx-3 my-auto" size={35}/>
                  <div className="flex flex-col ">
                    <h3>Linkedin</h3>
                    <p>Connect with me on Linkedin</p>
                  </div>
              </Link>

              <Link className="flex mb-6 hover:text-primary" href={"https://github.com/sugoiServal"} target='_blank' >
                  <FaGithub className="mx-3 my-auto" size={35}/>
                  <div className="flex flex-col ">
                    <h3>Github</h3>
                    <p>Learn about my projects</p>
                  </div>
              </Link>

              <Link className="flex mb-3 hover:text-primary" href={"mailto: wli202@outlook.com"} target='_blank' >
                  <AiOutlineMail className="mx-3 my-auto" size={35}/>
                  <div className="flex flex-col ">
                    <h3>Mail</h3>
                    <p>wli202@outlook.com</p>
                  </div>
              </Link>

              <Link className="flex mb-3 hover:text-primary" href={CV_HREF} target='_blank' >
                  <BsFillPersonLinesFill className="mx-3 my-auto" size={35}/>
                  <div className="flex flex-col ">
                    <h3>Resume</h3>
                    <p>See my latest resume</p>
                  </div>
              </Link>

           


              <div className='col-span-2'>
                <form
                  action='/'
                  method='POST'
                  encType='multipart/form-data'
                >
                  {/* <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2'>Name</label>
                      <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        type='text'
                        name='name'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2'>
                        Phone Number
                      </label>
                      <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        type='text'
                        name='phone'
                      />
                    </div>
                  </div> */}
                  {/* <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='email'
                      name='email'
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='subject'
                    />
                  </div> */}
                  <div className='flex flex-col py-2 mt-4'>
                    <label className='text-sm py-2'>How do you think about the page?</label>
                    <textarea
                      className='border-2 rounded-lg p-3 border-gray-300'
                      rows='6'
                      name='message'
                    ></textarea>
                  </div>
                  <button className='w-full p-4 text-gray-100 mt-8'>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
