import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about_waifu2x.png';

const About = () => {
  return (
    <div id='about' className='w-full px-7 lg:px-2 flex items-center py-16'>
      <div className='max-w-[1480px] m-auto md:grid grid-cols-4 gap-8'>
        <div className='col-span-3'>
          <p className='py-2 uppercase text-xl tracking-widest text-primary'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='pt-2 text-gray-600'>
          
          I am Wei (Evan) Li, a <b>Computer Science Master graduate</b> passionate about technologies, creativity and self-management.
          Currently, I specialize in three core areas of development:</p>
          <ol className='list-decimal py-2 pl-4 text-gray-600'>
            <li><b>Building APIs/websites</b> using <b>JavaScript/Java/Python frameworks.</b></li>
            <li>Creating <b>front-end UIs</b> with JavaScript frameworks.</li>
            <li>Conducting <b>Data Science exploration and Deep Learning experiments</b>.</li>
          </ol> 
          <p>Additionally, I have {"two"} years of experience in <b>C++</b> and am currently delving into <b>DevOps and Cloud</b> technologies.</p>
          <p className='py-4 md:py-2'>My journey into <b>web development</b> began in late 2020 when I set up and hosted my personal blog. Since then, I've been self-learning both front-end and back-end technologies, gaining hands-on experience through projects and certifications. I now possess a comprehensive understanding of the web application lifecycle, with practical knowledge in various aspects.</p>
          <p className='py-4 md:py-2'>Before web development, my background was primarily in <b>Data Analysis and Deep Learning</b> within the academic context. With a mixed background in <b>Mathematics, Statistics, and Computer Science</b>, I started coding in 2015, using languages like Python, R, and Matlab for Mathematical Modeling and Data Analysis. I did courses and research labs in Computer Science Department during my undergraduate studies and then completed my <b>Master's degree of Computer Science</b> in uOttawa concentrating on Deep Learning, accumulating about {"four"} years of experience in Deep Learning.</p>
          <p>I am currently learning <b>Kubernetes, Terraform and Golang</b>, and also diving deep into <b>Spring</b> and <b>Microservice</b>.</p>


          <h2 className='py-6 text-2xl'>If you would like to know me a bit more...</h2>
          <p className='py-4 md:py-2'> As an ENTJ/INTJ, I never fail to stay self-motivated, always welcome challenges and continuously push myself beyond the boundaries.</p> 
          <p>I embrace Minimalism. Mathmaticals education taught me about the notion of optimization, which I apply to various aspects of life, from my living and lifestyle, to my workflows, and most decision-making processes.</p>
          <p className='py-4 md:py-2'>Learning is my passion. I document thoroughly and regularly revisit my knowledge base. I believe that being a great developer involves not only performing operational tasks, but also anticipating potential requirements and problems, knowing available tools, and having a keen mind to decide on tool selection.  This approach provides me with confidence, creativity and sanity in problem-solving. </p>
          <p className='py-4 md:py-2'></p>
          


          <div className="mt-6">
            <Link href='/#projects'>
              <p className='py-1 w-[80%] text-gray-600 underline cursor-pointer hover:bg-gray-200 rounded-md '>
                Check out some of my latest projects.
              </p>
            </Link>

            <Link href='/#experience'>
              <p className='py-1 w-[80%] text-gray-600 underline cursor-pointer hover:bg-gray-200 rounded-md '>
              Check out my education and jobs experience.
              </p>
            </Link>

            <Link href='/#skills'>
              <p className='py-1 w-[80%] text-gray-600 underline cursor-pointer hover:bg-gray-200 rounded-md'>
                Check out my tech stack.
              </p>
            </Link>
          </div>
        </div>
        <Link href='https://github.com/sugoiServal' target='_blank' className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </Link>
      </div>
    </div>
  );
};

// "I specialize in three core areas of development:

// Building APIs using JavaScript/Java.
// Creating front-end UIs with JavaScript frameworks.
// Conducting Data Science exploration and Deep Learning experiments.
// Additionally, I have two years of experience in C++ and am currently delving into DevOps and Cloud technologies.

// My journey into web development began in late 2020 when I set up and hosted my personal blog. Since then, I've been self-learning both front-end and back-end technologies, gaining hands-on experience through projects and certifications. I now possess a comprehensive understanding of the web application lifecycle, with practical knowledge in various aspects.

// Before transitioning to web development, my background was primarily in Data Analysis and Deep Learning within an academic context. With a mixed background in Mathematics, Statistics, and Computer Science, I started coding in 2015, using languages like Python, R, and Matlab for Mathematical Modeling and Data Analysis. I pursued additional courses in Computer Science during my undergraduate studies and completed my Master's degree at uOttawa with a concentration in Deep Learning, accumulating a total of four years of experience in this field.

// I'm passionate about learning and believe that being a great developer involves not only performing operational tasks but also anticipating potential requirements and problems, exploring available tools, and making informed decisions on tool selection. I prioritize documentation and regularly revisit my knowledge base. This approach provides me with confidence, fosters creativity, and enhances problem-solving abilities.

// In life, I embrace Minimalism, finding joy in optimization across various aspects, from my living environment and lifestyle to my workflows and decision-making processes."


export default About;
