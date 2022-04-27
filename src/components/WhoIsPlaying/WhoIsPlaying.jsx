import React from "react";
import "./WhoIsPlaying.css";

const WhoIsPlaying = ({ xPlaying, endGame }) => {
  return (
    <div className="scoreboard">
      <span className={`score player ${endGame ? "o-winner" : !xPlaying ? "o-play" : "x-play"}`}>
        Player Playing: {endGame ? "WINNER !!!" : xPlaying ? "X" : "O"}
        
      </span>
    </div>
  );
};

export default WhoIsPlaying;
