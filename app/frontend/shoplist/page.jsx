import Image from "next/image";
import mypic from "../../component/img/shop.png";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";

function ShopList() {
  return (
    <>
      <Header />
      <div id="breadcrumb" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="breadcrumb-tree">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Bengal Shop</a>
                </li>

                <li className="active">Product List</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div id="store" className="col-md-12">
              {/* <div className="store-filter clearfix">
                <div className="store-sort">
                  <label>
                    Sort By:
                    <select className="input-select">
                      <option value="0">Popular</option>
                      <option value="1">Position</option>
                    </select>
                  </label>

                  <label>
                    Show:
                    <select className="input-select">
                      <option value="0">20</option>
                      <option value="1">50</option>
                    </select>
                  </label>
                </div>
                <ul className="store-grid">
                  <li className="active">
                    <i className="fa fa-th"></i>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-th-list"></i>
                    </a>
                  </li>
                </ul>
              </div> */}

              <div className="row">
                <div className="col-md-6 col-xs-6 mt-2 mb-4">
                  <div className="category-card">
                    <div className="product-widget">
                      <div className="product-img">
                        <Image src={mypic} alt="" width={70} />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 className="product-price">
                          $980.00{" "}
                          <del className="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                    <div className="shoplist-btn">
                      <button className="btn btn-outline-success mr-4">
                        Add Cart
                      </button>
                      <button className="btn btn-success">Buy Now</button>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-xs-6 mt-2 mb-4">
                  <div className="category-card">
                    <div className="product-widget">
                      <div className="product-img">
                        <Image src={mypic} alt="" width={70} />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 className="product-price">
                          $980.00{" "}
                          <del className="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                    <div className="shoplist-btn">
                      <button className="btn btn-outline-success mr-4">
                        Add Cart
                      </button>
                      <button className="btn btn-success">Buy Now</button>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-xs-6 mt-2 mb-4">
                  <div className="category-card">
                    <div className="product-widget">
                      <div className="product-img">
                        <Image src={mypic} alt="" width={70} />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 className="product-price">
                          $980.00{" "}
                          <del className="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                    <div className="shoplist-btn">
                      <button className="btn btn-outline-success mr-4">
                        Add Cart
                      </button>
                      <button className="btn btn-success">Buy Now</button>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-xs-6 mt-2 mb-4">
                  <div className="category-card">
                    <div className="product-widget">
                      <div className="product-img">
                        <Image src={mypic} alt="" width={70} />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 className="product-price">
                          $980.00{" "}
                          <del className="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                    <div className="shoplist-btn">
                      <button className="btn btn-outline-success mr-4">
                        Add Cart
                      </button>
                      <button className="btn btn-success">Buy Now</button>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-xs-6 mt-2 mb-4">
                  <div className="category-card">
                    <div className="product-widget">
                      <div className="product-img">
                        <Image src={mypic} alt="" width={70} />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 className="product-price">
                          $980.00{" "}
                          <del className="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                    <div className="shoplist-btn">
                      <button className="btn btn-outline-success mr-4">
                        Add Cart
                      </button>
                      <button className="btn btn-success">Buy Now</button>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-xs-6 mt-2 mb-4">
                  <div className="category-card">
                    <div className="product-widget">
                      <div className="product-img">
                        <Image src={mypic} alt="" width={70} />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 className="product-price">
                          $980.00{" "}
                          <del className="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                    <div className="shoplist-btn">
                      <button className="btn btn-outline-success mr-4">
                        Add Cart
                      </button>
                      <button className="btn btn-success">Buy Now</button>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-xs-6 mt-2 mb-4">
                  <div className="category-card">
                    <div className="product-widget">
                      <div className="product-img">
                        <Image src={mypic} alt="" width={70} />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 className="product-price">
                          $980.00{" "}
                          <del className="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                    <div className="shoplist-btn">
                      <button className="btn btn-outline-success mr-4">
                        Add Cart
                      </button>
                      <button className="btn btn-success">Buy Now</button>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-xs-6 mt-2 mb-4">
                  <div className="category-card">
                    <div className="product-widget">
                      <div className="product-img">
                        <Image src={mypic} alt="" width={70} />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 className="product-price">
                          $980.00{" "}
                          <del className="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                    <div className="shoplist-btn">
                      <button className="btn btn-outline-success mr-4">
                        Add Cart
                      </button>
                      <button className="btn btn-success">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="store-filter clearfix">
                {/* <span className="store-qty">Showing 20-100 products</span> */}
                <ul className="store-pagination">
                  <li className="active">1</li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ShopList;
