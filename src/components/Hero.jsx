
// import React from 'react';
// import img1 from '../img/12.png';
// import './Hero.css';

// const Hero = () => {
//   return (
//     <section id="home" className="hero">
//       <div className="container">
//         <div className="hero-content">
       
//           <div className="experience-badge">
//             <div className="badge-icon">
//               <i className="fas fa-star"></i>
//             </div>
//             <div className="badge-text">2+ Years Professional Experience</div>
//           </div>
          
//           <h1 className="hero-title">
//             Hi, I'm <span className="highlight">Abinath Manikandan</span>
//           </h1>
//           <h2 className="hero-subtitle">Frontend Developer</h2>
//           <p className="hero-description">
//             I'm a passionate Frontend Developer with 2 years of experience building
//             modern, high-performance web applications. I specialize in React, OpenLayers,
//             and creating visually engaging, responsive UIs. I've contributed to projects like
//             <strong> GreySlide Imaging</strong>, <strong>Esyacura HMS</strong>,
//             <strong> TalentG</strong>, and the <strong>Army Supply Rescue System</strong>.
//           </p>
          
//           <div className="hero-buttons">
//             <a href="#projects" className="btn">
//               <i className="fas fa-briefcase"></i>
//               View My Work
//             </a>
//             <a href="#contact" className="btn btn-outline">
//               <i className="fas fa-paper-plane"></i>
//               Get In Touch
//             </a>
//           </div>
          
//           {/* Tech Stack */}
//           <div className="tech-stack">
//             <div className="tech-stack-label">Tech Stack:</div>
//             <div className="tech-stack-items">
//               <span className="tech-item">React</span>
//               <span className="tech-item">JavaScript</span>
//               <span className="tech-item">TypeScript</span>
//               <span className="tech-item">OpenLayers</span>
//               <span className="tech-item">CSS3</span>
//             </div>
//           </div>
//         </div>
        
//         <div className="hero-image">
//           <div className="image-placeholder">
//             <img src={img1} alt="Abinath Manikandan - Frontend Developer" />
//           </div>
//         </div>
//       </div>
      
//       <div className="scroll-indicator">
//         <a href="#about">
         
//           <span></span>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from 'react';
import img1 from '../img/12.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="new-hero-section">
      <div className="new-hero-background"></div>
      
      <div className="new-hero-container">
        <div className="new-hero-content">
          <div className="new-hero-badge">
            <div className="new-hero-badge-icon">
              <i className="fas fa-star"></i>
            </div>
            <span className="new-hero-badge-text">2+ Years Professional Experience</span>
          </div>
          
          <h1 className="new-hero-title">
            Hi, I'm <span className="new-hero-title-highlight">Abinath Manikandan</span>
          </h1>
          
          <h2 className="new-hero-subtitle">Frontend Developer</h2>
          
          <p className="new-hero-description">
            I specialize in building modern, high-performance web applications using React, 
            JavaScript, and TypeScript. With expertise in OpenLayers and responsive UI design, 
            I create engaging user experiences that deliver real business value.
          </p>
          
          <div className="new-hero-actions">
            <a href="#projects" className="new-hero-btn new-hero-btn-primary">
              <i className="fas fa-briefcase"></i>
              View Projects
            </a>
            <a href="#contact" className="new-hero-btn new-hero-btn-secondary">
              <i className="fas fa-envelope"></i>
              Contact Me
            </a>
          </div>
          
          {/* <div className="new-hero-tech">
            <div className="new-hero-tech-label">Technologies</div>
            <div className="new-hero-tech-items">
              <span className="new-hero-tech-item">React</span>
              <span className="new-hero-tech-item">JavaScript</span>
              <span className="new-hero-tech-item">TypeScript</span>
              <span className="new-hero-tech-item">OpenLayers</span>
              <span className="new-hero-tech-item">CSS3</span>
              <span className="new-hero-tech-item">HTML5</span>
            </div>
          </div> */}
        </div>
        
        <div className="new-hero-visual">
          <div className="new-hero-image-container">
            <img 
              src={img1} 
              alt="Abinath Manikandan - Frontend Developer" 
              className="new-hero-image" 
            />
          </div>
        </div>
      </div>
      
      <div className="new-hero-scroll-indicator">
        <a href="#about" className="new-hero-scroll-link">
          Scroll to explore
          <span className="new-hero-scroll-line"></span>
        </a>
      </div>
    </section>
  );
};

export default Hero;