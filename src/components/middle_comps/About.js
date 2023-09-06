import React from 'react';
import app_dev from '../../assets/images/app_dev.jpg';
import backend_dev from '../../assets/images/backend_dev.jpg';
import frontend_dev from '../../assets/images/frontend_dev.jpg';
import data_sci from '../../assets/images/data_sci.jpg';
import { motion } from "framer-motion";
import { initial_stat, animate_stat } from "../utils/values";


function About() {
    
  const handleOnLoad = (event) => {
    // console.log(event.target);
    event.target.classList.remove("animate-pulse");
  }

  return (
    <motion.div initial={initial_stat} animate={animate_stat}>
      <div id="about_header">
        <h1 className='text-2xl font-semibold text-slate-300'>I am a
          <span className='text-yellow-100'> fourth-year undergraduate </span>
          student at <span className='text-yellow-100'> BMSCE </span> in Bangalore.</h1>
      </div>
      <div id='frontend_dev' className='my-2 mt-7'>
        <div className='p-2 flex'>
          <img onLoad={handleOnLoad} className='bg-white animate-pulse rounded-lg h-32 w-32 flex-none' src={frontend_dev} alt="" />
          <div className='ml-3'>
            <h1 className='text-lg font-semibold text-slate-300 mb-1'>Frontend Developer</h1>
            <p className='text-sm text-slate-300'>I am a front-end developer with extensive expertise creating stunning web applications with practical
             and seamless user experiences using cutting-edge <b>react</b> and <b>CSS</b> libraries as well as knowledge of <b>Three.js</b>.</p>
          </div>
        </div>
      </div>
      <div id='backend_dev' className='my-2'>
        <div className='p-2 flex'>
          <img onLoad={handleOnLoad} className='bg-white animate-pulse rounded-lg h-32 flex-none' src={backend_dev} alt="" />
          <div className='ml-3'>
            <h1 className='text-lg font-semibold text-slate-300 mb-1'>Backend Developer</h1>
            <p className='text-sm text-slate-300'>I am a backend developer and have vast experience in developing web applications with variety of 
            business logic in <b>Django, PHP, JavaScript frameworks, MySQL, PostgreSQL, MongoDB</b>.</p>
          </div>
        </div>
      </div>
      <div id='data_sci' className='my-2'>
        <div className='p-2 flex'>
          <img onLoad={handleOnLoad} className='bg-white animate-pulse rounded-lg h-32 flex-none' src={data_sci} alt="" />
          <div className='ml-3'>
            <h1 className='text-lg font-semibold text-slate-300 mb-1'>Data Scientist</h1>
            <p className='text-sm text-slate-300'>Working with data is what I consider to be the modern age's oil ever since I first became familiar
             with the field of data science. I'm now studying this subject in greater depth, and I'm quite interested in working on projects that are linked to it.</p>
          </div>
        </div>
      </div>
      <div id='app_dev' className='my-2'>
        <div className='p-2 flex'>
          <img onLoad={handleOnLoad} className='bg-white animate-pulse rounded-lg h-32 flex-none' src={app_dev} alt="" />
          <div className='ml-3'>
            <h1 className='text-lg font-semibold text-slate-300 mb-1'>Android Developer</h1>
            <p className='text-sm text-slate-300'>As an Android developer, my main tools on <b>Android Studio</b> are <b>dart</b> and <b>flutter</b>. 
            I used flutter and android studio to create a couple apps as custom practice projects, along with <b>sqLite Db</b> and <b>Room Db</b>.</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About