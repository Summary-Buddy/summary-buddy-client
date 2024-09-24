import '../background.scss';
import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';


const RecordPage = () => {
  // 회원 데이터 (예시 데이터)
  const members = [
    '김철수',
    '박영희',
    '이민호',
    '홍길동',
    '강수진',
    '최준호',
    '김지수',
    '이수민',
    '한가영',
    '윤종훈'
  ];

  // 검색 상태와 클릭한 회원 상태
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]); // 클릭된 회원들을 배열로 저장

  // 입력 변화 처리 함수
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // 입력된 검색어에 따라 필터링
    if (value === '') {
      setFilteredMembers([]); // 검색어가 없으면 필터링 결과를 빈 배열로 설정
    } else {
      const filtered = members.filter((member) =>
        member.includes(value) // 회원 이름에 검색어가 포함된 경우
      );
      setFilteredMembers(filtered);
    }
  };

  // 회원 카드 클릭 처리 함수
  const handleMemberClick = (member) => {
    // 이미 선택된 회원이 아니면 추가
    if (!selectedMembers.includes(member)) {
      setSelectedMembers([...selectedMembers, member]);
    }
  };

  // 회원 카드 삭제 처리 함수
  const handleRemoveMember = (member) => {
    setSelectedMembers(selectedMembers.filter((m) => m !== member));
  };

  // 플러스 아이콘 클릭 처리 함수
  const handleAddSelectedMember = (member) => {
    // 선택된 회원이 아니면 추가
    if (member && !selectedMembers.includes(member)) {
      setSelectedMembers([...selectedMembers, member]);
    }
  };

  // 음성녹음 저장 처리 함수
  const handleSaveRecording = () => {
    // 여기에 녹음 파일 저장하는 로직을 추가합니다.
    // 예를 들어, 파일 선택 창을 열거나 서버로 파일을 전송하는 기능을 추가할 수 있습니다.
    alert('회의 내용을 저장합니다.');
  };

  return (
    <Container className="mt-4" style={{ position: 'relative', height: '100vh' }}>
      {/* 핑크색 네모 컨테이너 */}
      <div className="card" style={{ 
          backgroundColor: "#FFF3C7", 
          border: '2px solid #FC819E', 
          borderRadius: '15px', 
          position: 'absolute', 
          top: '50%', 
          left: '100%', 
          transform: 'translate(-100%, -50%)', 
          width: '30rem', // 고정 너비
          height: '40rem', // 고정 높이
          margin: '0 auto', // 중앙 정렬
          padding: '20px',
          overflowY: 'auto', // 수직 스크롤 가능
        }}>
        <div className="card-body d-flex flex-column">

          {/* 검색 입력창 */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Form.Control
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="참가자를 추가하세요."
              className="mb-3"
              style={{ borderRadius: '15px', width: 'calc(100% - 40px)', marginRight: '10px' }} // 아이콘 자리만큼 줄이기
            />
            <i className="bi bi-search" style={{ fontSize: '1.5rem', marginTop: '-15px' }}></i> {/* marginTop 추가 */}
          </div>

          {/* 검색 결과 */}
          <div className="flex-grow-1"> {/* 공간을 채우도록 설정 */}
            {searchTerm && filteredMembers.length > 0 ? (
              <div style={{ width: '100%' }}> {/* 가로폭을 100%로 설정 */}
                {filteredMembers.map((member, index) => (
                  <Card
                  key={index}
                  onClick={() => handleMemberClick(member)}
                  style={{
                    cursor: 'pointer',
                    marginBottom: '10px',
                    width: 'calc(100% - 50px)', // 아이콘 자리만큼 더 줄이기
                    backgroundColor: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '10px',
                    position: 'relative', // 상대 위치로 설정
                  }}
                >
                  <Card.Body style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Card.Text className="fw-bold" style={{ margin: 0, flex: '1', textAlign: 'center' }}>
                      {member}
                    </Card.Text>
                    {/* 추가된 회원이 아닌 경우에만 플러스 아이콘 표시 */}
                    {!selectedMembers.includes(member) && (
                        <i className="bi bi-plus-circle" 
                           onClick={() => handleAddSelectedMember(member)} 
                           style={{ fontSize: '1.5rem', cursor: 'pointer', position: 'absolute', right: '-45px', top: '50%', transform: 'translateY(-50%)' }}></i>
                      )}
                  </Card.Body>
                </Card>
                ))}
              </div>
            ) : (
              searchTerm && (
                <Card style={{ 
                  width: '100%', 
                  marginBottom: '10px', 
                  backgroundColor: 'white', // 배경색을 하얀색으로 설정
                  border: 'none', // 테두리 제거
                  borderRadius: '10px', // 모서리를 둥글게
                  padding: '10px', // 내부 여백을 줄임
                }}>
                  <Card.Body>
                    <Card.Text className="text-center fw-bold">
                      일치하는 회원이 없습니다.
                    </Card.Text>
                  </Card.Body>
                </Card>
              )
            )}
          </div>
        </div>
      </div>

      {/* 클릭된 회원 카드 하단에 표시 */}
      <Container style={{ 
          marginTop: '10px', // 카드와의 간격 조정
          left: '0', // 왼쪽 정렬
          width: '50%', // 전체 너비
          position: 'absolute', // 고정 위치
          bottom: '170px', // 하단에서 20px 위에 위치
          display: 'flex', 
          flexWrap: 'wrap', // 여러 줄로 나열할 수 있도록 설정
          justifyContent: 'flex-start', // 카드들을 왼쪽 정렬
          padding: '0 10px', // 좌우 패딩 추가
      }}>
        {selectedMembers.length > 0 && (
          <>
            {selectedMembers.map((member, index) => (
              <div key={index} style={{ 
                  margin: '10px 0 5px',
                  marginLeft: '5px',
                  flex: '0 0 calc(20% - 10px)', // 한 줄에 카드 5개 (각 카드 20% 크기)
                  boxSizing: 'border-box' // 패딩, 마진 포함해서 크기 계산
              }}> 
                <Card style={{ 
                    backgroundColor: '#FC819E', // 핑크색 배경으로 설정
                    border: 'none', // 테두리 제거
                    borderRadius: '10px', // 모서리를 둥글게
                    padding: '5px', // 내부 여백 설정
                    display: 'inline-block', // 카드가 내용에 맞춰 크기 조정
                  }}>
                  <Card.Body className="position-relative">
                    <Button
                      variant="link" // 링크 스타일로 설정
                      onClick={(e) => {
                        e.stopPropagation(); // 클릭 이벤트 전파 방지
                        handleRemoveMember(member);
                      }}
                      style={{
                        position: 'absolute',
                        top: '5px',
                        right: '5px',
                        padding: '0', // 패딩 제거
                        border: 'none', // 테두리 제거
                        background: 'none', // 배경 제거
                        color: 'white', // 색상을 하얀색으로 설정
                        fontSize: '1.2rem', // 크기 조정
                        lineHeight: '1rem',
                        textDecoration: 'none', // 밑줄 제거
                        pointerEvents: 'auto', // 클릭 가능하게 설정
                      }}
                    >
                      x
                    </Button>
                    <Card.Text 
                      className="text-center fw-bold" 
                      style={{ 
                        color: 'white',
                        whiteSpace: 'nowrap', // 텍스트를 한 줄로 제한
                      }}
                    >
                      {member}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </>
        )}
      </Container>
      {/* 새로 추가한 버튼 */}
      <Button 
        onClick={handleSaveRecording} // 버튼을 클릭하면 실행되는 함수
        style={{
          position: 'absolute',
          bottom: '70px', // 하단에서 50px 위
          left: '23%', // 화면 왼쪽 중앙
          transform: 'translateX(-50%)', // 중앙 정렬
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // 불투명한 하얀색
          color: '#333', // 텍스트 색상
          borderRadius: '10px', // 둥근 모서리
          padding: '15px 100px', // 버튼 내부 패딩
          border: 'none', // 테두리 제거
          fontSize: '1rem', // 폰트 크기
          fontWeight: 'bold', // 글씨체 볼드체
          cursor: 'pointer', // 마우스를 올렸을 때 포인터 모양
        }}
      >
        회의 저장하고 회의록 요약하기
      </Button>
    </Container>
  );
};

export default RecordPage;
