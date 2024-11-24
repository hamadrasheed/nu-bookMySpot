import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './createParkingSpot.css'; // Optional custom styling
import apiService from '../../shared/http';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const CreateParkingSpot = () => {
  const [formData, setFormData] = useState({
    title: '',
    address: '',
    city: '',
    postalCode: '',
    availability: '',
    price: '',
    description: '',
    weekdays: [], // Selected weekdays
    image: null, // Add an image field to store the uploaded file
  });

  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  const handleWeekdayChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevFormData) => {
      const newWeekdays = checked
        ? [...prevFormData?.weekdays, value]
        : prevFormData.weekdays.filter((day) => day !== value);
      return { ...prevFormData, weekdays: newWeekdays };
    });
  };

  const handleSubmit = async (e) => {

    try {
      e.preventDefault();

      const formDataToSubmit = new FormData();
      formDataToSubmit.append('title', formData.title);
      formDataToSubmit.append('address', formData.address);
      formDataToSubmit.append('city', formData.city);
      formDataToSubmit.append('postalCode', formData.postalCode);
      formDataToSubmit.append('availability', formData.availability);
      formDataToSubmit.append('price', formData.price);
      formDataToSubmit.append('description', formData.description);
      formDataToSubmit.append('weekdays', formData.weekdays.join(','));
      if (formData.image) {
        formDataToSubmit.append('image', formData.image); // Add the image to the form data
      }
  
      const response = await apiService.post('/parking-spot', formDataToSubmit, true);
  
      toast.success(response.message, {
        position: 'top-center', 
        autoClose: true,
      });
      
      setSubmitted(true);

      setTimeout(() => {
        navigate('/owner-listing');
      }, 2000);

    } catch (error) {
      const data = error?.response?.data; 
      console.log('data',data);
      toast.error(data.message, {
        position: 'top-center',
        autoClose: true,
      });
    }
   
  };

  return (
    <div className="parking-spot-form container py-5">
      <h2 className="text-center mb-4">Create a Parking Spot</h2>
      <p className="text-center mb-4">Fill in the details below to list your parking space.</p>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          {submitted ? (
            <div className="alert alert-success text-center" role="alert">
              Parking spot created successfully!
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Title */}
              <div className="mb-3">
                <label htmlFor="title" className="form-label font-increase">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-control"
                  placeholder="Enter a title for your parking spot"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Address */}
              <div className="mb-3">
                <label htmlFor="address" className="form-label font-increase">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="form-control"
                  placeholder="Enter the parking spot address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* City */}
              <div className="mb-3">
                <label htmlFor="city" className="form-label font-increase">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="form-control"
                  placeholder="Enter the city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Postal Code */}
              <div className="mb-3">
                <label htmlFor="postalCode" className="form-label font-increase">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  className="form-control"
                  placeholder="Enter the postal code"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                />
              </div>


              <div className="mb-3">
                <label className="form-label signup-label font-increase">Availablity:</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="availability"
                    id="availability"
                    value="hourly"
                    onChange={handleChange}
                  />
                  <label className="form-check-label signup-label" htmlFor="availability">
                    Hourly only.
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="availability"
                    id="availability"
                    value="daily"
                    onChange={handleChange}
                  />
                  <label className="form-check-label signup-label " htmlFor="availability">
                    Daily only.
                  </label>
                </div>
              </div>

              {/* Price */}
              <div className="mb-3">
                <label htmlFor="price" className="form-label font-increase">
                  Rate ($)
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  className="form-control"
                  placeholder="Enter price per hour"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Weekday Selection */}
              <div className="mb-3">
                <label className="form-label font-increase">Select Available Days</label>
                <div className="d-flex flex-wrap">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                    <div className="form-check me-3" key={day}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={day}
                        value={day}
                        checked={formData?.weekdays?.includes(day)}
                        onChange={handleWeekdayChange}
                      />
                      <label className="form-check-label" htmlFor={day}>
                        {day}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-3">
                <label htmlFor="description" className="form-label font-increase">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  className="form-control"
                  placeholder="Add any additional details about the parking spot"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Image Upload */}
              <div className="mb-3">
                <label htmlFor="image" className="form-label font-increase">
                  Upload Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="form-control"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </div>

              {/* Submit Button */}
              <div className="d-grid">
                <button type="submit" className="btn btn-success">
                  Create Parking Spot
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateParkingSpot;
