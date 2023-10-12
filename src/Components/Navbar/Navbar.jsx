import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu,setShowMenu]=useState(false);
  return (
   
        <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="menu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-60} duration={400} className="desktopMenuItems">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-60} duration={400}  className="desktopMenuItems">About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-40} duration={400} className="desktopMenuItems">Portfolio</Link>
        {/* <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-40} duration={400} className="desktopMenuItems">Clients</Link> */}
      </div>
      
      <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-60} duration={400}>
      <button className="contactMeButton">
        <img src={contactImg} alt='contact'/> 
        Contact Me
         </button>
      </Link>
        
        



        <img src={menu} alt="mobile menu" className="mobMenuImg"
        onClick={()=>{
          setShowMenu(!showMenu);
        }}/>

      <div className="mobMenu" style={{display:showMenu?"flex":"none"}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-60} duration={400} className="mobMenuItem"
        onClick={()=>{
          setShowMenu(false);
        }}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-60} duration={400}  className="mobMenuItem"
        onClick={()=>{
          setShowMenu(false);
        }}>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-40} duration={400} className="mobMenuItem"
        onClick={()=>{
          setShowMenu(false);
        }}>Portfolio</Link>
        {/* <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-40} duration={400} className="mobMenuItem"
        onClick={()=>{
          setShowMenu(false);
        }}>Clients</Link> */}
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-40} duration={400} className="mobMenuItem"
        onClick={()=>{
          setShowMenu(false);
        }}>Contact</Link>
      </div>
      </nav>
    
  )
}

export default Navbar
