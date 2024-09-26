import React, { useState } from 'react';
import '../background.scss';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ENDPOINTS } from '../components/Api';
// import { setItem } from '../components/LocalStorageUtils';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
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

    // try {
    //   const response = await axios.post(ENDPOINTS.LOGIN, {
    //     username,
    //     password
    //   });
    //   if (response.data && response.data.token) {
    //     // 이 부분은 localstorage에 jwtToken을 저장하는 부분입니다.
    //     // localstorage에 임시로 저장하는 형태로 가져왔으나
    //     // 해당 부분은 논의가 필요할꺼 같아 주석을 남겨둡니다.
    //     // key는 jwtToken 입니다.
    //     const { token } = response.data;
    //     console.log(token);
    //     setItem("jwtToken", token);
    //     setItem("username", username);

    //     Swal.fire({
    //       title: "로그인 성공!",
    //       icon: "success",
    //       confirmButtonColor: '#F7418F',
    //       background: 'white'
    //     }).then(() => {
    //       navigate('/'); 
    //     });
    //   } else {
    //     // 토큰이 없을 경우
    //     Swal.fire({
    //       title: "로그인 실패: 유효하지 않은 응답입니다.",
    //       icon: "error",
    //       confirmButtonColor: '#F7418F',
    //       background: 'white'
    //     });
    //   }
    // } catch (error) {
    //   const errorMessage = error.response?.data?.message || "서버 오류입니다.";
    //   Swal.fire({
    //     title: "로그인 실패: " + errorMessage,
    //     icon: "error",
    //     confirmButtonColor: '#F7418F',
    //     background: 'white'
    //   });
    // }
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