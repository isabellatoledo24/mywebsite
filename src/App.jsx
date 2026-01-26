import { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./App.css";
import { motion, AnimatePresence } from 'framer-motion';

import profilePic from "./assets/profile-pic.jpeg";
import showJumping from "./assets/jumping.jpeg";
import columbiaPic from "./assets/columbia.png";
import baby1 from "./assets/baby-1.jpeg";
import baby2 from "./assets/baby-2.jpeg";
import graduationPic from "./assets/graduation.jpeg";
import EEPic from "./assets/ee.png";
import googlePic from "./assets/google.png";
import mathPic from "./assets/math-ia.png";
import tutoringPic from "./assets/tutoring.jpg";
import stpPic from "./assets/stpauls.jpeg"

import gallery1 from './assets/gallery1.jpeg';
import gallery2 from './assets/gallery2.jpeg';
import gallery3 from './assets/gallery3.jpeg';
import gallery4 from './assets/gallery4.jpeg';
import gallery5 from './assets/gallery5.jpeg';
import gallery6 from './assets/gallery6.jpeg';
import gallery7 from './assets/gallery7.jpeg';
import gallery8 from './assets/gallery8.jpeg';
import gallery9 from './assets/gallery9.jpeg';
import gallery10 from './assets/gallery10.jpeg';
import gallery11 from './assets/gallery11.jpeg';
import gallery12 from './assets/gallery12.jpeg';
import gallery13 from './assets/gallery13.jpeg';
import gallery14 from './assets/gallery14.jpeg';
import gallery15 from './assets/gallery15.jpeg';
import gallery16 from './assets/gallery16.jpeg';
import gallery17 from './assets/gallery17.jpeg';
import gallery18 from './assets/gallery18.jpeg';
import gallery19 from './assets/gallery19.jpeg';
import gallery20 from './assets/gallery20.jpeg';
import gallery21 from './assets/gallery21.jpeg';
import gallery22 from './assets/gallery22.jpeg';
import gallery23 from './assets/gallery23.jpeg';
import gallery24 from './assets/gallery24.jpeg';
import gallery25 from './assets/gallery25.jpeg';
import gallery26 from './assets/gallery26.jpeg';
import gallery27 from './assets/gallery27.jpeg';
import gallery28 from './assets/gallery28.jpeg';

/* ---------- Typing Effect Component ---------- */
function TypingEffect({ text, speed = 50, delay = 0 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(delayTimer);
  }, [delay]);

  useEffect(() => {
    if (!started || currentIndex >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, started]);

  return (
    <span>
      {displayedText}
      {currentIndex < text.length && <span className="cursor">|</span>}
    </span>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { id: 1, src: gallery1 },
    { id: 2, src: gallery2 },
    { id: 4, src: gallery4 },
    { id: 5, src: gallery5 },
    { id: 6, src: gallery6 },
    { id: 7, src: gallery26 },
    { id: 8, src: gallery11 },
    { id: 9, src: gallery7 },
    { id: 10, src: gallery8  },
    { id: 11, src: gallery10 },
    { id: 12, src: gallery12 },
    { id: 13, src: gallery13  },
    { id: 14, src: gallery14 },
    { id: 15, src: gallery15  },
    { id: 16, src: gallery16 },
    { id: 17, src: gallery17 },
    { id: 18, src: gallery18 },
    { id: 19, src: gallery19 },
    { id: 20, src: gallery20 },
    { id: 21, src: gallery21 },
    { id: 22, src: gallery23 },
    { id: 23, src: gallery9 },
    { id: 26, src: gallery28 },
    { id: 27, src: columbiaPic },
    { id: 28, src: gallery22 },
  ];

  const itemsToShow = 3;
  const maxIndex = Math.max(0, images.length - itemsToShow);

  const goToSlide = (index) => {
    const newIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-name" onClick={() => {
          setPage('home')
          window.scrollTo(0, 0)
        }}> Isabella Toledo </div>
        <ul className="nav-links">
          <li onClick={() => {
            setPage('home')
            window.scrollTo(0, 0)
            }}>Home</li>
          <li onClick={() => {
            setPage('about')
            window.scrollTo(0, 0)
          }}>About</li>
          <li onClick={() => {
            setPage('resume')
            window.scrollTo(0, 0)
          }}>Resume</li>
          <li onClick={() => {
            setPage('projects')
            window.scrollTo(0, 0)
          }}>Projects</li>
          <div className="contact"><li onClick={() => {
            setPage('contact')
            window.scrollTo(0, 0)
          }}>Contact</li></div>
        </ul>
      </nav>

      {page === 'home' && (
        
        <div className="home-page">
          <img
            src={profilePic}
            alt="Isabella Toledo portrait"
            className="home-profile-pic pop-in-1"
          />
        <div className="home-text">
          <h1>
          <TypingEffect text="Hi, I'm Isabella!" speed={80} />
          </h1>
          <p className="subtitle"> Aspiring Engineer & Entrepreneur</p>
          <p className="subtitle-2"> 📍 <em> New York, New York </em> </p>
          <button
            className="about-button pop-in-2"
            onClick={() => {
            setPage('about')
            window.scrollTo(0, 0)
            }}
          >
            ABOUT <span className="arrow">→</span>
          </button>
        </div>
        </div>
      )}
{page === 'about' && (
  <div className="about-page">
    <h1 className="page-title">
      <TypingEffect text="ABOUT ME" speed={80} delay={0} />
    </h1>
    <div className="about-timeline reveal">
      <h2 className="timeline-title">My Journey</h2>
      <div className="timeline">
        <div className="timeline-item">
          <span className="timeline-dot" />
          <div className="timeline-row">
            <div className="timeline-content">
              <h4> 2006 </h4>
              <p> I was born in Miami, Florida. </p>
            </div>
            <img
              src={baby1}
              alt="Born in Miami"
              className="timeline-image"
            />
          </div>
        </div>
        
        <div className="timeline-item">
          <span className="timeline-dot" />
          <div className="timeline-row">
            <div className="timeline-content">
              <h4> 2007 </h4>
              <p> I moved to São Paulo, Brazil, where I grew up in a multicultural household with German, Norwegian, Argentinian and Italian Heritage. Fun fact: I have 3 passports! </p>
            </div>
            <img
              src={baby2}
              alt="Moved to Brazil"
              className="timeline-image"
            />
          </div>
        </div>
        
        <div className="timeline-item">
          <span className="timeline-dot" />
          <div className="timeline-row">
            <div className="timeline-content">
              <h4> 2007 - 2018 </h4>
              <p> Attended 3 different international schools, and in 2018, moved to St.Paul's School to finish my high school degree. </p>
            </div>
            <img 
              src={stpPic} 
              alt="St Paul's" 
              className="timeline-image"
            />
          </div>
        </div>
        
        <div className="timeline-item">
          <span className="timeline-dot" />
          <div className="timeline-row">
            <div className="timeline-content">
              <h4> 2025 </h4>
              <p> Graduated high school with the IGCSE, IB and Brazilian High School Diplomas </p>
            </div>
            <img 
              src={graduationPic} 
              alt="Isabella Toledo" 
              className="timeline-image"
            />
          </div>
        </div>
        
        <div className="timeline-item">
          <span className="timeline-dot" />
          <div className="timeline-row">
            <div className="timeline-content">
              <h4> 2025 </h4>
              <p> Started my academic journey at Columbia University as an Industrial Engineering and Applied Sciences major! </p>
            </div>
            <img 
              src={columbiaPic} 
              alt="Isabella Toledo" 
              className="timeline-image"
            />
          </div>
        </div>
      </div>
    </div>
    
    <div className="page-content pop-in-3">
      <div className="about-section">
        <h2 className="section-title">
          Interests
        </h2>
        <p className="section-text">
          My interests lie in the areas of <strong>decentralized finance and blockchain technology</strong>, particularly in how technology can make financial services more efficient and accessible.
        </p>
      </div>

      <div className="about-section">
        <h2 className="section-title">
          Hobbies
        </h2>
        
        <div className="hobbies-grid">
          <div className="hobby-card">
            <div className="hobby-header">
              <span className="hobby-icon">🐴</span>
              <h3>Equestrian Show Jumping</h3>
            </div>
            <p>I have been show jumping competitively since the age of 10. It is my favourite thing in the world! I am currently jumping 1.30 meters and am excited to be joining Columbia's Equestrian Team!</p>
          </div>

          <div className="hobby-card">
            <div className="hobby-header">
              <span className="hobby-icon">📚</span>
              <h3>Reading</h3>
            </div>
            <p>I love reading a wide variety of books, from historical non-fiction and biographies to thrillers and romcoms!</p>
            <a 
              href="https://www.goodreads.com/user/show/113862904-isabella" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hobby-link"
            >
              Follow me on Goodreads →
            </a>
          </div>

          <div className="hobby-card">
            <div className="hobby-header">
              <span className="hobby-icon">🎧</span>
              <h3>Listening to Podcasts</h3>
            </div>
            <p>To stay informed, I listen to BBC's Global News Podcast and the Financial Times' Daily News Briefings every day. I also love music!</p>
            <a 
              href="https://open.spotify.com/user/isabella.toledo2016?si=80d48eb038714684" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hobby-link"
            >
              Follow me on Spotify →
            </a>
          </div>

          <div className="hobby-card">
            <div className="hobby-header">
              <span className="hobby-icon">👨‍🍳</span>
              <h3>Watching Cooking Shows</h3>
            </div>
            <p>Although I'm not the best cook myself, I love watching cooking shows and learning new techniques and recipes!</p>
          </div>
        </div>
      </div>

    <div className="gallery-wrapper">
      <h2 className="section-title"> My Gallery! </h2>
    <button 
      className="arrow prev" 
      onClick={prevSlide}
      disabled={currentIndex === 0}
    >
      ❮
    </button>
    
    <div className="thumbnail-container">
      <div 
        className="thumbnail-track" 
        style={{ transform: `translateX(-${currentIndex * 220}px)` }}
      >
        {images.map((img, index) => (
          <div 
            key={img.id} 
            className="thumbnail-item"
            onClick={() => goToSlide(index)}
          >
            <img 
              src={img.src} 
              alt={img.label} 
              className="thumbnail-img" 
            />
            <div className="thumbnail-label">{img.label}</div>
          </div>
        ))}
      </div>
    </div>
  
    <button 
      className="arrow next" 
      onClick={nextSlide}
      disabled={currentIndex >= maxIndex}
    >
      ❯
    </button>
  </div>

      <div className="about-actions">
        <button
          className="resume-button"
          onClick={() => {
            setPage('resume')
            window.scrollTo(0, 0)
          }}
        >
          RESUME <span className="arrow">→</span>
        </button>
      </div>
    </div>
  </div>
)}

{page === 'resume' && (
  <div className="resume-page">
    <div className="resume-header">
      <h1 className="page-title">
        <TypingEffect text="RESUME" speed={80} />
      </h1>
      <a 
        href="/mywebsite/Isabella_Toledo_Resume.pdf" 
        download="Isabella_Toledo_Resume.pdf"
        className="download-button-inline"
      >
        <span className="download-icon">📄</span>
        Download Resume
        <span className="arrow">↓</span>
      </a>
    </div>

    <div className="resume-content">
      <h2>
        <span className="emoji-sway">🎓</span> Education
      </h2>
      <h4>Columbia University — New York, USA — 2025-2029</h4>
      <p>Major: Industrial Engineering and Operations Research</p>
      <p>Minor: Economics and Entrepreneurship</p>
      <p>Clubs: Society of Women Engineers, Engineers Without Borders, Columbia Financial Investment Group, Columbia Equestrian Club</p>

      <h4>St. Paul's School — São Paulo, Brazil — 2018-2025</h4>
      <p>Diplomas: IGCSE Diploma, Brazilian High School Diploma, IB Diploma</p>

      <h2><span className="emoji-sway">💼</span> Work Experience</h2>

      <h4>Vivo (Telefônica Brasil S.A.) — São Paulo, Brazil </h4>
      <p><em>Work Shadowing · September 2023</em></p>

      <h4>C6 Bank — São Paulo, Brazil </h4>
      <p><em>Finance Summer Job · July 2024</em></p>

      <h4>Private Tutoring — São Paulo, Brazil</h4>
      <p><em>Private Tutor · 2023 – Present</em></p>

      <h2><span className="emoji-sway">🛠</span> Skills</h2>

      <h4>Languages:</h4>
      <ul className="skills">
        <li>Fluent in English and Brazilian Portuguese</li>
        <li>Conversational proficiency in Spanish and French</li>
      </ul>

      <h4>Other skills:</h4>
      <ul className="skills">
        <li>Basic Python programming and web development</li>
        <li>Excel Solver and optimization</li>
        <li>Public speaking</li>
      </ul>

      <div className="resume-actions">
        <button
          className="contact-button"
          onClick={() => {
            setPage('projects')
            window.scrollTo(0, 0)
            }}
        >
          PROJECTS <span className="arrow">→</span>
        </button>
      </div>
    </div>
  </div>
)}

{page === 'contact' && (
  <div className="contact-page">
    <div className="contact-box">

      <div className="contact-left">
        <h1 className="contact-title">
          <TypingEffect text="CONTACT" speed={80} />
        </h1>
      </div>

      <div className="contact-right">
        <div className="contact-content pop-in-4">

          <a
            href="https://www.linkedin.com/in/isabella-toledo-a53b2a308/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin className="contact-icon" />
            <span className="contact-text">LinkedIn</span>
          </a>

          <a
            href="mailto:isabella.toledo2016@gmail.com"
            className="contact-link"
          >
            <FaEnvelope className="contact-icon" />
            <span className="contact-text">Email</span>
          </a>

          <a
            href="https://github.com/isabellatoledo24"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaGithub className="contact-icon" />
            <span className="contact-text">GitHub</span>
          </a>

        </div>
      </div>

    </div>
  </div>
)}
{page === 'projects' && (
  <div className="projects-page">
    <div className="projects-layout">
      <div className="projects-header-section">
        <h1 className="projects-main-title">
          <TypingEffect text="PROJECTS & SERVICES" speed={80} />
        </h1>
      </div>
      
      <div className="projects-grid">
        {/* Google AI for Educators */}
        <div 
          className="project-box video-box"
          style={{backgroundImage: `url(${googlePic})`}}
          onClick={(e) => {
            e.stopPropagation();
            document.getElementById('video-modal').style.display = 'flex';
          }}
        >
          <div className="project-overlay">
            <h3>Google AI for Educators Website</h3>
            <p className="project-meta">INTELI Bootcamp · 2024</p>
            <span className="project-type">Video Demo</span>
          </div>
        </div>

        {/* IB Math IA */}
        <div 
          className="project-box"
          style={{backgroundImage: `url(${mathPic})`}}
          onClick={() => window.open('/mywebsite/PDF-Math-AI-HL-IA.pdf', '_blank')}
        >
          <div className="project-overlay">
            <h3>Modern Portfolio Theory</h3>
            <p className="project-meta">IB Mathematics IA · 2024</p>
            <span className="project-type">Research Paper</span>
          </div>
        </div>

        {/* IB Extended Essay */}
        <div 
          className="project-box"
          style={{backgroundImage: `url(${EEPic})`}}
          onClick={() => window.open('/mywebsite/IB_Extended_Essay.pdf', '_blank')}
        >
          <div className="project-overlay">
            <h3>Pathos in American Political Rhetoric</h3>
            <p className="project-meta">IB Extended Essay · 2024</p>
            <span className="project-type">Literary Analysis</span>
          </div>
        </div>

        {/* Tutoring Services */}
        <div 
          className="project-box tutoring-box"
          style={{backgroundImage: `url(${tutoringPic})`}}
          onClick={() => {
            setPage('contact');
            window.scrollTo(0, 0);
          }}
        >
          <div className="project-overlay tutoring-overlay">
            <h3>Private Tutoring Services</h3>
            <p className="project-meta">IGCSE and IB Math · IGCSE Sciences · IB Physics · IB Economics </p>
            <span className="project-type">Get in Touch →</span>
          </div>
        </div>
      </div>
    </div>

    {/* Video Modal - MOVED OUTSIDE the grid */}
    <div id="video-modal" className="video-modal" onClick={() => document.getElementById('video-modal').style.display = 'none'}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-modal" onClick={() => document.getElementById('video-modal').style.display = 'none'}>&times;</span>
        <iframe
          src="https://drive.google.com/file/d/12a6v3J8XK8JdrIt25ncoxH_nYq4mUzBB/preview"
          width="100%"
          height="480"
          allow="autoplay"
          title="Google AI Demo"
        ></iframe>
      </div>
    </div>
  </div>
)}

  <footer className="footer">
    <div className="footer-content">
      <p className="footer-text">&copy; 2025 Isabella Toledo</p>
      <div className="footer-icons">
        <a 
          href="https://www.linkedin.com/in/isabella-toledo-a53b2a308/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-3xl text-gray-800 hover:scale-110 transition-transform" />
        </a>
        <a
          href="mailto:isabella.toledo2016@gmail.com"
          arget="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="text-3xl text-gray-800 hover:scale-110 transition-transform" />
      </a>
      <a
        href="https://github.com/isabellatoledo24"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-3xl text-gray-800 hover:scale-110 transition-transform" />
      </a>
      </div>
    </div>
  </footer>
  </>
  );
}

