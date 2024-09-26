import React, {useState} from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './MyPage.css';
import '../background.scss';
import Swal from 'sweetalert2';
import axios from 'axios';
import { ENDPOINTS } from '../components/Api';
import { getItem } from '../components/LocalStorageUtils';

export default function MyPage() {
  
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [newEmail, setNewEmail] = useState('');
  
    // 비밀번호 변경 핸들러
    const handlePasswordSubmit = async (event) => {
      event.preventDefault(); // 기본 제출 동작 방지
      setErrorMessage(''); // 오류 메시지 초기화

      // 비밀번호가 비어 있는지 확인
      if (!newPassword || !confirmPassword) {
        Swal.fire({
          title: "모든 필드를 입력해주세요.",
          icon: "warning",
          confirmButtonColor: '#F7418F', // 버튼 색상 변경
          background: 'white' // 알림창 배경색 변경
        });
        return;
      }
         // 비밀번호 일치 확인
        if (newPassword !== confirmPassword) {
          Swal.fire({
            title: "비밀번호가 일치하지 않습니다.",
            icon: "warning",
            confirmButtonColor: '#F7418F', // 버튼 색상 변경
            background: 'white' // 알림창 배경색 변경
          });
          return;
        } 
  
     const jwtToken = getItem('jwtToken');

      try {
        const response = await axios.patch(ENDPOINTS.UPDATE, {
          userid: getItem("userid"),
          newPassword,
          newPasswordConfirm : confirmPassword
        }, {
          headers: {
            Authorization: `${jwtToken}`
          }
        });
        if (response.data.success) { // 성공 여부 확인
          Swal.fire({
            title: "비밀번호 변경 성공!",
            icon: "success",
            confirmButtonColor: '#F7418F', // 버튼 색상 변경
            background: 'white' // 알림창 배경색 변경
          });
          // 상태 초기화
          setNewPassword('');
          setConfirmPassword('');
        } else {
          // 실패 시 메시지 표시
          Swal.fire({
            title: "비밀번호 변경 실패: " + response.data.message,
            icon: "error",
            confirmButtonColor: '#F7418F',
            background: 'white'
          });
        }
      } catch (error) {
        Swal.fire({
          title: "서버 오류입니다.",
          icon: "error",
          confirmButtonColor: '#F7418F',
          background: 'white'
        });
      }
    };
  
    // 이메일 변경 핸들러
    const handleEmailSubmit = async (event) => {
      event.preventDefault(); // 기본 폼 제출 동작 방지
  
      // 이메일 유효성 검사 (예시로 간단한 정규 표현식 사용)
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!newEmail) {
        Swal.fire({
          title: "모든 필드를 입력해주세요.",
          icon: "warning",
          confirmButtonColor: '#F7418F', // 버튼 색상 변경
          background: 'white' // 알림창 배경색 변경
        });
        return;
      }

      if (!emailPattern.test(newEmail)) {
        Swal.fire({
          title: "유효하지 않은 이메일 형식입니다.",
          icon: "warning",
          confirmButtonColor: '#F7418F',
          background: 'white'
        });
        return;
      }

      const jwtToken = getItem('jwtToken');

      try {
        const response = await axios.patch(ENDPOINTS.UPDATE, {
          userid: getItem("userid"),
          newEmail
        }, {
          headers: {
            Authorization: `${jwtToken}`
          }
        });
        if (response.data.success) { // 성공 여부 확인
          Swal.fire({
            title: "이메일 변경 성공!",
            icon: "success",
            confirmButtonColor: '#F7418F', // 버튼 색상 변경
            background: 'white' // 알림창 배경색 변경
          });
          setNewEmail(''); // 입력 필드 초기화
        } else {
          // 실패 시 메시지 표시
          Swal.fire({
            title: "이메일 변경 실패: " + response.data.message,
            icon: "error",
            confirmButtonColor: '#F7418F',
            background: 'white'
          });
        }
      } catch (error) {
        Swal.fire({
          title: "서버 오류입니다.",
          icon: "error",
          confirmButtonColor: '#F7418F',
          background: 'white'
        });
      }
    };

  return (
    <div className="mt-5 d-flex flex-column align-items-center" style={{ height: '100vh', backgroundColor: '#FFF3C7' }}>
      {/* 닉네임 및 이메일 표시 섹션 */}
      <Container className="mb-4" style={{ maxWidth: '800px', marginBottom: '40px', marginTop: '150px' }}>
        <Row className="mt-4">
          <Col>
            <Form.Group className="mb-3">
              <Form.Text style={{ fontWeight: 'bold', marginLeft: '10px', fontSize: '1.5rem', color: '#FC819E' }}>
                사용자닉네임
              </Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Text style={{ fontWeight: 'bold', marginLeft: '10px', fontSize: '1.1rem' }}>
                user@example.com
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
      </Container>

      <div className="d-flex justify-content-between" style={{ width: '800px', marginTop: '100px' }}>
      {/* 비밀번호 변경 섹션 */}
      <Container className="mb-4" style={{ maxWidth: '400px', marginLeft: '-40px' }}>
        <h2 className="text-left" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>비밀번호 변경</h2>
        <Form className="password-form mt-4" onSubmit={handlePasswordSubmit}>
          <Form.Group controlId="formNewPassword" className="mb-3">
            <Form.Control 
              type="password" 
              placeholder="새로운 비밀번호" 
              required
              value={newPassword} // 상태에 따라 값 설정
              onChange={(e) => setNewPassword(e.target.value)} // 상태 업데이트
              style={{ borderColor: 'white', borderWidth: '1px', borderStyle: 'solid', paddingTop: '10px', paddingBottom: '10px' }} 
            />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword" className="mb-3">
            <Form.Control 
              type="password" 
              placeholder="새로운 비밀번호 다시 입력" 
              required
              value={confirmPassword} // 상태에 따라 값 설정
              onChange={(e) => setConfirmPassword(e.target.value)} // 상태 업데이트
              style={{ borderColor: 'white', borderWidth: '1px', borderStyle: 'solid', paddingTop: '10px', paddingBottom: '10px' }} 
            />
          </Form.Group>

          {errorMessage && (
            <div className="text-danger mb-2">{errorMessage}</div> // 오류 메시지 표시
          )}

          <Button 
            variant="primary" 
            type="submit" 
            className="w-100" 
            style={{ 
              color: 'white', 
              backgroundColor: '#FC819E', 
              borderColor: '#FC819E',
              fontWeight: 'bold',
              height: 'calc(2.25rem + 2px)' // 부트스트랩의 기본 버튼 높이와 일치하도록 조정
            }}
            onClick={handlePasswordSubmit}
          >
            비밀번호 변경하기
          </Button>
        </Form>
      </Container>

      {/* 이메일 변경 섹션 */}
      <Container className="mb-4" style={{ maxWidth: '400px', marginRight: '-40px' }}>
        <h2 className="text-left" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>이메일 변경</h2>
        <Form className="email-form mt-4" onSubmit={handleEmailSubmit}>
          <Form.Group controlId="formNewEmail" className="mb-3">
            <Form.Control 
              type="email" 
              placeholder="새로운 이메일" 
              required
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              style={{ borderColor: 'white', borderWidth: '1px', borderStyle: 'solid', paddingTop: '10px', paddingBottom: '10px' }} // 테두리 설정
            />
          </Form.Group>

          <Form.Group controlId="formConfirmEmail" className="mb-3">
            <Form.Control 
              type="email" 
              placeholder="새로운 이메일 다시 입력" 
              style={{ visibility: 'hidden', paddingTop: '10px', paddingBottom: '10px' }} // 보이지 않게 하면서 공간 차지
            />
          </Form.Group>

          <Button 
            variant="primary" 
            type="submit" 
            className="w-100 hover-button" // 추가 클래스 
            style={{ 
              color: 'white', 
              backgroundColor: '#FC819E', 
              borderColor: '#FC819E',
              fontWeight: 'bold',
              height: 'calc(2.25rem + 2px)', // 부트스트랩의 기본 버튼 높이와 일치하도록 조정
            }}
            onClick={handleEmailSubmit}
          >
            이메일 변경하기
          </Button>
        </Form>
      </Container>
    </div>

    </div>
  );
}