//
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './reviews.css'; // Custom styles

const Reviews = () => {
  const reviews = [
    {
      name: 'Caroline S',
      location: 'Q Park Mayfair Car Park',
      review: 'Easy to follow instructions. Plenty of parking spaces and very secure. Would highly recommend.',
    },
    {
      name: 'Ian J',
      location: 'London Heathrow Marriott Hotel Car Park',
      review: 'Hotel easy to spot in plenty of time. Bus lane not a problem. Followed directions and instructions. So parked car in space, went to hotel reception...',
    },
    {
      name: 'S H',
      location: 'Parking space on Courtney Road, N7',
      review: 'Fantastic location for parking up and watching the Arsenal play at the Emirates. Will definitely book again. Great communication from the host...',
    },
    {
      name: 'Sharon C',
      location: 'Parking on Woodrush Close, SE14',
      review: 'Safe and secure spot in a quiet, residential area. I have a large SUV and the space was adequate. Lovely message from space owner afterward...',
    },
    {
      name: 'Stuart R',
      location: 'Marlin Canary Wharf Car Park',
      review: 'Simply booked. Great location. Securely Parked. Will use again.',
    },
    {
      name: 'Liam M',
      location: 'Parking on Blondin Street, E3',
      review: 'Easy as it gets. EV charging was effortless too.',
    },
  ];

  return (
    <div className="trustpilot-section container-fluid py-5">
      <div className="row align-items-start">
        {/* TrustPilot Logo Section */}
        <div className="col-lg-2 col-md-3 mb-4 text-center">
          <div className="trustpilot-logo">
            <img
              src="trustpilot.png"
              alt="TrustPilot"
              className="img-fluid mb-3"
            //   style={{ maxWidth: '120px' }}
            />
            <div className="stars">
              <i className="bi bi-star-fill text-success"></i>
              <i className="bi bi-star-fill text-success"></i>
              <i className="bi bi-star-fill text-success"></i>
              <i className="bi bi-star-fill text-success"></i>
              <i className="bi bi-star text-success"></i>
            </div>
            <p className="mt-2">TrustScore 4.5<br />137,729 reviews</p>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="col-lg-10 col-md-9">
          <div className="row">
            {reviews.map((review, index) => (
              <div className="col-lg-2 col-md-4 col-sm-6 mb-4" key={index}>
                <div className="review-card p-3 h-100">
                  <h6 className="fw-bold">{review.name}</h6>
                  <p className="text-muted small">{review.location}</p>
                  <p className="review-text">{review.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
