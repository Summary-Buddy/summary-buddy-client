import React from 'react'
import RecordBtn from '../RecordBtn';
import './Record.css';

export default function Record() {
  return (
    <div className='record-section'>
      <div className='record-container'>
        <RecordBtn />
        <div className='record-content'>
          <h2 className='record-text'>
            <i className="bi bi-emoji-smile"></i> 녹음만 하면 회의 내용을 요약해줘요
          </h2>
          <h2 className='record-text'>
            <i className="bi bi-emoji-smile"></i> 요약된 회의록을 PDF로 내려 받을 수 있어요
          </h2>
          <h2 className='record-text'>
            <i className="bi bi-emoji-smile"></i> 참석자와 함께 회의록을 공유할 수 있어요
          </h2>
        </div>
      </div>
    </div>
  )
}
