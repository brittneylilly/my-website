import { useState, useEffect, useRef } from 'react'
import './PageHeader.css'

function PageHeader({ pageName, setCurrentView }) {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [command, setCommand] = useState('')
  const inputRef = useRef(null)
  

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  function handleCommand(e) {
    if (e.key === 'Enter') {
      const cmd = command.trim().toLowerCase()
      if (cmd === 'cd home') setCurrentView('home')
      else if (cmd === 'cd projects') setCurrentView('work')
      else if (cmd === 'cd about') setCurrentView('about')
      else if (cmd === 'cd extracurriculars') setCurrentView('interests')
      else if (cmd === 'cd links') setCurrentView('socials')
      setCommand('')
    }
  }

  return (
    <div className="page-header">
      <div className="page-header-row">
        <button className="back-button" onClick={() => setCurrentView('home')}>
          ← back to home
        </button>
        <p className="page-name">./{pageName}</p>
        <p className="page-clock">{currentTime.toLocaleTimeString()}</p>
      </div>

      <div className="page-command-row">
        <span className="prompt-text">brittney@portfolio:~$</span>
        <input
          ref={inputRef}
          className="terminal-input"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleCommand}
          placeholder="type a command..."
        />
      </div>
      
    </div>
  )
}

export default PageHeader