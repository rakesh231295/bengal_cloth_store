import Footer from "@/app/component/footer";
import Header from "@/app/component/header";
import Image from "next/image";
import mypic from "../../component/img/shop.png";

function ProductDetail() {
    return (
       <>
       <Header />
		<div className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-6 ">
						<div id="product-main-img">
							<div className="product-preview">
                            <Image src={mypic} alt="" className/>
							</div>
						</div>
					</div>
					
					
				
					<div className="col-md-6">
						<div className="product-details">
							<h2 className="product-name">product name goes here</h2>
							{/* <div>
								<div className="product-rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star-o"></i>
								</div>
								<a className="review-link" href="#">10 Review(s) | Add your review</a>
							</div> */}
							<div>
								<h3 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h3>
								<span className="product-available">In Stock</span>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

							<div className="product-options">
								<label>
									Size
									<select className="input-select">
										<option value="0">X</option>
									</select>
								</label>
								<label>
									Color
									<select className="input-select">
										<option value="0">Red</option>
									</select>
								</label>
							</div>

							<div className="add-to-cart">
								<div className="qty-label">
									Qty
									<div className="input-number">
										<input type="number" />
										<span className="qty-up">+</span>
										<span className="qty-down">-</span>
									</div>
								</div>
								<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
							</div>


							<ul className="product-links">
								<li>Category:</li>
								<li><a href="#">Headphones</a></li>
								<li><a href="#">Accessories</a></li>
							</ul>

							<ul className="product-links">
								<li>Share:</li>
								<li><a href="#"><i className="fa fa-facebook"></i></a></li>
								<li><a href="#"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i className="fa fa-envelope"></i></a></li>
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

export default ProductDetail;