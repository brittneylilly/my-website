import { useState, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const myNameText = "~/brittney.lilly"
  const [displayedText, setDisplayedText] = useState("")
  const [step, setStep] = useState(0)
  const [fillActive, setFillActive] = useState(false)
  const canvasRef = useRef(null)

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

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const fontSize = 18
    const columns = Math.floor(canvas.width / fontSize)
    const drops =  new Array(columns).fill(0).map(() => Math.floor(Math.random() * (canvas.height /fontSize)))
    const characters = '01'

    let animationId
    let lastTime = 0
    const frameDelay = 100

    function draw(time) {
      animationId = requestAnimationFrame(draw)

      if (time - lastTime < frameDelay) return
      lastTime = time

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'rgba(122, 168, 232, 0.15)'
      ctx.font=`${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize
        const y = canvas.height - (drops[i] * fontSize)
        const char = characters[Math.floor(Math.random() * characters.length)]
        ctx.fillText(char, x, y)
      

        drops[i] += 1
        if (y < 0) {
          drops[i] = 0
        }
      }
    
    }

    draw(0)

    return () => cancelAnimationFrame(animationId)

  }, [])

  return (
    <div className="intro-container">
      <canvas ref={canvasRef} className="matrix-bg"></canvas>
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
