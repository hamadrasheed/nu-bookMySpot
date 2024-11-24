import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './spot.css'; // Optional CSS for custom styling
import apiService from '../../shared/http'; // Your API service file


const ParkingSpotList = ({ ownerOnly = false }) => {

  const [parkingSpots, setParkingSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasFetched, setHasFetched] = useState(false);

  const fetchParkingSpots = async () => {
    try {

      // required resopnse 
      // {
      //   "id": 1,
      //   "title": "Test Parking Spot",
      //   "address": "1275 York Ave",
      //   "city": "Manhattan",
      //   "postalCode": "E1 7ht",
      //   "availability": "hourly",
      //   "price": "20",
      //   "description": "A convenient parking spot near downtown.",
      //   "weekdays": "Thursday",
      //   "picture": "/uploads/image-1732461967060-edi-123.png"
      // },

      const dynamicEndPoint = ownerOnly ? '/parking-spot/owner' : '/parking-spot';

      const response = await apiService.get(dynamicEndPoint, {
        ownerOnly
      }); 

      setParkingSpots(response.data); 
      setLoading(false);

    } catch (error) {
      console.error('Error fetching parking spots:', error);
      setLoading(false);
    }
  };

  useEffect(() => {

    // todo important, API being called multiple times

    if (hasFetched) return; // Prevent multiple calls

    setHasFetched(true);
    fetchParkingSpots();

  }, []);

  if (loading) {
    return <div className="text-center py-5">Loading parking spots...</div>;
  }

  if (parkingSpots.length === 0) {
    return <div className="text-center py-5 font-size: 2rem ">No parking spots available.</div>;
  }

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">
        {!ownerOnly ? 'Find Parking Spots' : 'Your Parking Spots'}
        
        </h2>
      <div className="row g-4">
        {parkingSpots.map((spot) => (
          <div className="col-lg-4 col-md-6" key={spot.id}>
            <div className="card h-100 shadow-sm">
              {spot.picture && (
                <img
                  src={spot.picture}
                  alt={spot.title}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{spot.title}</h5>
                <p className="card-text">
                  <strong>Address:</strong> {spot.address}, {spot.city}, {spot.postalCode}
                </p>
                <p className="card-text">
                  <strong>Description:</strong> {spot.description || 'No description available.'}
                </p>
                <p className="card-text">
                  <strong>Type:</strong> {spot.availability.charAt(0).toUpperCase() + spot.availability.slice(1)}
                </p>
                <p className="card-text">
                  <strong>Price:</strong> ${spot.price}
                </p>
                <p className="card-text">
                  <strong>Weekdays:</strong> {spot.weekdays || 'Not specified'}
                </p>
              </div>
              <div className="card-footer text-center">
                <button className="btn btn-success btn-sm">
                  {ownerOnly ? 'Edit': 'Book'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParkingSpotList;
