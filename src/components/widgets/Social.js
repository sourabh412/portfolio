import React, { useRef, useEffect } from 'react';
import instagram from "../../assets/icons/instagram_64.png";
import facebook from "../../assets/icons/facebook_64.png";
import github from "../../assets/icons/github_64.png";
import linkedin from "../../assets/icons/linkedin_64.png";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0, y: -50, x: 25 },
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

function Social(props) {
  
  const social_ref = useRef();

  useEffect(() => {
    let social_transition = (e)=>{
      if (!social_ref.current.contains(e.target)) {
        props.set_social_active(false);
      }
    }

    document.addEventListener("mousedown",social_transition);

    return ()=>{
      document.removeEventListener("mousedown",social_transition);
    }

  })

  return (
    <motion.div variants={container} initial="hidden" animate="visible" ref={social_ref} className='grid grid-rows-2 grid-cols-2 gap-2 p-2' id="social_sq">
        <motion.a variants={item} href='https://www.instagram.com/sourabh_hiremath412/' rel="noreferrer" target="_blank"><img src={instagram} alt="" /></motion.a>
        <motion.a variants={item} href='https://www.facebook.com/HiremathSourabh412' rel="noreferrer" target="_blank"><img src={facebook} alt="" /></motion.a>
        <motion.a variants={item} href='https://github.com/sourabh412' rel="noreferrer" target="_blank"><img src={github} alt="" /></motion.a>
        <motion.a variants={item} href='https://www.linkedin.com/in/sourabh-hiremath-23b93a225/' rel="noreferrer" target="_blank"><img src={linkedin} alt="" /></motion.a>
    </motion.div>
  )
}

export default Social