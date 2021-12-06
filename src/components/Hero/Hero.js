import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Particles from "react-tsparticles";
import img from '../../images/hero.svg';
import './Hero.css';

export default function Hero() {
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    return (
        <>
        <div className="container mt-3" id="home">
                
        <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "black",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 2,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
        
        <div className="row text-start align-items-center">
            
            <div className="col-lg-6 col-md-6 col-sm-12">
                <h1 className="header h1 mt-10 fw-bold">Hi there,</h1>
                <h2 className="header h1 fw-bold">Md. Rafiuzzaman Bhuiyan</h2>
                <p className="header-p">I'm a <span style={{ color: '#081158', fontWeight: 'bold' ,fontSize:"30px"}}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[ 'Junior Odoo developer ',"Python developer", 'Front end developer ','React developer']}
            loop={100}
            cursor
            cursorStyle='...'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
                </p>
                <p className="header-">I'm a learner by profession. Wanted to learn new technologies. Always try to be updated about the things that I loved so much.</p>
                <button type="button" className="btn btn-dark header-btn rounded-pill"><a className="header-btn" href="https://drive.google.com/file/d/1zT1Bb44Gk2_VzZCy_i1Kpg-zzy6WdOOU/view" target="_blank">Download resume</a></button>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-up-left" data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <img className="img-fluid" src={img} alt="hero-icon"/>
            </div>
        </div>
    </div>
    
    </>
    )
}
