import React from 'react';
import '../background.scss';

export default function Register() {
  return (
    <div className='app-container'>
      <div className="card w-20 text-center" style={{ 
          backgroundColor: "#FFF3C7", 
          height: '45rem',  // 카드 높이를 약간 늘림
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
            회원가입
          </h5>
          
          <div className="mb-3 w-75">
            <label htmlFor="username" className="form-label"></label>
            <input type="text" className="form-control" style={{ height:'5rem', borderRadius: '15px', fontSize: '20px' }} id="username" placeholder="아이디를 입력하세요." />
          </div>

          <div className="mb-3 w-75">
            <label htmlFor="password" className="form-label"></label>
            <input type="password" className="form-control" style={{ height:'5rem', borderRadius: '15px', fontSize: '20px' }} id="password" placeholder="비밀번호를 입력하세요." />
          </div>

          <div className="mb-3 w-75">
            <label htmlFor="confirmPassword" className="form-label"></label>
            <input type="password" className="form-control" style={{ height:'5rem', borderRadius: '15px', fontSize: '20px' }} id="confirmPassword" placeholder="비밀번호를 확인하세요." />
          </div>

          <div className="mb-3 w-75">
            <label htmlFor="email" className="form-label"></label>
            <input type="email" className="form-control" style={{ height:'5rem', borderRadius: '15px', fontSize: '20px' }} id="email" placeholder="이메일을 입력하세요." />
          </div>

          <a href="/Home" className="btn btn-primary fw-bold mb-3 w-75 d-flex align-items-center justify-content-center" style={{ 
              color: 'white', 
              fontSize: '20px',
              backgroundColor: '#FC819E',
              marginTop: '30px',
              border: '#FC819E'
            }}>
            회원가입 하기
          </a>
        </div>
      </div>
    </div>
  );
}