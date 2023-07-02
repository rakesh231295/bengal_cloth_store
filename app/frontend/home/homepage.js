import Image from 'next/image'
import mypic from '../../component/img/shop.png';
import shop1 from '../../component/img/shop01.png';
import shop2 from '../../component/img/shop02.png';
import shop3 from '../../component/img/shop03.png';

import { useEffect } from 'react';

function HomeBanner(){
    useEffect(() => {
        const fetchLocation = () => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                console.log('Latitude:', latitude);
                console.log('Longitude:', longitude);
                // Do something with the location data
              },
              (error) => {
                console.error('Error fetching location:', error);
              }
            );
          } else {
            console.error('Geolocation is not supported by this browser.');
          }
        };
    
        fetchLocation();
      }, []);
    return(
        <>
       
		<div className="section">
			
			<div className="container">
				
				<div className="row">
					
					<div className="col-md-4 col-xs-6">
						<div className="shop">
							<div className="shop-img">
								<Image src={shop1} alt="shop" />
							</div>
							<div className="shop-body">
								<h3>Shop<br />Collection</h3>
								<a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
					</div>
					

					
					<div className="col-md-4 col-xs-6">
						<div className="shop">
							<div className="shop-img">
                            <Image src={shop2} alt="shop" />
							</div>
							<div className="shop-body">
								<h3>Shop<br />Collection</h3>
								<a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
					</div>
					

					
					<div className="col-md-4 col-xs-6">
						<div className="shop">
							<div className="shop-img">
                            <Image src={shop3} alt="shop" />
							</div>
							<div className="shop-body">
								<h3>Shop<br />Collection</h3>
								<a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
					</div>
					
				</div>
				
			</div>
			
		</div>
		

		
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
                            <div className="col-md-3">
                                <div className="product">
                                    <div className="product-img">
                                        <Image src={mypic} alt=""/>
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">Bengal Shop</a></h3>
                                       
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-3">
                                <div className="product">
                                    <div className="product-img">
                                        <Image src={mypic} alt=""/>
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">Bengal Shop</a></h3>
                                       
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-3">
                                <div className="product">
                                    <div className="product-img">
                                        <Image src={mypic} alt=""/>
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">Bengal Shop</a></h3>
                                       
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-3">
                                <div className="product">
                                    <div className="product-img">
                                        <Image src={mypic} alt=""/>
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">Bengal Shop</a></h3>
                                       
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-3">
                                <div className="product">
                                    <div className="product-img">
                                        <Image src={mypic} alt=""/>
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">Bengal Shop</a></h3>
                                       
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-3">
                                <div className="product">
                                    <div className="product-img">
                                        <Image src={mypic} alt=""/>
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">Bengal Shop</a></h3>
                                       
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-3">
                                <div className="product">
                                    <div className="product-img">
                                        <Image src={mypic} alt=""/>
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">Bengal Shop</a></h3>
                                       
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-3">
                                <div className="product">
                                    <div className="product-img">
                                        <Image src={mypic} alt=""/>
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">Bengal Shop</a></h3>
                                       
                                        
                                    </div>
                                </div>
                            </div>
						</div>
					</div>
				</div>
				
			</div>
			
		</div>
		

		<div id="newsletter" className="section">
			
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="newsletter">
							<p>Sign Up for the <strong>NEWSLETTER</strong></p>
							<form>
								<input className="input" type="email" placeholder="Enter Your Email" />
								<button className="newsletter-btn"><i className="fa fa-envelope"></i> Subscribe</button>
							</form>
							<ul className="newsletter-follow">
								<li>
									<a href="#"><i className="fa fa-facebook"></i></a>
								</li>
								<li>
									<a href="#"><i className="fa fa-twitter"></i></a>
								</li>
								<li>
									<a href="#"><i className="fa fa-instagram"></i></a>
								</li>
								<li>
									<a href="#"><i className="fa fa-pinterest"></i></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				
			</div>
			
		</div>
		
    </>
    )
}
export default HomeBanner;