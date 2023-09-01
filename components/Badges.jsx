import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import GridItem from './GridItem';
import GRETest from '../public/assets/badges/GRE.png';
import toefl from '../public/assets/badges/toefl.png';
import vector from '../public/assets/badges/vector.png';
import awsSaa from '../public/assets/badges/aws_saa.png';

export default function Badges() {
  const handleCopy = () => {
    navigator.clipboard.writeText("6E4LQG614NB41GWE");
    alert("Validation Number Copied to Clipboard. ");
  }
  return (
        <div id='badges' className='w-full lg:h-screen pt-[20vh]'>
          <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
              badges
            </p>
            <h2 className='py-4'>What I've Earned</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                      <Image src={GRETest} width={270} height='270px' alt='/' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                      <h3>{"ETS GRE test"}</h3>
                      <p className='mb-2 font-semibold'>Aug 26, 2016</p>
                      <p>Verbal: 157/76%</p>
                      <p>Quantitative: 167/91%</p>
                      <p>Analytical Writing: 3.5/41%</p>
                  </div>
                </div>
              </div>


              <div className='p-6
               shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                      <Image src={toefl} width='64px' height='64px' alt='/' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                      <h3>{"ETS TOEFL test"}</h3>
                      <p className='mb-2 font-semibold'>Oct 20, 2018</p>
                      <p>Overall: 104</p>
                      <p>Reading: 27</p>
                      <p>Listening: 30</p>
                      <p>Speaking: 23</p>
                      <p>Writing: 24</p>
                  </div>
                </div>
              </div>
              

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                      <Image src={vector} width='64px' height='64px' alt='/' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                      <h3>{"Vector Scholarship in AI(2019)"}</h3>
                  </div>
                </div>
              </div>

              
              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                      <Image src={awsSaa} width='64px' height='64px' alt='/' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                      <h3>{"AWS Certified Solutions Architect - Associate (SAA)"}</h3>
                      <p className='mb-2 font-semibold'>Jul 01, 2023</p>
                      <p>Validation Number:</p>
                      <p className='mb-2 cursor-pointer px-2 border-dashed border-2 border-black  hover:border-primary hover:scale-105 ease-in duration-200' onClick={handleCopy}>6E4LQG614NB41GWE</p>
                      <p>Validate At:</p>
                      <Link className='hover:border-b-2 border-primary' href="https://aws.amazon.com/verification" target='_blank' >https://aws.amazon.com/verification</Link>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </div>

  )
}
