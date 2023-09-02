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
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-16 just'>
        <div className="md:hidden hover:opacity-30" onClick={handleNav}>
          <AiOutlineMenu size={25}/>
        </div>
        <Link href='/'>
          <Image src={NavLogo} alt='/' width="75" height="125"/>
        </Link>
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
          <div className="flex w-ful items-center justify-between">  {/* header of container */}
            <div className="">
              <Image src='/assets/navLogo.png' width={50} height={50}/>
            </div>
            <div className="icon" onClick={handleNav}>
              <AiOutlineClose/>
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">  {/* text below header */}
            <p className='uppercase w-[85%] md:w-[90%] py-4'>Let's build something legendary together</p>
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
          <div className="pt-40">
            <p className='uppercase tracking-wider text-bold text-[#5651e5]'>Let's connect!</p>
            <div className="flex items-center justify-start my-5 w-full sm:w-[80]">
              <Link href={"https://www.linkedin.com/in/wei-li-5779b5230/"} target='_blank' className="icon mx-3">
                <FaLinkedinIn />
              </Link>

              <Link className="icon mx-3" target='_blank' href={"https://github.com/sugoiServal"}>
                <FaGithub />
              </Link>

              <Link className="icon mx-3" target='_blank' href={"mailto: wli202@outlook.com"}>
                <AiOutlineMail />
              </Link>

              <Link className="icon mx-3" target='_blank' href={CV_HREF}>
                <BsFillPersonLinesFill />
              </Link>
 

            </div>

          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
