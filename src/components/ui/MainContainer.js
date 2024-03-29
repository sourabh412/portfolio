import React, { useState } from 'react';
import Header from '../widgets/Header';
import Navigation from '../widgets/Navigation';
import Social from '../widgets/Social';
import SmallMenu from '../widgets/SmallMenu';
import End from './End';
import Middle from './Middle';
import { AnimatePresence, motion } from 'framer-motion';
import Cli from '../widgets/Cli';
import s from '../../assets/sourabh/s.svg';
import o from '../../assets/sourabh/o.svg';
import u from '../../assets/sourabh/u.svg';
import r from '../../assets/sourabh/r.svg';
import a from '../../assets/sourabh/a.svg';
import b from '../../assets/sourabh/b.svg';
import h from '../../assets/sourabh/h.svg';

const startup = {
  hidden: {
    y: window.innerHeight / 2,
    opacity: 0,
    scale: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.75,
      duration: 0.2
    }
  }
}

function MainContainer() {

  const [social_active, set_social_active] = useState(false);
  const [small_menu, set_small_menu] = useState(false);
  const [midComp, setmidComp] = useState("Iam");
  const [mainDisplay, setmainDisplay] = useState(false);

  return (
    <>
      {
        mainDisplay ?
          <AnimatePresence>
            <motion.div id="container_1" variants={startup} initial="hidden" animate="visible">
              <Header title='home'
                set_social_active={set_social_active} social_active={social_active}
                mid_comp={midComp} set_mid_comp={setmidComp}
                set_small_menu={set_small_menu} small_menu={small_menu} /> {/* projects skills contact */}
              <Navigation mid_comp={midComp} set_mid_comp={setmidComp} />
              <Middle mid_comp={midComp} />
              <End />
              {
                social_active &&
                <div id="social_explore">
                  <Social set_social_active={set_social_active} social_active={social_active} />
                </div>
              }
              {
                small_menu &&
                <div id="show_small_menu">
                  <SmallMenu set_small_menu={set_small_menu} small_menu={small_menu}
                    mid_comp={midComp} set_mid_comp={setmidComp} />
                </div>
              }
            </motion.div>
            <div id='dock'>
              <img src={s} alt="" />
              <img src={o} alt="" />
              <img src={u} alt="" />
              <img src={r} alt="" />
              <img src={a} alt="" />
              <img src={b} alt="" />
              <img src={h} alt="" />
            </div>
          </AnimatePresence> :
          <Cli mainDisplay={mainDisplay} setmainDisplay={setmainDisplay} />
      }
    </>
  )
}

export default MainContainer