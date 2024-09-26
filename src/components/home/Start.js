import React from 'react'
import './Start.css'
import { useNavigate } from 'react-router-dom'

export default function Start() {
  const navigate = useNavigate();
  return (
    <div className='start-container'>
      <div className='start-btn' onClick={() => navigate("/Register")}>
        <h2 className='start-text'>시작해볼까요?</h2>
      </div>
    </div>
  )
}
