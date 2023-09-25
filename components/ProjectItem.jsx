import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, tech, projectInfoUrl, liveUrl, githubUrl, icon}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:scale-105 ease-in duration-300'>
      <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/'/> 
      <div className='w-[90%] lg:w-[70%] mx-auto hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-lg sm:text-2xl  text-white tracking-wider text-center'>{title}</h3>
          <h className='text-sm sm:text-base mt-2 sm:mt-4 pb-4 pt-2 font-semibold text-white text-center'>{tech}</h>
          <div className="flex mt-2 sm:mt-4 justify-center">
            {liveUrl  && <Link href={liveUrl} target='_blank'>
              <p className='project-btn text-sm w-16 sm:text-base sm:w-20 sm:py-2 sm:mx-4'>Live</p>
            </Link>}

            {githubUrl  && <Link href={githubUrl} target='_blank'>
              <p className='project-btn text-sm w-16 sm:text-base sm:w-20 sm:py-2 sm:mx-4'>Github</p>
            </Link>}

            {projectInfoUrl  && <Link href={projectInfoUrl} target='_blank'>
                <p className='project-btn text-sm w-16 sm:text-base sm:w-32 sm:py-2 sm:mx-4 '>More Info</p>
            </Link>}
          </div>
      </div>
    </div>
  )
}

export default ProjectItem