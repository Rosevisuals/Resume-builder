import React from 'react';
import { motion } from 'framer-motion';

const Education = ({ data, onChange }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    <h3>Education</h3>
    {data.map((edu, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        style={{ marginBottom: '16px' }}
      >
        <input
          type="text"
          placeholder="Institution"
          value={edu.institution}
          onChange={(e) => onChange('education', index, 'institution', e.target.value)}
        />
        <input
          type="text"
          placeholder="Degree"
          value={edu.degree}
          onChange={(e) => onChange('education', index, 'degree', e.target.value)}
        />
        <input
          type="date"
          placeholder="Start Date"
          value={edu.startDate}
          onChange={(e) => onChange('education', index, 'startDate', e.target.value)}
        />
        <input
          type="date"
          placeholder="End Date"
          value={edu.endDate}
          onChange={(e) => onChange('education', index, 'endDate', e.target.value)}
        />
      </motion.div>
    ))}
  </motion.div>
);

export default Education;
