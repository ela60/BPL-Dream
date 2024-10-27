const Selected = ({ playerStore, onRemovePlayer, handleIsActiveState }) => {
    return (
      <div className="selected-players mt-4">
        
        <div className="flex flex-col items-center">
          {playerStore.length > 0 ? (
            playerStore.map((player) => (
                <div key={player.playerId} className="player-card border p-4 rounded-lg mb-3 w-full ">
                    <div className="flex justify-between">
                      <div className="flex gap-3">
                        <img src={player.image} alt={player.name} className="h-20 w-20 rounded-full mb-2" />
                        <div className="text-left mt-3">
                          <h3 className="font-bold">{player.name}</h3>
                          <p className="text-[13px]">Role: {player.role}</p>
                          <p className="text-[13px]">Price: {player.biddingPrice} Coins</p>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemovePlayer(player.playerId)}
                        className="text-red-500 p-2 rounded mt-2"
                      >
                        <i className="fa-solid fa-trash w-16"></i>
                      </button>
                    </div>
                </div>
            ))
          ) : (
            <p>No players selected.</p>
          )}
        </div>
        
        
        <button 
    onClick={() => handleIsActiveState("available")}
    className="mt-4 bg-[#E7FE29] font-bold text-black p-3 rounded text-left ring-2 ring-black ring-offset-2 ring-offset-[#E7FE29] hover:ring-4 focus:outline-none"
>
    Add More Player
    </button>


      </div>
    );
  };

export default Selected;
