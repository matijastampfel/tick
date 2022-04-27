import React from "react";
import FieldBox from "../FieldBox/FieldBox";
import "./PlayBoard.css";

const PlayBoard = ({ playBoardFields, onClick }) => {
  return (
    <div className="playBoard">
      {playBoardFields.map((value, index) => {
        return (
          <FieldBox
            key={Math.random()}
            value={value}
            onClick={() => value === null && onClick(index)}
          />
        );
      })}
    </div>
  );
};

export default PlayBoard;
