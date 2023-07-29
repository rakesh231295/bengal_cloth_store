"use client"
import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    // Your form fields and initial values here
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    log_latitude: '',
    log_longitude: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://bengalcloth.woodmart.shop/api/buyerRegister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data); // Do something with the response from the API
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="billing-details">
                <div className="section-title">
                  <h3 className="title">Billing address</h3>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email ID"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="log_latitude"
                      value={formData.log_latitude}
                      onChange={handleChange}
                      placeholder="log_latitude"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="log_longitude"
                      value={formData.log_longitude}
                      onChange={handleChange}
                      placeholder="log_longitude"
                    />
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </div>
              <div className="order-notes">
                <textarea className="input" placeholder="Order Notes"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
