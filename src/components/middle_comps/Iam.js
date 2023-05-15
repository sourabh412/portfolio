import React from 'react';
import flutter from '../../assets/skills/flutter.png';
import androidstudio from '../../assets/skills/androidstudio.png';
import python from '../../assets/skills/python.png';
import react from '../../assets/skills/react.png';
import tensorflow from '../../assets/skills/tensorflow.png';
import { motion } from "framer-motion";
import { initial_stat, animate_stat } from "../utils/values";

function Iam() {
    return (
        <motion.div initial={initial_stat} animate={animate_stat}>
            <div id='iam_header'>
                <div id="iam_header_child1" className='flex justify-between items-center h-full px-10'>
                    <div>
                        Hey There, I am<br /><span className='text-5xl font-medium text-slate-100'>Sourabh</span>
                    </div>
                    <div id="iam_header_child2" className='text-sm text-right'>
                        FULL STACK WEB DEVELOPER<br />
                        ANDROID DEVELOPER<br />
                        DATA SCIENCE ENTHUSIAST
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <div className='font-semibold text-slate-300 mb-2 text-lg'>About me</div>
                A self-driven student with a passion for learning new programming languages and fundamental ideas,
                as well as knowledge of building websites and mobile applications.
                Currently learning about the fields of artificial intelligence, machine learning, and data science.
            </div>
            <div id="iam_skill_imgs" className='flex justify-center items-center mt-10'>
                <img className='rounded-full p-2 bg-slate-800 mx-3' src={androidstudio} alt="Android Studio" height="40px" width="40px" />
                <img className='rounded-full p-2 bg-slate-800 mx-3' src={flutter} alt="Flutter" height="55px" width="55px" />
                <img className='rounded-full p-2 bg-slate-800 mx-3' src={python} alt="Python" height="70px" width="70px" />
                <img className='rounded-full p-2 bg-slate-800 mx-3' src={react} alt="React JS" height="55px" width="55px" />
                <img className='rounded-full p-2 bg-slate-800 mx-3' src={tensorflow} alt="Neural networks" height="40px" width="40px" />
            </div>
        </motion.div>
    )
}

export default Iam