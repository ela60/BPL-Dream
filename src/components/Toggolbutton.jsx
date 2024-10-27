
import Selected from "./Selected";

const Toggolbutton = ({ handleIsActiveState, isActive, selectedCount }) => {
    return (
        <div className="flex justify-between mb-4">
            <h2 className="text-left font-bold text-[20px]">
                {isActive.available 
                    ? "Available Players" 
                    : `Selected Players: (${selectedCount} / 6)`}
            </h2>
            <div className="flex gap-3">
               
                <button 
                    onClick={() => handleIsActiveState("available")} 
                    className={`border rounded-lg p-3 text-[#131313] ${isActive.available ? "bg-[#E7FE29] font-bold" : "bg-white"}`}
                >
                    Available
                </button>

               
                <button 
                    onClick={() => handleIsActiveState("selected")} 
                    className={`border rounded-lg p-3 text-[#131313] ${!isActive.available ? "bg-[#E7FE29] font-bold" : "bg-white"}`}
                >
                    Selected {selectedCount > 0 ? selectedCount : 0}
                </button>
            </div>
        </div>
    );
};

export default Toggolbutton;
