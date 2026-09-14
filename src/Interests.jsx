import { useState } from 'react'
import PageHeader from './PageHeader.jsx'
import './Interests.css'
import  NSFlogo from './assets/NSFlogo2.png'
import hackathonimg from './assets/roboticshackathon.jpg'
import athenaimg from './assets/athenaincubatormypresentation.jpg'
import CSLlogo from './assets/CSLlogo2.png'
import lionsmoothieimg from './assets/lionsmoothie2.png'


const extracurriculars = [
  {
    name: "National Science Foundation Innovation Corps",
    description: "Technical and Entreprenurial Lead",
    tags: ["ai", "entrepreneurship", "customerDiscovery", "softwareDevelopment"],
    image: NSFlogo,
    bgColor: '#ffffff'
  },
  {
    name: "Athena Startup Incubator",
    description: "Founder & Cohort Member",
    tags: ["ai", "customerDiscovery", "entrepreneurship", "ventureCapital"],
    image: athenaimg,
    bgColor: '#000000',
    
  },
  {
    name: "Columbia Robotics Hackathon",
    description: "Software developer on hackathon team to implement NVIDIA Instant Neural Radiance Field with robotic arm for image capture",
    tags: ["ai", "hackathons", "softwareDevelopment"],
    image: hackathonimg,
    bgColor: '#ffffff',
 
  },
  {
    name: "Lion Smoothie",
    description: "Founder",
    tags: ["customerDiscovery", "entrepreneurship", "userResearch"],
    image: lionsmoothieimg, 
    bgColor: '#38b6ff'
  },
  {
    name: "Columbia Startup Lab",
    description: "Member",
    tags: ["entrepreneurship", "ventureCapital"],
    image: CSLlogo,
    bgColor: '#ffffff'
  },
  {
    name: "Investing",
    description: "Buy/Sell and Derivatives Trading",
    tags: ["investing"],
    image: null,
    bgColor: 'rgba(255, 255, 255, 0.93)'
  }
]

function Interests({ setCurrentView }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const allTags = ['all', ...new Set(extracurriculars.flatMap(extracurriculars => extracurriculars.tags))]
  const filteredExtracurriculars = activeFilter === 'all'
    ? extracurriculars
    : extracurriculars.filter(extracurriculars => extracurriculars.tags.includes(activeFilter))

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
      <PageHeader pageName="extracurriculars" setCurrentView={setCurrentView} />
      <div className="interests-content">
        <div className="filter-row">
          {allTags.map((tag, i) => (
            <button
              key={i}
              className={`filter-pill ${activeFilter === tag ? 'filter-active' : ''}`}
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="extracurriculars-grid">
          {filteredExtracurriculars.map((extracurriculars, index) => (
            <div 
              className="extracurriculars-card" 
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
              {extracurriculars.image ? (
                <div
                  className="extracurriculars-image-frame"
                  style={{ backgroundColor: extracurriculars.bgColor }}
                >
                  <img
                    src={extracurriculars.image}
                    className="extracurriculars-image"
                    alt={extracurriculars.name} 
                  />
                </div>
              ) : (
                <div className="extracurriculars-placeholder">
                  <span className="placeholder-name">{extracurriculars.name}</span>
                  <span className="placeholder-tagline">{extracurriculars.tagline}</span>
                </div>
              )}
              <div className="extracurriculars-meta">
                {extracurriculars.tags.map((tag, i) => (
                  <span className="extracurriculars-tag" key={i}>{tag}</span>
                ))}
              </div>
              <div className="extracurriculars-name-link">
                <h3 className="extracurriculars-name">{extracurriculars.name}</h3>
              </div>
              <p className="extracurriculars-description">{extracurriculars.description}</p>
            </div> 
          ))}
        </div>
      </div>
    </div>
  )
}

export default Interests