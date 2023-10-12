import React from 'react'
import './skills.css'
import uiImg from '../../assets/ui-design.png';
import appImg from '../../assets/app-design.png';
import webImg from '../../assets/website-design.png';
const skills = () => {
  return (
   <section id="skills">
    <span className="skillHeading">My SkillSet</span>
    <span className="aboutSkills">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque non tempora officiis! Doloremque pariatur ut, architecto voluptatum aspernatur unde, dolorum eius odio consequuntur iusto sunt dicta cumque esse expedita nisi?t</span>
    <div className="skillList">
        <ul className='skillListing'>

            <li>
                <div className="skillBar">
                    <img src={uiImg} alt="Some image UI" className='skillBarImg'/>
                    <div className="skillBarText">
                        <h2>Web Development</h2>
                        <p className="skillText">
                            Add the skill text here
                        </p>
                    </div>
                </div>
            </li>
            <li>
                <div className="skillBar">
                    <img src={webImg} alt="Some image App" className='skillBarImg' />
                    <div className="skillBarText">
                        <h2>Problem Solving</h2>
                        <p className="skillText">
                            Add the skill text here
                        </p>
                    </div>
                </div>
            </li>
            <li>
                <div className="skillBar">
                    <img src={appImg} alt="Some image Web" className='skillBarImg' />
                    <div className="skillBarText">
                        <h2>Communication</h2>
                        <p className="skillText">
                            Add the skill text here
                        </p>
                    </div>
                </div>
            </li>

        </ul>
    </div>
   </section>
  )
}

export default skills
