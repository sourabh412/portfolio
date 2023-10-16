import React, { useState, useEffect } from 'react';
import gitDesc from '../../assets/git.json';
import { motion } from "framer-motion";
import { initial_stat, animate_stat } from "../utils/values";

function Projects(props) {

    const [git, setgit] = useState([]);
    useEffect(() => { fetch("https://api.github.com/users/sourabh412/repos").then(data => data.json()).then(result => setgit(result)) }, []);
    function sort_by_key(array, key) {
        return array.sort(function (a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }

    const joinById = (...lists) =>
        Object.values(
            lists.reduce(
                (idx, list) => {
                    list.forEach((record) => {
                        if (idx[record.id])
                            idx[record.id] = Object.assign(idx[record.id], record)
                        else
                            idx[record.id] = record
                    })
                    return idx
                },
                {}
            )
        )

    let newGit = joinById(git, gitDesc);
    sort_by_key(newGit, 'pref');
   
    const handleOnLoad = (event) => {
        // console.log(event.target);
        event.target.classList.remove("animate-pulse");
    }

    return (
        <motion.div initial={initial_stat} animate={animate_stat}>
            {
                newGit.map((project) => ((project.name1) && (project.type.includes(props.filter)) ?
                <a key={project.id} href={project.html_url} target='_blank' rel="noreferrer" className="project_unit">
                    <div id='frontend_dev' className='my-2'>
                        <div className='p-2 flex'>
                            <img onLoad={handleOnLoad} className='bg-white animate-pulse rounded-lg h-32 w-32 object-cover flex-none' src={"https://raw.githubusercontent.com/sourabh412/" + project.name + "/master/display.png"} alt="" />
                            <div className='ml-3'>
                                <h1 className='text-lg font-semibold text-slate-300 mb-1'>{(project.name1)?project.name1:""}</h1>
                                <p className='text-sm text-slate-300'>{(project.desc)?project.desc:""}</p>
                            </div>
                        </div>
                    </div></a> : <></>
                ))
            }

        </motion.div>
    )
}

export default Projects