import React from 'react'
import "./ResetButton.css";

const ResetButton = ({resetPlayBoard}) => {
  return (
    <button className="reset" onClick={resetPlayBoard}>Reset</button>
  )
}

export default ResetButton