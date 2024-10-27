import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Banner from "./components/Banner";
import Cardbody from "./components/Cardbody";
import Footer from "./components/Footer";
import Mainbody from "./components/Mainbody";
import Nav from "./components/Nav";
import Toggolbutton from "./components/Toggolbutton";
import './App.css';
import { useState } from "react";
import Selected from "./components/Selected";


function App() {


  const [coinCount, setCoinCount] = useState(0);
  const [playerStore, setPlayerStore] = useState([]);

  const removePlayer = (playerId) => {
    const updatedPlayers = playerStore.filter(player => player.playerId !== playerId);
    setPlayerStore(updatedPlayers);
  };


  const handleClaimCoin = () => {
    setCoinCount((prevCount) => prevCount + 1); 
  };


  const [isActive, setIsActive] = useState({
    available: true,
    status: "available"
  });

  


  // credit alert functionality
  const handleClaimFreeCredit = () => {
    setCoinCount(coinCount + 6000000000);  
    toast.success("Credit added to your account", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };


  // Not enough money Alert
  const notifyNotEnoughMoney = () => {
    toast.error("Not enough money to buy this player. Claim some credit.", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progressStyle: {
        backgroundColor: "red"
      }
    });
  };




  
  const notifyPlayerAlreadySelected = () => {
    toast.error(
      <p>
        <i className="fa-solid fa-exclamation text-red-500 mr-2"></i>
        Player already selected
      </p>,
      {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progressStyle: {
          backgroundColor: "red",
          transform: "scaleX(-1)", 
          transformOrigin: "left"
        }
      }
    );
  };

 
  const notifyPlayerAdded = (playerName) => {
    toast.success(
      <p className='font-bold'>
      Congratulations! {playerName} is now in your squad!
      </p>,
      {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progressStyle: {
          backgroundColor: "green"
        }
      }
    );
  };

  const notifyMaxPlayersReached = () => {
    toast.warning(
      <p>⚠️ Maximum of 6 players can be selected.</p>,
      {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progressStyle: {
          backgroundColor: "yellow",
          
        },
      }
    );
  };

  
  const addPlayer = (player) => {
    const isExist = playerStore.find(
      (previousPlayer) => previousPlayer.playerId === player.playerId
    );

    const playerCost = parseInt(player.biddingPrice)

    if (coinCount < playerCost) {
      notifyNotEnoughMoney();
      return;
    }

    if (playerStore.length >= 6) {
      notifyMaxPlayersReached();
      return;
    }

    if (!isExist) {
      setPlayerStore([...playerStore, player]);
      setCoinCount(prevCount => prevCount - playerCost);
      notifyPlayerAdded(player.name); 
    } else {
      notifyPlayerAlreadySelected(); 
    }
  };

  const handleIsActiveState = (status) => {
    setIsActive({
      available: status === "available",
      status
    });
  };

  return (
    <div className="px-6">
      <Nav coinCount={coinCount} />
      <Banner onClaimCoin={handleClaimCoin} handleClaimFreeCredit={handleClaimFreeCredit} />
      <Toggolbutton 
        isActive={isActive} 
        handleIsActiveState={handleIsActiveState} 
        selectedCount={playerStore.length} 
      />
      
     
      {isActive.available ? <Mainbody addPlayer={addPlayer} /> : 
        <Selected playerStore={playerStore}
        handleIsActiveState={handleIsActiveState}
          onRemovePlayer={removePlayer} />
      }
      
      <Cardbody />
      <Footer />
     
    </div>
  );
}


export default App;
