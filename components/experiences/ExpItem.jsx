import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UO_TRANSCRIPT } from '../../constants'
import { GXU_TRANSCRIPT } from '../../constants'

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
            <li>
              Focusing on Back-end development, Front-end development, DevOps, and Cloud Technologies, gradually diving deep into a field and/or exploring new frontiers
            </li>
            <li>Keeping a balance between self-driven projects, studying theory, following material and reviewing.  </li>  
            <li>Keeping every key note/ref/cheatsheet of my learning on a GitHub repo for a quick revisit/landing on the next project in the future.</li>  
            <li><Link className='font-bold text-primary hover:border-b-2 border-primary' href={"/#skills"}>{"Check out what I am able to do."}</Link></li>
          </ul>  
        }

        {/* Uottawa */}
        {description === "uoDesc" && 
          <ul className='list-disc pl-8'> 
            <li>GPA: A/A+ <span className='font-bold text-primary hover:border-b-2 border-primary'><Link href={UO_TRANSCRIPT} target='_blank'>{"[Transcript]"}</Link></span></li>  
            <li>Did research and development on <span className='font-bold text-primary hover:border-b-2 border-primary'><Link href={"https://github.com/sugoiServal/ScaleORB-SLAM"} target='_blank'>{"Extended ORB-SLAM System with Scale Awareness"}</Link></span> (1.5+ years in <b>C++ 11/ OpenCV</b>)
            </li>
            <li>Academic experience in <b>NLP, Computer Vision, Reinforcement Learning, Meta Learning, and Data Science</b></li>
            <li>Solid Researching and Academic Writing skill.</li>
            <li>Work collaboratively in most course projects' team.</li>
            <li>Recipient of <b>Vector Scholarship in AI (2019)</b></li>
          </ul>  
        }

        {/* NRC */}
        {description === "NRCDesc" && 
          <ul className='list-disc pl-8'>   
            <li>Did research and implementation on heavily constrained Vehicle Routing Problem with Time Window (<b>VRPTW</b>), and <b>introduced a new approach</b> to solve it with reinforcement learning(RL).</li>
            <li>Transformed the VRPTW into a Hierarchical RL problem. <b>Designed and implemented</b> the model with <b>PyTorch</b>. Implemented benchmark solution with <b>Google OR-Tools library</b>.</li>
            <li><b>Conduct experiments</b> on NRC computing clusters (Unix, remote). </li>
            <li>Continue to improve the model by <b>model tuning and structure refinement</b>.</li>
            <li>Participated in group discussions, updated the research and dev progress, and maintained the code repository.</li>
            <li>Work was published at <span className='font-bold text-primary hover:border-b-2 border-primary'><Link href={"https://caiac.pubpub.org/pub/3mel4x9p/release/1"} target='_blank'>{"Canadian Conference on Artificial Intelligence 2021 🔗"}</Link></span></li>
          </ul>  
        }
      
        {/* GXU */}
        {description === "GXUDesc" && 
          <ul className='list-disc pl-8'>  
            <li>GPA: 92/100 <span className='font-bold text-primary hover:border-b-2 border-primary'><Link href={GXU_TRANSCRIPT} target='_blank'>{"[Transcript]"} </Link></span></li> 
            <li><b>Top-ranked</b> student in the Mathematics & Information Department</li> 
            <li>Completed multiple <b>core courses in Computer Science Department</b></li> 
            <li>Participated in an <b>AI researches lab</b> in the Computer Science Department for about <b>two years</b>. Participated in a project about identifying children's dysarthria symptoms from their speeches.</li>
            <li>Received a <b>referral from the head professor</b> of the lab.</li>
          </ul>  
        }
    
        {/* JOYData */}
        {description === "JOYDataDesc" && 
          <ul className='list-disc pl-8'>   
            <li>Familized a newly developed Smart Traffic Light product and applied <b>systematic tests using a GUI testing portal</b>. </li>
            <li>Cleaned bulk testing data and generated functional reports to support the QA process.</li>
            <li><b>Prepared for products exhibition in an Expo</b></li>
          </ul>  
        }

        {/* IIRCC  */}
        {description === "IIRCCDesc" && 
          <ul className='list-disc pl-8'>   
            <li>Learned the basics of <b>Algorithm Trading</b> and gathering report about the learning. </li>
            <li>Implemented investment strategies over mocking stock data with a <b>MATLAB-based software</b>.</li>
            <li>Particitate in daily office operation with <b>MS office</b>.</li>
          </ul>  
        }
    </div>
  </div>
  )
}
