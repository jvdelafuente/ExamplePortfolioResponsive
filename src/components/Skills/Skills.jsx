import '../newspaper/Newspaper.scss'

import react from '../../../assets/icons/react.png'
import git from '../../../assets/icons/Git.png'
import css from '../../../assets/icons/CSS3.png'
import html from '../../../assets/icons/HTML5.png'
import mysql from '../../../assets/icons/mysql.png'
import node from '../../../assets/icons/node.js.png'
import js from '../../../assets/icons/javaScript.png'
import npm from '../../../assets/icons/NPM.png'

import boostrap from '../../../assets/icons/Bootstrap.png'
import types from '../../../assets/icons/Typescript.png'
import astro from '../../../assets/icons/Astro.png'
import sass from '../../../assets/icons/Sass.png'

function Skills() {

  return (
    <div id='skills' className="skillContainerBig">
      <h1 className='skillsh1'>Skills</h1>
      <div className="skillh1container">
      <div className="hogwarts__title">Using</div>
      </div>
    <div className="skillContainer">
      <div className="toolsContainer">
      <div className="react"><img className='iconTool' src={react} alt="" /></div>
      <div className="html"><img className='iconTool' src={html} alt="" /></div>
      <div className="css"><img className='iconTool' src={git} alt="" /></div>
      <div className="node"><img className='iconTool' src={node} alt="" /></div>
      </div>
      <div className="toolsContainer2">
      <div className="js"><img className='iconTool' src={css} alt="" /></div>
      <div className="npm"><img className='iconTool' src={mysql} alt="" /></div>
      <div className="mysql"><img className='iconTool' src={js} alt="" /></div>
      <div className="git"><img className='iconTool' src={npm} alt="" /></div>
      </div>
    </div>
    <div className="skillContainer2">
      <div className="hogwarts__title">Learning</div>
      <div className="toolsLearnContainer">
      <div className="js"><img className='iconTool' src={boostrap} alt="" /></div>
      <div className="npm"><img className='iconTool' src={types} alt="" /></div>
      <div className="mysql"><img className='iconTool' src={astro} alt="" /></div>
      <div className="git"><img className='iconTool' src={sass} alt="" /></div>
      </div>
      </div>
    </div>
  )
}
export default Skills