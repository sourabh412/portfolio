import React from 'react';
import social_menu_icon from "../../assets/icons/sq_menu_48.png";
import s from '../../assets/sourabh/s.svg';
import o from '../../assets/sourabh/o.svg';
import u from '../../assets/sourabh/u.svg';
import r from '../../assets/sourabh/r.svg';
import a from '../../assets/sourabh/a.svg';
import b from '../../assets/sourabh/b.svg';
import h from '../../assets/sourabh/h.svg';

function Header(props) {

  return (
    <div id="header">
      <div id="dots">
        <div id="dot1" className='dot'></div>
        <div id="dot2" className='dot'></div>
        <div id="dot3" className='dot'></div>
      </div>
      {
        props.mid_comp === "Iam" ?
          <div id="menu">
            <button className='menu-h active-h' onClick={() => props.set_mid_comp("Iam")}>I am</button>
            <button className='menu-h' onClick={() => props.set_mid_comp("About")}>About</button>
          </div> : props.mid_comp === "About" ?
            <div id="menu">
              <button className='menu-h' onClick={() => props.set_mid_comp("Iam")}>Iam</button>
              <button className='menu-h active-h' onClick={() => props.set_mid_comp("About")}>About</button>
            </div> : props.mid_comp === "Projects" ?
              <div id="menu">
                <button className='menu-h active-h' onClick={() => props.set_mid_comp("Projects")}>All</button>
                <button className='menu-h' onClick={() => props.set_mid_comp("Web")}>Web</button>
                <button className='menu-h' onClick={() => props.set_mid_comp("Android")}>Android</button>
                <button className='menu-h' onClick={() => props.set_mid_comp("Data")}>Data</button>
              </div> : props.mid_comp === "Web" ?
              <div id="menu">
                <button className='menu-h' onClick={() => props.set_mid_comp("Projects")}>All</button>
                <button className='menu-h active-h' onClick={() => props.set_mid_comp("Web")}>Web</button>
                <button className='menu-h' onClick={() => props.set_mid_comp("Android")}>Android</button>
                <button className='menu-h' onClick={() => props.set_mid_comp("Data")}>Data</button>
              </div> : props.mid_comp === "Android" ?
              <div id="menu">
                <button className='menu-h' onClick={() => props.set_mid_comp("Projects")}>All</button>
                <button className='menu-h' onClick={() => props.set_mid_comp("Web")}>Web</button>
                <button className='menu-h active-h' onClick={() => props.set_mid_comp("Android")}>Android</button>
                <button className='menu-h' onClick={() => props.set_mid_comp("Data")}>Data</button>
              </div> : props.mid_comp === "Data" ?
              <div id="menu">
                <button className='menu-h' onClick={() => props.set_mid_comp("Projects")}>All</button>
                <button className='menu-h' onClick={() => props.set_mid_comp("Web")}>Web</button>
                <button className='menu-h' onClick={() => props.set_mid_comp("Android")}>Android</button>
                <button className='menu-h active-h' onClick={() => props.set_mid_comp("Data")}>Data</button>
              </div> : props.mid_comp === "Skills" ?
                <div id="menu">
                </div> :
                <div id="menu">
                </div>
      }
      <div id="name">
        <img src={s} alt="" />
        <img src={o} alt="" />
        <img src={u} alt="" />
        <img src={r} alt="" />
        <img src={a} alt="" />
        <img src={b} alt="" />
        <img src={h} alt="" />
      </div>
      <div id="social" onClick={() => props.set_social_active(!props.social_active)}>
        <img src={social_menu_icon} alt="" />
      </div>
    </div>
  )
}

export default Header