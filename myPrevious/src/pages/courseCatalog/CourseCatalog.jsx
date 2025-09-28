import { courses } from "../../data/courses";
import "./CourseCatalog.css"

function CourseCatalog() {
  return (
    <div className="course-catalog">

      {/* catalog showcase */}
      <div className="catalog-showcase">
        <div className="container">
          <div className="showcase-text">
            <h2>Discover new courses on Coursera</h2>
            <p>Whether you're switching fields, advancing your skills, or just starting out — you can find the latest learning here.</p>
          </div>
          <img src="../../public/images/catalog-course-showcase.png" alt="" />
        </div>
      </div>

      {/* catalog courses */}
      <div className="catalog-courses">
        <div className="container">
          <h4>Trending new courses</h4>
          <div className="courses-grid">
            {courses.map(course => {
              const { imageLink, instructor, title, type } = course;
              return (
                <div className="course-card">
                  <img src={imageLink} alt="" className="course-image" />
                  <div className="course-card-content">
                    <p className="course-instructor">{instructor}</p>
                    <h5 className="course-title">{title}</h5>
                    <p className="course-type">{type}</p>
                  </div>
                </div>
              )
            })}
            {/* <div className="course-card">
              <img src="https://d15cw65ipctsrr.cloudfront.net/6a/c05066a6c844d88417b4f10e0c1d20/600x600px_586281171.jpg" alt="" className="course-image" />
              <div className="course-card-content">
                <p className="course-instructor">IBM</p>
                <h5 className="course-title">Building AI Agents and Agentic Workflows Specialization</h5>
                <p className="course-type">Specialization</p>
              </div>
            </div>
            <div className="course-card">
              <img src="https://d15cw65ipctsrr.cloudfront.net/6a/c05066a6c844d88417b4f10e0c1d20/600x600px_586281171.jpg" alt="" className="course-image" />
              <div className="course-card-content">
                <p className="course-instructor">IBM</p>
                <h5 className="course-title">Building AI Agents and Agentic Workflows Specialization</h5>
                <p className="course-type">Specialization</p>
              </div>
            </div>
            <div className="course-card">
              <img src="https://d15cw65ipctsrr.cloudfront.net/6a/c05066a6c844d88417b4f10e0c1d20/600x600px_586281171.jpg" alt="" className="course-image" />
              <div className="course-card-content">
                <p className="course-instructor">IBM</p>
                <h5 className="course-title">Building AI Agents and Agentic Workflows Specialization</h5>
                <p className="course-type">Specialization</p>
              </div>
            </div>
            <div className="course-card">
              <img src="https://d15cw65ipctsrr.cloudfront.net/6a/c05066a6c844d88417b4f10e0c1d20/600x600px_586281171.jpg" alt="" className="course-image" />
              <div className="course-card-content">
                <p className="course-instructor">IBM</p>
                <h5 className="course-title">Building AI Agents and Agentic Workflows Specialization</h5>
                <p className="course-type">Specialization</p>
              </div>
            </div>
            <div className="course-card">
              <img src="https://d15cw65ipctsrr.cloudfront.net/6a/c05066a6c844d88417b4f10e0c1d20/600x600px_586281171.jpg" alt="" className="course-image" />
              <div className="course-card-content">
                <p className="course-instructor">IBM</p>
                <h5 className="course-title">Building AI Agents and Agentic Workflows Specialization</h5>
                <p className="course-type">Specialization</p>
              </div>
            </div>
            <div className="course-card">
              <img src="https://d15cw65ipctsrr.cloudfront.net/6a/c05066a6c844d88417b4f10e0c1d20/600x600px_586281171.jpg" alt="" className="course-image" />
              <div className="course-card-content">
                <p className="course-instructor">IBM</p>
                <h5 className="course-title">Building AI Agents and Agentic Workflows Specialization</h5>
                <p className="course-type">Specialization</p>
              </div>
            </div>
            <div className="course-card">
              <img src="https://d15cw65ipctsrr.cloudfront.net/6a/c05066a6c844d88417b4f10e0c1d20/600x600px_586281171.jpg" alt="" className="course-image" />
              <div className="course-card-content">
                <p className="course-instructor">IBM</p>
                <h5 className="course-title">Building AI Agents and Agentic Workflows Specialization</h5>
                <p className="course-type">Specialization</p>
              </div>
            </div>
            <div className="course-card">
              <img src="https://d15cw65ipctsrr.cloudfront.net/6a/c05066a6c844d88417b4f10e0c1d20/600x600px_586281171.jpg" alt="" className="course-image" />
              <div className="course-card-content">
                <p className="course-instructor">IBM</p>
                <h5 className="course-title">Building AI Agents and Agentic Workflows Specialization</h5>
                <p className="course-type">Specialization</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCatalog;