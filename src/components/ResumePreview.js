import React from 'react';
import './ResumePreview.css';

const ResumePreview = ({ formData }) => {
  const { personalDetails, education, experience, skills } = formData;

  return (
    <div id="resume-preview" className="resume-preview"> {/* Added id="resume-preview" */}
      <div className="profile-header">
        {personalDetails.profileImage ? (
          <img src={personalDetails.profileImage} alt="Profile" className="profile-image" />
        ) : (
          <div className="profile-placeholder">No Image</div>
        )}
        <h2 className="resume-name">{personalDetails.name || "Your Name"}</h2>
        <p className="job-title">{personalDetails.jobTitle || "Job Title"}</p>
        <p className="contact-info">
          {personalDetails.email} | {personalDetails.phone} | {personalDetails.address}
        </p>
      </div>

      <div className="resume-content">
        <div className="left-column">
          <h3 className="section-title">Details</h3>
          <p>{personalDetails.address || "Your Address"}</p>
          <p>{personalDetails.phone || "Your Phone"}</p>
          <p>{personalDetails.email || "Your Email"}</p>

          <h3 className="section-title">Skills</h3>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index}>{skill || "Skill"}</li>
            ))}
          </ul>
        </div>

        <div className="right-column">
          <h3 className="section-title">Profile</h3>
          <p>{personalDetails.profile || "A brief profile or summary about yourself."}</p>

          <h3 className="section-title">Education</h3>
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <p><strong>{edu.institution || "Institution Name"}</strong>, {edu.degree || "Degree"}</p>
              <p>{edu.startDate} - {edu.endDate}</p>
            </div>
          ))}

          <h3 className="section-title">Experience</h3>
          {experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <p className="role"><strong>{exp.role || "Job Title"}</strong> at {exp.company || "Company Name"}</p>
              <p>{exp.startDate} - {exp.endDate}</p>
              <ul>
                {exp.description.split('\n').map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
