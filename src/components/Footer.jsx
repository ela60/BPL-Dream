

const Footer = () => {
    return (
        <div>
            <footer className="footer  bg-[#06091A]  p-10 -mt-4 ">
            <div className="text-center mb-8 mt-24">
                    <img src="https://i.ibb.co.com/6RHvf1y/logo-footer.png" alt="" className="mx-auto"/>
                    </div>
                <div className="flex justify-around">
                <nav>
                    
                    <h6 className="text-white text-left mb-2" >About Us</h6>
                    <p className="text-[#FFFFFF99] text-[12px] text-left">We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                  </nav>
                  <nav>
                    <h6 className="footer-title text-white mb-2">Quick Links</h6>
                        <ul className="space-y-2 text-left list-disc ml-4 text-[14px]">
                        <a className="link link-hover text-[#FFFFFF99]"><li>Home</li></a>
                    <a className="link link-hover text-[#FFFFFF99]"><li>Service</li></a>
                    <a className="link link-hover text-[#FFFFFF99]"><li>About</li></a>
                    <a className="link link-hover text-[#FFFFFF99]"><li>Contact</li></a>
                    </ul>
                  </nav>
                 
                  <form>
                    <h6 className="footer-title text-white mb-2 text-left">Subscribe</h6>
                    <p className="text-[#FFFFFF99] text-[14px]  mb-2 text-left">Subscribe to our newsletter for the <br /> latest updates.</p>
                   
                     
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="input input-bordered  mb-4 p-2 border h-9  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 "
                    />
                    <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-black font-bold px-3 h-9 rounded-md hover:from-pink-400 hover:to-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
                        Subscribe
                    </button>
                   
                  </form>
                </div>
                <div className="mt-12 text-gray-600">
                    <hr className="border-t border-gray-600"/>
                    <p className="text-center text-gray-600 py-2 mt-5 text-[14px]">@2024 Your Company All Rights Reserved.</p>
               </div>
</footer>
            
        </div>
    );
};

export default Footer;