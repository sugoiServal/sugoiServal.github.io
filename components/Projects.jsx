import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
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
import micro from '../public/assets/projects/micro.png'
import RSS from '../public/assets/projects/RSS.png'
import ProjectItem from './ProjectItem';


const Projects = () => {
  const [searchText, setSearchText] = useState('')
  const projects = [
    {
      title:'SpringCloud-Microservice-Demos',
      backgroundImg:micro,
      description:"A collection of common web middlewares implemented as microservices in Spring Boot to demonstrate their usage.",
      date: new Date(2023, 10),
      projectInfoUrl:null,
      liveUrl:null,
      githubUrl:"https://github.com/sugoiServal/SpringCloud-Microservice-Demo",
      tech:'Elasticsearch, Spring Cloud Netflix Eureka, Spring Cloud Gateway, Spring Data Redis, Kafka Client, Spring AMQP (RabbitMQ), gRPC-spring-boot',
    },
    {
      title:'Golang Web demo: RSS Aggregator',
      backgroundImg:RSS,
      description:"Exposing Rest APIs for a User Access Control and a RSS Feed Subscription/Fetching Service, persisting data to PostgreSQL.",
      date:new Date(2023, 9),
      projectInfoUrl:null,
      liveUrl:null,
      githubUrl:"https://github.com/sugoiServal/go-rss",
      tech:'Golang, Go net, Chi router, Sqlc, JWT auth, PostgreSQL',
    },
    {
      title:'Django MVT StudyRoom',
      backgroundImg:studyRoom,
      description:"A Discord style Study Group Appliction to explore Django MVT in Python.",
      date:new Date(2023, 7),
      projectInfoUrl:null,
      liveUrl:null,
      githubUrl:"https://github.com/sugoiServal/DjangoMVTStudyRoom",
      tech:'Django MVT, Admin, ORM, Template, Authentication and Session',
    },
    {
      title:'Crypto Dashboard',
      backgroundImg:crypto_show,
      description:"A pure Front-end Cryptocurrency Dashboarding Application using CoinGecko Api and React.",
      date:new Date(2023, 6),
      projectInfoUrl:null,
      liveUrl:"https://cryptocore-42535.web.app/",
      githubUrl:"https://github.com/sugoiServal/Crypto-Core",
      tech:'CoinGecko Api, React, Tailwind, react-sparklines, react-chartjs-2',
    },
    {
      title:'Spring Boot Student Grade APIs',
      backgroundImg:springAPI,
      description:"A Spring Boot Rest demo project, providing groups of well-documented APIs to CRUD student's grade data to MySQL, access control with Spring Security.",
      date:new Date(2023, 4),
      projectInfoUrl:null,
      liveUrl:"http://54.81.94.17:8080/swagger-ui/index.html#/",
      githubUrl:"https://github.com/mlpppp/Grade-APIs",
      tech:'Java, Spring Boot Rest, JPA, MySQL, Spring Security(JWT auth), OpenAPI, mockmvc/JUnit, EC2/Docker',
    },
    {
      title:'Nodejs/React Email Survey Campaign Service',
      backgroundImg:survey_show,
      description:"A paid service allows clients to buy credits, and spend credits to start Email Survey Campaign: sending templated Emails to a large pool of receivers",
      date:new Date(2022, 9),
      projectInfoUrl:null,
      liveUrl:"https://hub.docker.com/repository/docker/mlpppp/survey-collector",
      githubUrl:"https://github.com/sugoiServal/survey-collector",
      tech:'Express, MongoDB, JWT, Oauth:Google/Facebook/Github, Stripe API, Twilio SendGrid API, React/Bootstrap, reCAPTCHA, Github Action',
    },
    {
      title:'React Project Management App',
      backgroundImg:prj,
      description:"A Jire style Group Project Management appliction implemented with React as the front-end and Firebase as the backend.",
      date:new Date(2022, 6),
      projectInfoUrl:null,
      liveUrl:"https://project-management-b274f.firebaseapp.com/",
      githubUrl:"https://github.com/mlpppp/Project-Done",
      tech:'React, Vanilla CSS, Firebase: Firestore Database, Storage, Authentication',
    },
    {
      title:'Object Scale Awaring SLAM System',
      backgroundImg:slam,
      description:"A project to provides ORB-SLAM system with Absolute Scale by adding a Mask R-CNN Object Detector and a Scale Estimator to the system.",
      date:new Date(2021, 12),
      projectInfoUrl:null,
      liveUrl:"https://www.youtube.com/watch?v:c_3gBXLABsc",
      githubUrl:"https://github.com/sugoiServal/ScaleORB-SLAM",
      tech:'C++, OpenCV, Cmake, Python, Pandas, Matplotlib, Mask R-CNN Object Detection',
    },
    {
      title:'Hierarchical Reinforcement Learning for VRPTW',
      backgroundImg:hierRL,
      description:"An algorithm proposed to solve Vehicle Routing Problem with Time Windows (VRPTW) through a Hierarchical Reinforcement Learning framework.",
      date:new Date(2020, 12),
      projectInfoUrl:null,
      liveUrl:"https://caiac.pubpub.org/pub/3mel4x9p/release/1"  ,
      githubUrl:"https://github.com/sugoiServal/hierarchical_vrptw",  /* TODO */
      tech:'Pytorch, GPN, Reinforcement Learning Model, Operational Researching Problem, NP-hard, Google OR-Tools',
    },
    {
      title:'Explore BERT, HS-LSTM & ID-LSTM Model in Hate Speech Detection Task',
      backgroundImg:hateSpeech,
      description:"An experimental exploration to solve Offensive Language Identification Problem (Natural Language Classificaion) through reinforcement learning based framework, comparing different structures like LSTMs and BERT.",
      date:new Date(2020, 4),
      projectInfoUrl:null,
      liveUrl:"https://github.com/sugoiServal/UO-19-ma/blob/master/2.5386_Natural_Language_Processing/%5BReinforcementLSTM%5DhateSpeechDetection_project/project_report.pdf",
      githubUrl:"https://github.com/sugoiServal/UO-19-ma/tree/master/2.5386_Natural_Language_Processing/%5BReinforcementLSTM%5DhateSpeechDetection_project",
      tech:'Hate Speech Detection, Natural Language Processing Model, BERT, Reinforcement Learning, Pytorch, Matplotlib',
    },
    {
      title:'Exploration of Adversarial Perturbation in Deep Learning',
      backgroundImg:adv,
      description:"An experimental exploration to find out the relationship between Data Complexity, Model Complexity and the extend of Universal Adversarial Perturbation in Deep Learning Models.",
      date:new Date(2019, 12),
      projectInfoUrl:null,
      liveUrl:"https://github.com/sugoiServal/An-Exploration-of-Universal-Adversarial-Perturbation-in-Deep-Learning/blob/master/5138_report_group_10.pdf",
      githubUrl:"https://github.com/sugoiServal/An-Exploration-of-Universal-Adversarial-Perturbation-in-Deep-Learning",
      tech:'Deep Learning Security, Adversarial Attack, Pytorch, Matplotlib',
    },
    {
      title:"Predict'em All: Predict Rare Pokemons",
      backgroundImg:predit,
      description:"Utilize various Feature Engineering techiniques and Data Analysis Algorithms to predict the next appearing location of rare Pokemon! (Pokemon Go)",
      date:new Date(2019, 12),
      projectInfoUrl:null,
      liveUrl:"https://github.com/sugoiServal/UO-19-ma/blob/master/1.5155_Machine_Learning/%5BDataSciencePipeline%5DPredictRarePokemons_Project/csi5155%20project%20report.pdf",
      githubUrl:"https://github.com/sugoiServal/UO-19-ma/tree/master/1.5155_Machine_Learning/%5BDataSciencePipeline%5DPredictRarePokemons_Project",
      tech:'Data Feature Engineering, Machine Learning Algorithms, Scikit Learn, Matplotlib',
    },

  ]
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-3 pt-[20vh]'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <form >
            <input type="text"
              onChange={(e)=>setSearchText(e.target.value)} 
              placeholder='Search a skill'
              className='w-[25%] bg-bak px-4 py-2 mt-6 rounded-lg border-[#4a5361]
              border shadow-lg'/>
          </form>
        <div className='mt-8 grid md:grid-cols-2 gap-8'>
        {projects && projects
          .filter((project)=>{
            if(!searchText) {
              return project;
            } else if (project.tech.toLowerCase().includes(searchText.toLowerCase())) {
              return project;
            }
          })
          .map((project)=>(
            <ProjectItem
              key={project.title}
              title={project.title}
              backgroundImg={project.backgroundImg}
              description={project.description}
              date={project.date}
              projectInfoUrl={project.projectInfoUrl}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              tech={project.tech}
              searchText={searchText}
            />
        ))}
  
        </div>
      </div>
    </div>
  );
};

export default Projects;
