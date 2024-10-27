

const Nav = ({coinCount}) => {
    return (
        <div >
            
    <nav className=" px-4 static  py-2  ">
      <div className="  container mx-auto flex justify-between items-center">
       
        <div className="flex items-center">
          <img
            src="https://i.ibb.co.com/n6kV4zm/logo.png"
            alt="Logo"
            className="h-12 w-18 "
          />
        </div>

       
        
        <div className="hidden lg:flex gap-3 items-center space-x-4">
          <a href="#home" className="text-[#131313B3] hover:text-gray-400">
            Home
          </a>
          <a href="#fixture" className="text-[#131313B3] hover:text-gray-400">
            Fixture
          </a>
          <a href="#team" className="text-[#131313B3] hover:text-gray-400">
            Teams
          </a>
          <a href="#schedule" className="text-[#131313B3] hover:text-gray-400">
            Schedules
          </a>

          {/* Coin Button */}
          <button className="text-gray-800 px-4 py-2 rounded-full flex items-center space-x-2 border">
                            
        <span>{coinCount} Coin</span>
                            
         <img src="https://i.ibb.co.com/RjCXfxr/coin.png" alt="" className="h-6 w-6" />
            </button>

        </div>
      </div>

    
    </nav>



        </div>
    );
};

export default Nav;