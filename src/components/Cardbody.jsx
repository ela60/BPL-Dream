


const Cardbody = () => {
    return (
        <div>
            <div className="flex items-center justify-center ">
                <div className="relative top-24 p-8 w-[800px] bg-gradient-to-br from-sky-200 to-yellow-200 shadow-md rounded-lg border-4 border-solid  backdrop-blur-sm">
                
                    <h2 className="text-2xl font-bold mt-12 mb-2">Subscribe to our Newsletter</h2>
                    <p className="text-gray-600  mb-4">Please enter your information below.</p>
                    <div className="flex justify-center gap-2 ">
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="input input-bordered w-96 mb-4 p-2 border h-12  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 "
                    />
                    <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-black font-bold p-2 h-12 rounded-md hover:from-pink-400 hover:to-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
                        Subscribe
                    </button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Cardbody;
