// import React from 'react';
// import './Skills.css';

// const Skills = () => {
//   const skills = [
//     { name: 'React.js', level: 90 },
//     { name: 'JavaScript (ES6+)', level: 85 },
    
//     { name: 'OpenLayers', level: 80 },
//     { name: 'HTML5 / CSS3', level: 95 },
 
//     { name: 'Git / GitHub', level: 80 }
//   ];

//   return (
//     <section id="skills" className="section skills">
//       <div className="container">
//         <div className="section-title">
//           <h2>My Skills</h2>
//           <p>Technologies and tools I work with</p>
//         </div>
        
//         <div className="skills-content">
//           <div className="skills-list">
//             {skills.map((skill, index) => (
//               <div key={index} className="skill-item">
//                 <div className="skill-info">
//                   <span className="skill-name">{skill.name}</span>
//                   <span className="skill-percentage">{skill.level}%</span>
//                 </div>
//                 <div className="skill-bar">
//                   <div 
//                     className="skill-progress" 
//                     style={{ width: `${skill.level}%` }}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="skills-tools">
//             <h3>Tools & Technologies</h3>
//             <div className="tools-grid">
//               <div className="tool-item">
//                 <i className="fab fa-html5"></i>
//                 <span>HTML5</span>
//               </div>
//               <div className="tool-item">
//                 <i className="fab fa-css3-alt"></i>
//                 <span>CSS3</span>
//               </div>
//               <div className="tool-item">
//                 <i className="fab fa-js"></i>
//                 <span>JavaScript</span>
//               </div>
//               <div className="tool-item">
//                 <i className="fab fa-react"></i>
//                 <span>React</span>
//               </div>
//               <div className="tool-item">
//                 <i className="fab fa-git-alt"></i>
//                 <span>Git / GitHub</span>
//               </div>
//               <div className="tool-item">
//                 <i className="fab fa-npm"></i>
//                 <span>NPM / Yarn</span>
//               </div>
//               <div className="tool-item">
//                 <i className="fas fa-layer-group"></i>
//                 <span>OpenLayers</span>
//               </div>
//               <div className="tool-item">
//                 <i className="fas fa-wind"></i>
//                 <span>Tailwind CSS</span>
//               </div>
          
//               <div className="tool-item">
//                 <i className="fab fa-figma"></i>
//                 <span>Figma</span>
//               </div>
//               <div className="tool-item">
//                 <i className="fas fa-code-branch"></i>
//                 <span>Redux </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;














// import React from 'react';
// import './Skills.css';
// import CodeIcon from '@mui/icons-material/Code';
// import HtmlIcon from '@mui/icons-material/Html';
// import CssIcon from '@mui/icons-material/Css';
// import JavascriptIcon from '@mui/icons-material/Javascript';
// // import ReactIcon from '@mui/icons-material/React';
// import GitIcon from '@mui/icons-material/GitHub';
// import LayersIcon from '@mui/icons-material/Layers';
// import PaletteIcon from '@mui/icons-material/Palette';
// import StorageIcon from '@mui/icons-material/Storage';
// import ApiIcon from '@mui/icons-material/Api';
// import WebIcon from '@mui/icons-material/Web';
// import BuildIcon from '@mui/icons-material/Build';
// import SpeedIcon from '@mui/icons-material/Speed';
// import DevicesIcon from '@mui/icons-material/Devices';

// const Skills = () => {
//   const skills = [
//     { name: 'React.js', level: 90, icon: <CodeIcon className="skill-icon" /> },
//     { name: 'JavaScript (ES6+)', level: 85, icon: <JavascriptIcon className="skill-icon" /> },
//     { name: 'OpenLayers', level: 80, icon: <LayersIcon className="skill-icon" /> },
//     { name: 'HTML5 / CSS3', level: 95, icon: <WebIcon className="skill-icon" /> },
//     { name: 'Git / GitHub', level: 80, icon: <GitIcon className="skill-icon" /> }
//   ];

//   const tools = [
//     { name: 'HTML5', icon: <HtmlIcon className="tool-icon" />, category: 'frontend' },
//     { name: 'CSS3', icon: <CssIcon className="tool-icon" />, category: 'frontend' },
//     { name: 'JavaScript', icon: <JavascriptIcon className="tool-icon" />, category: 'frontend' },
//     { name: 'React', icon: <CodeIcon className="tool-icon" />, category: 'frontend' },
//     { name: 'Redux', icon: <BuildIcon className="tool-icon" />, category: 'frontend' },
//     { name: 'OpenLayers', icon: <LayersIcon className="tool-icon" />, category: 'frontend' },
//     { name: 'Tailwind CSS', icon: <PaletteIcon className="tool-icon" />, category: 'frontend' },
//     { name: 'Material-UI', icon: <PaletteIcon className="tool-icon" />, category: 'frontend' },
//     { name: 'Git / GitHub', icon: <GitIcon className="tool-icon" />, category: 'tools' },
//     { name: 'REST APIs', icon: <ApiIcon className="tool-icon" />, category: 'backend' },
//     { name: 'Node.js', icon: <CodeIcon className="tool-icon" />, category: 'backend' },
//     { name: 'Webpack', icon: <BuildIcon className="tool-icon" />, category: 'tools' },
//     { name: 'Figma', icon: <PaletteIcon className="tool-icon" />, category: 'tools' },
//     { name: 'VS Code', icon: <CodeIcon className="tool-icon" />, category: 'tools' },
//     { name: 'Responsive Design', icon: <DevicesIcon className="tool-icon" />, category: 'frontend' },
//     { name: 'Performance Opt', icon: <SpeedIcon className="tool-icon" />, category: 'tools' }
//   ];

//   const categories = [
//     { key: 'frontend', label: 'Frontend', color: '#3498db' },
//     { key: 'backend', label: 'Backend', color: '#2ecc71' },
//     { key: 'tools', label: 'Tools & Others', color: '#9b59b6' }
//   ];

//   return (
//     <section id="skills" className="section skills">
//       <div className="container">
//         <div className="section-title">
//           <h2>My Skills</h2>
//           <p>Technologies and tools I work with</p>
//         </div>
        
//         <div className="skills-content">
//           {/* Skills Progress Section */}
//           {/* <div className="skills-progress-section">
//             <div className="skills-list">
//               {skills.map((skill, index) => (
//                 <div key={index} className="skill-item">
//                   <div className="skill-header">
//                     <div className="skill-info">
//                       <div className="skill-icon-wrapper">
//                         {skill.icon}
//                         <span className="skill-name">{skill.name}</span>
//                       </div>
//                       <span className="skill-percentage">{skill.level}%</span>
//                     </div>
//                   </div>
//                   <div className="skill-bar">
//                     <div 
//                       className="skill-progress" 
//                       style={{ width: `${skill.level}%` }}
//                       data-level={skill.level}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div> */}

//           {/* Tools & Technologies Section */}
//           <div className="skills-tools-section">
//             <div className="tools-categories">
//               {categories.map(category => (
//                 <div key={category.key} className="tools-category">
//                   <h4 
//                     className="category-title"
//                     style={{ '--category-color': category.color }}
//                   >
//                     {category.label}
//                   </h4>
//                   <div className="tools-grid">
//                     {tools
//                       .filter(tool => tool.category === category.key)
//                       .map((tool, index) => (
//                         <div key={index} className="tool-item">
//                           <div 
//                             className="tool-icon-wrapper"
//                             style={{ '--category-color': category.color }}
//                           >
//                             {tool.icon}
//                           </div>
//                           <span className="tool-name">{tool.name}</span>
//                         </div>
//                       ))
//                     }
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Quick Stats */}
//         <div className="skills-stats">
//           <div className="stat-item">
//             <div className="stat-number">4+</div>
//             <div className="stat-label">Years Experience</div>
//           </div>
//           <div className="stat-item">
//             <div className="stat-number">20+</div>
//             <div className="stat-label">Projects Completed</div>
//           </div>
//           <div className="stat-item">
//             <div className="stat-number">15+</div>
//             <div className="stat-label">Technologies</div>
//           </div>
//           <div className="stat-item">
//             <div className="stat-number">100%</div>
//             <div className="stat-label">Client Satisfaction</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

















import React from 'react';
import './Skills.css';
import CodeIcon from '@mui/icons-material/Code';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import GitIcon from '@mui/icons-material/GitHub';
import LayersIcon from '@mui/icons-material/Layers';
import PaletteIcon from '@mui/icons-material/Palette';
import StorageIcon from '@mui/icons-material/Storage';
import ApiIcon from '@mui/icons-material/Api';
import WebIcon from '@mui/icons-material/Web';
import BuildIcon from '@mui/icons-material/Build';
import SpeedIcon from '@mui/icons-material/Speed';
import DevicesIcon from '@mui/icons-material/Devices';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import TerminalIcon from '@mui/icons-material/Terminal';
import DataObjectIcon from '@mui/icons-material/DataObject';

const Skills = () => {
  const skills = [
    { name: 'React.js', level: 90, icon: <CodeIcon className="skill-icon" /> },
    { name: 'JavaScript (ES6+)', level: 85, icon: <JavascriptIcon className="skill-icon" /> },
    { name: 'OpenLayers', level: 80, icon: <LayersIcon className="skill-icon" /> },
    { name: 'HTML5 ', level: 95, icon: <WebIcon className="skill-icon" /> },
     { name: 'CSS3', level: 95, icon: <CssIcon className="skill-icon" /> },
    { name: 'Git / GitHub', level: 80, icon: <GitIcon className="skill-icon" /> }
  ];

  const tools = [
    { name: 'HTML5', icon: <HtmlIcon className="tool-icon" />, category: 'frontend' },
    { name: 'CSS3', icon: <CssIcon className="tool-icon" />, category: 'frontend' },
    { name: 'JavaScript', icon: <JavascriptIcon className="tool-icon" />, category: 'frontend' },
    { name: 'React', icon: <CodeIcon className="tool-icon" />, category: 'frontend' },
    { name: 'TypeScript', icon: <DataObjectIcon className="tool-icon" />, category: 'frontend' },
    { name: 'Redux', icon: <BuildIcon className="tool-icon" />, category: 'frontend' },
    { name: 'OpenLayers', icon: <LayersIcon className="tool-icon" />, category: 'frontend' },
    // { name: 'Tailwind CSS', icon: <PaletteIcon className="tool-icon" />, category: 'frontend' },
    { name: 'Material-UI', icon: <DesignServicesIcon className="tool-icon" />, category: 'frontend' },
    { name: 'Git / GitHub', icon: <GitIcon className="tool-icon" />, category: 'tools' },
    { name: 'REST APIs', icon: <ApiIcon className="tool-icon" />, category: 'backend' },
    { name: 'Node.js', icon: <TerminalIcon className="tool-icon" />, category: 'backend' },
    { name: 'Webpack', icon: <BuildIcon className="tool-icon" />, category: 'tools' },
    { name: 'Figma', icon: <PaletteIcon className="tool-icon" />, category: 'tools' },
    { name: 'VS Code', icon: <CodeIcon className="tool-icon" />, category: 'tools' },
    { name: 'Responsive Design', icon: <DevicesIcon className="tool-icon" />, category: 'frontend' },
    { name: 'Performance Opt', icon: <SpeedIcon className="tool-icon" />, category: 'tools' }
  ];

  const categories = [
    { key: 'frontend', label: 'Frontend Technologies' },
    { key: 'backend', label: 'Backend & APIs' },
    { key: 'tools', label: 'Tools & Platforms' }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-title">
          <h2>Technical Skills</h2>
          <p>Technologies and tools I specialize in</p>
        </div>
        
        <div className="skills-content">
          {/* Skills Progress Section */}
          <div className="skills-progress">
            <h3 className="skills-subtitle">Core Competencies</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <div className="skill-header">
                      <div className="skill-icon-wrapper">
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies Section */}
          <div className="skills-tools">
            <h3 className="skills-subtitle">Technologies & Tools</h3>
            <div className="tools-categories">
              {categories.map(category => (
                <div key={category.key} className="tools-category">
                  <h4 className="category-title">{category.label}</h4>
                  <div className="tools-grid">
                    {tools
                      .filter(tool => tool.category === category.key)
                      .map((tool, index) => (
                        <div key={index} className="tool-item">
                          <div className="tool-icon-wrapper">
                            {tool.icon}
                          </div>
                          <span className="tool-name">{tool.name}</span>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

  
      </div>
    </section>
  );
};

export default Skills;