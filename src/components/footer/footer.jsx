import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'; // Import custom styles

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        {/* Logo and Trustpilot Section */}
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <h3 className="footer-logo">BookMySpot</h3>
            <div className="trustpilot">
              <div>
                <p>TrustScore <strong>4.5</strong> 137,729 reviews</p>
              </div>
            </div>
          </div>

          {/* Information Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Information</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">About us</a></li>
              <li><a href="#" className="text-light">Affiliates</a></li>
              <li><a href="#" className="text-light">Blog</a></li>
              <li><a href="#" className="text-light">Careers</a></li>
              <li><a href="#" className="text-light">Media coverage</a></li>
              <li><a href="#" className="text-light">Site map</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Business accounts</a></li>
              <li><a href="#" className="text-light">Car park management</a></li>
              <li><a href="#" className="text-light">Electric vehicle charging</a></li>
              <li><a href="#" className="text-light">Rent out your space</a></li>
              <li><a href="#" className="text-light">Rent out your EV charger</a></li>
            </ul>
          </div>

          {/* Points of Interest Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Points of Interest</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Airport parking</a></li>
              <li><a href="#" className="text-light">City parking</a></li>
              <li><a href="#" className="text-light">Stadium parking</a></li>
              <li><a href="#" className="text-light">Station parking</a></li>
            </ul>
          </div>

          {/* Get in Touch Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Get in touch</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">How BookMySpot works</a></li>
              <li><a href="#" className="text-light">Help center</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & App Links */}
        <div className="row mt-4">
          <div className="col-lg-6 d-flex align-items-center">
            <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-light me-3"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-light me-3"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-light"><i className="bi bi-linkedin"></i></a>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            <a href="#" className="btn btn-outline-light me-2">Download on the App Store</a>
            <a href="#" className="btn btn-outline-light">Get it on Google Play</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="row mt-4">
          <div className="col text-center">
            <p>© Copyright BookMySpot 2024 | <a href="#" className="text-light">Cancellation policy</a> | <a href="#" className="text-light">Privacy Policy</a> | <a href="#" className="text-light">Terms of service</a></p>
            <p>BookMySpot is the trading name of BookMySpot Parking Limited Registered in England and Wales No. 05956777 Dunn's Hat Factory, 106 - 110 Kentish Town Road, London, NW1 9PX, UK</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
