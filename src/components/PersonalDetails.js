import React from 'react';

const PersonalDetails = ({ data, onChange }) => (
  <div>
    <h3>Personal Details</h3>
    <label>Name:</label>
    <input
      type="text"
      value={data.name}
      onChange={(e) => onChange('personalDetails', null, 'name', e.target.value)}
    />
    <label>Email:</label>
    <input
      type="email"
      value={data.email}
      onChange={(e) => onChange('personalDetails', null, 'email', e.target.value)}
    />
    <label>Phone:</label>
    <input
      type="text"
      value={data.phone}
      onChange={(e) => onChange('personalDetails', null, 'phone', e.target.value)}
    />
    <label>Address:</label>
    <input
      type="text"
      value={data.address}
      onChange={(e) => onChange('personalDetails', null, 'address', e.target.value)}
    />
    <label>Job Title:</label>
    <input
      type="text"
      value={data.jobTitle}
      onChange={(e) => onChange('personalDetails', null, 'jobTitle', e.target.value)}
    />
    <label>Profile Summary:</label>
    <textarea
      value={data.profile}
      onChange={(e) => onChange('personalDetails', null, 'profile', e.target.value)}
    />
  </div>
);

export default PersonalDetails;
