import { useState, useEffect, useRef } from 'react'
import './Home.css'
import myHeadshot from './assets/headshot.jpg'

function Home({ setCurrentView }) {
  const [command, setCommand] = useState('')
  const [currentTime, setCurrentTime] = useState(new Date())
  const inputRef = useRef(null)
  const [hasFocused, setHasFocused] = useState(false)

  function handleCommand(e) {
    if (e.key === 'Enter') {
      const cmd = command.trim().toLowerCase()
      if (cmd === 'cd projects') setCurrentView('work')
      else if (cmd === 'cd about') setCurrentView('about')
      else if (cmd === 'cd extracurriculars') setCurrentView('interests')
      else if (cmd === 'cd links') setCurrentView('socials')
      setCommand('')
    }
  }
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  
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
              <p className="home-clock">{currentTime.toLocaleTimeString()}</p>
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
                <div className="input-wrapper">
                  <input
                    ref={inputRef}
                    className="terminal-input"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyDown={handleCommand}
                    onFocus={() => setHasFocused(true)}
                    placeholder="type a command...."
                  />
                  {!hasFocused && (
                    <span className="fake-input-display" onClick={() => inputRef.current.focus()}>
                      <span className="fake-cursor">|</span>
                      <span className="fake-placeholder">type a command</span>
                    </span>
                  )}
                </div>
              </div>
              <p className="prompt-hint">try: cd projects</p>
            </div>
          </div> 
          <p className="explore-text">or just click to explore</p>

          <div className="nav-grid">
            <div className="nav-box" onClick={() => setCurrentView('work')}>
              <h3 className="nav-title">My AI Work</h3>
              <p className="nav-subtitle">cd projects</p>
            </div>
            <div className="nav-box" onClick={() => setCurrentView('about')}>
              <h3 className="nav-title">About Me</h3>
              <p className="nav-subtitle">cd about</p>
            </div>
            <div className="nav-box" onClick={() => setCurrentView('interests')}>
              <h3 className="nav-title">My Interests</h3>
              <p className="nav-subtitle">cd extracurriculars</p>
            </div>
            <div className="nav-box" onClick={() => setCurrentView('socials')}>
              <h3 className="nav-title">My Socials</h3>
              <p className="nav-subtitle">cd links</p>
            </div>
          </div>

        </div>
        <div className="home-right">
          <div className="photo-frame">
            <img src={myHeadshot} className="home-photo" alt="pic" />
            <div className="photo-caption">hi, i'm brittney</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

