import React from 'react';
import About from '../middle_comps/About';
import Contact from '../middle_comps/Contact';
import Iam from '../middle_comps/Iam';
import Projects from '../middle_comps/Projects';
import Skills from '../middle_comps/Skills';

function Middle(props) {
  switch (props.mid_comp) {
    case "Iam":
      return (<div id="middle"><Iam /></div>);
    case "About":
      return (<div id="middle"><About /></div>);
    case "Projects":
      return (<div id="middle"><Projects filter="" /></div>);
    case "Web":
      return (<div id="middle"><Projects filter="web" /></div>);
    case "Android":
      return (<div id="middle"><Projects filter="mobile" /></div>);
    case "Data":
      return (<div id="middle"><Projects filter="data" /></div>);
    case "Skills":
      return (<div id="middle"><Skills /></div>);
    case "Contact":
      return (<div id="middle"><Contact /></div>);
    default:
      return (<div id="middle"><Iam /></div>);
  }
}

export default Middle