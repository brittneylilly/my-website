import { useState } from 'react'
import PageHeader from './PageHeader.jsx'
import './Socials.css'
import  GitHublogo from './assets/GitHublogo.png'
import LinkedinLogo from './assets/LinkedinLogo.png'


const socials = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/brittneylilly/",
    image: LinkedinLogo,
    bgColor: '#ffffff'
  },
  {
    name: "GitHub",
    link: "https://github.com/brittneylilly",
    image: GitHublogo,
    bgColor: '#ffffff'
    
  }

]

function Socials({ setCurrentView }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hoveredIndex, setHoveredIndex] = useState(null)


  function handleMouseMove(e) {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const offsetX = e.clientX - centerX
    const offsetY = e.clientY - centerY
    const rotateX = (offsetY / (rect.height / 2)) * -8
    const rotateY = (offsetX / (rect.width / 2)) * 8
    setTilt({ x: rotateX, y: rotateY })
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 })
    setHoveredIndex(null)
  }

  return (
    <div className="page-wrapper">
      <PageHeader pageName="Socials" setCurrentView={setCurrentView} />
      <div className="socials-content">
        
        <div className="socials-grid">
          {socials.map((social, index) => (
            <div 
              className="socials-card" 
              key={index}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => setHoveredIndex(index)}
              style={{
                transform: hoveredIndex === index
                  ? `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.03)`
                  : 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)'
              }}
            >  
              {social.image ? (
                <a href={social.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="socials-image-frame"
                style={{ backgroundColor: social.bgColor }}>
                  <img src={social.image} className="socials-image" alt={socials.name} />
                </a>
              ) : (
                <a href={social.link} target="_blank" rel="noopener noreferrer" className="socials-placeholder">
                  <span className="placeholder-name">{social.name}</span>
                  <span className="placeholder-tagline">{social.tagline}</span>
                </a>
              )}
              <a href={social.link} target="_blank" rel="noopener noreferrer" className="socials-name-link">
                <h3 className="socials-name">{social.name}</h3>
              </a>
              
            </div> 
          ))}
        </div>
      </div>
    </div>
  )
}

export default Socials