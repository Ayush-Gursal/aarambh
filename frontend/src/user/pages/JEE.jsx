import React from 'react';
import './JEE.css'; // Import your CSS file for styling

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

function JEEmain() {
  return (
    <div className="containers">
      <header className="headd">
      
        <h1>JEE Mains</h1>
      </header>
      <div className="content">
      <div className="section">
        <h2>What is JEE Mains?</h2>
        <p>
        JEE Main or JEE Main 2024 is the first phase of the IIT Joint Entrance Exam (IIT JEE). It is a computer-based online test conducted by the National Testing Agency for students aspiring to pursue undergraduate courses in India in top engineering institutes, such as IITs, NITs, etc. Thus, students are granted admission to IITs, CFTIs, NITs, and other Government funded technical institutes based on the marks obtained in the JEE Main. The exam conducting authority considers the best NTA score in preparing the ranks/merit list. Candidates could further opt to appear for one exam or all the exams.
        </p>
        </div>
        <div className="section">
        <h2>Exam Pattern</h2>
        <p>
        Knowing the JEE Main exam pattern for 2024 is vital for candidates who want a smooth preparation for JEE. It helps students develop a clear idea of the marking scheme, distribution of questions, sectional weightage and exam duration. There are three papers instead of two. Paper 1 is for students aspiring for B.E./B. Tech courses in NITs, IIITs, DTU, and other GFTIs, whereas Paper 2A is for B.Arch. Paper 2B is for B.Planning courses offered by these institutes.

Understanding the exam pattern enables candidates to gain a valuable opinion about the whole exam structure. Therefore, students are advised to get a complete overview of the paper pattern and devise a suitable study plan or strategy for better results.

JEE Main Paper 1 comprises Maths, Physics, and Chemistry, whereas Paper 2A has Maths, Aptitude, and Drawing Tests. Paper 2B will consist of Mathematics, Aptitude and Planning-based questions. The candidates can attempt the test in either one or both sessions. On the same lines as last year, there will be 90 questions overall, with candidates getting to attempt a total of 75 questions. The total mark allotted is 300.

All the papers are entirely computer-based online tests, whereas the Paper 2A drawing section is conducted offline in a pen and paper-based mode. The exam duration for all three Papers is 3 hours.
        </p>
        </div>
        <div className="section">
        <h2>Eligibility Criteria</h2>
        <p>
        The JEE Main eligibility criteria for 2024 describe all the terms and conditions that aspirants should satisfy to be eligible for the exam. Hence, to avoid rejection in later stages, the students go through and understand the eligibility criteria before registering for the exam. We have highlighted some of the important ones below.<br/><br/>

Age Limit: There is no age limit for candidates who wish to appear for the JEE Main exam. However, candidates must note that the IITs can set age criteria for admissions. The details are usually published in the JEE Main Information Brochure.<br/> <br/>

Qualifying Exam: Irrespective of age, the applicant can qualify if they have cleared their Class 12 or any equivalent exam, such as a two-year Pre-University exam, Joint Services Wing of the National Defence Academy exam, senior secondary school examination, Higher Secondary Certificate Vocational Examination, Intermediate or two-year Pre-University examination, a diploma recognised by the AICTE or a State board, General Certificate Education (GCE) examination (London/Cambridge/Sri Lanka) at the Advanced (A) level, High School Certificate Examination of the Cambridge University or International Baccalaureate Diploma of the International Baccalaureate Office, Geneva.

<br/><br/>Year: Only those candidates who have passed the Class 12 or equivalent examination in 2021 and 2022 or those who are appearing for it in 2024 are eligible to appear in JEE Main 2024.

<br/><br/>Qualifying Marks: There is no minimum pass percentage for appearing in the JEE Main exam. However, the applicants must pass their Class 12 board or other equivalent examinations.

<br/><br/>Number of Attempts: Candidates can appear for the exam for 3 consecutive years.
        </p>
        </div>
      </div>
      <ScrollButton />
    </div>
  );
}

export default JEEmain;
