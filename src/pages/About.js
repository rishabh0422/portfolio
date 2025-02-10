import React from 'react'
import '../index.css'
import imgsrc from '../images/rishabh.png'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div class="about-container">
        <div class="about-img">
          <img src={imgsrc} alt=""/>
        </div>
        <div class="about-discription">
          <h1>Hey, i am rishabh </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestiae adipisci facere veniam animi aut. Esse, exercitationem quis soluta accusantium magnam beatae aperiam eveniet debitis, optio aliquid in! Laudantium, odit!</p>
        </div>
      </div>
    </div>
  )
}

export default About
