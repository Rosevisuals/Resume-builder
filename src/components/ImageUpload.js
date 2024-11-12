import React, { useState } from 'react';

const ImageUpload = ({ onImageUpload }) => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        onImageUpload(reader.result); // Pass the image data URL to the parent component
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-upload">
      <label htmlFor="profile-image" className="image-upload-label">
        {preview ? (
          <img src={preview} alt="Profile Preview" className="profile-image-preview" />
        ) : (
          <div className="placeholder">Upload Profile Image</div>
        )}
      </label>
      <input
        type="file"
        id="profile-image"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default ImageUpload;
