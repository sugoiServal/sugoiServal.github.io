import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import hierRL from '../public/assets/projects/HierRL.png'
import slam from '../public/assets/projects/SLAM.png'
import adv from '../public/assets/projects/adv.png'
import hateSpeech from '../public/assets/projects/hateSpeech.png'
import prj from '../public/assets/projects/prj.png'
import springAPI from '../public/assets/projects/springAPI.png'
import predit from '../public/assets/projects/predit.png'
import survey_show from '../public/assets/projects/survey_show.png'
import crypto_show from '../public/assets/projects/crypto_show.png'
import studyRoom from '../public/assets/projects/studyRoom.png'
import ProjectItem from './ProjectItem';


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-3 pt-[20vh]'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='mt-8 grid md:grid-cols-2 gap-8'>
          {/* <ProjectItem
            title='Property Finder'
            backgroundImg={propertyImg}
            projectInfoUrl='/prj/property'
            liveUrl={null}
            githubUrl={null}
            tech='React JS'
          /> */}
          <ProjectItem
            title='Django MVT StudyRoom'
            backgroundImg={studyRoom}
            // projectInfoUrl='/prj/crypto'
            // liveUrl={"https://cryptocore-42535.web.app/"}
            githubUrl={"https://github.com/sugoiServal/DjangoMVTStudyRoom"}
            tech='Django MVT, Admin, ORM, Template, Authentication and Session'

          />

          <ProjectItem
            title='Crypto Dashboard'
            backgroundImg={crypto_show}
            // projectInfoUrl='/prj/crypto'
            liveUrl={"https://cryptocore-42535.web.app/"}
            githubUrl={"https://github.com/sugoiServal/Crypto-Core"}
            tech='CoinGecko Api, React, Tailwind, react-sparklines, react-chartjs-2'

          />
      
          <ProjectItem
            title='Nodejs/React Email Survey Campaign Service'
            backgroundImg={survey_show}
            // projectInfoUrl='/prj/netflix'
            liveUrl={"https://hub.docker.com/repository/docker/mlpppp/survey-collector"}
            githubUrl={"https://github.com/sugoiServal/survey-collector"}
            tech='A Paid API Service, Express, MongoDB, JWT, Oauth:Google/Facebook/Github, Stripe API, Twilio SendGrid API, React/Bootstrap, reCAPTCHA, Github Action'
          />

          <ProjectItem
            title='Spring Boot Student Grade APIs'
            backgroundImg={springAPI}
            // projectInfoUrl='/prj/twitch'
            liveUrl={"http://54.81.94.17:8080/swagger-ui/index.html#/"}
            githubUrl={"https://github.com/mlpppp/Grade-APIs"}
            tech='Java, Spring Boot Rest, JPA, MySQL, Spring Security(JWT auth), OpenAPI, mockmvc/JUnit, EC2/Docker'
          />

          <ProjectItem
            title='React Project Management App'
            backgroundImg={prj}
            projectInfoUrl=''
            liveUrl={"https://project-management-b274f.firebaseapp.com/"}
            githubUrl={"https://github.com/mlpppp/Project-Done"}
            tech='React, Vanilla CSS, Firebase Backend: Firestore Database, Storage, Authentication'
          />

          <ProjectItem
            title='Object Scale Awaring SLAM System'
            backgroundImg={slam}
            projectInfoUrl=''
            liveUrl={"https://www.youtube.com/watch?v=c_3gBXLABsc"}
            githubUrl={"https://github.com/sugoiServal/ScaleORB-SLAM"}
            tech='C++, OpenCV, Cmake, Python, Pandas, Matplotlib, Mask R-CNN Object Detection'
          />

          <ProjectItem
            title='Hierarchical Reinforcement Learning for VRPTW'
            backgroundImg={hierRL}
            projectInfoUrl={null}
            liveUrl={"https://caiac.pubpub.org/pub/3mel4x9p/release/1"}  
            githubUrl={"https://github.com/sugoiServal/hierarchical_vrptw"}  /* TODO */
            tech='Pytorch, GPN, Reinforcement Learning Model, Operational Researching Problem, NP-hard, Google OR-Tools'
          />
          <ProjectItem
            title='Explore BERT, HS-LSTM & ID-LSTM Model in Hate Speech Detection Task'
            backgroundImg={hateSpeech}
            projectInfoUrl={null}
            liveUrl={"https://github.com/sugoiServal/UO-19-ma/blob/master/2.5386_Natural_Language_Processing/%5BReinforcementLSTM%5DhateSpeechDetection_project/project_report.pdf"}
            githubUrl={"https://github.com/sugoiServal/UO-19-ma/tree/master/2.5386_Natural_Language_Processing/%5BReinforcementLSTM%5DhateSpeechDetection_project"}
            tech='Hate Speech Detection, Natural Language Processing Model, BERT, Reinforcement Learning, Pytorch, Matplotlib'
          />
          <ProjectItem
            title='Exploration of Adversarial Perturbation in Deep Learning'
            backgroundImg={adv}
            projectInfoUrl={null}
            liveUrl={"https://github.com/sugoiServal/An-Exploration-of-Universal-Adversarial-Perturbation-in-Deep-Learning/blob/master/5138_report_group_10.pdf"}
            githubUrl={"https://github.com/sugoiServal/An-Exploration-of-Universal-Adversarial-Perturbation-in-Deep-Learning"}
            tech='Deep Learning Security, Adversarial Attack, Pytorch, Matplotlib'
          />
          <ProjectItem
            title="Predict'em All: Predict Rare Pokemons"
            backgroundImg={predit}
            projectInfoUrl={null}
            liveUrl={"https://github.com/sugoiServal/UO-19-ma/blob/master/1.5155_Machine_Learning/%5BDataSciencePipeline%5DPredictRarePokemons_Project/csi5155%20project%20report.pdf"}
            githubUrl={"https://github.com/sugoiServal/UO-19-ma/tree/master/1.5155_Machine_Learning/%5BDataSciencePipeline%5DPredictRarePokemons_Project"}
            tech='Columnar Data Feature Engineering, Machine Learning Algorithms, Scikit Learn, Matplotlib'
          />


        </div>
      </div>
    </div>
  );
};

export default Projects;
