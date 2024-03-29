import React from 'react';
import resume_pg1 from "../../assets/images/resume_pg1.jpg";
// import right_arrow from "../../assets/icons/right_arrow_48.png";
// import left_arrow from "../../assets/icons/left_arrow_48.png";
import download from "../../assets/icons/download_48.png";

function End() {
  return (
    <div id="end">
      <div id="resume_img">
        <img className="h-full w-full object-contain" src={resume_pg1} alt=""/>
      </div>
      <div className='px-12 w-full pt-3 flex justify-center' id="resume_opt">
        {/* <button className='h-8 w-8' disabled={true}><img src={left_arrow} alt="" /></button> */}
        <a href="https://drive.google.com/file/d/1GCwCWVv2aHTTs18nCFrP7tGu8K25TI6h/view?usp=sharing" target='_blank' rel='noreferrer' download="Sourabh_H_resume" className='h-8 w-8'><img src={download} alt="" /></a>
        {/* <button className='h-8 w-8' disabled={true}><img src={right_arrow} alt="" /></button> */}
      </div>
    </div>
  )
}

export default End