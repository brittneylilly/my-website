import PageHeader from './PageHeader.jsx'
import './About.css'

function About({ setCurrentView }) {
  return (
    <div className="page-wrapper">
      <PageHeader pageName="about" setCurrentView={setCurrentView} />
      <div className="about-content">
        <div className="about-left">
          <h1 className="about-name">Brittney Lilly</h1>

          <div className="facts-block">
            <div className="fact-row">
              <span className="fact-label">Currently</span>
              <span className="fact-value">Columbia University, Computer Science, 2028</span>
            </div>
            <div className="fact-row">
              <span className="fact-label">Building</span>
              <span className="fact-value">Emotive Accented Speech LLM from scratch </span>
            </div>
            <div className="fact-row">
              <span className="fact-label">Status</span>
              <span className="fact-value status-highlight">
                <span className="status-dot"></span>
                building
              </span>
            </div>
          </div>
          <p className="about-bio">
            I'm genuinely obsessed with solving business and human problems with AI engineering. It feels weird to say this, but my greatest skill is actually not engineering, it's asking good questions. Questions that uncover the potential end user's central issue, the cause of their pain point. Then, I literally head out to hunt for an innovative solution. And then I repeat: ask the questions → understand the current ecosystem → then discover an emerging solution. THIS, I feel, is my life's purpose.
          </p>
          <p className="about-bio">
            One such hunt for an innovate and emerging solution for my own startup company, would be the pivotal event giving rise to my interest and involvement in AI and machine learning development. In 2024, I was in search of emerging discoveries in spoken language processing capabilities for use in my AI product, so I attended Columbia's Data Science Research Symposium. This day was life changing, as I not only found the solution for my AI product, but I met the PhD student who would become my mentor in AI and bring me on as a research assistant in Columbia's Spoken Language Processing Group, led by Dr. Julia Hirshberg. 
          </p>
          <p className="about-bio">
            Here, through my work annotating and labeling machine learning datasets for training an empathetic, edtech chatbot, I was introduced to the mechanisms of building chatbots and dialogue systems with retrieval-augmented generation. This position is the catalyst to where I am today, deeply immersed in building AI products from scratch and the entrepreneurship and innovation communities on campus.
          </p>
          <p className="about-bio">
            I am currently building my Emotive Accented Speech LLM from scratch, a GPT-style LLM trained on custom data to generate emotion-conditioned responses modeling the speech patterns of native Mandarin-speaking, English language learners.
          </p>
          <p className="about-bio">
            Most nights you can find me on the 6th floor of Butler Library (the quiet floor with the best views of campus!) building, researching, studying, or drawing diagrams of development workflows.
          </p>
        </div>
        <div className="page-right"></div>
      </div>
    </div>
  )
}

export default About