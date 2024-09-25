import React, { useState } from 'react';
import '../background.scss';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if(!username || !password ) {
      Swal.fire({
        title: "모든 필드를 입력해주세요.",
        icon: "warning",
        confirmButtonColor: '#F7418F', // 버튼 색상 변경
        background: 'white' // 알림창 배경색 변경
      });
      return;
    }

      Swal.fire({
        title: "로그인 성공!",
        icon: "success",
        confirmButtonColor: '#F7418F', // 버튼 색상 변경
        background: 'white' // 알림창 배경색 변경
      }).then(() => {
        navigate('/');  // 홈 페이지로 리다이렉트
      });
  }


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
            value={username} onChange={(e) => setUsername(e.target.value)} />
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