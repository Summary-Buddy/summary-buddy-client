import '../background.scss';
import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './RecordPage.css';
import { client } from '../utils/client';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const RecordPage = () => {
  // 상태 관리
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [selectedMemberUsernames, setSelectedMemberUsernames] = useState([]); // 클릭된 회원들을 배열로 저장
  const [isRecording, setIsRecording] = useState(false); // 녹음 상태 관리


  const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("jwtToken");
      if (token == null) {
        navigate('/Login');
      }
    }, []);
  // 검색어 입력 처리 함수
  const handleSearchChange = (event) => {
    const value = event.target.value;
    searchMember(value);
    setSearchTerm(value);
  };

  // 회원 카드 클릭 처리 함수 (플러스 아이콘과 통합)
  const handleMemberClick = (member) => {
    if (member && !selectedMemberUsernames.includes(member)) {
      setSelectedMemberUsernames((prevSelected) => [...prevSelected, member.username]); // 이전 상태를 기반으로 업데이트
    }
  };

  // 회원 카드 삭제 처리 함수
  const handleRemoveMember = (member) => {
    setSelectedMemberUsernames((prevSelected) => prevSelected.filter((m) => m !== member)); // 선택된 회원 제거
  };

  // 음성 녹음 저장 처리 함수
  const handleSaveRecording = () => {
    alert('회의 내용을 저장합니다.');
    // 파일 저장 로직 추가 가능
  };

  // 녹음 시작/중지 처리 함수
  const handleRecordingToggle = () => {
    setIsRecording((prevIsRecording) => !prevIsRecording); // 함수형 업데이트
    if (!isRecording) {
      console.log('녹음 시작');
      alert('녹음을 시작합니다.');
    } else {
      console.log('녹음 중지');
      alert('녹음을 중지합니다.');
    }
  };

  const searchMember = async(query) => {
    const res = await client.get(`/member/search?query=${query}`, {
      headers: {
        Authorization: process.env.REACT_APP_TEMP_AUTH_HEADER // 로그인 구현되면 수정 필요
      }
    });
    setFilteredMembers(res);
  }


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
              style={{ borderRadius: '10px', width: 'calc(100% - 40px)', marginRight: '10px', border: 'none' }} // 아이콘 자리만큼 줄이기
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
                        {member.username}
                      </Card.Text>
                      {/* 추가된 회원이 아닌 경우에만 플러스 아이콘 표시 */}
                      {!selectedMemberUsernames.includes(member.username) && (
                        <i className="bi bi-plus-circle" 
                          onClick={(e) => {
                            e.stopPropagation(); // 부모 요소의 클릭 이벤트 중지
                            handleMemberClick(member);
                          }}
                          style={{ fontSize: '1.5rem', cursor: 'pointer', position: 'absolute', right: '-45px', top: '50%', transform: 'translateY(-50%)' }}>
                        </i>
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
        {selectedMemberUsernames.length > 0 && (
          <>
            {selectedMemberUsernames.map((username, index) => (
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
                        handleRemoveMember(username);
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
                      {username}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </>
        )}
      </Container>

      {/* 녹음 버튼 */}
      <div style={{
        position: 'absolute',
        bottom: '450px',
        left: '23%',
        transform: 'translateX(-50%)',
        backgroundColor: isRecording ? '#FC819E' : '#FCD9E6', // 녹음 중일 때 색상 변경
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 2
      }}
        onClick={handleRecordingToggle}
      >
        <i className={`bi ${isRecording ? 'bi-mic' : 'bi-mic-mute'}`} style={{ fontSize: '2rem', color: 'white' }}></i>
      </div>
      
      {/* 애니메이션 버튼 */}
      {isRecording && (
        <div
          style={{
            position: 'absolute',
            bottom: '435px',
            left: '18.1%',
            transform: 'translateX(-50%)',
            width: '130px',
            height: '130px',
            backgroundColor: 'rgba(192, 192, 192, 0.3)', // 더 연한 회색
            borderRadius: '50%',
            zIndex: 1, // 녹음 버튼보다 뒤에 위치
            animation: 'pulse-animation 1.5s infinite', // 애니메이션 이름 변경
          }}
        ></div>
      )}


      {/* 저장 버튼 */}
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

      {/* 녹음 상태 문구 */}
      <div style={{
          position: 'absolute',
          bottom: '650px',
          left: '23%',
          transform: 'translateX(-50%)',
          fontSize: '1.5rem', // 글씨 크기 조정
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'black'
        }}>
          {isRecording ? '녹음 중입니다' : '회의 녹음을 시작하세요'}
        </div>
      
    </Container>
  );
};

export default RecordPage;
