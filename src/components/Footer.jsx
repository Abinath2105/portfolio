// import React, { useState, useEffect } from 'react';
// import './Footer.css';

// const Footer = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const currentYear = new Date().getFullYear();

//   // Show back-to-top button when scrolled down
//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.pageYOffset > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener('scroll', toggleVisibility);
//     return () => window.removeEventListener('scroll', toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="footer-content">
//           <div className="footer-text">
//             <p>&copy; {currentYear} Abinath Manikandan. All rights reserved.</p>
//           </div>
          
//           <div className="footer-links">
//             {/* Optional: Add social links in footer */}
//             <div className="footer-social">
//               <a 
//                 href="https://github.com/" 
//                 aria-label="GitHub" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <i className="fab fa-github"></i>
//               </a>
//               <a 
//                 href="https://linkedin.com/in/" 
//                 aria-label="LinkedIn" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <i className="fab fa-linkedin"></i>
//               </a>
//             </div>
            
//             {/* Optional: Add footer navigation */}
//             <div className="footer-nav">
//               <a href="#home">Home</a>
//               <a href="#about">About</a>
//               <a href="#projects">Projects</a>
//               <a href="#contact">Contact</a>
//             </div>
            
//             {/* Back to top button - shows only when scrolled down */}
//             {isVisible && (
//               <a 
//                 href="#home" 
//                 className="back-to-top"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   scrollToTop();
//                 }}
//                 aria-label="Back to top"
//               >
//                 Back to Top <i className="fas fa-arrow-up"></i>
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

























import React, { useState, useEffect } from 'react';
import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  // Show back-to-top button when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; {currentYear} Abinath Manikandan. All rights reserved.</p>
          </div>
          
          <div className="footer-links">
            {/* Social links in footer */}
            <div className="footer-social">
              <a 
                href="https://github.com/Abinath2105" 
                aria-label="GitHub" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
              <a 
                href="www.linkedin.com/in/abinath-manigandan-71786b248" 
                aria-label="LinkedIn" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
            
            {/* Footer navigation with icons */}
            <div className="footer-nav">
              <a 
                href="#home" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
                aria-label="Home"
              >
                {/* <HomeIcon className="nav-icon" /> */}
                <span>Home</span>
              </a>
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                aria-label="About"
              >
                {/* <PersonIcon className="nav-icon" /> */}
                <span>About</span>
              </a>
              <a 
                href="#projects" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
                aria-label="Projects"
              >
                {/* <WorkIcon className="nav-icon" /> */}
                <span>Projects</span>
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                aria-label="Contact"
              >
                {/* <ContactMailIcon className="nav-icon" /> */}
                <span>Contact</span>
              </a>
            </div>
            
            {/* Back to top button - shows only when scrolled down */}
            {isVisible && (
              <a 
                href="#home" 
                className="back-to-top"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                aria-label="Back to top"
              >
                Back to Top 
                <ArrowUpwardIcon className="back-to-top-icon" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;