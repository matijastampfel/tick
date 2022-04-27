import React from 'react'
import './Score.css'

const Score = ({xPlaying, score}) => {
    const { xScore, oScore } = score;
  return (
    <div className="scoreboard">
    <span className={`score x-score ${!xPlaying}`}>X - {xScore}</span>
    <span className={`score o-score ${xPlaying}`}>O - {oScore}</span>
  </div>
  )
}

export default Score