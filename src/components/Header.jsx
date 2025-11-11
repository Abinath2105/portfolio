// components/Header.js
// import React, { useState, useEffect } from 'react';

// const Header = ({ darkMode, toggleDarkMode }) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
//       <div className="container">
//         <nav className="navbar">
//           <a href="#home" className="logo">
//             Dev<span>Portfolio</span>
//           </a>
          
//           <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
//             <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
//             <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
//             <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
//             <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
//             <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
//             <li>
//               <button 
//                 className="theme-toggle" 
//                 onClick={toggleDarkMode}
//                 aria-label="Toggle dark mode"
//               >
//                 {darkMode ? '☀️' : '🌙'}
//               </button>
//             </li>
//           </ul>
          
//           <div className="menu-toggle" onClick={toggleMobileMenu}>
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

// components/Header.js

// import React, { useState, useEffect } from 'react';
// import './Header.css';

// const Header = ({ darkMode, toggleDarkMode }) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
      
//       // Update active section based on scroll position
//       const sections = ['home', 'about', 'skills', 'projects', 'contact'];
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const offsetTop = element.offsetTop;
//           const offsetBottom = offsetTop + element.offsetHeight;

//           if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   const handleNavClick = (section) => {
//     closeMobileMenu();
//     setActiveSection(section);
//   };

//   return (
//     <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
//       <div className="container">
//         <nav className="navbar">
//           <a href="#home" className="logo" onClick={() => handleNavClick('home')}>
//             <span style={{color: 'var(--primary-color)'}}>A</span>
//             <span>binath</span>
//           </a>
          
//           <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
//             {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
//               <li key={section}>
//                 <a 
//                   href={`#${section}`}
//                   className={activeSection === section ? 'active' : ''}
//                   onClick={() => handleNavClick(section)}
//                 >
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                 </a>
//               </li>
//             ))}
//             <li>
//               <button 
//                 className="theme-toggle" 
//                 onClick={toggleDarkMode}
//                 aria-label="Toggle dark mode"
//               >
//                 {darkMode ? '☀️' : '🌙'}
//               </button>
//             </li>
//           </ul>
          
//           <div 
//             className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
//             onClick={toggleMobileMenu}
//             aria-label="Toggle menu"
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;



















import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (section) => {
    closeMobileMenu();
    setActiveSection(section);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <a 
            href="#home" 
            className="logo" 
            onClick={() => handleNavClick('home')}
          >
            <span>A</span>
            <span>binath</span>
          </a>
          
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <a 
                  href={`#${section}`}
                  className={activeSection === section ? 'active' : ''}
                  onClick={() => handleNavClick(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
            {/* <li>
              <button 
                className="theme-toggle" 
                onClick={toggleDarkMode}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </li> */}
          </ul>
          
          <div 
            className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;