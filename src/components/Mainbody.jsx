import { useState, useEffect } from "react";


const Mainbody = ({addPlayer , notifyPlayerAlreadySelected}) => {
    const [players, setPlayers] = useState([]);

   
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setPlayers(data.players)) 
            .catch(err => console.error("Error fetching data:", err)); 
    }, []); 

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    players.map((player) => (
               <div key={player.playerId} className="card bg-slate-100  shadow-xl px-8 border-2">
               <figure className="border-2 rounded-lg">
                 <img className= " w-full md:h-60 rounded-xl"
                   src={player.image}
                   alt="players image" />
               </figure>
               <div className="card-body mb-2">
                        <div className="flex gap-2">
                        <i className="fa-solid fa-user mt-4 mb-4 text-xl text-[#43259e]"></i>
                        <h2 className="card-title font-bold mt-4 mb-4 text-xl text-[#131313]">{ player.name}</h2>
                        </div>
                        <div className="flex justify-between mb-3">
                            <div className="flex gap-2">
                            <i className="fa-solid fa-flag text-[#43259e]"></i>
                            <p className="text-[12px] text-[#43259e] font-bold">{player.country}</p>
                            </div>

                            <p className="bg-[#9981e0] text-[12px] text-[#131313] p-1 px-3 rounded" >{player.role}</p>
                                </div>
                                <hr  />
                      
                            <p className="text-[#131313] text-[14px] font-bold text-left mt-2">Rating</p>         

                        <div className="flex justify-between py-3">
                            <p className="text-[#131313f3] text-[14px] font-bold">{player.battingType}</p>
                            <p className=" text-[14px] text-gray-500 font-bold ">{player.bowlingType}</p>
                        </div>
                       

                        <div className="card-actions flex justify-between mt-2">
                        <p className="text-[#131313] text-[14px] font-bold mt-2">Price:${ player.biddingPrice}</p>
                        <button 
         onClick={() => {
          addPlayer(player); 
         notifyPlayerAlreadySelected();
        }} 
        className="text-[14px] border-4 rounded-full p-2  hover:bg-[#E7FE29] bg-[#9a8cc4]"
    >
     Choose Player
        </button>

                 </div>
               </div>
             </div>
            ))}
            </div>
            
           
        </div>
    );
};

export default Mainbody;
