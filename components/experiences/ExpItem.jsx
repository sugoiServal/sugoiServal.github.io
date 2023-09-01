import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ExpItem({image, title, institute, institute2, date, description}) {
  return (
  <div className="exp-card flex flex-col sm:grid sm:grid-cols-3 items-center">
    <div className="col-span-1 exp-institute-card flex flex-row items-center mx-auto">
      <div className="w-[30%]">
        <Image src={image} width={100} height={100}></Image>
      </div>
      <div className="w-[70%] text-center">
        <p className='mb-5 font-bold text-primary text-xl'>{title}</p>
        <p className='font-bold'>{institute}</p>
        {institute2 && <p className=' font-bold'>{institute2}</p>}
        <p className='mt-4'>{date}</p>
      </div>
    </div>
    <div className="items-center py-5 row col-span-2">
      
        {/* Udemy */}
        {description === "udemyDesc" && 
          <ul className='list-disc pl-8'>   
            <li>Did research and development on Extended ORB-SLAM System with Scale Awareness (C++11, OpenCV)
            </li>
          </ul>  
        }

        {/* Uottawa */}
        {description === "uoDesc" && 
          <ul className='list-disc pl-8'> 
            <li>GPA: A/A+ <span className='font-bold text-primary hover:border-b-2 border-primary'><Link href={"/"} target='_blank'>{"[Transcript]"}</Link></span></li>  
            <li>Did research and development on Extended ORB-SLAM System with Scale Awareness (more than 1.5 years experience of C++ 11/ OpenCV)
            </li>
            <li>Academic experience in NLP, Computer Vision, Reinforcement Learning, Meta Learning, and Data Science</li>
            <li>Solid Researching and Academic Writing skill.</li>
            <li>Work collaboratively in most course projects' team.</li>
            <li>Recipient of Vector Scholarship in AI (2019)</li>
          </ul>  
        }

        {/* NRC */}
        {description === "NRCDesc" && 
          <ul className='list-disc pl-8'>   
            <li>Did research and implementation on heavily constrained Vehicle Routing Problem with Time Window (VRPTW), and introduced a new approach to solve it with reinforcement learning(RL).</li>
            <li>Transformed the VRPTW into a Hierarchical RL problem. Designed and implemented the model with PyTorch. Implemented benchmark solution with Google OR-Tools library.</li>
            <li>Conduct experiments on NRC computing clusters (Unix, remote). </li>
            <li>Continue to improve the model by model tuning and model structure refinement.</li>
            <li>Participated in group discussions, updated the research and dev progress, and maintained the code repository.</li>
            <li>Work was published at <span className='font-bold text-primary hover:border-b-2 border-primary'><Link href={"https://caiac.pubpub.org/pub/3mel4x9p/release/1"} target='_blank'>{"Canadian Conference on Artificial Intelligence 2021 🔗"}</Link></span></li>
          </ul>  
        }
      
        {/* GXU */}
        {description === "GXUDesc" && 
          <ul className='list-disc pl-8'>  
            <li>GPA: 92/100 <span className='font-bold text-primary hover:border-b-2 border-primary'><Link href={"/"} target='_blank'>{"[Transcript]"} </Link></span></li> 
            <li>Top ranking student in the Mathematical department</li> 
            <li>Completed multiple core courses in Computer Science Department</li> 
            <li>Participated in an AI researches lab in the Computer Science Department for two years. Participated in a project about identifying children's dysarthria symptoms from their speeches.</li>
            <li>Received a referral from the head professor of the lab.</li>
          </ul>  
        }
    
        {/* JOYData */}
        {description === "JOYDataDesc" && 
          <ul className='list-disc pl-8'>   
            <li>Familized a newly developed Smart Traffic Light product and applied systematic tests using a GUI testing portal. </li>
            <li>Cleaned bulk testing data and generated functional reports to support the QA process.</li>
            <li>Prepared for an Expo for the products.</li>
          </ul>  
        }

        {/* IIRCC  */}
        {description === "IIRCCDesc" && 
          <ul className='list-disc pl-8'>   
            <li>Learned the basics of Algorithm Trading and gathering report about the learning. </li>
            <li>Implemented investment strategies to mocking stock data with a MATLAB-based software.</li>
            <li>Particitate in daily office operation with MS office.</li>
          </ul>  
        }
    </div>
  </div>
  )
}
