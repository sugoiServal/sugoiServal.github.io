import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import NavLogo from '../public/assets/navLogo.png'
import {CV_HREF} from '../constants'
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: "#ecf0f3" }}
      className={`fixed z-[100] h-11 sm:h-20  w-full ${
        shadow
        ? 'bottom-0 sm:top-0 shadow-xl ease-in-out duration-300'
        : 'top-0'
      }` 

      }
    >
      <div className='flex justify-between items-center w-full h-full px-16 just'>
        <Link href='/' className="relative h-11 w-11 sm:w-20 sm:h-20">
          <Image src={NavLogo} alt='/' fill={true}/>
        </Link>
        <div className="md:hidden hover:opacity-30" onClick={handleNav}>
          <AiOutlineMenu size={25}/>
        </div>
        <ul className='hidden md:flex'>
            <Link href='/#about'>
              <li className='nav-item'>about</li>
            </Link>
            <Link href='/#experience'>
              <li className='nav-item'>experience</li>
            </Link>
            <Link href='/#skills'>
              <li className='nav-item'>skills</li>
            </Link>
            <Link href='/#badges'>
              <li className='nav-item'>badges</li>
            </Link>
            <Link href='/#projects'>
              <li className='nav-item'>projects</li>
            </Link>
            <Link href='/#contact'>
              <li className='nav-item'>contact</li>
            </Link>                 
          </ul>
      </div>

      {/* Mobile Menu */}

      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/50":""}>  {/* backdrop */}
          <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500":"fixed left-[-100%]"}>   {/* white container */}
            <div className="flex flex-col h-[80%]">
              <div className="flex flex-col">
                <div className="flex w-full items-center justify-between">  {/* header of container */}
                  <Image src='/assets/navLogo.png' width={50} height={50}/>
                  <div className={nav ? "icon" : "hidden"} onClick={handleNav}>
                    <AiOutlineClose/>
                  </div>
                </div>
                <p className='border-b border-gray-300 my-4 uppercase w-[85%] md:w-[90%] py-4 text-xs sm:text-sm'>Let's build something legendary together</p>
              </div>
              <div className="uppercase py-4 flex-col"> {/* menu */}
                <ul>
                  <Link href='/#about'>
                    <li className='nav-item-menu' onClick={handleNav}>about</li>
                  </Link>
                  <Link href='/#experience'>
                    <li className='nav-item-menu' onClick={handleNav}>experience</li>
                  </Link>
                  <Link href='/#skills'>
                    <li className='nav-item-menu' onClick={handleNav}>skills</li>
                  </Link>
                  <Link href='/#badges'>
                    <li className='nav-item-menu' onClick={handleNav}>badges</li>
                  </Link>
                  <Link href='/#projects'>
                    <li className='nav-item-menu' onClick={handleNav}>projects</li>
                  </Link>
                  <Link href='/#contact'>
                    <li className='nav-item-menu' onClick={handleNav}>contact</li>
                  </Link>
                </ul>
              </div> 
              
              <div className="mt-auto">
                <p className='uppercase tracking-wider text-bold text-[#5651e5]'>Let's connect!</p>
                <div className="flex flex-row items-center justify-start my-5 w-[100%]">
                  <Link href={"https://www.linkedin.com/in/wei-li-5779b5230/"} target='_blank' className="icon-sm mx-auto">
                    <FaLinkedinIn />
                  </Link>

                  <Link className="icon-sm  mx-auto" target='_blank' href={"https://github.com/sugoiServal"}>
                    <FaGithub />
                  </Link>

                  <Link className="icon-sm mx-auto" target='_blank' href={"mailto: wli202@outlook.com"}>
                    <AiOutlineMail />
                  </Link>

                  <Link className="icon-sm mx-auto" target='_blank' href={CV_HREF}>
                    <BsFillPersonLinesFill />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
