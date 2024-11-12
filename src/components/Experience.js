import React from 'react';
import { motion } from 'framer-motion';

const Experience = ({ data, onChange }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    <h3>Experience</h3>
    {data.map((exp, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        style={{ marginBottom: '16px' }}
      >
        <input
          type="text"
          placeholder="Company"
          value={exp.company}
          onChange={(e) => onChange('experience', index, 'company', e.target.value)}
        />
        <input
          type="text"
          placeholder="Role"
          value={exp.role}
          onChange={(e) => onChange('experience', index, 'role', e.target.value)}
        />
        <input
          type="date"
          placeholder="Start Date"
          value={exp.startDate}
          onChange={(e) => onChange('experience', index, 'startDate', e.target.value)}
        />
        <input
          type="date"
          placeholder="End Date"
          value={exp.endDate}
          onChange={(e) => onChange('experience', index, 'endDate', e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={exp.description}
          onChange={(e) => onChange('experience', index, 'description', e.target.value)}
          style={{ width: '100%', marginTop: '8px' }}
        />
      </motion.div>
    ))}
  </motion.div>
);

export default Experience;
