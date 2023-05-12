import React, { useRef, useEffect } from 'react';
import instagram from "../../assets/icons/instagram_64.png";
import facebook from "../../assets/icons/facebook_64.png";
import github from "../../assets/icons/github_64.png";
import linkedin from "../../assets/icons/linkedin_64.png";
import profile from '../../assets/sourabh/sourabh.jpg';
import home from '../../assets/icons/home_48.png';
import projects from '../../assets/icons/projects_48.png';
import skills from '../../assets/icons/skills_48.png';
import contact from '../../assets/icons/contact_48.png';
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 1, scale: 0, y: -180, x: 60 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        x: 0,
        transition: {
            duration: 0.2,
            delayChildren: 0.2,
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { y: 25, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}

function SmallMenu(props) {

    const menu_ref = useRef();

    useEffect(() => {
        let menu_transition = (e) => {
            if (!menu_ref.current.contains(e.target)) {
                props.set_small_menu(false);
            }
        }

        document.addEventListener("mousedown", menu_transition);

        return () => {
            document.removeEventListener("mousedown", menu_transition);
        }

    })

    return (
        <motion.div variants={container} initial="hidden" animate="visible" ref={menu_ref} className='p-2' id="menu_sq">
            <img className='h-16 w-16 rounded-full drop-shadow-md mx-auto' src={profile} alt="" />
            <motion.div id="small_nav_menu" className='p-1'>
                <motion.button onClick={() => {props.set_mid_comp("Iam");props.set_small_menu(false);}} className='h-8 w-32 rounded-md bg-transparent hover:bg-[#10121b66] duration-500 cursor-pointer m-1 p-1 box-border flex'>
                    <img className='h-5 mx-2' src={home} alt="" />
                    <p>Home</p>
                </motion.button>
                <motion.button onClick={() => {props.set_mid_comp("Projects");props.set_small_menu(false);}} className='h-8 w-32 rounded-md bg-transparent hover:bg-[#10121b66] duration-500 cursor-pointer m-1 p-1 box-border flex'>
                    <img className='h-5 mx-2' src={projects} alt="" />
                    <p>Projects</p>
                </motion.button>
                <motion.button onClick={() => {props.set_mid_comp("Skills");props.set_small_menu(false);}} className='h-8 w-32 rounded-md bg-transparent hover:bg-[#10121b66] duration-500 cursor-pointer m-1 p-1 box-border flex'>
                    <img className='h-5 mx-2' src={skills} alt="" />
                    <p>Skills</p>
                </motion.button>
                <motion.button onClick={() => {props.set_mid_comp("Contact");props.set_small_menu(false);}} className='h-8 w-32 rounded-md bg-transparent hover:bg-[#10121b66] duration-500 cursor-pointer m-1 p-1 box-border flex'>
                    <img className='h-5 mx-2' src={contact} alt="" />
                    <p>Contact</p>
                </motion.button>
            </motion.div>
            <motion.div className='grid grid-rows-2 grid-cols-2 gap-2 p-2'>
                <motion.a variants={item} href='https://www.instagram.com/sourabh_hiremath412/' rel="noreferrer" target="_blank"><img className='h-12 w-12' src={instagram} alt="" /></motion.a>
                <motion.a variants={item} href='https://www.facebook.com/HiremathSourabh412' rel="noreferrer" target="_blank"><img className='h-12 w-12' src={facebook} alt="" /></motion.a>
                <motion.a variants={item} href='https://github.com/sourabh412' rel="noreferrer" target="_blank"><img className='h-12 w-12' src={github} alt="" /></motion.a>
                <motion.a variants={item} href='https://www.linkedin.com/in/sourabh-hiremath-23b93a225/' rel="noreferrer" target="_blank"><img className='h-12 w-12'  src={linkedin} alt="" /></motion.a>
            </motion.div>
        </motion.div>
    )
}

export default SmallMenu