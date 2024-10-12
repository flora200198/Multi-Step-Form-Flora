import './App.css';
const Step1 = ({ formData, setFormData, errors }) => {
  return (
    <div>
      <h3 className="page">Personal Information</h3>
      <label>Name:</label>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      {errors.name && <p className="error">{errors.name}</p>}
      
      <label>Email:</label>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      {errors.email && <p className="error">{errors.email}</p>}
      
      <label>Phone:</label>
      <input
        type="text"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      {errors.phone && <p className="error">{errors.phone}</p>}
    </div>
  );
};

export default Step1;
