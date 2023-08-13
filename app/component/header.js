"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "./img/logo.jpeg";
import { useEffect, useState } from "react";
// import Location from "./location";

function Header() {
// localstorage




  const getLocation = () => {
    var $locationText = document.querySelector(".location");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        geoLocationSuccess,
        geoLocationError,
        { timeout: 10000 }
      );
    } else {
      alert("Your browser doesn't support geolocation");
    }

    function geoLocationSuccess(pos) {
      var myLat = pos.coords.latitude;
      console.log(myLat);
      var myLng = pos.coords.longitude;
      console.log(myLng);
      var loadingTimeout;

      var loading = function () {
        $locationText.textContent = "fetching...";
      };

      loadingTimeout = setTimeout(loading, 600);

      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${myLat}&lon=${myLng}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (loadingTimeout) {
            clearTimeout(loadingTimeout);
            loadingTimeout = null;
            $locationText.textContent = data.display_name;
          }
        })
        .catch((error) => {
          // handle error
        });
    }

    function geoLocationError(error) {
      var errors = {
        1: "Permission denied",
        2: "Position unavailable",
        3: "Request timeout",
      };

      // Handle the case where permission is denied
      $locationText.textContent = "Permission denied";
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      {/* <Location /> */}

      <header>
        <div id="top-header">
          <div className="container">
            <ul className="header-links pull-left">
              <li></li>

              <li>
                <a href="#">
                  <i className="fa fa-map-marker"></i>{" "}
                  <span className="location"></span>
                </a>
              </li>
            </ul>
            <ul className="header-links pull-right">
              <li>
                <a href="#">
                  <i className="fa fa-user-o"></i> My Account
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="header-logo">
                  <a href="#" className="logo">
                    <Image src={logo} alt="" width={100} />
                  </a>
                </div>
              </div>

              <div className="col-md-6">
                <div className="header-search">
                  <form>
                    <input
                      className="input"
                      placeholder="Search here"
                      style={{ borderRadius: "26px 0px 0px 26px" }}
                    />
                    <button className="search-btn">Search</button>
                  </form>
                </div>
              </div>

              <div className="col-md-3 clearfix">
                <div className="header-ctn">
                  {/* <div>
									<a href="#">
										<i className="fa fa-heart-o"></i>
										<span>Your Wishlist</span>
										<div className="qty">2</div>
									</a>
								</div> */}

                  <div className="dropdown">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <i className="fa fa-shopping-cart"></i>
                      <span>Your Cart</span>
                      <div className="qty">3</div>
                    </a>
                    <div className="cart-dropdown">
                      <div className="cart-list">
                        <div className="product-widget">
                          <div className="product-img">
                            <img src="./img/product01.png" alt="" />
                          </div>
                          <div className="product-body">
                            <h3 className="product-name">
                              <a href="#">product name goes here</a>
                            </h3>
                            <h4 className="product-price">
                              <span className="qty">1x</span>$980.00
                            </h4>
                          </div>
                          <button className="delete">
                            <i className="fa fa-close"></i>
                          </button>
                        </div>

                        <div className="product-widget">
                          <div className="product-img">
                            <img src="./img/product02.png" alt="" />
                          </div>
                          <div className="product-body">
                            <h3 className="product-name">
                              <a href="#">product name goes here</a>
                            </h3>
                            <h4 className="product-price">
                              <span className="qty">3x</span>$980.00
                            </h4>
                          </div>
                          <button className="delete">
                            <i className="fa fa-close"></i>
                          </button>
                        </div>
                      </div>
                      <div className="cart-summary">
                        <small>3 Item(s) selected</small>
                        <h5>SUBTOTAL: $2940.00</h5>
                      </div>
                      <div className="cart-btns">
                        <a href="#">View Cart</a>
                        <a href="#">
                          Checkout <i className="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="menu-toggle">
                    <a href="#">
                      <i className="fa fa-bars"></i>
                      <span>Menu</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav id="navigation">
        <div className="container">
          <div id="responsive-nav">
            <ul className="main-nav nav navbar-nav">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Nearby Shop</a>
              </li>
              <li>
                <Link href="/frontend/shoplist">ShopList</Link>
              </li>
              <li>
                <Link href="/frontend/productdetail">Product Detail</Link>
              </li>
              <li>
                <Link href="/frontend/registration">Registration</Link>
              </li>
              <li>
                <Link href="/frontend/users">Users</Link>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
