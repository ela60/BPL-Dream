

const Banner = ({ handleClaimFreeCredit  }) => {
    return (
        <div className="bg-cover bg-no-repeat bg-black rounded-3xl md:w-full h-full md:h-[35.5rem] mb-10" style ={{
        backgroundImage:'url(https://i.ibb.co.com/McZv3KD/bg-shadow.png)',
        }}>

            <div className="w-9/12 mx-auto flex flex-col justify-center items-center text-center h-full space-y-6 py-4">
                <img src="https://i.ibb.co.com/2y1Sxgg/banner-main.png" alt="" />
                <h1 className="font-bold text-white md:text-[2rem]">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="text-lg text-gray-300 ">Beyond Boundaries Beyond Limits</p>
                
                <button  onClick={handleClaimFreeCredit} className="mt-4 bg-[#E7FE29] font-bold text-black p-3 rounded text-left ring-2 ring-[#E7FE29] ring-offset-2 ring-offset-[#E7FE29] hover:ring-4 focus:outline-none">Claim Free Credit</button>
            </div>
            
            
        </div>
    );
};

export default Banner;