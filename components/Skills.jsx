import Image from 'next/image';
import React from 'react';
import GridItem from './GridItem';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png'
import AWSIcon from '../public/assets/skills/aws.png';
import cplusplus from '../public/assets/skills/cplusplus.png';
import docker from '../public/assets/skills/docker.png';
import django from '../public/assets/skills/django.png';
import git from '../public/assets/skills/git.png';
import gitlab from '../public/assets/skills/gitlab.png';
import go from '../public/assets/skills/go.png';
import jire from '../public/assets/skills/jire.jpg';
import k8s from '../public/assets/skills/k8s.png';
import matplotlib from '../public/assets/skills/matplotlib-tutorial.png';
import mongo from '../public/assets/skills/mongo.png';
import mysql from '../public/assets/skills/mysql.png';
import nltk from '../public/assets/skills/nltk.png';
import node from '../public/assets/skills/node.png';
import opencv from '../public/assets/skills/opencv-logo-64x64.png';
import python from '../public/assets/skills/python.png';
import redis from '../public/assets/skills/redis.png';
import torch from '../public/assets/skills/torch.jpg';
import ts from '../public/assets/skills/ts.jpg';
import bash from '../public/assets/skills/bash.png';
import cmake from '../public/assets/skills/newAss/cmake.png';
import GraphQL from '../public/assets/skills/newAss/graphQL.png';
import jenkins from '../public/assets/skills/newAss/jenkins.png';
import junit from '../public/assets/skills/newAss/junit.png';
import JWTImg from '../public/assets/skills/newAss/JWT.png';
import Matlab_Logo from '../public/assets/skills/newAss/Matlab_Logo.png';
import Oauth_logo from '../public/assets/skills/newAss/Oauth_logo.svg';
import orLogo from '../public/assets/skills/newAss/orLogo.png';
import postman from '../public/assets/skills/newAss/postman.jpg';
import PowerShell from '../public/assets/skills/newAss/PowerShell.png';
import pytest from '../public/assets/skills/newAss/pytest.svg';
import rest from '../public/assets/skills/newAss/rest.webp';
import sklearn from '../public/assets/skills/newAss/sklearn.png';
import springBoot from '../public/assets/skills/newAss/springBoot.png';
import stripe from '../public/assets/skills/newAss/stripe_logo_icon_167962.png';
import webhook from '../public/assets/skills/newAss/webhook.png';
import java from '../public/assets/skills/java.png';
import sql from '../public/assets/skills/SQL.svg';




const Skills = () => {
  return (
    <div id='skills' className='w-full pt-[20vh] px-3'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>

          {/* Web UI Dev */}
        <h3 className='mt-8 mb-3'>Web UI Dev</h3>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
          <GridItem image={Html} skill="HTML"/>
          <GridItem image={Css} skill="CSS"/>
          <GridItem image={ReactImg} skill="React"/>
          <GridItem image={NextJS} skill="NextJS"/>
          <GridItem image={Tailwind} skill="Tailwind"/>
        </div>

          {/* Server Dev*/}
        <h3 className='mt-8 mb-3'>Server Dev</h3>
        <div className='grid grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-8'>
          <GridItem image={node} skill="Nodejs"/>
          <GridItem image={springBoot} skill="Spring Boot"/>
          <GridItem image={django} skill="Django"/>

        </div>

          {/* Web Tools */}
        <h3 className='mt-8 mb-3'>Web Tools</h3>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>   
          <GridItem image={rest} skill="Rest API"/>
          <GridItem image={GraphQL} skill="GraphQL"/> 
          <GridItem image={webhook} skill="Webhook"/>
          <GridItem image={JWTImg} skill="JWT auth"/>
          <GridItem image={Oauth_logo} skill="OAuth 2"/>
          <GridItem image={stripe} skill="Stripe Online Billing"/>
        </div>

          {/* QA */}
  
        <h3 className='mt-8 mb-3'>QA Tools</h3>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>   
          <GridItem image={postman} skill="Postman"/>
          <GridItem image={junit} skill="JUnit"/>
          <GridItem image={pytest} skill="Pytest"/>
        </div>

          {/* Programming/Scriping Languages */}
        <h3 className='mt-8 mb-3'>Programming/Scriping Languages</h3>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>  
          <GridItem image={java} skill="Java"/>
          <GridItem image={Javascript} skill="JavaScript"/>
          <GridItem image={go} skill="Go"/>
          {/* <GridItem image={ts} skill="Typescript"/> */}
          <GridItem image={cplusplus} skill="C++"/>
          <GridItem image={python} skill="Python"/>
          <GridItem image={bash} skill="Bash"/>
          <GridItem image={PowerShell} skill="PowerShell"/>
          <GridItem image={sql} skill="SQL"/>
        </div>

          {/* Cloud Provider, Cloud Architect */}
        <h3 className='mt-8 mb-3'>Cloud Providers/ Architect</h3>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'> 
          <GridItem image={AWSIcon} skill="AWS"/>
          <GridItem image={Firebase} skill="Firebase"/>
        </div>

          {/* DevOps */}
        <h3 className='mt-8 mb-3'>DevOps Tools</h3>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'> 
          <GridItem image={jenkins} skill="Jenkins"/>
          <GridItem image={Github} skill="Github Action"/>
          <GridItem image={gitlab} skill="GitLab CI/CD"/>
          <GridItem image={docker} skill="Docker"/>
          <GridItem image={git} skill="Git"/>
          <GridItem image={jire} skill="Jire"/>
        </div>

          {/* Database */}
        <h3 className='mt-8 mb-3'>Database</h3>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'> 
          <GridItem image={mongo} skill="mongoDB"/>
          <GridItem image={mysql} skill="MySQL"/>
          <GridItem image={redis} skill="Redis"/>
        </div>

          {/* Data Science/Statistics, Deep Learning (Computer Vision, NLP, RL)*/}
        <h3 className='mt-8 mb-3'>Data Science, Statistics/Mathematics, Deep Learning (Computer Vision, NLP, RL)</h3>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'> 
          <GridItem image={nltk} skill="NLTK"/>
          <GridItem image={opencv} skill="Opencv"/>
          <GridItem image={torch} skill="pytorch"/>
          <GridItem image={matplotlib} skill="Matplotlib"/>
          <GridItem image={orLogo} skill="Google OR-Tools"/>
          <GridItem image={sklearn} skill="Scikit Learn"/>
          <GridItem image={Matlab_Logo} skill="Matlab"/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
