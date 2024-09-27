import React from 'react'
import './RecordBtn.css';

export default function RecordBtn() {
  return (
    <div className='record-icon-container'>
      {/* 녹음 버튼 */}
      <div className='record-shadow' />
      <div className='record-btn'>
        <i className={`bi bi-mic`} style={{ fontSize: '2rem', color: 'white' }}></i>
      </div>
    </div>
  )
}
