import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'; // Import custom styles if needed
import HomeReviews from '../../components/homeReviews/reviews';
import ImageBanner from '../../components/banner/banner';
import HomeInfo from '../../components/homeInfo/homeInfo';
import HomeAbout from '../../components/homeAbout/homeAbout';

const Home = () => {
  return (
    <>
        <ImageBanner
        imageUrl={'./home-image.avif'}
        title="Welcome to BookMySpot"
        subtitle="Find or rent parking spots easily"
        buttonText="Learn More"
        buttonLink="/about"
        />
        <HomeReviews />
        {/* <HomeAbout /> */}

        <HomeAbout
            imageSrc={'./park.jpg'}
            title="Rent out your parking."
            description="Make easy tax-free money by renting out your parking or EV charging space. It's free to list and only takes a few minutes to get up and running."
            buttonText="Learn how to earn today"
            buttonLink="#"
        />
        
        <HomeInfo />

        <HomeAbout
            imageSrc={'./about-us.webp'}
            title="Car park management"
            description="Connecting drivers with hassle-free parking and property owners with extra income, simplifying parking solutions for everyone."
            buttonText="More about us"
            buttonLink="#"
        />
    </>
    // <div className="home-container">
    //   {/* Hero Section */}
    //   <section className="hero bg-light text-center py-5">
    //     <div className="container">
    //       <h1 className="display-4 fw-bold">Welcome to BookMySpot</h1>
    //       <p className="lead text-muted">
    //         Your ultimate solution for finding and renting parking spots with ease.
    //       </p>
    //       <div className="mt-4">
    //         <Link to="/find-parking" className="btn btn-primary btn-lg me-3">
    //           Find Parking
    //         </Link>
    //         <Link to="/rent-space" className="btn btn-outline-secondary btn-lg">
    //           Rent Your Space
    //         </Link>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Features Section */}
    //   <section className="features py-5 bg-dark text-light">
    //     <div className="container">
    //       <h2 className="text-center mb-4">Why Choose Us?</h2>
    //       <div className="row">
    //         <div className="col-md-4 text-center mb-4">
    //           <i className="bi bi-car-front-fill display-4"></i>
    //           <h5 className="mt-3">Convenient Parking</h5>
    //           <p>Locate parking spots easily in crowded areas, ensuring stress-free trips.</p>
    //         </div>
    //         <div className="col-md-4 text-center mb-4">
    //           <i className="bi bi-currency-dollar display-4"></i>
    //           <h5 className="mt-3">Affordable Rates</h5>
    //           <p>Get the best parking deals with flexible pricing for all budgets.</p>
    //         </div>
    //         <div className="col-md-4 text-center mb-4">
    //           <i className="bi bi-house-door-fill display-4"></i>
    //           <h5 className="mt-3">Earn with Us</h5>
    //           <p>Rent out your unused parking space and turn it into a source of income.</p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Call to Action Section */}
    //   <section className="cta bg-primary text-light text-center py-5">
    //     <div className="container">
    //       <h2 className="mb-3">Start Your Journey with Us</h2>
    //       <p>Whether you're looking to find parking or rent your space, BookMySpot has got you covered.</p>
    //       <Link to="/signup" className="btn btn-light btn-lg mt-3">
    //         Sign Up Now
    //       </Link>
    //     </div>
    //   </section>
    // </div>
  );
};

export default Home;
