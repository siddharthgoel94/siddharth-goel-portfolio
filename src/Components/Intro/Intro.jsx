import React from 'react'
import './intro.css'
import myImg from '../../assets/image.png'
import hireImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <div id="intro">
      <section className="introContent">
        <div className="aboutMe">
        <span className="hello">Hello,</span><br></br>
        <span className="myName">I am <span className="name">Siddharth</span> </span><br></br>
        <span className="myProfession">a Full Stack Web Developer</span><br></br>
        </div>
        <div className="hireMeContainer">
        <a href="https://drive.google.com/file/d/1mBjvt9TE3w_yMHCLiaJ8MpJZuHg5OZml/view?usp=drive_link" target='_a'>
        <button className="hireMeButton">
            <img src={hireImg} alt="hire me image" className='hireMeImage' />
            <span className='hireMeText'>Hire Me</span>
        </button>
        </a>
        </div>

      </section>
      {/* <div className="myImageContainer"> */}
    
        <img src={myImg} alt="myImage" className='myImg' />
        
      {/* </div> */}
    </div>
  )
}

export default Intro
