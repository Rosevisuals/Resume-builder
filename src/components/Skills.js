import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ data, onChange }) => {
  const handleAddSkill = () => {
    onChange('skills', data.length, null, ''); // Adds a new empty skill
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = data.filter((_, i) => i !== index);
    onChange('skills', null, null, updatedSkills); // Updates the entire skills array
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h3>Skills</h3>
      {data.map((skill, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <motion.input
            type="text"
            placeholder="Skill"
            value={skill}
            onChange={(e) => onChange('skills', index, null, e.target.value)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ marginRight: '8px', flex: 1 }} // Add margin between input and button
          />
          <button
            onClick={() => handleRemoveSkill(index)}
            style={{
              padding: '5px 10px',
              fontSize: '14px',
              backgroundColor: '#ff4d4f',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={handleAddSkill}
        style={{
          padding: '8px 16px',
          fontSize: '14px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        Add Skill
      </button>
    </motion.div>
  );
};

export default Skills;
