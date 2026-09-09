import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const myNameText = "~/brittney.lilly"
  const [displayedText, setDisplayedText] = useState("")
  const [step, setStep] = useState(0)
  const [fillActive, setFillActive] = useState(false)

  useEffect(() => {
    const startDelay = setTimeout(() => {
      let index = 0
      const interval = setInterval(() => {
        setDisplayedText(myNameText.slice(0, index + 1))
        index++
        if (index == myNameText.length) {
          clearInterval(interval)
          setTimeout(() => setStep(1), 500)
          setTimeout(() => setStep(2), 1500)
          setTimeout(() => setStep(3), 2500)
          setTimeout(() => {
            setStep(4)
            setTimeout(() => setFillActive(true), 50)
          }, 3500)
          setTimeout(() => setStep(5), 6550)

        }
      }, 100)
    }, 800)

  return () => clearTimeout(startDelay)
  }, [])

  return (
    <div className="intro-container">
      <h1>
        {displayedText}
        <span className="cursor">|</span>
      </h1>
      {step >= 1 && <p>initializing...</p>}
      {step >= 2 && <p>installing dependencies...</p>}
      {step >= 3 && <p>loading brittney.lilly...</p>}
      {step >= 4 && (
        <div className="progress-track">
          <div className="progress-fill" style={{ width: fillActive ? '100%' : '0%' }}></div>
        </div>
      )}
      {step >= 5 && (
        <button className="run-button">
          run →
        </button>
      )}
 
    </div>
  )
}

export default App
