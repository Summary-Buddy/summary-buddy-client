import React, { useState } from 'react';
import '../background.scss';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { client } from '../utils/client';

export default function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if(!username || !password ) {
      Swal.fire({
        title: "모든 필드를 입력해주세요.",
        icon: "warning",
        confirmButtonColor: '#F7418F',
        background: 'white'
      });
      return;
    };

    try {
      const res = await fetch(process.env.REACT_APP_SERVER_URL + `/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({username: username, password: password})
      });
      
      if (res.ok) {
        const result = await res.json();
        localStorage.setItem("jwtToken", result.token);
        localStorage.setItem("userId", result.id);

        Swal.fire({
          title: "로그인 성공!",
          icon: "success",
          confirmButtonColor: '#F7418F',
          background: 'white'
        }).then(() => {
          navigate('/');
        });
      }
    } catch (error) {
      Swal.fire({
        title: "로그인 실패!",
        text: "아이디 또는 비밀번호를 확인하세요.",
        icon: "error",
        confirmButtonColor: '#F7418F',
        background: 'white'
      });
    }
  };

  return (
    <div className='app-container'>
      <div className="card w-20 text-center" style={{ 
          backgroundColor: "#FFF3C7", 
          height: '40rem',
          width: '35rem', 
          border: '2px solid #FC819E', 
          borderRadius: '15px' 
        }}>
        <div className="card-body d-flex flex-column align-items-center justify-content-center" style={{ height: '100%' }}>
          <h5 className="card-title fw-bold" style={{ 
              color: "#FC819E", 
              fontSize: '30px', 
              margin: '50px 0 30px' 
            }}>
            로그인
          </h5>
          
          <div className="mb-3 w-75">
            <label htmlFor="username" className="form-label"></label>
            <input type="text" className="form-control" style={{height:'5rem', borderRadius: '15px', fontSize: '20px' }} id="username" placeholder="아이디를 입력하세요."
            value={username} onChange={(e) => setUserName(e.target.value)} />
          </div>

          <div className="mb-3 w-75">
            <label htmlFor="password" className="form-label"></label>
            <input type="password" className="form-control" style={{height:'5rem', borderRadius: '15px', fontSize: '20px' }} id="password" placeholder="비밀번호를 입력하세요."
            value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <a href="/Home" className="btn btn-primary fw-bold mb-3  d-flex  align-items-center justify-content-center" style={{ 
              color: 'white', 
              fontSize: '20px',
              backgroundColor: '#FC819E', 
              width: '20rem',
              height: '4rem',
              marginTop: '50px',
              border: '#FC819E'
            }}
            onClick={handleLogin}>
            로그인하기
          </a>

          <p>
            <a className="nav-link fw-bold" href="/MyPage">비밀번호 찾기</a>
          </p>
        </div>
      </div>
    </div>
  );
}
