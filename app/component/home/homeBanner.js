import Image from 'next/image'
import mypic from '../img/product01.png';
import shop1 from '../img/shop01.png';
import shop2 from '../img/shop02.png';
import shop3 from '../img/shop03.png';

function homeBanner(){
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
								<h3>Laptop<br />Collection</h3>
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
								<h3>Accessories<br />Collection</h3>
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
								<h3>Cameras<br />Collection</h3>
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
							<h3 className="title">New Products</h3>
							
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
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                        
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
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                        
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
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                        
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
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                        
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
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                        
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
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                        
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
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                        
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
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                        
                                    </div>
                                </div>
                            </div>
						</div>
					</div>
				</div>
				
			</div>
			
		</div>
		

		
		<div id="hot-deal" className="section">
			
			<div className="container">
				
				<div className="row">
					<div className="col-md-12">
						<div className="hot-deal">
							<ul className="hot-deal-countdown">
								<li>
									<div>
										<h3>02</h3>
										<span>Days</span>
									</div>
								</li>
								<li>
									<div>
										<h3>10</h3>
										<span>Hours</span>
									</div>
								</li>
								<li>
									<div>
										<h3>34</h3>
										<span>Mins</span>
									</div>
								</li>
								<li>
									<div>
										<h3>60</h3>
										<span>Secs</span>
									</div>
								</li>
							</ul>
							<h2 className="text-uppercase">hot deal this week</h2>
							<p>New Collection Up to 50% OFF</p>
							<a className="primary-btn cta-btn" href="#">Shop now</a>
						</div>
					</div>
				</div>
				
			</div>
			
		</div>
		
    </>
    )
}
export default homeBanner;