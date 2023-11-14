import React, { useState } from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub, FaPhoneAlt} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Link from 'next/link'
import {CV_HREF} from '../constants'

export default function Main() {
  const [acceptJob, setAcceptJob] = useState('open')
  const presentDate = () => {
    let date = new Date();
    const dateString = date !==null ? date.toLocaleString('en-US', { year: 'numeric', month: 'short' }) : null;
    return dateString;
  }
  const curDate = presentDate()
  return (
    <div id="main" className='w-full py-20 h-screen text-center'>
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center">
            <p className='hidden sm:block uppercase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING LEGENDARY TOGETHER.</p>
            <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Wei</span></h1>
            <h1 className='py-4 text-gray-700'>A Full-Stack Web Developer</h1>
            <p className='py-4 text-gray-600 max-w-[70%] mx-auto font-light'>I am a full-stack web developer with experience in building Web Servers, APIs, Front-End UXs, Testing, Machine Learning Models and Cloud/DevOps technologies.</p>

            <h2 className='py-4 text-2xl text-gray-700 font font-light'>I am currently <span className='text-primary border-b-2 border-primary'>{acceptJob}</span> to job opportunities. <span>{`(${curDate})`}</span></h2>

            <div className="flex my-10">
              <Link href={"https://www.linkedin.com/in/wei-li-5779b5230/"} target='_blank' className="icon p-2 sm:p-3 mx-3">
                <FaLinkedinIn size={30}/>
              </Link>

              <Link className="icon p-2 sm:p-3 mx-3" target='_blank' href={"https://github.com/sugoiServal"}>
                <FaGithub size={30}/>
              </Link>

              <Link className="icon p-2 sm:p-3 mx-3" target='_blank' href={"mailto: wli202@outlook.com"}>
                <AiOutlineMail size={30}/>
              </Link>

              <Link className="icon p-2 sm:p-3 mx-3" target='_blank' href={CV_HREF}>
                <BsFillPersonLinesFill size={30}/>
              </Link> 

            </div>
        </div>
        
    </div>
  )
}
