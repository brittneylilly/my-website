import { useState, useEffect } from 'react'
import './PageHeader.css'

function PageHeader({ pageName, setCurrentView }) {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

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
        <span className="prompt-text">brittney@BrittneysComputer:~$</span>
        <span className="cursor">|</span>
        <span className="prompt-placeholder">type a command...</span>
      </div>
    </div>
  )
}

export default PageHeader