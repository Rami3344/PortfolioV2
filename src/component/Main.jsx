import React from 'react'
import "./style/Main.css"
import "./style/Responsive.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import skills from './skills';
import Button from 'react-bootstrap/Button';
import pic from"./content/picture-placeholder.png";
import web from "./content/coding.png";
import des from "./content/design.png"
import ScrollAnimation from './animation/ScrollAnimation';

function Main() {
  return (
    <div>
      
      <div className="about" id='about'>
        <ScrollAnimation customClass="left-animate">
          <p><h2>A Little <span className='green'>About</span> Me:</h2> <br></br>My name is <span className='green'>Rami Tounsi</span> and i am a computer science student in the Higher Institute of Computer Science and Multimedia in Sfax. I am 21 years old and i am obsessed with IT and i love learning new technologies related to IT,also i love listening to music and i do DJing and playing video games in my freetime.<br/></p>
        </ScrollAnimation>
        <ScrollAnimation customClass="right-animate">
        <div className='pic-cont'>
          <img src={pic} className='pic'/>
        </div>
        </ScrollAnimation>
      </div>
      <hr className='line' id='skills'></hr>
      <div className='skills' >
        <h1>My Skills</h1>
        <div className='sk'>
          {skills.map((x)=>(
            <div className='cont'>
              <ScrollAnimation customClass="skill-animate">
              <img src={x.url} />
              <p>{x.name}</p>
              </ScrollAnimation>
            </div>

          ))}
        </div>
      </div>
      <hr className='line' id='exp'></hr>
      <div className='exp'>
        <h1>My Experiences</h1>
        <ScrollAnimation>
        <div className='exp-cont'>
          <div className='des'>
            <span className='ball'></span>
            <div class="vl"></div>
          </div>
          <p><h2>2024</h2>I participated in organizing an event called Saturn, hosted by the Microsoft Technologies Club LAKC. The event aimed to teach the fundamentals of web development and provide participants with hands-on experience by creating projects to apply what they learned. During this event, I served as a trainer and it was my second experience.<br/>
          Additionally, I was accepted as a Software Developer in the Microsoft Technologies Club at ISIMS (Higher Institute of Computer Science and Multimedia). <br/> </p>
        </div>
        </ScrollAnimation>
        <ScrollAnimation>
        <div className='exp-cont'>
          <div className='des'>
            <span className='ball'></span>
            <div class="vl"></div>
          </div>
          <p><h2>2023</h2>I served as a Media Manager in the Micorsoft technologies club (LMS).<br></br>
          I participated in two hackathons. The first, Hacknight, was organized by the Microsoft Technologies Club (LAKC) and VOG (Voice of Gamers), where participants were tasked with creating a game based on a specific theme. My team won 1st place in this event, and I contributed as the web developer.<br></br> 
          The second hackathon, organized by MTC LAKS, MTC LIRS, and VOG, also resulted in a 1st place win for my team, with me again serving as the web developer.<br></br>
          A few months later, I was invited to serve as a trainer for the Dusk event, organized by MTC LAKC. During this event, I taught the fundamentals of web development, including key concepts such as HTML and CSS helping participants build a strong foundation for their web development projects.
          </p>
          
        </div>
        </ScrollAnimation>
        <ScrollAnimation>
        <div className='exp-cont'>
          <div className='des'>
            <span className='ball'></span>
            <div class="vl"></div>
          </div>
          <p><h2>2022-2021</h2>Over these two years, I worked as a freelancer for several crypto projects as a graphic designer.<br></br> I created marketing materials, including posters and logos, and made modifications to websites to give them a more modern look. Additionally, I redesigned older websites to improve their design and functionality.</p>
        </div>
        </ScrollAnimation>
      </div>
      
      <hr className='line' id='serv'></hr>
      <div className='services'>
        <h1>Services</h1>
        <div className='container'>

        <div className='cont'>
        <ScrollAnimation>
          <img src={web}/>
          <p>Web Development (Front-End)</p>
          </ScrollAnimation>
        </div>

        <div className='cont'>
        <ScrollAnimation>
          <img src={des}/>
          <p>Graphics Design</p>
        </ScrollAnimation>
        </div>
      </div>
      </div>
      <hr className='line' id='contact'></hr>
      <div className='contact'>
        <h1>Contact Me</h1>
        <ScrollAnimation>
        <div className='container'>
          <div className='cont'>
            <FontAwesomeIcon icon={faEnvelope} />
            <p>tsi.rami@gmail.com</p>
          </div>
          <div className='cont'>
            <FontAwesomeIcon icon={faLocationDot} />
            <p>Tunisia,Sfax</p>
          </div>
          <div className='cont'>
            <FontAwesomeIcon icon={faPhone} />
            <p>+216 28 057 385</p>
          </div>
        </div>
        <div className='social'>        
        <a href='https://www.facebook.com/profile.php?id=100010597022540' target="_blank"><FontAwesomeIcon icon={faFacebookF} className='icon' /></a>
        <a href='https://www.instagram.com/rami_tounsy/' target="_blank"><FontAwesomeIcon icon={faInstagram}  className='icon' /></a>
        <a href='https://www.linkedin.com/in/rami-tounsi-184689246/' target="_blank"><FontAwesomeIcon icon={faLinkedin}  className='icon'/></a>
        <a href='https://github.com/Rami3344' target="_blank"><FontAwesomeIcon icon={faGithub}   className='icon'/></a>
        </div>
        </ScrollAnimation>
      </div>
      <hr className='line' style={{width:"100%"}} id='contact'></hr>
    </div>
  )
}

export default Main
