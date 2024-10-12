import React from 'react';

const Step2 = ({ formData, setFormData, errors }) => {
  return (
    <div>
      <h2 className='page'>Address Information</h2>
      
      <label>Address Line 1:</label>
      <input
        type="text"
        value={formData.address1}
        onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
      />
      {errors.address1 && <p className="error">{errors.address1}</p>}
      
      <label>Address Line 2:</label>
      <input
        type="text"
        value={formData.address2}
        onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
      />
      
      <label>City:</label>
      <input
        type="text"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
      {errors.city && <p className="error">{errors.city}</p>}
      
      <label>State:</label>
      <input
        type="text"
        value={formData.state}
        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
      />
      {errors.state && <p className="error">{errors.state}</p>}
      
      <label>Zip Code:</label>
      <input
        type="text"
        value={formData.zip}
        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
      />
      {errors.zip && <p className="error">{errors.zip}</p>}
    </div>
  );
};

export default Step2;
