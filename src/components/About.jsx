// // components/About.js
// import React from 'react';

// const About = () => {
//   return (
//     <section id="about" className="section about">
//       <div className="container">
//         <div className="section-title">
//           <h2>About Me</h2>
//           <p>Get to know more about my background and experience</p>
//         </div>
        
//         <div className="about-content">
//           <div className="about-text">
//             <h3>I'm a passionate Frontend Developer</h3>
//             <p>
//               With over 3 years of experience in web development, I specialize in creating 
//               engaging and responsive user interfaces. I have a strong foundation in HTML, 
//               CSS, JavaScript, and modern frameworks like React.
//             </p>
//             <p>
//               I'm constantly learning and staying up-to-date with the latest web technologies 
//               and best practices. I enjoy solving complex problems and turning ideas into 
//               reality through clean, efficient code.
//             </p>
            
//             <div className="about-stats">
//               <div className="stat">
//                 <h4>50+</h4>
//                 <p>Projects Completed</p>
//               </div>
//               <div className="stat">
//                 <h4>3+</h4>
//                 <p>Years Experience</p>
//               </div>
//               <div className="stat">
//                 <h4>30+</h4>
//                 <p>Happy Clients</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="about-image">
//             <div className="image-frame">
//               <div className="image-placeholder">
//                 <i className="fas fa-user"></i>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



// import React from 'react';

// const About = () => {
//   return (
//     <section id="about" className="section about">
//       <div className="container">
//         <div className="section-title">
//           <h2>About Me</h2>
//           <p>Get to know more about my background and professional journey</p>
//         </div>

//         <div className="about-content">
//           <div className="about-text">
//             <h3>I'm a dedicated Frontend Developer</h3>
//             <p>
//               I'm <strong>Abinath Manikandan</strong>, a passionate Frontend Developer with
//               2 years of experience in building modern, responsive, and user-focused web applications.
//               My expertise lies in <strong>React</strong>, <strong>OpenLayers</strong>, and
//               crafting smooth, visually appealing user interfaces.
//             </p>
//             <p>
//               I’ve worked on impactful real-world applications like 
//               <strong> GreySlide Imaging</strong> (Digital Pathology Viewer), 
//               <strong> Esyacura HMS</strong> (Hospital Management System), 
//               <strong> TalentG</strong> (Recruitment Platform), and the 
//               <strong> Army Supply Rescue System</strong> (Logistics and Resource Tracking).
//               I love turning complex problems into intuitive interfaces that deliver great user experiences.
//             </p>
//             <p>
//               I'm always exploring new technologies and improving my skills to stay ahead in the
//               ever-evolving frontend landscape. My focus is on writing clean, efficient, and
//               maintainable code that balances performance with aesthetics.
//             </p>

//             <div className="about-stats">
//               <div className="stat">
//                 <h4>10+</h4>
//                 <p>Projects Completed</p>
//               </div>
//               <div className="stat">
//                 <h4>2+</h4>
//                 <p>Years Experience</p>
//               </div>
//               <div className="stat">
//                 <h4>5+</h4>
//                 <p>Major Applications Delivered</p>
//               </div>
//             </div>
//           </div>

//           <div className="about-image">
//             <div className="image-frame">
//               <div className="image-placeholder">
//                 <i className="fas fa-user"></i>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;




import React from 'react';
import './About.css';
import img2 from '../img/1122334455.png'

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Get to know more about my background and professional journey</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>I'm a dedicated Frontend Developer</h3>
            <p>
              I'm <strong>Abinath Manikandan</strong>, a passionate Frontend Developer with
              2 years of experience in building modern, responsive, and user-focused web applications.
              My expertise lies in <strong>React</strong>, <strong>OpenLayers</strong>, and
              crafting smooth, visually appealing user interfaces.
            </p>
            <p>
              I've worked on impactful real-world applications like 
              <strong> GreySlide Imaging</strong> (Digital Pathology Viewer), 
              <strong> Esyacura HMS</strong> (Hospital Management System), 
              <strong> TalentG</strong> (Recruitment Platform), and the 
              <strong> Army Supply Rescue System</strong> (Logistics and Resource Tracking).
              I love turning complex problems into intuitive interfaces that deliver great user experiences.
            </p>
            {/* <p>
              I'm always exploring new technologies and improving my skills to stay ahead in the
              ever-evolving frontend landscape. My focus is on writing clean, efficient, and
              maintainable code that balances performance with aesthetics.
            </p> */}

            {/* <div className="about-stats">
              <div className="stat">
                <h4>10+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>2+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h4>5+</h4>
                <p>Major Applications Delivered</p>
              </div>
               <div className="stat">
                <h4>15+</h4>
                <p>Technologies</p>
              </div>
               <div className="stat">
                <h4>100%</h4>
                <p>Client Satisfaction</p>
              </div>
            </div> */}
          </div>

          <div className="about-image">
            <div className="image-frame">
           
               
                <img src={img2} />
             
            </div>
          </div>
          
        </div>
           <div className="about-stats">
              <div className="stat">
                <h4>10+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>2+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h4>5+</h4>
                <p>Major Applications Delivered</p>
              </div>
               <div className="stat">
                <h4>15+</h4>
                <p>Technologies</p>
              </div>
               <div className="stat">
                <h4>100%</h4>
                <p>Client Satisfaction</p>
              </div>
            </div>
      </div>
    </section>
  );
};

export default About;