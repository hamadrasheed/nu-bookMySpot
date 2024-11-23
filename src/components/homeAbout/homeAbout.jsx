import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homeAbout.css'; // Custom CSS for styles

const BannerComponent = ({ imageSrc, title, description, buttonText, buttonLink }) => {
  return (
    <div
      className="banner-container"
      style={{
        backgroundImage: `url(${imageSrc})`,
      }}
    >
      <div className="banner-overlay">
        <div className="banner-content">
          <h1 className="banner-title">{title}</h1>
          <p className="banner-description">{description}</p>
          <a href={buttonLink} className="btn btn-success banner-button">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
