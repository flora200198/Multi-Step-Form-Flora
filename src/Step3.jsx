import React from 'react';
import './App.css';
const Step3 = ({ formData }) => {

//   const handleSubmit =()=>{

//   }
  return (
    <div>
      <h2 className='page'>Confirmation</h2>
      
    
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>

     
      <p><strong>Address Line 1:</strong> {formData.address1}</p>
      <p><strong>Address Line 2:</strong> {formData.address2}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <p><strong>State:</strong> {formData.state}</p>
      <p><strong>Zip Code:</strong> {formData.zip}</p>
    </div>
  );
};

export default Step3;
