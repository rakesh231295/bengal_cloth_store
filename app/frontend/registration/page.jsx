"use client"
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import React, { useState } from "react";
import axios from 'axios';

const Registration = () => {

  const api = axios.create({
    baseURL: "https://localhost:3000"
  });

  const [post, setPost] = useState({
    // Your form fields and initial values here
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    log_latitude: '',
    log_longitude: ''
  });

  
  const handleInput = (event) => {
    setPost({...post, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault()
    // console.log(post)
    axios.post('http://bengalcloth.woodmart.shop/api/buyerRegister', {post})
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }
  

  

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
                      value={post.name}
                      onChange={handleInput}
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="email"
                      value={post.email}
                      onChange={handleInput}
                      placeholder="Email ID"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="phone"
                      value={post.phone}
                      onChange={handleInput}
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="address"
                      value={post.address}
                      onChange={handleInput}
                      placeholder="Address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="password"
                      name="password"
                      value={post.password}
                      onChange={handleInput}
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="log_latitude"
                      value={post.log_latitude}
                      onChange={handleInput}
                      placeholder="log_latitude"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="log_longitude"
                      value={post.log_longitude}
                      onChange={handleInput}
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
