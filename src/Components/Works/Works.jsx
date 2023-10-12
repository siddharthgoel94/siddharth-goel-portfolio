import React from 'react'
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';


const Works = () => {
  return (
    <section id="works">
        <h2 className="headingWorks">My Portfolio</h2>
        <p className="aboutPortfolio">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad accusantium saepe doloremque numquam molestias quos optio aliquid eius illum ea quaerat, voluptatem dignissimos, quibusdam possimus necessitatibus ipsa aut ullam earum?
            Deleniti dignissimos, inventore ipsum quas, facere quasi illum quidem harum accusantium deserunt, natus dolores minima repellendus. Perspiciatis repellendus rem sint error, fugit suscipit voluptate? Fuga velit vero eum quaerat placeat.
        </p>
        <div className="workImages">
          
            <img src={Portfolio1} alt="workImg1" className="workImg" />
            <img src={Portfolio2} alt="workImg2" className="workImg" />
            <img src={Portfolio3} alt="workImg3" className="workImg" />
            <img src={Portfolio4} alt="workImg4" className="workImg" />
            <img src={Portfolio5} alt="workImg5" className="workImg" />
            <img src={Portfolio6} alt="workImg6" className="workImg" />
           
        </div>
    </section>
  )
}

export default Works
