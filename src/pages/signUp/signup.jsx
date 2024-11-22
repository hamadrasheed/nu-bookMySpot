import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css'; // Import the CSS file

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    password: '',
    optOut: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add API call logic here
  };

  return (
    <div className="signup-container">
      <div className="card signup-card">
        <h1 className="signup-heading">Create an account to continue</h1>
        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label signup-label">
              First name
            </label>
            <input
              type="text"
              className="form-control signup-input"
              id="firstName"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Surname */}
          <div className="mb-3">
            <label htmlFor="surname" className="form-label signup-label">
              Surname
            </label>
            <input
              type="text"
              className="form-control signup-input"
              id="surname"
              name="surname"
              placeholder="Surname"
              value={formData.surname}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label signup-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control signup-input"
              id="email"
              name="email"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label signup-label">
              Password
            </label>
            <input
              type="password"
              className="form-control signup-input"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <small className="signup-small">
              Please choose a secure password (at least 8 characters).
            </small>
          </div>

          {/* Action Buttons */}
          <div className="d-flex justify-content-between mb-3">
            <button type="submit" className="btn btn-success signup-button">
            Cancel
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary signup-button"
            >
              Create account
            </button>
          </div>

          {/* Terms and Privacy */}
          <p className="text-center signup-small">
            By proceeding, you agree to the BookMySpot{' '}
            <a href="#" className="signup-link">
              Terms & Conditions
            </a>
            . Read our{' '}
            <a href="#" className="signup-link">
              Privacy Policy
            </a>{' '}
            for details on how we collect and handle your data.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
