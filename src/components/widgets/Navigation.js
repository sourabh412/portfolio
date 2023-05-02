import React from 'react';
import profile from '../../assets/sourabh/sourabh.jpg';
import home from '../../assets/icons/home_48.png';
import projects from '../../assets/icons/projects_48.png';
import skills from '../../assets/icons/skills_48.png';
import contact from '../../assets/icons/contact_48.png';

function Navigation(props) {

  return (
    <div id="navigation">
      <img className='h-32 w-32 rounded-full drop-shadow-md' src={profile} alt="" />
      <div id="nav_menu" className='p-6'>
        <button onClick={()=>props.set_mid_comp("Iam")} className='h-auto w-44 rounded-md bg-transparent hover:bg-[#10121b66] duration-500 cursor-pointer m-3 p-2 box-border flex'>
          <img className='h-5 mx-2' src={home} alt="" />
          <p>Home</p>
        </button>
        <button onClick={()=>props.set_mid_comp("Projects")} className='h-auto w-44 rounded-md bg-transparent hover:bg-[#10121b66] duration-500 cursor-pointer m-3 p-2 box-border flex'>
          <img className='h-5 mx-2' src={projects} alt="" />
          <p>Projects</p>
        </button>
        <button onClick={()=>props.set_mid_comp("Skills")} className='h-auto w-44 rounded-md bg-transparent hover:bg-[#10121b66] duration-500 cursor-pointer m-3 p-2 box-border flex'>
          <img className='h-5 mx-2' src={skills} alt="" />
          <p>Skills</p>
        </button>
        <button onClick={()=>props.set_mid_comp("Contact")} className='h-auto w-44 rounded-md bg-transparent hover:bg-[#10121b66] duration-500 cursor-pointer m-3 p-2 box-border flex'>
          <img className='h-5 mx-2' src={contact} alt="" />
          <p>Contact</p>
        </button>
      </div>
    </div>
  )
}

export default Navigation