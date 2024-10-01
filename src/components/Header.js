import React, { useEffect, useState } from 'react';
import '../background.scss';
import buddy from '../public/buddy-logo.png'; // 로고 이미지 파일 경로
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { client } from '../utils/client';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();

  const fetchLoginCheck = async() => {
    const token = cookies.token;
    const memberId = cookies.memberId;
    try {
      const res = await client.get(`/member/${memberId}`, { headers: { Authorization: token } });
      if (res.status === 200) {
        setUsername(res.data.username);
        setIsLoggedIn(true);
      }
    } catch(err) {
      setIsLoggedIn(false);
    }
  }

  useEffect(() => {
    fetchLoginCheck();
  }); // 로그인 후 바로 헤더 바뀌게 수정

  const handleLogout = () => {
    removeCookie('token');
    removeCookie('memberId');
    setIsLoggedIn(false);
    navigate("/Login"); // 로그아웃 후 로그인 페이지로 리다이렉션
  };

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
          width: 70%;
        }
      `}</style>

      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#FFF3C7', marginBottom: '20px' }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand fw-bold" href="/" style={{ marginLeft: '20px' }}>
            <img src={buddy} alt="SummaryBuddy Logo" style={{ width: '40px', marginRight: '10px' }} />
            <span style={{ fontFamily: 'HakgyoansimDunggeunmisoTTF-B' }}>SummaryBuddy</span>
          </a>

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

          <div className="d-flex align-items-center">
            {isLoggedIn ? (
              <>
                <a className="nav-link" href="/Home" style={{ marginRight: '10px' }} onClick={handleLogout}>Sign out</a>
                <Link to="/MyPage">
                  <button className="btn btn-default rounded fw-bold" type="button" style={{ color: 'white', backgroundColor: '#FC819E', marginRight: '20px' }}>
                    {username}
                  </button>
                </Link>
              </>
            ) : (
              <>
                <a className="nav-link" href="/Login" style={{ marginRight: '10px' }}>Sign in</a>
                <Link to="/Register">
                  <button className="btn btb-default rounded fw-bold" type="submit" style={{ color: 'white', backgroundColor: '#FC819E', marginRight: '20px' }}>
                    Sign up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}