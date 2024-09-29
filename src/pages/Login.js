import React, { useState } from 'react';
import '../background.scss';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();

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
        setCookie("token", result.token);
        setCookie("memberId", result.id);

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

  const handleFindPassword = async() => {}

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
              marginBottom: '20px'
            }}>
            로그인
          </h5>
          
          <form action={handleLogin} method='POST'>
          <div className="mb-3">
            <label htmlFor="username" className="form-label"></label>
            <input type="text" className="form-control" style={{height:'4rem', borderRadius: '10px', fontSize: '15px' }} id="username" placeholder="아이디를 입력하세요."
            value={username} onChange={(e) => setUserName(e.target.value)} />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label"></label>
            <input type="password" className="form-control" style={{height:'4rem', borderRadius: '10px', fontSize: '15px' }} id="password" placeholder="비밀번호를 입력하세요."
            value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button type='submit' href="/Home" className="btn btn-primary fw-bold mb-3  d-flex  align-items-center justify-content-center" style={{ 
              color: 'white', 
              fontSize: '18px',
              backgroundColor: '#FC819E', 
              width: '20rem',
              height: '3.5rem',
              marginTop: '50px',
              border: '#FC819E'
            }}
            onClick={handleLogin}>
            로그인하기
          </button>
          </form>

          <p>
            <a className="nav-link fw-bold" style={{ cursor: 'pointer' }} onClick={handleFindPassword}>비밀번호 찾기</a>
          </p>
        </div>
      </div>
    </div>
  );
}
