import React from 'react';
import skills from '../../assets/skills/skill.json';
import { motion } from "framer-motion";
import { initial_stat, animate_stat } from "../utils/values";

function Skills() {
    return (
        <motion.div initial={initial_stat} animate={animate_stat} className='w-full'>
            <div className='flex flex-wrap justify-center gap-10 mx-auto my-5'>

                {
                    skills.map((item) => (
                        <div key={item.name} className='flex flex-col gap-3 items-center'>
                            <img className='h-16 w-16 p-4 rounded-full bg-[var(--theme-bg-color)] object-contain' src={require("../../assets/skills/" + item.img)} alt="" />
                            <p>{item.name}</p>
                        </div>
                    ))
                }

            </div>
        </motion.div>
    )
}

export default Skills