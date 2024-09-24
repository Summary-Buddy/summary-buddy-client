import React from 'react';
import '../background.scss';

export default function Login() {
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
            <input type="text" className="form-control" style={{height:'5rem', borderRadius: '15px', fontSize: '20px' }} id="username" placeholder="아이디를 입력하세요." />
          </div>

          <div className="mb-3 w-75">
            <label htmlFor="password" className="form-label"></label>
            <input type="password" className="form-control" style={{height:'5rem', borderRadius: '15px', fontSize: '20px' }} id="password" placeholder="비밀번호를 입력하세요." />
          </div>

          <a href="/Home" className="btn btn-primary fw-bold mb-3  d-flex  align-items-center justify-content-center" style={{ 
              color: 'white', 
              fontSize: '20px',
              backgroundColor: '#FC819E', 
              width: '20rem',
              height: '4rem',
              marginTop: '50px',
              border: '#FC819E'
            }}>
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