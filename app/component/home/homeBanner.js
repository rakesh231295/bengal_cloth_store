import Product from './product'
function homeBanner(){
    return(
        <>
        <div className="relative w-full">
        
            <div className="relative h-56 overflow-hidden md:h-96">
                <div className="duration-700 ease-in-out">
                    <img src="https://static.vecteezy.com/system/resources/previews/004/299/813/large_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
            </div>
        
        </div>
        <h1 className='m-8 text-center text-4xl font-semibold tracking-tight text-gray-900 dark:text-black'>Best Store</h1>
        <Product />
    </>
    )
}
export default homeBanner;