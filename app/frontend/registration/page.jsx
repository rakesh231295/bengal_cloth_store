"use client"
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import React, { useState } from "react";
import axios from 'axios';

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
    console.log("formdara>>>>>>>>",formData);
    try {
      const response = await axios.post('http://bengalcloth.woodmart.shop/api/buyerRegister', formData);
      console.log(response.data); 
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  

  return (
    <>
    <Header/>
    <div>
      
      <div className="section">
        <div className="container">
          <div className="row">
          <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="billing-details">
                <div className="section-title">
                  <h3 className="title">Registration</h3>
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
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Registration;
