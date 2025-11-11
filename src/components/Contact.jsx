// components/Contact.js
// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     alert('Thank you for your message! I will get back to you soon.');
//     setFormData({
//       name: '',
//       email: '',
//       subject: '',
//       message: ''
//     });
//   };

//   return (
//     <section id="contact" className="section contact">
//       <div className="container">
//         <div className="section-title">
//           <h2>Get In Touch</h2>
//           <p>Feel free to reach out for collaborations or just a friendly hello</p>
//         </div>
        
//         <div className="contact-content">
//           <div className="contact-info">
//             <h3>Let’s build something amazing together!</h3>
//             <p>
//               I’m always open to discussing exciting projects, creative ideas, 
//               or opportunities to collaborate on modern frontend experiences.
//             </p>
            
//             <div className="contact-details">
//               <div className="contact-item">
//                 <div className="contact-icon">
//                   <i className="fas fa-map-marker-alt"></i>
//                 </div>
//                 <div className="contact-text">
//                   <h4>Location</h4>
//                   <p>Bangalore, India</p>
//                 </div>
//               </div>
              
//               <div className="contact-item">
//                 <div className="contact-icon">
//                   <i className="fas fa-envelope"></i>
//                 </div>
//                 <div className="contact-text">
//                   <h4>Email</h4>
//                   <p>
//                     <a href="mailto:abinath2105@gmail.com">
//                       abinath2105@gmail.com
//                     </a>
//                   </p>
//                 </div>
//               </div>
              
//               <div className="contact-item">
//                 <div className="contact-icon">
//                   <i className="fas fa-phone"></i>
//                 </div>
//                 <div className="contact-text">
//                   <h4>Phone</h4>
//                   <p>
//                     <a href="tel:+919843935501">
//                       +91 98439 35501
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="social-links">
//               <a href="https://github.com/" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-github"></i>
//               </a>
//               <a href="https://linkedin.com/in/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-linkedin"></i>
//               </a>
//               <a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-twitter"></i>
//               </a>
//               <a href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-instagram"></i>
//               </a>
//             </div>
//           </div>
          
//           <div className="contact-form">
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
              
//               <div className="form-group">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
              
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="subject"
//                   placeholder="Subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
              
//               <div className="form-group">
//                 <textarea
//                   name="message"
//                   placeholder="Your Message"
//                   rows="5"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                 ></textarea>
//               </div>
              
//               <button type="submit" className="btn">Send Message</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;




// import React, { useState } from 'react';
// import './Contact.css';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import MailIcon from '@mui/icons-material/Mail';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
    
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1000));
    
//     console.log('Form submitted:', formData);
//     alert('Thank you for your message! I will get back to you soon.');
//     setFormData({
//       name: '',
//       email: '',
//       subject: '',
//       message: ''
//     });
//     setIsLoading(false);
//   };

//   return (
//     <section id="contact" className="section contact">
//       <div className="container">
//         <div className="section-title">
//           <h2>Get In Touch</h2>
//           <p>Feel free to reach out for collaborations or just a friendly hello</p>
//         </div>
        
//         <div className="contact-content">
//           <div className="contact-info">
//             <h3>Let's build something amazing together!</h3>
//             <p>
//               I'm always open to discussing exciting projects, creative ideas, 
//               or opportunities to collaborate on modern frontend experiences.
//             </p>
            
//             <div className="contact-details">
//               <div className="contact-item">
//                 <div className="contact-icon">
//                   <i className="fas fa-map-marker-alt"></i>
//                 </div>
//                 <div className="contact-text">
//                   <h4>Location</h4>
//                   <p>Bangalore, India</p>
//                 </div>
//               </div>
              
//               <div className="contact-item">
//                 <div className="contact-icon">
//                   <i className="fas fa-envelope"></i>
//                 </div>
//                 <div className="contact-text">
//                   <h4>Email</h4>
//                   <p>
//                     <a href="mailto:abinath2105@gmail.com">
//                       abinath2105@gmail.com
//                     </a>
//                   </p>
//                 </div>
//               </div>
              
//               <div className="contact-item">
//                 <div className="contact-icon">
//                   <i className="fas fa-phone"></i>
//                 </div>
//                 <div className="contact-text">
//                   <h4>Phone</h4>
//                   <p>
//                     <a href="tel:+919843935501">
//                       +91 98439 35501
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="social-links">
//               <a href="https://github.com/" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-github"></i>
//               </a>
//               <a href="https://linkedin.com/in/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-linkedin"></i>
//               </a>
//               <a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-twitter"></i>
//               </a>
//               <a href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-instagram"></i>
//               </a>
//             </div>
//           </div>
          
//           <div className="contact-form">
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   minLength="2"
//                 />
//               </div>
              
//               <div className="form-group">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
              
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="subject"
//                   placeholder="Subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   minLength="5"
//                 />
//               </div>
              
//               <div className="form-group">
//                 <textarea
//                   name="message"
//                   placeholder="Your Message"
//                   rows="5"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   minLength="10"
//                 ></textarea>
//               </div>
              
//               <button 
//                 type="submit" 
//                 className={`btn ${isLoading ? 'loading' : ''}`}
//                 disabled={isLoading}
//               >
//                 {isLoading ? 'Sending...' : 'Send Message'}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;





















import React, { useState } from 'react';
import './Contact.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsLoading(false);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Feel free to reach out for collaborations or just a friendly hello</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's build something amazing together!</h3>
            <p>
              I'm always open to discussing exciting projects, creative ideas, 
              or opportunities to collaborate on modern frontend experiences.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <LocationOnIcon />
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Bangalore, India</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <MailIcon />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:abinath2105@gmail.com">
                      abinath2105@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <LocalPhoneIcon />
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+919843935501">
                      +91 98439 35501
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/Abinath2105" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </a>
              <a href="www.linkedin.com/in/abinath-manigandan-71786b248" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </a>
              <a href="https://x.com/abinath2105?t=65D-e9DYBff9RBlFGoqAsg&s=09" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
              </a>
              <a href="https://www.instagram.com/abinath_21?igsh=amU5NW9hY28yemtn" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </a>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength="2"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  minLength="5"
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength="10"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <SendIcon className="btn-icon" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;