import React from "react";
import "./FieldBox.css";

const FieldBox = ({ value, onClick }) => {
  const styleOfFieldBox = value === "X" ? "clickBox x" : "clickBox o";

  return (
    <button className={styleOfFieldBox} onClick={onClick}>
      {value}
    </button>
  );
};

export default FieldBox;
