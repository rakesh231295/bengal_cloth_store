"use client";
import Footer from "@/app/component/footer";
import Header from "@/app/component/header";
import { useEffect, useState } from "react";
import React from "react";

function Page() {
    const [user, setUser] = useState([]);
  async function fetchData() {
    // You can await here
    let data = await fetch("http://bengalcloth.woodmart.shop/api/all_user");
    data = await data.json();
    console.log(data);
    setUser(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <Header />
    <div>
    <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h3 className="title">Shops</h3>
              </div>
            </div>
      <div className="col-md-12">
              <div className="row">
                {user?.map((item) => (
                  <>
                    <div className="col-md-3">
                      <div className="product">
                        
                        <div className="product-body">
                          <p className="product-category">Category</p>
                          <h3 className="product-name" key={item?.id}>
                            <a href="#">{item?.buyer_id}</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
            </div>
            </div>
            </div>
    </div>
    <Footer />
    </>
  )
};

export default Page;
