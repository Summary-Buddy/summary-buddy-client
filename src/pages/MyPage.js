
// import React from 'react';
// import { Container, Form, Button } from 'react-bootstrap';

// export default function MyPage() {
//   return (
//     <div className="mt-5 d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
//       {/* 비밀번호 변경 섹션 */}
//       <Container className="mb-4" style={{ maxWidth: '400px', marginRight: '20px' }}>
//         <h2 className="text-left" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>비밀번호 변경</h2>
//         <Form className="password-form mt-4">

//           <Form.Group controlId="formNewPassword" className="mb-3">
//             <Form.Control 
//               type="password" 
//               placeholder="새로운 비밀번호" 
//               required 
//             />
//           </Form.Group>

//           <Form.Group controlId="formConfirmPassword" className="mb-3">
//             <Form.Control 
//               type="password" 
//               placeholder="새로운 비밀번호 다시 입력" 
//               required 
//             />
//           </Form.Group>

//           <Button 
//             variant="primary" 
//             type="submit" 
//             className="w-100" 
//             style={{ 
//               color: 'white', 
//               backgroundColor: '#FC819E', 
//               borderColor: '#FC819E', 
//               fontWeight: 'bold'
//             }}
//           >
//             비밀번호 변경하기
//           </Button>
//         </Form>
//       </Container>

//       {/* 이메일 변경 섹션 */}
//       <Container className="mb-4" style={{ maxWidth: '400px', marginLeft: '20px' }}>
//         <h2 className="text-left" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>이메일 변경</h2>
//         <Form className="email-form mt-4">

//           <Form.Group controlId="formNewEmail" className="mb-3">
//             <Form.Control 
//               type="email" 
//               placeholder="새로운 이메일" 
//               required 
//             />
//           </Form.Group>

//           <Form.Group controlId="formConfirmEmail" className="mb-3">
//             <Form.Control 
//               type="email" 
//               placeholder="새로운 이메일 다시 입력" 
//               required 
//             />
//           </Form.Group>

//           <Button 
//             variant="primary" 
//             type="submit" 
//             className="w-100" 
//             style={{ 
//               color: 'white', 
//               backgroundColor: '#FC819E', 
//               borderColor: '#FC819E', 
//               fontWeight: 'bold' 
//             }}
//           >
//             이메일 변경하기
//           </Button>
//         </Form>
//       </Container>
//     </div>
//   );
// }
import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

export default function MyPage() {
  return (
    <div className="mt-5 d-flex flex-column align-items-center" style={{ height: '100vh' }}>
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
              fontWeight: 'bold',
              height: 'calc(2.25rem + 2px)' // 부트스트랩의 기본 버튼 높이와 일치하도록 조정
            }}
          >
            비밀번호 변경하기
          </Button>
        </Form>
      </Container>

      {/* 이메일 변경 섹션 */}
      <Container className="mb-4" style={{ maxWidth: '400px', marginRight: '-40px' }}>
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
              style={{ visibility: 'hidden', height: 'calc(2.25rem + 2px)' }} // 보이지 않게 하면서 공간 차지
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
              fontWeight: 'bold',
              height: 'calc(2.25rem + 2px)' // 부트스트랩의 기본 버튼 높이와 일치하도록 조정
            }}
          >
            이메일 변경하기
          </Button>
        </Form>
      </Container>
    </div>

    </div>
  );
}
