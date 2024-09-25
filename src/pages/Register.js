import React, { useState } from 'react';
import '../background.scss';
import Swal from 'sweetalert2';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [chpassword, setChpassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if(!username || !password || !chpassword || !email) {
      Swal.fire({
        title: "모든 필드를 입력해주세요.",
        icon: "warning",
        confirmButtonColor: '#F7418F', // 버튼 색상 변경
        background: 'white' // 알림창 배경색 변경
      });
      return;
    }

    if(password !== chpassword) {
      Swal.fire({
        title: "비밀번호가 일치하지 않습니다.",
        icon: "warning",
        confirmButtonColor: '#F7418F', // 버튼 색상 변경
        background: 'white' // 알림창 배경색 변경
      });
      return;
    }

    Swal.fire({
      title: "회원가입 성공!",
      icon: "success",
      confirmButtonColor: '#F7418F', // 버튼 색상 변경
      background: 'white' // 알림창 배경색 변경
    });
  }

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
            <input type="text" className="form-control" style={{ height:'5rem', borderRadius: '15px', fontSize: '20px' }} id="username" placeholder="아이디를 입력하세요." 
            value={username} onChange={(e) => setUsername(e.target.value)}/>
          </div>

          <div className="mb-3 w-75">
            <label htmlFor="password" className="form-label"></label>
            <input type="password" className="form-control" style={{ height:'5rem', borderRadius: '15px', fontSize: '20px' }} id="password" placeholder="비밀번호를 입력하세요." 
            value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div className="mb-3 w-75">
            <label htmlFor="confirmPassword" className="form-label"></label>
            <input type="password" className="form-control" style={{ height:'5rem', borderRadius: '15px', fontSize: '20px' }} id="confirmPassword" placeholder="비밀번호를 확인하세요." 
            value={chpassword} onChange={(e) => setChpassword(e.target.value)}/>
          </div>

          <div className="mb-3 w-75">
            <label htmlFor="email" className="form-label"></label>
            <input type="email" className="form-control" style={{ height:'5rem', borderRadius: '15px', fontSize: '20px' }} id="email" placeholder="이메일을 입력하세요." 
            value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <a href="/Home" className="btn btn-primary fw-bold mb-3 w-75 d-flex align-items-center justify-content-center" style={{ 
              color: 'white', 
              fontSize: '20px',
              backgroundColor: '#FC819E',
              marginTop: '30px',
              border: '#FC819E'
            }}
            onClick={handleRegister}>
            회원가입 하기
          </a>
        </div>
      </div>
    </div>
  );
}
