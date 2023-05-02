import React,{ useState, useEffect } from 'react'
import Header from '../widgets/Header'
import Navigation from '../widgets/Navigation'
import Social from '../widgets/Social'
import End from './End'
import Middle from './Middle'
import { AnimatePresence } from 'framer-motion'

function MainContainer() {

  const [social_active, set_social_active] = useState(false);  
  const [midComp, setmidComp] = useState("Iam");

  const changeComp = (comp) => {
    setmidComp(comp);
  }
  
  return (
    <AnimatePresence>
      <div id="container_1">
        <Header title='home' set_social_active={set_social_active} social_active={social_active} mid_comp={midComp} set_mid_comp={setmidComp} /> {/* projects skills contact */}
        <Navigation mid_comp={midComp} set_mid_comp={setmidComp} />
        <Middle mid_comp={midComp} />
        <End />
        {
          social_active &&
          <div id="social_explore">
            <Social set_social_active={set_social_active} social_active={social_active} />
          </div>
        }
      </div>
    </AnimatePresence>
  )
}

export default MainContainer