import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './aboutCompany.css'; // Custom CSS for styling

const AboutSection = () => {
  return (
    <div className="about-section container-fluid py-5">
      <div className="row align-items-center justify-content-center">
        {/* Image Section */}
        <div className="col-lg-4 col-md-5 mb-4 mb-md-0 d-flex justify-content-center">
          <img
            src="/animation.jpg" // Replace with your actual image path
            alt="About Illustration"
            className="about-image"
          />
        </div>

        {/* Text Section */}
        <div className="col-lg-6 col-md-7">
          <h2 className="about-title mb-3">The UK's Favourite Parking finding Web App</h2>
          <p className="about-text">
            The idea for BookMySpot first came in 2020 when we realized the stress of finding parking spaces. 
            Today, our platform connects drivers with car parks, supermarkets, and even private driveways with just a few taps.
          </p>
          <p className="about-text">
            We’ve helped thousands of users save time and money while creating income for property owners. With future expansions in mind, we aim to become the world’s go-to parking solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
