import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Application (BCA)</h4>
                <h5>Srinath University, Jamshedpur</h5>
              </div>
              <h3>2024-2027</h3>
            </div>
            <p>
              Currently pursuing BCA (4th Semester) with a strong interest in Data Analytics, database management, and programming. Actively practicing Excel, SQL, and Python to extract and visualize data insights.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class XII - Science (60%)</h4>
                <h5>Varsheni +2 High School, Sini</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed intermediate education under the State Board in the Science stream, developing a solid foundation in mathematics and analytical thinking.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class X (56%)</h4>
                <h5>South Eastern Railway Inter College, Sini</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed secondary matriculation education under the CBSE Board.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
