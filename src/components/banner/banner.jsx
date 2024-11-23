import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './banner.css'; // Custom CSS for styling

const ImageBanner = ({ imageUrl, title, subtitle, buttonText, buttonLink }) => {
  return (
    <div
      className="image-banner d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="overlay">
        <div className="container">
          <h1 className="banner-title">{title}</h1>
          <p className="banner-subtitle">{subtitle}</p>
          {buttonText && buttonLink && (
            <a href={buttonLink} className="btn btn-primary banner-button">
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
