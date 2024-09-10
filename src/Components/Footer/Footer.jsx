import './Footer.css'

const Footer=()=>{

    return(
        <>
        <div className="footer-conatiner">
            <div className="logo-wrapper">
                <h1>Currency Converter</h1>
            </div>
            <div className="social-accounts">
                <i className={"fa-brands fa-facebook"}></i>
                <i className={"fa-brands fa-x-twitter"}></i>
                <i className={"fa-brands fa-square-instagram"}></i>
               
            </div>
           <div className="footer-content">
      
                 <div className="referncence">
                    <ul>
                        <h2>Terms</h2>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>FAQ</li>
                        <li>Blog</li>
                    </ul>
                
                 </div>
                 <div className="referncence">

                     <ul>
                        <h2>Policy</h2>
                        <li>Careers</li>
                        <li>Support</li>
                        <li>Shipping & Returns</li>
                        <li>Site Map</li>
                        <li>Investor Relations</li>
                        <li>Newsroom</li>
                    </ul>
                
                 </div>
                 <div className="referncence">
                    <ul>
                        <h2>Support</h2>
                        <li>Partnerships</li>
                        <li>Community Guidelines</li>
                        <li>Accessibility</li>
                        <li>Affiliate Program</li>
                        <li>Press Kit</li>
                        
                    </ul>
                 </div>
           </div>

        </div>
        </>
    )


}
export default Footer

