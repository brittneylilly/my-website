import PageHeader from './PageHeader.jsx'
import './Socials.css'

function Socials({ setCurrentView }) {
  return (
    <div className="page-wrapper">
      <PageHeader pageName="socials" setCurrentView={setCurrentView} />
      <div className="socials-content">
        <p>In progress</p>
      </div>
    </div>
  )
}

export default Socials