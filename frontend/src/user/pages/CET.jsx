/* CET.js */
import React from "react";
import "./CET.css";
function ScrollButton() {
    // Show button when page is scrolled down
    window.onscroll = () => {
      const scrollButton = document.getElementById('scroll-button');
      if (scrollButton) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollButton.style.display = 'block';
        } else {
          scrollButton.style.display = 'none';
        }
      }
    };
  
    // Scroll to the top of the page when the button is clicked
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    return (
      <button 
        id="scroll-button"
        className="scroll-button"
        onClick={scrollToTop}
      >
        &#8593;
      </button>
    );
  }
function MHTCETInfo() {
  return (
    <div>
      <div className="hc">
        <header className="hd">
          <h1>MHT-CET</h1>
        </header>
      </div>

      <div className="cet">
        <section className="sec">
          <h2>What is MHT-CET?</h2>
          <p>
            Maharashtra Common Entrance Test (MHT-CET or MHCET) is a state-level
            test conducted by the State Common Entrance Test Cell, Mumbai, for
            admission to B.Tech/B.E, B.Pharm and Pharm D in the state of
            Maharashtra. In the year 2013, the examination was scrapped, and
            admission to Engineering courses was on the basis of JEE Main.
            However, the examination started again in the year 2016. In 2016,
            the merit list was prepared to give 50% weightage to Class 12 marks
            and 50% weightage to the MHT-CET scores. On this page, you will get
            complete information about MHT CET 2023, including the application
            form, exam dates, exam pattern, syllabus and more.
          </p>
        </section>

        <section className="sec">
          <h2>MHT-CET Overview</h2>
          <table className="tab">
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Frequency</td>
                <td>One time in a year</td>
              </tr>
              <tr>
                <td>Mode of examination</td>
                <td>Online</td>
              </tr>
              <tr>
                <td>Duration of examination</td>
                <td>90 minutes for each paper</td>
              </tr>
              <tr>
                <td>Official website</td>
                <td>http://cetcell.mahacet.org/</td>
              </tr>
              <tr>
                <td>Courses</td>
                <td>B.E/B.Tech, B.Pharm and Pharm D</td>
              </tr>
              <tr>
                <td>Subject</td>
                <td>Physics, Chemistry, Mathematics/Biology</td>
              </tr>
              <tr>
                <td>Question Type</td>
                <td>Multiple Choice Questions</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Eligibility Criteria</h2>
          <p>
            The candidates who want to attempt MHT-CET must be Indian citizens.
            There is no age limit to apply for MHT-CET.
          </p>
        </section>

        <section>
          <h2>MHT-CET Exam Pattern</h2>
          <p>
            The questions will be based on the syllabus of the Maharashtra State
            Board of Secondary and Higher Secondary Education. MHT CET holds
            papers for 3 subjects that is Mathematics/Biology, Physics and
            Chemistry. Candidates applying for a particular course are required
            to appear for a specified set of papers. Provided below is the MHT
            CET exam pattern, distribution of subjects, questions, duration, and
            marks in various papers: Engineering candidates are required to
            attempt or appear for PCM. Pharmacy candidates are required to
            attempt or appear for PCM or PCB. PCM/PCB is divided into 2
            Groups/Slots: In Group 1, candidates will get 90 minutes to complete
            Physics & Chemistry. In Group 2, candidates will get 90 minutes to
            complete Maths/Biology.
          </p>
          <table className="tab">
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Type of Group</th>
                <th>Total Duration (in min)</th>
                <th>01 to 90 mins</th>
                <th>91 to 180</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>(PCM Group)</td>
                <td>180</td>
                <td>Physics and Chemistry</td>
                <td>Mathematics</td>
              </tr>
              <tr>
                <td>2</td>
                <td>(PCB Group)</td>
                <td>180</td>
                <td>Physics and Chemistr</td>
                <td>Biology</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Exam Marking Scheme</h2>
          <p>The questions are based on the syllabus of the Maharashtra State Board of Secondary and Higher Secondary Education. There is 80% weightage given to the Class 12 syllabus, and the remaining 20% weightage is given to the Class 11 syllabus. The questions are all MCQs with four options. There is no negative marking. The following table gives details of the marking scheme for every subject.</p>
          <table className="tab">
            <thead>
              <tr>
                <th rowSpan="2">Subject</th>
                <th colSpan="2">Number of questions</th>
                <th rowSpan="2">Marks per question</th>
                <th rowSpan="2">Total marks</th>
                <th rowSpan="2">Duration in minutes</th>
              </tr>
              <tr>
                <td>Class 11</td>
                <td>Class 12</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mathematics</td>
                <td>10</td>
                <td>40</td>
                <td>2</td>
                <td>100</td>
                <td>90</td>
              </tr>
              <tr>
                <td>Physics</td>
                <td>10</td>
                <td>40</td>
                <td rowSpan="2">1</td>
                <td rowSpan="2">100</td>
                <td rowSpan="2">90</td>
              </tr>
              <tr>
                <td>Chemistry</td>
                <td>10</td>
                <td>40</td>
              </tr>
              <tr>
                <td>Biology (Botany)</td>
                <td>10</td>
                <td>40</td>
                <td rowSpan="2">1</td>
                <td rowSpan="2">100</td>
                <td rowSpan="2">90</td>
              </tr>
              <tr>
                <td>Biology (Zoology)</td>
                <td>10</td>
                <td>40</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Other sections */}
      </div>
      <ScrollButton />
    </div>
  );
}

export default MHTCETInfo;
