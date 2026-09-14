import { useState } from 'react'
import PageHeader from './PageHeader.jsx'
import './Interests.css'
import  NSFlogo from './assets/nsf-i-corps-logo.png'
import hackathonimg from './assets/roboticshackathon.jpg'
import athenaimg from './assets/athenaincubatormypresentation.jpg'
import CSLlogo from './assets/Columbia-Startup-Lab-Logo.png'
import lionsmoothieimg from './assets/LionSmoothie.png'


const extracurriculars = [
  {
    name: "National Science Foundation Innovation Corps",
    description: "Technical and Entreprenurial Lead",
    year: "2026",
    tags: ["ai", "entrepreneurship", "innovation", "softwareDevelopment"],
    tools: ["Python", "PyTorch", "Pandas"],
    link: "https://github.com/brittneylilly/Emotive-Accented-Speech-LLM",
    image: NSFlogo,
    bgColor: '#ffffff'
  },
  {
    name: "Athena Startup Incubator",
    description: "Resolved a Sphinx doc build warning for torchao documentation.",
    year: "2026",
    tags: ["ai", "openSourceContribution"],
    tools: ["Sphinx", "reStructuredText"],
    link: "https://github.com/pytorch/ao/pull/4515#issuecomment-5022444460",
    image: athenaimg,
    bgColor: '#000000'
  },
  {
    name: "Columbia Robotics Hackathon",
    description: "Teaching team member for COSC 491 Course at Bowie State University through CodePath.org's Univeristy Partnership, where I lead in-class AI programming and skills labs and hold office hours for a group of 11 undergraduate students.",
    year: "2026",
    tags: ["ai", "teachingAssistant"],
    tools: ["Python", "Streamlit"],
    link: "https://github.com/yourname/project-repo",
    image: hackathonimg,
    bgColor: '#ffffff'
  },
  {
    name: "Lion Smoothie",
    description: "A chatbot.",
    year: "2026",
    tags: ["ai", "largeLanguageModels", "machineLearning"],
    tools: ["Python", "PyTorch", "Pandas"],
    link: "https://github.com/brittneylilly/Emotive-Accented-Speech-LLM",
    image: lionsmoothieimg 
  },
  {
    name: "Columbia Startup Lab",
    description: "Speech-to-Text notification app built with FastAPI webhook server from Based Hardware's open-source AI wearable, Omi.",
    year: "2025",
    tags: ["ai", "spokenLanguageProcessing", "automaticSpeechRecognition", "APIs", "webhooks"],
    tools: ["Python", "FastAPI"],
    link: "https://github.com/yourname/project-repo",
    image: CSLlogo,
    bgColor: '#ffffff'
  },
  {
    name: "Investing: Buy/Sell and Derivatives Trading",
    description: "Annotated and labeled transcription dataset with 67% improved accuracy from OpenAI Whisper Medium-produced transcripts.",
    year: "2024",
    tags: ["ai", "openSourceContribution", "machineLearning", "research", "spokenLanguageProcessing", "automaticSpeechRecognition"],
    tools: ["Hugging Face"],
    link: "https://huggingface.co/datasets/sylviali/EDEN_ASR_Data",
    image: researchimg,
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
      <PageHeader pageName="Interests" setCurrentView={setCurrentView} />
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
                <a href={extracurriculars.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="extracurriculars-image-frame"
                style={{ backgroundColor: extracurriculars.bgColor }}>
                  <img src={extracurriculars.image} className="extracurriculars-image" alt={extracurriculars.name} />
                </a>
              ) : (
                <a href={extracurriculars.link} target="_blank" rel="noopener noreferrer" className="extracurriculars-placeholder">
                  <span className="placeholder-name">{extracurriculars.name}</span>
                  <span className="placeholder-tagline">{extracurriculars.tagline}</span>
                </a>
              )}
              <div className="extracurriculars-meta">
                <span className="extracurriculars-year">{extracurriculars.year}</span>
                {extracurriculars.tags.map((tag, i) => (
                  <span className="extracurriculars-tag" key={i}>{tag}</span>
                ))}
              </div>
              <a href={extracurriculars.link} target="_blank" rel="noopener noreferrer" className="extracurriculars-name-link">
                <h3 className="extracurriculars-name">{extracurriculars.name}</h3>
              </a>
              <p className="extracurriculars-description">{extracurriculars.description}</p>
              <div className="extracurriculars-tools">
                {extracurriculars.tools.map((tool, i) => (
                  <span className="tool-pill" key={i}>{tool}</span>
                ))}
            </div>
          </div>  
          ))}
        </div>
      </div>
    </div>
  )
}

export default Interests