// // components/Projects.js
// import React, { useState } from 'react';

// const Projects = () => {
//   const [activeFilter, setActiveFilter] = useState('all');
  
//   const projects = [
//     {
//       id: 1,
//       title: 'E-Commerce Website',
//       category: 'react',
//       description: 'A fully responsive e-commerce site with shopping cart and payment integration.',
//       image: '/api/placeholder/400/250',
//       tags: ['React', 'Redux', 'Stripe', 'Firebase'],
//       liveLink: '#',
//       codeLink: '#'
//     },
//     {
//       id: 2,
//       title: 'Task Management App',
//       category: 'javascript',
//       description: 'A drag and drop task management application with local storage.',
//       image: '/api/placeholder/400/250',
//       tags: ['JavaScript', 'HTML', 'CSS', 'LocalStorage'],
//       liveLink: '#',
//       codeLink: '#'
//     },
//     {
//       id: 3,
//       title: 'Weather Dashboard',
//       category: 'react',
//       description: 'A weather application that displays current and forecast data.',
//       image: '/api/placeholder/400/250',
//       tags: ['React', 'API', 'Chart.js', 'CSS Modules'],
//       liveLink: '#',
//       codeLink: '#'
//     },
//     {
//       id: 4,
//       title: 'Portfolio Website',
//       category: 'html/css',
//       description: 'A responsive portfolio website with dark mode and smooth animations.',
//       image: '/api/placeholder/400/250',
//       tags: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
//       liveLink: '#',
//       codeLink: '#'
//     },
//     {
//       id: 5,
//       title: 'Social Media Dashboard',
//       category: 'react',
//       description: 'A dashboard for managing social media accounts with analytics.',
//       image: '/api/placeholder/400/250',
//       tags: ['React', 'Chart.js', 'REST API', 'Material UI'],
//       liveLink: '#',
//       codeLink: '#'
//     },
//     {
//       id: 6,
//       title: 'Restaurant Website',
//       category: 'html/css',
//       description: 'A beautiful restaurant website with online reservation system.',
//       image: '/api/placeholder/400/250',
//       tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
//       liveLink: '#',
//       codeLink: '#'
//     }
//   ];

//   const categories = ['all', 'react', 'javascript', 'html/css'];

//   const filteredProjects = activeFilter === 'all' 
//     ? projects 
//     : projects.filter(project => project.category === activeFilter);

//   return (
//     <section id="projects" className="section projects">
//       <div className="container">
//         <div className="section-title">
//           <h2>My Projects</h2>
//           <p>Some of my recent work and personal projects</p>
//         </div>
        
//         <div className="projects-filter">
//           {categories.map(category => (
//             <button
//               key={category}
//               className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
//               onClick={() => setActiveFilter(category)}
//             >
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </button>
//           ))}
//         </div>
        
//         <div className="projects-grid">
//           {filteredProjects.map(project => (
//             <div key={project.id} className="project-card">
//               <div className="project-image">
//                 <div className="image-placeholder">
//                   <i className="fas fa-laptop-code"></i>
//                 </div>
//                 <div className="project-overlay">
//                   <div className="project-links">
//                     <a href={project.liveLink} className="project-link">
//                       <i className="fas fa-external-link-alt"></i>
//                     </a>
//                     <a href={project.codeLink} className="project-link">
//                       <i className="fab fa-github"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="project-content">
//                 <h3 className="project-title">{project.title}</h3>
//                 <p className="project-description">{project.description}</p>
//                 <div className="project-tags">
//                   {project.tags.map((tag, index) => (
//                     <span key={index} className="project-tag">{tag}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;




// components/Projects.js
// import React, { useState } from 'react';

// const Projects = () => {
//   const [activeFilter, setActiveFilter] = useState('all');

//   const projects = [
//     {
//       id: 1,
//       title: 'GreySlide Imaging',
//       category: 'react',
//       description: 'Digital Microscope WholeSlide Imaging Software used in digital pathology with AI-assisted image analysis and OpenLayers integration.',
//       image: '/api/placeholder/400/250',
//       tags: ['React', 'OpenLayers', 'AI', 'WebGL', 'Canvas'],
//       liveLink: '#',
//       codeLink: '#'
//     },
//     {
//       id: 2,
//       title: 'Esyacura HMS',
//       category: 'react',
//       description: 'Hospital Management System integrated with GreySlide Imaging, featuring patient records, imaging viewer, and doctor dashboards.',
//       image: '/api/placeholder/400/250',
//       tags: ['React', 'Redux', 'REST API', 'Material UI'],
//       liveLink: '#',
//       codeLink: '#'
//     },
//     {
//       id: 3,
//       title: 'TalentG (HR Platform)',
//       category: 'react',
//       description: 'Recruitment and talent assessment SaaS for HR professionals. Includes job posting, candidate management, and AI-based skill matching.',
//       image: '/api/placeholder/400/250',
//       tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
//       liveLink: '#',
//       codeLink: '#'
//     },
//     {
//       id: 4,
//       title: 'TalentG Networking App',
//       category: 'react',
//       description: 'A professional networking platform similar to LinkedIn, featuring profile creation, social feeds, job search, and messaging.',
//       image: '/api/placeholder/400/250',
//       tags: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
//       liveLink: '#',
//       codeLink: '#'
//     },
//     {
//       id: 5,
//       title: 'Army Supply Rescue System',
//       category: 'react',
//       description: 'Real-time web application for tracking, managing, and optimizing army supply chains and rescue logistics during emergencies.',
//       image: '/api/placeholder/400/250',
//       tags: ['React', 'OpenLayers', 'Socket.io', 'REST API', 'Map Visualization'],
//       liveLink: '#',
//       codeLink: '#'
//     }
//   ];

//   const categories = ['all', 'react'];

//   const filteredProjects = activeFilter === 'all'
//     ? projects
//     : projects.filter(project => project.category === activeFilter);

//   return (
//     <section id="projects" className="section projects">
//       <div className="container">
//         <div className="section-title">
//           <h2>My Projects</h2>
//           <p>Professional and real-world applications I've developed or contributed to</p>
//         </div>

//         <div className="projects-filter">
//           {categories.map(category => (
//             <button
//               key={category}
//               className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
//               onClick={() => setActiveFilter(category)}
//             >
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </button>
//           ))}
//         </div>

//         <div className="projects-grid">
//           {filteredProjects.map(project => (
//             <div key={project.id} className="project-card">
//               <div className="project-image">
//                 <div className="image-placeholder">
//                   <i className="fas fa-laptop-code"></i>
//                 </div>
//                 <div className="project-overlay">
//                   <div className="project-links">
//                     <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
//                       <i className="fas fa-external-link-alt"></i>
//                     </a>
//                     <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">
//                       <i className="fab fa-github"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="project-content">
//                 <h3 className="project-title">{project.title}</h3>
//                 <p className="project-description">{project.description}</p>
//                 <div className="project-tags">
//                   {project.tags.map((tag, index) => (
//                     <span key={index} className="project-tag">{tag}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;




// import React, { useState } from 'react';
// import './Projects.css';

// const Projects = () => {
//   const [activeFilter, setActiveFilter] = useState('all');

//   const projects = [
//     {
//       id: 1,
//       title: 'GreySlide Imaging',
//       category: 'react',
//       description: 'Digital Microscope WholeSlide Imaging Software used in digital pathology with AI-assisted image analysis and OpenLayers integration.',
//       image: '/api/placeholder/400/250',
//       tags: ['React', 'OpenLayers', 'AI', 'WebGL', 'Canvas'],
//       liveLink: '#',
//       codeLink: '#'
//     },
//     {
//       id: 2,
//       title: 'Esyacura HMS',
//       category: 'react',
//       description: 'Hospital Management System integrated with GreySlide Imaging, featuring patient records, imaging viewer, and doctor dashboards.',
//       image: '/api/placeholder/400/250',
//       tags: ['React', 'Redux', 'REST API', 'Material UI'],
//       liveLink: '#',
//       codeLink: '#'
//     },
//     {
//       id: 3,
//       title: 'TalentG (HR Platform)',
//       category: 'react',
//       description: 'Recruitment and talent assessment SaaS for HR professionals. Includes job posting, candidate management, and AI-based skill matching.',
//       image: '/api/placeholder/400/250',
//       tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
//       liveLink: '#',
//       codeLink: '#'
//     },
//     {
//       id: 4,
//       title: 'TalentG Networking App',
//       category: 'react',
//       description: 'A professional networking platform similar to LinkedIn, featuring profile creation, social feeds, job search, and messaging.',
//       image: '/api/placeholder/400/250',
//       tags: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
//       liveLink: '#',
//       codeLink: '#'
//     },
//     {
//       id: 5,
//       title: 'Army Supply Rescue System',
//       category: 'react',
//       description: 'Real-time web application for tracking, managing, and optimizing army supply chains and rescue logistics during emergencies.',
//       image: '/api/placeholder/400/250',
//       tags: ['React', 'OpenLayers', 'Socket.io', 'REST API', 'Map Visualization'],
//       liveLink: '#',
//       codeLink: '#'
//     }
//   ];

//   const categories = ['all', 'react'];

//   const filteredProjects = activeFilter === 'all'
//     ? projects
//     : projects.filter(project => project.category === activeFilter);

//   return (
//     <section id="projects" className="section projects">
//       <div className="container">
//         <div className="section-title">
//           <h2>My Projects</h2>
//           <p>Professional and real-world applications I've developed or contributed to</p>
//         </div>

//         <div className="projects-filter">
//           {categories.map(category => (
//             <button
//               key={category}
//               className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
//               onClick={() => setActiveFilter(category)}
//             >
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </button>
//           ))}
//         </div>

//         <div className="projects-grid">
//           {filteredProjects.map(project => (
//             <div key={project.id} className="project-card">
//               <div className="project-image">
//                 <div className="image-placeholder">
//                   <i className="fas fa-laptop-code"></i>
//                 </div>
//                 <div className="project-overlay">
//                   <div className="project-links">
//                     <a 
//                       href={project.liveLink} 
//                       className="project-link" 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       aria-label={`View live demo of ${project.title}`}
//                     >
//                       <i className="fas fa-external-link-alt"></i>
//                     </a>
//                     <a 
//                       href={project.codeLink} 
//                       className="project-link" 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       aria-label={`View source code of ${project.title}`}
//                     >
//                       <i className="fab fa-github"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="project-content">
//                 <h3 className="project-title">{project.title}</h3>
//                 <p className="project-description">{project.description}</p>
//                 <div className="project-tags">
//                   {project.tags.map((tag, index) => (
//                     <span key={index} className="project-tag">{tag}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;





































































// import React, { useState } from 'react';
// import './Projects.css';
// import LaptopIcon from '@mui/icons-material/Laptop';
// import LaunchIcon from '@mui/icons-material/Launch';
// import CodeIcon from '@mui/icons-material/Code';
// import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
// import WorkIcon from '@mui/icons-material/Work';
// import PublicIcon from '@mui/icons-material/Public';
// import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
// import PsychologyIcon from '@mui/icons-material/Psychology';
// import ApiIcon from '@mui/icons-material/Api';
// import AccessibilityIcon from '@mui/icons-material/Accessibility';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import SecurityIcon from '@mui/icons-material/Security';
// import SpeedIcon from '@mui/icons-material/Speed';
// import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
// import img3 from '../img/1122334455.png';

// const Projects = () => {
//   const [activeFilter, setActiveFilter] = useState('all');

//   const projects = [
//     {
//       id: 1,
//       title: 'GreySlide Imaging',
//       category: 'professional',
//       description: 'Digital Microscope WholeSlide Imaging Software used in digital pathology with AI-assisted image analysis and OpenLayers integration. Developed SaaS app with React.js (ES6+), HTML5, CSS3, REST APIs. Integrated AI, computer vision & machine learning with accessible UI (WCAG) and performance optimization (Webpack, Babel).',
//       icon: <MedicalServicesIcon className="project-main-icon" />,
//       tags: ['React', 'OpenLayers', 'AI/ML', 'WebGL', 'Canvas', 'REST APIs', 'WCAG', 'Webpack'],
//       liveLink: '#',
//       codeLink: '#',
//       features: [
//         { icon: <PsychologyIcon />, text: 'AI-assisted diagnostics' },
//         { icon: <AccessibilityIcon />, text: 'WCAG compliant UI' },
//         { icon: <SpeedIcon />, text: 'Performance optimized' },
//         { icon: <IntegrationInstructionsIcon />, text: 'Microservices architecture' }
//       ]
//     },
//     {
//       id: 2,
//       title: 'Esyacura HMS',
//       category: 'professional',
//       description: 'Hospital Management System integrated with GreySlide Imaging, featuring patient records, imaging viewer, and doctor dashboards. Built healthcare modules using React.js (ES6+), HTML5, CSS3. Created dashboards with clinical data visualization and automated workflows with EMR integration, cutting manual work by 30%.',
//       icon: <MedicalServicesIcon className="project-main-icon" />,
//       tags: ['React', 'Redux', 'REST API', 'Material UI', 'Data Visualization', 'EMR Integration'],
//       liveLink: '#',
//       codeLink: '#',
//       features: [
//         { icon: <DashboardIcon />, text: 'Clinical dashboards' },
//         { icon: <SpeedIcon />, text: '30% workflow automation' },
//         { icon: <IntegrationInstructionsIcon />, text: 'EMR integration' },
//         { icon: <ApiIcon />, text: 'Real-time data sync' }
//       ]
//     },
//     {
//       id: 3,
//       title: 'TalentG HR Platform',
//       category: 'professional',
//       description: 'Recruitment and talent assessment SaaS for HR professionals. Includes job posting, candidate management, and AI-based skill matching. Built frontend with React.js (ES6+), HTML5, CSS3, JavaScript ES6+. Integrated APIs, OAuth 2.0. Used Redux & React Hooks to boost recruiter productivity by 35%. Enhanced monitoring with Sentry.',
//       icon: <WorkIcon className="project-main-icon" />,
//       tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Redux', 'OAuth 2.0', 'Sentry'],
//       liveLink: '#',
//       codeLink: '#',
//       features: [
//         { icon: <PsychologyIcon />, text: 'AI skill matching' },
//         { icon: <SpeedIcon />, text: '35% productivity boost' },
//         { icon: <SecurityIcon />, text: 'OAuth 2.0 security' },
//         { icon: <DashboardIcon />, text: 'Recruiter dashboards' }
//       ]
//     },
//     {
//       id: 4,
//       title: 'TalentG Networking App',
//       category: 'professional',
//       description: 'A professional networking platform similar to LinkedIn, featuring profile creation, social feeds, job search, and messaging. Built with modern React patterns and real-time features.',
//       icon: <PublicIcon className="project-main-icon" />,
//       tags: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion', 'Real-time', 'Social Features'],
//       liveLink: '#',
//       codeLink: '#',
//       features: [
//         { icon: <PublicIcon />, text: 'Professional networking' },
//         { icon: <ApiIcon />, text: 'Real-time messaging' },
//         { icon: <DashboardIcon />, text: 'Job search platform' },
//         { icon: <SpeedIcon />, text: 'Smooth animations' }
//       ]
//     },
//     {
//       id: 5,
//       title: 'Army Supply Rescue System',
//       category: 'professional',
//       description: 'Real-time web application for tracking, managing, and optimizing army supply chains and rescue logistics during emergencies. Features advanced map visualization and real-time coordination.',
//       icon: <MilitaryTechIcon className="project-main-icon" />,
//       tags: ['React', 'OpenLayers', 'Socket.io', 'REST API', 'Map Visualization', 'Real-time'],
//       liveLink: '#',
//       codeLink: '#',
//       features: [
//         { icon: <MilitaryTechIcon />, text: 'Military logistics' },
//         { icon: <ApiIcon />, text: 'Real-time tracking' },
//         { icon: <PublicIcon />, text: 'Map visualization' },
//         { icon: <SpeedIcon />, text: 'Emergency response' }
//       ]
//     },
//     {
//       id: 6,
//       title: 'Tea Estate Management System',
//       category: 'internship',
//       description: 'Full-stack application developed during training at Nilgiris LikeMind Technologies. Frontend modules built with React.js, HTML5, CSS3 for managing tea estate operations and inventory.',
//       icon: <LaptopIcon className="project-main-icon" />,
//       tags: ['React', 'HTML5', 'CSS3', 'Java', 'Spring Boot', 'MySQL'],
//       liveLink: '#',
//       codeLink: '#',
//       features: [
//         { icon: <DashboardIcon />, text: 'Inventory management' },
//         { icon: <ApiIcon />, text: 'Full-stack development' },
//         { icon: <WorkIcon />, text: 'Operational dashboards' },
//         { icon: <IntegrationInstructionsIcon />, text: 'Database integration' }
//       ]
//     },
//     {
//       id: 7,
//       title: 'Online Learning Portal',
//       category: 'internship',
//       description: 'Built during Virtusa internship using React.js, HTML5, CSS3, Spring Boot, Node.js, MySQL. Designed responsive UIs and optimized backend scalability. Delivered features in Agile sprints focusing on UI/UX performance.',
//       icon: <LaptopIcon className="project-main-icon" />,
//       tags: ['React', 'HTML5', 'CSS3', 'Spring Boot', 'Node.js', 'MySQL', 'Agile'],
//       liveLink: '#',
//       codeLink: '#',
//       features: [
//         { icon: <DashboardIcon />, text: 'Learning management' },
//         { icon: <SpeedIcon />, text: 'Scalable architecture' },
//         { icon: <AccessibilityIcon />, text: 'Responsive design' },
//         { icon: <ApiIcon />, text: 'RESTful APIs' }
//       ]
//     }
//   ];

//   const categories = [
//     { key: 'all', label: 'All Projects' },
//     { key: 'professional', label: 'Professional Work' },
//     { key: 'internship', label: 'Internship Projects' }
//   ];

//   const filteredProjects = activeFilter === 'all'
//     ? projects
//     : projects.filter(project => project.category === activeFilter);

//   return (
//     <section id="projects" className="section projects">
//       <div className="container">
//         <div className="section-title">
//           <h2>My Projects</h2>
//           <p>Professional work and real-world applications I've developed or contributed to</p>
//         </div>

//         <div className="projects-filter">
//           {categories.map(category => (
//             <button
//               key={category.key}
//               className={`filter-btn ${activeFilter === category.key ? 'active' : ''}`}
//               onClick={() => setActiveFilter(category.key)}
//             >
//               {category.label}
//             </button>
//           ))}
//         </div>

//         <div className="projects-grid">
//           {filteredProjects.map(project => (
//             <div key={project.id} className="project-card">
//               <div className="project-header">
            
//                 <h3 className="project-title">{project.title}</h3>
//               </div>
              
//               <div className="project-image">
//                 <div className="image-placeholder">
//                   <img src={img3}/>
//                   <LaptopIcon className="placeholder-icon" />
//                 </div>
//                 <div className="project-overlay">
//                   <div className="project-links">
//                     <a 
//                       href={project.liveLink} 
//                       className="project-link" 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       aria-label={`View live demo of ${project.title}`}
//                     >
//                       <LaunchIcon />
//                     </a>
//                     <a 
//                       href={project.codeLink} 
//                       className="project-link" 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       aria-label={`View source code of ${project.title}`}
//                     >
//                       <CodeIcon />
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <div className="project-content">
//                 <p className="project-description">{project.description}</p>
                
//                 {/* <div className="project-features">
//                   <h4>Key Features:</h4>
//                   <div className="features-list">
//                     {project.features.map((feature, index) => (
//                       <div key={index} className="feature-item">
//                         <span className="feature-icon">{feature.icon}</span>
//                         <span className="feature-text">{feature.text}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div> */}

//                 <div className="project-tags">
//                   {project.tags.map((tag, index) => (
//                     <span key={index} className="project-tag">{tag}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

























import React, { useState } from 'react';
import './Projects.css';
import LaptopIcon from '@mui/icons-material/Laptop';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import WorkIcon from '@mui/icons-material/Work';
import PublicIcon from '@mui/icons-material/Public';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ApiIcon from '@mui/icons-material/Api';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

// Import individual project images
import greyslideImg from '../img/micro.jpg';
import esyacuraImg from '../img/esyacura.jpg';
import talentgHrImg from '../img/talentg.jpg';
import talentgNetworkingImg from '../img/talent.jpg';
import armySupplyImg from '../img/army.jpg';
import teaEstateImg from '../img/tea.jpg';
import learningPortalImg from '../img/online.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'GreySlide Imaging',
      category: 'professional',
      description: 'Digital Microscope WholeSlide Imaging Software used in digital pathology with AI-assisted image analysis and OpenLayers integration. Developed SaaS app with React.js (ES6+), HTML5, CSS3, REST APIs. Integrated AI, computer vision & machine learning with accessible UI (WCAG) and performance optimization (Webpack, Babel).',
      image: greyslideImg,
      icon: <MedicalServicesIcon className="project-main-icon" />,
      tags: ['React', 'OpenLayers', 'AI/ML', 'WebGL', 'Canvas', 'REST APIs', 'WCAG', 'Webpack'],
      liveLink: 'https://www.greyslide.ca/',
      codeLink: '#',
      features: [
        { icon: <PsychologyIcon />, text: 'AI-assisted diagnostics' },
        { icon: <AccessibilityIcon />, text: 'WCAG compliant UI' },
        { icon: <SpeedIcon />, text: 'Performance optimized' },
        { icon: <IntegrationInstructionsIcon />, text: 'Microservices architecture' }
      ]
    },
    {
      id: 2,
      title: 'Esyacura HMS',
      category: 'professional',
      description: 'Hospital Management System integrated with GreySlide Imaging, featuring patient records, imaging viewer, and doctor dashboards. Built healthcare modules using React.js (ES6+), HTML5, CSS3. Created dashboards with clinical data visualization and automated workflows with EMR integration, cutting manual work by 30%.',
      image: esyacuraImg,
      icon: <MedicalServicesIcon className="project-main-icon" />,
      tags: ['React', 'Redux', 'REST API', 'Material UI', 'Data Visualization', 'EMR Integration'],
      liveLink: 'https://www.esyacura.com/',
      codeLink: '#',
      features: [
        { icon: <DashboardIcon />, text: 'Clinical dashboards' },
        { icon: <SpeedIcon />, text: '30% workflow automation' },
        { icon: <IntegrationInstructionsIcon />, text: 'EMR integration' },
        { icon: <ApiIcon />, text: 'Real-time data sync' }
      ]
    },
    {
      id: 3,
      title: 'TalentG HR Platform',
      category: 'professional',
      description: 'Recruitment and talent assessment SaaS for HR professionals. Includes job posting, candidate management, and AI-based skill matching. Built frontend with React.js (ES6+), HTML5, CSS3, JavaScript ES6+. Integrated APIs, OAuth 2.0. Used Redux & React Hooks to boost recruiter productivity by 35%. Enhanced monitoring with Sentry.',
      image: talentgHrImg,
      icon: <WorkIcon className="project-main-icon" />,
      tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Redux', 'OAuth 2.0', 'Sentry'],
      liveLink: 'https://exam.talentg.co/hr',
      codeLink: '#',
      features: [
        { icon: <PsychologyIcon />, text: 'AI skill matching' },
        { icon: <SpeedIcon />, text: '35% productivity boost' },
        { icon: <SecurityIcon />, text: 'OAuth 2.0 security' },
        { icon: <DashboardIcon />, text: 'Recruiter dashboards' }
      ]
    },
    {
      id: 4,
      title: 'TalentG Networking App',
      category: 'professional',
      description: 'A professional networking platform similar to LinkedIn, featuring profile creation, social feeds, job search, and messaging. Built with modern React patterns and real-time features.',
      image: talentgNetworkingImg,
      icon: <PublicIcon className="project-main-icon" />,
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion', 'Real-time', 'Social Features'],
      liveLink: 'https://exam.talentg.co/talentg-dashboard',
      codeLink: '#',
      features: [
        { icon: <PublicIcon />, text: 'Professional networking' },
        { icon: <ApiIcon />, text: 'Real-time messaging' },
        { icon: <DashboardIcon />, text: 'Job search platform' },
        { icon: <SpeedIcon />, text: 'Smooth animations' }
      ]
    },
    {
      id: 5,
      title: 'Army Supply Rescue System',
      category: 'professional',
      description: 'Real-time web application for tracking, managing, and optimizing army supply chains and rescue logistics during emergencies. Features advanced map visualization and real-time coordination.',
      image: armySupplyImg,
      icon: <MilitaryTechIcon className="project-main-icon" />,
      tags: ['React', 'OpenLayers', 'Socket.io', 'REST API', 'Map Visualization', 'Real-time'],
      liveLink: 'https://rescue.esyacura.com/',
      codeLink: '#',
      features: [
        { icon: <MilitaryTechIcon />, text: 'Military logistics' },
        { icon: <ApiIcon />, text: 'Real-time tracking' },
        { icon: <PublicIcon />, text: 'Map visualization' },
        { icon: <SpeedIcon />, text: 'Emergency response' }
      ]
    },
    {
      id: 6,
      title: 'Tea Estate Management System',
      category: 'internship',
      description: 'Full-stack application developed during training at Nilgiris LikeMind Technologies. Frontend modules built with React.js, HTML5, CSS3 for managing tea estate operations and inventory.',
      image: teaEstateImg,
      icon: <LaptopIcon className="project-main-icon" />,
      tags: ['React', 'HTML5', 'CSS3', 'Java', 'Spring Boot', 'MySQL'],
      liveLink: 'https://likemindtech.com/Tea_Estate_Management_System#:~:text=ERP-%20Tea%20Estate%20Management%20System%20is%20designed%20to,sales%2C%20purchase%20and%20payroll%20of%20various%20division%20staff.',
      codeLink: '#',
      features: [
        { icon: <DashboardIcon />, text: 'Inventory management' },
        { icon: <ApiIcon />, text: 'Full-stack development' },
        { icon: <WorkIcon />, text: 'Operational dashboards' },
        { icon: <IntegrationInstructionsIcon />, text: 'Database integration' }
      ]
    },
    {
      id: 7,
      title: 'Online Learning Portal',
      category: 'internship',
      description: 'Built during Virtusa internship using React.js, HTML5, CSS3, Spring Boot, Node.js, MySQL. Designed responsive UIs and optimized backend scalability. Delivered features in Agile sprints focusing on UI/UX performance.',
      image: learningPortalImg,
      icon: <LaptopIcon className="project-main-icon" />,
      tags: ['React', 'HTML5', 'CSS3', 'Spring Boot', 'Node.js', 'MySQL', 'Agile'],
      liveLink: '#',
      codeLink: '#',
      features: [
        { icon: <DashboardIcon />, text: 'Learning management' },
        { icon: <SpeedIcon />, text: 'Scalable architecture' },
        { icon: <AccessibilityIcon />, text: 'Responsive design' },
        { icon: <ApiIcon />, text: 'RESTful APIs' }
      ]
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'professional', label: 'Professional Work' },
    { key: 'internship', label: 'Internship Projects' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
          <p>Professional work and real-world applications I've developed or contributed to</p>
        </div>

        <div className="projects-filter">
          {categories.map(category => (
            <button
              key={category.key}
              className={`filter-btn ${activeFilter === category.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              
              <div className="project-image">
                <div className="image-container">
                  <img 
                    src={project.image} 
                    alt={`${project.title} screenshot`}
                    className="project-screenshot"
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.liveLink} 
                        className="project-link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <LaunchIcon />
                      </a>
                      {/* <a 
                        href={project.codeLink} 
                        className="project-link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`View source code of ${project.title}`}
                      >
                        <CodeIcon />
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;