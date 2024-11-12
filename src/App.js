import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PersonalDetails from './components/PersonalDetails';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ResumeBuilder from './components/ResumeBuilder';
import ResumePreview from './components/ResumePreview';
import ImageUpload from './components/ImageUpload';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<ResumeBuilder />} />
          <Route path="/imageupload" element={<ImageUpload/>} />
          <Route path="/resumepreview" element={<ResumePreview />} />
          <Route path="/personal-details" element={<PersonalDetails />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
    </Router>
  );
}

export default App;
