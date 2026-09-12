import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <div className="home-container">
        <div className="home-left">
          <div className="header-row">
            <div className="header-left">
              <h1 className="home-name">Brittney Lilly</h1>
              <p className="home-tagline">Columbia CS '28 · AI builder, solutions architect, innovation seeker</p>
            </div>
            <div className="header-right">
              <p className="home-clock">12:00:00 AM</p>
            </div>
          </div>
          <div className="terminal-box">
            <div className="terminal-header">
              c:\Users\brittney.lilly\portfolio
            </div>
            <div className="terminal-body">
              <p className="terminal-welcome terminal-bold">welcome to brittney.lilly v3.2.0</p> 
              <p className="terminal-line">not sure where to start? click a button below or type a cd command (as indicated on each button) to explore that directory. happy exploring!
              </p>
            </div>
            <div className="terminal-prompt">
              <div className="prompt-line">
                <span className="prompt-text">brittney@BrittneysComputer:~$</span>
                <span className="cursor">|</span>
                <span className="prompt-placeholder">type a command...</span>
              </div>
              <p className="prompt-hint">try: cd projects</p>
            </div>
          </div> 
          <p className="explore-text">or just click to explore</p>

          <div className="nav-grid">
            <div className="nav-box">
              <h3 className="nav-title">My AI Work</h3>
              <p className="nav-subtitle">cd projects</p>
            </div>
            <div className="nav-box">
              <h3 className="nav-title">About Me</h3>
              <p className="nav-subtitle">cd about</p>
            </div>
            <div className="nav-box">
              <h3 className="nav-title">My Interests</h3>
              <p className="nav-subtitle">cd interests</p>
            </div>
            <div className="nav-box">
              <h3 className="nav-title">My Socials</h3>
              <p className="nav-subtitle">cd links</p>
            </div>
          </div>

        </div>
        <div className="home-right">
          {/* photo goes here later */}
        </div>
      </div>
    </div>
  )
}

export default Home

