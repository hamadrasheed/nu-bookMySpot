import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './spot.css';
import apiService from '../../shared/http';

const ParkingSpotList = ({ role, type }) => {
  const [parkingSpots, setParkingSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    maxPrice: '',
    weekday: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date()), // Today's day
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
  });

  const headingMapper = {
    owner: 'Your Parking Spots',
    listing: 'Find parking spots',
    driver: 'Your Booked Parking Spots',
    'admin-all-bookings': 'All Bookings',
    'admin-all-parkings': 'All parking spots'
  };

  const dynamicHeading = headingMapper[`${role}`]

  const actionButtonName = {
    owner: 'Edit',
    listing: 'Book Now',
    driver: 'Cancel Booking',
    'admin-all-bookings': 'Edit',
    'admin-all-parkings': 'Edit'
  };

  const dynamicActionButton = actionButtonName[`${role}`]


  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
  console.log('type', type, role);
  const fetchParkingSpots = async () => {
    try {

      const endPointMappter = {
        owner: '/owner',
        listing: '/',
        driver: '/booked',
        'admin-all-bookings': '/booked',
        'admin-all-parkings': '/owner'
      }

      let adminFilter = {};

      if( ['admin-all-bookings', 'admin-all-parkings'].includes(`${role}`) ) {
        adminFilter = {
          isAdmin: true
        }
      }

      const dynamicendPoint = endPointMappter[`${role}`]

      const endpoint = `/parking-spot${dynamicendPoint}`;
      const response = await apiService.get(endpoint, { ...filters, ...adminFilter });
      setParkingSpots(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching parking spots:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchParkingSpots();
  }, [filters, role]);

  if (loading) {
    return <div className="text-center py-5">Loading parking spots...</div>;
  }

  if (parkingSpots.length === 0) {
    return <div className="text-center py-5 font-size: 2rem ">No parking spots available.</div>;
  }

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">
        {dynamicHeading}
      </h2>

      {/* Filters */}
      {role !== 'owner' && role !== 'driver' && (
        <div className="row mb-4">
          {/* Max Price Filter */}
          <div className="col-md-2 mb-2">
            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleFilterChange}
              className="form-control filter-input"
              placeholder="Max Price"
            />
          </div>

          {/* Weekday Filter */}
          <div className="col-md-2 mb-2">
            <select
              name="weekday"
              value={filters.weekday}
              onChange={handleFilterChange}
              className="form-control filter-input"
            >
              {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>

          {/* Start Date Filter */}
          <div className="col-md-3 mb-2">
            <input
              type="date"
              name="startDate"
              value={filters.startDate}
              onChange={handleFilterChange}
              className="form-control filter-input"
            />
          </div>

          {/* End Date Filter */}
          <div className="col-md-3 mb-2">
            <input
              type="date"
              name="endDate"
              value={filters.endDate}
              onChange={handleFilterChange}
              className="form-control filter-input"
            />
          </div>

          {/* Apply Filters Button */}
          <div className="col-md-2 mb-2">
            <button
              className="btn btn-primary w-100 filter-button"
              onClick={fetchParkingSpots}
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

      {/* Parking Spot List */}
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
                {
                  role == 'driver' ? 
                  <p className="card-text">
                  <strong>Booked for:</strong> {`${spot.startTime} - ${spot.dayName}` || 'Not specified'}
                  </p>
                  : null
                }
              </div>
              <div className="card-footer text-center">

                <button className="btn btn-success btn-sm">{dynamicActionButton}</button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParkingSpotList;
