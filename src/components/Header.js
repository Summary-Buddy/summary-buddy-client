import React from 'react';
// import { useEffect, useState } from 'react';
import '../background.scss';
import buddy from '../pages/buddy.png'; // 로고 이미지 파일 경로
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {



  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          display: inline-block;
          text-decoration: none;
          color: black;
          font-weight: bold;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 3px;
          display: block;
          margin-top: 5px;
          background: #FC819E;
          transition: width 0.3s ease;
          left: 50%;
          transform: translateX(-50%);
        }

        .nav-link:hover::after {
          width: 70%; /* 밑줄 길이를 조절 */
        }
      `}</style>

      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#FFF3C7' }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* SummaryBuddy 왼쪽 */}
          <a className="navbar-brand fw-bold" href="/MyPage" style={{ marginLeft: '20px' }}>
          <img src={buddy} alt="SummaryBuddy Logo" style={{ width: '40px', marginRight: '10px' }} /> {/* 로고 이미지 추가 */}
            SummaryBuddy
          </a>

          {/* Home, Record, Summary 중앙 정렬 및 간격 조정 */}
          <div className="d-flex justify-content-center flex-grow-1">
            <ul className="navbar-nav d-flex flex-row justify-content-center mb-2 mb-lg-0">
              <li className="nav-item" style={{ marginLeft: '100px', marginRight: '100px' }}>
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item" style={{ marginLeft: '100px', marginRight: '100px' }}>
                <a className="nav-link" href="/Record">Record</a>
              </li>
              <li className="nav-item" style={{ marginLeft: '100px', marginRight: '100px' }}>
                <a className="nav-link" href="/Summary">Summary</a>
              </li>
            </ul>
          </div>

          {/* Sign in, Sign up 오른쪽 */}
          <div className="d-flex align-items-center">
            <a className="nav-link" href="/Login" style={{ marginRight: '10px' }}>Sign in</a>
            <form className="d-flex rounded" role="search" style={{ marginRight: '20px', backgroundColor: '#FC819E' }}>
              <Link to="/Register">
                <button className="btn btb-default rounded fw-bold" type="submit" style={{ color: 'white' }}>
                  Sign up
                </button>
              </Link>
            </form>

            {/* 로그인 여부에 따른 사이드바 변경 *}
            {/* {isLoggedIn ? (
              <>
                
                <a className="nav-link" href="/Home" style={{ marginRight: '10px' }} onClick={handleLogout}>Sign out</a>

                
                <form className="d-flex rounded" role="search" style={{ marginRight: '20px', backgroundColor: '#FC819E' }}>
                  <Link to="/MyPage">
                    <button className="btn btn-default rounded fw-bold" type="button" style={{ color: 'white' }}>
                      {userName}
                    </button>
                  </Link>
                </form>
              </>
            ) : (
              <>
                <a className="nav-link" href="/Login" style={{ marginRight: '10px' }}>Sign in</a>
                <form className="d-flex rounded" role="search" style={{ marginRight: '20px', backgroundColor: '#FC819E' }}>
                  <Link to="/Register">
                    <button className="btn btb-default rounded fw-bold" type="submit" style={{ color: 'white' }}>
                      Sign up
                    </button>
                  </Link>
                </form>
              </>
            )} */}
          </div>
        </div>
      </nav>
    </>
  );
};