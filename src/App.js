import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import PlayBoard from "./components/PlayBoard/PlayBoard";
import Score from "./components/Score/Score";
import WinRules from "./components/WinRules/WinRules";
import WhoIsPlaying from './components/WhoIsPlaying/WhoIsPlaying'
import ResetButton from "./components/ResetButton/ResetButton";

function App() {
  const [playBoardFields, setPlayBoardFields] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [endGame, setEndGame] = useState(false);
  const [score, setScore] = useState({ xScore: 0, oScore: 0 })

  const handlePlayBoardFieldsClick = (boxIndex) => {
    const updateBoardFields = playBoardFields.map((value, index) => {
      if (index === boxIndex) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });
 
    setPlayBoardFields(updateBoardFields);


    const winner = winnerChecker(updateBoardFields);

    if (winner) {
      if (winner === "O") {
        let { oScore } = score;
        oScore += 1;
        setScore({ ...score, oScore })
      } else {
        let { xScore } = score;
        xScore += 1;
        setScore({ ...score, xScore })
      }
    }

    setXPlaying(!xPlaying);
  };

  


  const winnerChecker = (playBoardFields) => {
    for (let i = 0; i < WinRules.length; i++) {
      const [x, y, z] = WinRules[i];

      if (playBoardFields[x] && playBoardFields[x] === playBoardFields[y] && playBoardFields[y] === playBoardFields[z]) {
        setEndGame(true);
        return playBoardFields[x];
      }
    }
  };

  const resetPlayBoard = () => {
    setEndGame(false);
    setPlayBoardFields(Array(9).fill(null));
  }



  return (
    <div className="app">
      <Score xPlaying={xPlaying} score={score}/>
      <WhoIsPlaying xPlaying={xPlaying} endGame={endGame}/>
      <PlayBoard
        playBoardFields={playBoardFields}
        onClick={endGame ? resetPlayBoard : handlePlayBoardFieldsClick}
      />
      <ResetButton resetPlayBoard={resetPlayBoard} />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export default App;