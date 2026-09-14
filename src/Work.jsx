import { useState } from 'react'
import PageHeader from './PageHeader.jsx'
import './Work.css'
import pytorchLogo from './assets/PyTorchLogo.png'
import bowieStateimg from './assets/bowiestate1.png'
import omiappimg from './assets/OMI3.png'
import researchimg from './assets/SLPprojectdescription.png'

const projects = [
  {
    name: "Emotive Accented Speech LLM",
    description: "A GPT-style LLM built from scratch to generate emotion-conditioned responses in the lanuage patterns of native Mandarin-speaking, English language learners.",
    year: "2026",
    tags: ["ai", "projects"],
    tools: ["Python", "PyTorch", "Pandas"],
    link: "https://github.com/brittneylilly/Emotive-Accented-Speech-LLM",
    image: null,
    tagline: "An Emotion-Conditioned, Mandarin-Accented English Language Model for Empathetic Dialogue Systems Research"
  },
  {
    name: "PyTorch Merged PR",
    description: "Resolved a Sphinx doc build warning for torchao documentation.",
    year: "2026",
    tags: ["ai", "openSourceContributions"],
    tools: ["Sphinx", "reStructuredText"],
    link: "https://github.com/pytorch/ao/pull/4515#issuecomment-5022444460",
    image: pytorchLogo,
    bgColor: '#000000'
  },
  {
    name: "Teaching Tech Fellow, COSC 491: Special Topics in CS - AI Engineering",
    description: "Teaching team member for COSC 491 Course at Bowie State University through CodePath.org's Univeristy Partnership, where I lead in-class AI programming and skills labs and hold office hours for a group of 11 undergraduate students.",
    year: "2026",
    tags: ["ai", "teachingAssistant"],
    tools: ["Python", "Streamlit"],
    link: "https://github.com/yourname/project-repo",
    image: bowieStateimg,
    bgColor: '#FFCE00'
  },
  {
    name: "Omi AI Voice Transcription App",
    description: "Speech-to-Text notification app built with FastAPI webhook server from Based Hardware's open-source AI wearable, Omi.",
    year: "2025",
    tags: ["ai", "projects"],
    tools: ["Python", "FastAPI"],
    link: "https://github.com/yourname/project-repo",
    image: omiappimg
  },
  {
    name: "ML Dataset for Training Empathetic Chatbots for Students Learning English ",
    description: "Annotated and labeled OpenAI Whisper dataset, improving dataset accuracy by 67% for use in automatic speech recognition research and spoken language processing.",
    year: "2024",
    tags: ["ai", "openSourceContributions", "research"],
    tools: ["Hugging Face"],
    link: "https://huggingface.co/datasets/sylviali/EDEN_ASR_Data",
    image: researchimg,
    bgColor: 'rgba(255, 255, 255, 0.93)'
  }
]

function Work({ setCurrentView }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const allTags = ['all', ...new Set(projects.flatMap(project => project.tags))]
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter))

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
      <PageHeader pageName="projects" setCurrentView={setCurrentView} />
      <div className="work-content">
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
        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <div 
              className="project-card" 
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
              {project.image ? (
                <a href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-image-frame"
                style={{ backgroundColor: project.bgColor }}>
                  <img src={project.image} className="project-image" alt={project.name} />
                </a>
              ) : (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-placeholder">
                  <span className="placeholder-name">{project.name}</span>
                  <span className="placeholder-tagline">{project.tagline}</span>
                </a>
              )}
              <div className="project-meta">
                <span className="project-year">{project.year}</span>
                {project.tags.map((tag, i) => (
                  <span className="project-tag" key={i}>{tag}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-name-link">
                <h3 className="project-name">{project.name}</h3>
              </a>
              <p className="project-description">{project.description}</p>
              <div className="project-tools">
                {project.tools.map((tool, i) => (
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

export default Work