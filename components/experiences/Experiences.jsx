import React from 'react'
import ExpItem from './ExpItem'
import uottawa from '../../public/assets/experiences/UOttawa.png';
import udemy from '../../public/assets/experiences/Udemy.png';
import NRC from '../../public/assets/experiences/NRC.png';
import GXU from '../../public/assets/experiences/GXU.png';
import JOYData from '../../public/assets/experiences/JOYData.png';
import IIRCC from '../../public/assets/experiences/IIRCC.png';

export default function Experiences() {
  const udemyDesc = [
  ]

  const uoDesc = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti unde placeat adipisci harum. Culpa dolores aperiam,",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti unde placeat adipisci harum. Culpa dolores aperiam,",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti unde placeat adipisci harum. Culpa dolores aperiam,",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti unde placeat adipisci harum. Culpa dolores aperiam,",
  ]



  const NRCDesc = [
    "Did research and implementation on heavily constrained Vehicle Routing Problem with Time Window (VRPTW), and introduced a new approach to solve it with reinforcement learning(RL).",
    "Transformed the VRPTW into a Hierarchical RL problem. Designed and implemented the model with PyTorch. Implemented benchmark solution with Google OR-Tools library.",
    "Conduct experiments on NRC computing clusters (Unix, remote). ",
    "Continue to improve the model by model tuning and model structure refinement.",
    "Participated in group discussions, updated the research and dev progress, and maintained the code repository.",
    "Work was published at Canadian Conference on Artificial Intelligence 2021 🔗",
  ]

  const GXUDesc = [
  ]

  const JOYDataDesc = [
  ]
  const IIRCCDesc = [
  ]


  return (
  <div id='experience' className='w-full px-3 lg:px-0 pt-[40vh]'>
    <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8'>
      <div className='col-span-2'>
        <p className='py-2 uppercase text-xl tracking-widest text-primary'>
          Experience
        </p>
        <h2 className='py-4'>Who I've Done</h2>
      </div>
    </div>  

    <div className="max-w-[1240px] mx-auto mt-10"> 

    <ExpItem image={udemy}  
               title={"Self-taught Web Developer"}
               institute={"Udemy/ Youtube/ LeetCode"}
               institute2={"stackoverflow/ ChatGPT"}
               date={"Sep 2021 - Present"}
               description={"udemyDesc"}/> 

      <ExpItem image={uottawa}   
               title={"Master in Computer Science"}
               institute={"University of Ottawa"}
               date={"Sep 2019 - Jun 2022"}
               description={"uoDesc"}/> 

      <ExpItem image={NRC}  
               title={"Coop Intern"}
               institute={"National Research Council Canada"}
               date={"May 2020 - Dec 2020"}
               description={"NRCDesc"}/>

      <ExpItem image={GXU}   
                title={"Bachelor in Financial Mathematics (Minors in CS dept)"}
                institute={"Guangxi University"}
                date={"Sep 2014 - Jun 2019"}
                description={"GXUDesc"}/> 

      <ExpItem image={JOYData}   
                title={"Software Tester Intern"}
                institute={"Xiyue Intelligence Data, Shenzhen"}
                date={"May 2018 - Sep 2018"}
                description={"JOYDataDesc"}/> 

                
      <ExpItem image={IIRCC}  
                title={"Quant Developer Intern"}
                institute={"Hanley Investment Management (IIRCC), Wuhan"}
                date={"Jun 2017 - Sep 2017 "}
                description={"IIRCCDesc"}/> 
    </div>   

  </div>

  )
}
