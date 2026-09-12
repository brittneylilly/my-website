import PageHeader from './PageHeader.jsx'
import './Work.css'

const projects = [
  {
    name: "Emotive Accented Speech LLM",
    description: "A GPT-style LLM built from scratch to generate emotion-conditioned responses in the lanuage patterns of native Mandarin-speaking, English language learners.",
    year: "2026",
    tags: ["ai", "largeLanguageModels", "machineLearning"],
    tools: ["Python", "PyTorch", "Pandas"],
    link: "https://github.com/brittneylilly/Emotive-Accented-Speech-LLM",
    image: "/path-to-image.png"
  },
  {
    name: "PyTorch Merged PR",
    description: "Resolved a Sphinx doc build warning for torchao documentation.",
    year: "2026",
    tags: ["ai", "openSourceContribution"],
    tools: ["Sphinx", "RST"],
    link: "https://github.com/pytorch/ao/pull/4515#issuecomment-5022444460",
    image: "/path-to-image.png"
  },
  {
    name: "Tech Fellow for COSC 491: Special Topcis - AI Engineering",
    description: "Teaching team member for COSC 491 at Bowie State University and CodePath, leading programming labs and holding office hours for a cohort of 9 students.",
    year: "2026",
    tags: ["ai", "teachingAssistant"],
    tools: ["Python", "Streamlit"],
    link: "https://github.com/yourname/project-repo",
    image: "/path-to-image.png"
  },
  {
    name: "Chatbot",
    description: "A chatbot.",
    year: "2026",
    tags: ["ai", "largeLanguageModels", "machineLearning"],
    tools: ["Python", "PyTorch", "Pandas"],
    link: "https://github.com/brittneylilly/Emotive-Accented-Speech-LLM",
    image: "/path-to-image.png"
  },
  {
    name: "Omi AI Voice Transcription App",
    description: "Speech-to-Text notification app built with FastAPI webhook server from Based Hardware's open-source AI wearable codebase.",
    year: "2025",
    tags: ["ai", "spokenLanguageProcessing", "automaticSpeechRecognition", "APIs", "webhooks"],
    tools: ["Python", "FastAPI"],
    link: "https://github.com/yourname/project-repo",
    image: "/path-to-image.png"
  },
  {
    name: "ML Dataset for Training Empathetic Chatbots for Students Learning English ",
    description: "Annotated and labeled transcription dataset with 67% improved accuracy from OpenAI Whisper Medium-produced transcripts.",
    year: "2024",
    tags: ["ai", "openSourceContribution", "machineLearning", "research", "spokenLanguageProcessing", "automaticSpeechRecognition"],
    tools: ["Hugging Face"],
    link: "https://huggingface.co/datasets/sylviali/EDEN_ASR_Data",
    image: "/path-to-image.png"
  }

]

function Work({ setCurrentView }) {
  return (
    <div className="page-wrapper">
      <PageHeader pageName="projects" setCurrentView={setCurrentView} />
      <div className="work-content">
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} className="project-image" alt={project.name} />
              </a>
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