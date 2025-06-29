import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function FormPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    address: '',
    phone: '',
    checkbox: false,
  });

  const [errors, setErrors] = useState({});
  const [purchased, setPurchased] = useState(false);

  const regex = {
    name: /^[a-zA-Z ]+$/, // only letters and spaces
    password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{7,}$/, // password regex
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // email regex
    phone: /^[0-9]{10}$/, // phone number regex
  };

  const validate = () => {
    let newErrors = {};

    if (!regex.name.test(formData.name)) {
      newErrors.name = "Name must contain only letters and spaces";
    }

    if (!regex.password.test(formData.password)) {
      newErrors.password = "Password must be at least 7 characters, include 1 letter, 1 number, and 1 special character";
    }

    if (!regex.email.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.address === "") {
      newErrors.address = "Address is required";
    }

    if (!regex.phone.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (!formData.checkbox) {
      newErrors.checkbox = "You must agree to the terms";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Order Placed Successfully");
      setPurchased(true);

      // Navigate back to the Cards page after order is placed
      setTimeout(() => {
        navigate('/cards');
      }, 1000); // Slight delay before redirect
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Username */}
        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="text-danger">{errors.name}</div>}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="text-danger">{errors.password}</div>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>

        {/* Address */}
        <div className="mb-3">
          <label className="form-label">Address:</label>
          <textarea
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
          {errors.address && <div className="text-danger">{errors.address}</div>}
        </div>

        {/* Phone */}
        <div className="mb-3">
          <label className="form-label">Phone Number:</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="text-danger">{errors.phone}</div>}
        </div>

        {/* Checkbox */}
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          />
          <label className="form-check-label">Agree to terms</label>
          {errors.checkbox && <div className="text-danger">{errors.checkbox}</div>}
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;
