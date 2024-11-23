import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homeInfo.css'; // Custom CSS for styling

const InfoSection = () => {
  const infoData = [
    {
      icon: '🌍',
      title: 'Flexible Locations',
      description: 'Access thousands of locations globally for your convenience.',
    },
    {
      icon: '💳',
      title: 'Secure Transactions',
      description: 'Make secure payments and bookings directly through the app.',
    },
    {
      icon: '🚗',
      title: 'Hassle-Free Parking',
      description: 'Enjoy easy navigation and parking instructions for every journey.',
    },
  ];

  return (
    <div className="info-section container-fluid py-5">
      <h2 className="text-center mb-5">Why Choose Us?</h2>
      <div className="row justify-content-center">
        {infoData.map((item, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center mb-4" key={index}>
            <div className="info-card p-4">
              <div className="info-icon mb-3">{item.icon}</div>
              <h5 className="info-title">{item.title}</h5>
              <p className="info-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
