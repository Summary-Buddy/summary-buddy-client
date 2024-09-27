import React from 'react'
import './Hero.css'
import labtop from '../../public/labtop.png'

export default function Hero() {
  return (
    <div className='hero-container'>
      <div className='gradient-banner'>
        <div className='banner-container'>
          <div className='banner-content'>
            <h2 className='hero-title'>귀찮은 회의록 작성!</h2>
            <h2 className='hero-title'>이제 <i>SummaryBuddy</i>에게 맡기세요</h2>
            <div className='hero-labtop-container'>
              <img className='hero-labtop' src={labtop} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
