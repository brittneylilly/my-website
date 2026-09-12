import PageHeader from './PageHeader.jsx'
import './Interests.css'

function Interests({ setCurrentView }) {
  return (
    <div className="page-wrapper">
      <PageHeader pageName="extracurriculars" setCurrentView={setCurrentView} />
      <div className="interests-content">
        <p>In progress</p>
      </div>
    </div>
  )
}

export default Interests