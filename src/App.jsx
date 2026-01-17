import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import './App.css'
import profilePic from './assets/profile-pic.jpeg'
import showJumping from './assets/jumping.jpeg'
import columbiaPic from './assets/columbia.png'
function TypingEffect({ text, speed = 50, delay = 0 }) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setStarted(true)
    }, delay)
    return () => clearTimeout(delayTimer)
  }, [delay])

  useEffect(() => {
    if (!started || currentIndex >= text.length) return

    const timer = setTimeout(() => {
      setDisplayedText(prev => prev + text[currentIndex])
      setCurrentIndex(prev => prev + 1)
    }, speed)

    return () => clearTimeout(timer)
  }, [currentIndex, text, speed, started])

  return (
    <span>
      {displayedText}
      {currentIndex < text.length && <span className="cursor">|</span>}
    </span>
  )
}
function App() {
  const [page, setPage] = useState('home')
  const [isTransitioning, setIsTransitioning] = useState(false)

return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-name" onClick={() => setPage('home')}> Isabella Toledo </div>
        <ul className="nav-links">
          <li onClick={() => setPage('home')}>Home</li>
          <li onClick={() => setPage('about')}>About</li>
          <li onClick={() => setPage('resume')}>Resume</li>
          <li onClick={() => setPage('projects')}>Projects</li>
          <div className="contact"><li onClick={() => setPage('contact')}>Contact</li></div>
        </ul>
      </nav>

      {/* Page Content */}
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
          <TypingEffect text="About Me" speed={80} delay={0} />
          </h1>
          <div className="page-content pop-in-3">
          <div className="about-row1">
            <img 
            src={columbiaPic} 
            alt="Isabella Toledo" 
            className="cu-pic float"/>
          <div className="about-1">
            <p className="paragraph">
              I was born in Miami but raised in São Paulo, Brazil.
            </p>
            <p className="paragraph">
              Currently, I'm a Freshman at the <em><strong> Fu Foundation of Engineering and Applied Sciences of Columbia University </strong></em> studying <strong> Industrial Engineering and Operations Research </strong>.
            </p>
            </div>
          </div>
          <div className="about-row2">
          <div className="about-2">
            <p className="paragraph">My interests lie in the areas of <strong>decentralized finance and blockchain technology</strong>, particularly in how technology can make financial services more efficient and accessible.</p>
            <p></p>
            <p className="paragraph">My hobbies are <strong> equestrian show jumping, playing the piano and reading! </strong></p>
          </div>

          <img
            src={showJumping}
            alt="Show Jumping"
            className="jumping-pic float"
          />
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
    <h1 className="page-title">
    <TypingEffect text="Resume" speed={80} />
      </h1>

    <div className="resume-text pop-in-3">
      <h2>
      <span className="emoji-sway">🎓</span> Education
      </h2>
      <h4>St. Paul's School, São Paulo, Brazil</h4>
      <p>Diplomas: IGCSE Diploma, Brazilian High School Diploma, IB Diploma</p>

      <h4>Columbia University, New York, USA</h4>
      <p>Major: Industrial Engineering and Operations Research</p>
      <p> Minor: Economics and Entrepreneurship </p>

      <h2> <span className="emoji-sway">💼</span> Work Experience</h2>

      <h4>Vivo (Telefônica Brasil S.A.) — São Paulo, Brazil</h4>
      <p><em>Work Shadowing · September 2023</em></p>

      <h4>C6 Bank — São Paulo, Brazil</h4>
      <p><em>Finance Summer Job · July 2024</em></p>

      <h4>Private Tutoring — São Paulo, Brazil</h4>
      <p><em>Private Tutor · 2023 – Present</em></p>

      <h2> <span className="emoji-sway">🛠</span> Skills</h2>

      <h4>Languages:</h4>
      <ul className="skills">
        <li>Fluent in English and Brazilian Portuguese</li>
        <li>Conversational proficiency in Spanish and French</li>
      </ul>

      <h4> Other skills:</h4>
      <ul className="skills">
        <li>Basic Python programming and web development </li>
        <li>Excel Solver and optimization</li>
        <li>Public speaking </li>
      </ul>
      <div className="resume-actions">
        <button
          className="contact-button"
          onClick={() => setPage('contact')}
        >
          CONTACT <span className="arrow">→</span>
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
          <TypingEffect text="Contact" speed={80} />
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
        <div className="projects-text">
        <h1> 
                <TypingEffect text="Projects" speed={80} />
                </h1>
        <p> 
          <TypingEffect text="Coming soon..." speed={80} delay={1000} /> </p>
      </div>
      </div>
        
      )}
{
  <footer className="footer">
    <div className="footer-content">
      <p className="footer-text">&copy; 2025 Isabella Toledo</p>
      <div className="footer-icons">
        <a 
          href="https://www.linkedin.com/in/isabella-toledo-a53b2a308/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-3xl text-gray-800" />
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
}
  </>
)
}

export default App