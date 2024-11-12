import React, { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import ResumePreview from './ResumePreview';
import ImageUpload from './ImageUpload';

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    personalDetails: { name: '', email: '', phone: '', address: '', jobTitle: '', profile: '', profileImage: null },
    education: [{ institution: '', degree: '', startDate: '', endDate: '' }],
    experience: [{ company: '', role: '', startDate: '', endDate: '', description: '' }],
    skills: [''],
  });

  const handleInputChange = (section, index, field, value) => {
    setFormData((prevData) => {
      if (section === 'education' || section === 'experience') {
        const updatedSection = [...prevData[section]];
        updatedSection[index][field] = value;
        return { ...prevData, [section]: updatedSection };
      } else if (section === 'skills') {
        const updatedSkills = [...prevData.skills];
        updatedSkills[index] = value;
        return { ...prevData, skills: updatedSkills };
      } else {
        return {
          ...prevData,
          [section]: {
            ...prevData[section],
            [field]: value,
          },
        };
      }
    });
  };

  const handleImageUpload = (imageData) => {
    setFormData((prevData) => ({
      ...prevData,
      personalDetails: {
        ...prevData.personalDetails,
        profileImage: imageData,
      },
    }));
  };

  return (
    <div className="resume-builder">
      <div className="form-section">
        <h2>Resume Builder</h2>

        {/* Image Upload Component */}
        <ImageUpload onImageUpload={handleImageUpload} />

        {/* Form Components */}
        <PersonalDetails data={formData.personalDetails} onChange={handleInputChange} />
        <Education data={formData.education} onChange={handleInputChange} />
        <Experience data={formData.experience} onChange={handleInputChange} />
        <Skills data={formData.skills} onChange={handleInputChange} />
      </div>

      {/* Resume Preview with Profile Image */}
      <ResumePreview formData={formData} />
    </div>
  );
};

export default ResumeBuilder;
