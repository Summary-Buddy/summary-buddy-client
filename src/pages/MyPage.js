// import './MyPage.css';
// import './background.scss';
// import React from 'react';
// import { Form, Button, Container } from 'react-bootstrap';



// export default function MyPage() {
//   return (
//     <Container className="mt-5">
//       <h2 className="text-center">비밀번호 변경</h2>
//       <Form className="password-form mt-4" style={{ maxWidth: '500px', margin: '0 auto' }}>

//         <Form.Group controlId="formNewPassword" className="mb-3">
//           <Form.Control 
//             type="password" 
//             placeholder="새로운 비밀번호" 
//             required 
//           />
//         </Form.Group>

//         <Form.Group controlId="formConfirmPassword" className="mb-3">
//           <Form.Control 
//             type="password" 
//             placeholder="새로운 비밀번호 다시 입력" 
//             required 
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit" className="w-100">
//           비밀번호 변경하기
//         </Button>
//       </Form>
//     </Container>
//   );
// }
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function MyPage() {
  return (
    <div className="mt-5 d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      {/* 비밀번호 변경 섹션 */}
      <Container className="mb-4" style={{ maxWidth: '400px', marginRight: '20px' }}>
        <h2 className="text-left" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>비밀번호 변경</h2>
        <Form className="password-form mt-4">

          <Form.Group controlId="formNewPassword" className="mb-3">
            <Form.Control 
              type="password" 
              placeholder="새로운 비밀번호" 
              required 
            />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword" className="mb-3">
            <Form.Control 
              type="password" 
              placeholder="새로운 비밀번호 다시 입력" 
              required 
            />
          </Form.Group>

          <Button 
            variant="primary" 
            type="submit" 
            className="w-100" 
            style={{ 
              color: 'white', 
              backgroundColor: '#FC819E', 
              borderColor: '#FC819E', 
              fontWeight: 'bold'
            }}
          >
            비밀번호 변경하기
          </Button>
        </Form>
      </Container>

      {/* 이메일 변경 섹션 */}
      <Container className="mb-4" style={{ maxWidth: '400px', marginLeft: '20px' }}>
        <h2 className="text-left" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>이메일 변경</h2>
        <Form className="email-form mt-4">

          <Form.Group controlId="formNewEmail" className="mb-3">
            <Form.Control 
              type="email" 
              placeholder="새로운 이메일" 
              required 
            />
          </Form.Group>

          <Form.Group controlId="formConfirmEmail" className="mb-3">
            <Form.Control 
              type="email" 
              placeholder="새로운 이메일 다시 입력" 
              required 
            />
          </Form.Group>

          <Button 
            variant="primary" 
            type="submit" 
            className="w-100" 
            style={{ 
              color: 'white', 
              backgroundColor: '#FC819E', 
              borderColor: '#FC819E', 
              fontWeight: 'bold' 
            }}
          >
            이메일 변경하기
          </Button>
        </Form>
      </Container>
    </div>
  );
}
