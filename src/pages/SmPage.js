import '../background.scss';
import './SmPage.css';
import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import { FaFilePdf } from "react-icons/fa6";

export default function SmPage() {
    const [selectedMeeting, setSelectedMeeting] = useState(null); // 선택된 회의록을 저장하는 상태

    const meetingMinutes = [
        {
          title: '회의록 1',
          content: '여기는 첫 번째 회의 내용입니다. 중요한 논의가 진행되었습니다. 바로 오늘의 점심 메뉴는 무엇인가 인데요...',
        },
        {
          title: '회의록 2',
          content: '두 번째 회의에서는 여러 안건들이 논의되었습니다. 주된 주제는 저번 회의 내용을 이은 점심 메뉴 카테고리 정하기였는데요...',
        },
        {
          title: '회의록 3',
          content: '세 번째 회의는 팀 빌딩과 관련된 논의가 있었고, 먹고싶은 카테고리로 팀을 정하기로 했습니다...',
        },
        {
          title: '회의록 4',
          content: '네 번째 회의는 뭘까요? 이제 뭐라고 써야할 지 모르겠습니다...',
        },
        {
          title: '회의록 5',
          content: '다섯 번째 회의는 집인데 집에 가고 싶다 입니다...',
        },
        {
          title: '회의록 6',
          content: '여섯 번째 회의는 사실 이거 그냥 다 테스트용으로 적고 있는거 아세요? 물론 아시겠죠...',
        },
        {
          title: '회의록 7',
          content: '일곱 번째 회의는 더 이상 회의록 테스트를 하지 않아도 돼서 기쁘다 입니다...',
        },
    ];

    // PDF 파일 다운로드
    const handleDownloadPDF = () => {
      if (!selectedMeeting) return;

      const blob = new Blob([selectedMeeting.content], { type: 'application/pdf' });
      saveAs(blob, `${selectedMeeting.title}.pdf`);
  };

    return (
        <div className='app-container'>
            <div className="Summary">
                <h1 style={{
                    textAlign: 'left',
                    color: '#F7418F', // 핑크색
                    fontWeight: 'bold', // 볼드체
                    position: 'absolute',
                    top: '10%',
                    left: '5%',
                }}>회의록 목록</h1>

                {/* 왼쪽 회의록 리스트 */}
                <div className="custom-scrollbar" style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.4)', // 흰색에 40% 투명도
                    borderRadius: '15px',
                    position: 'absolute',
                    top: '60%',
                    left: '33%',
                    transform: 'translate(-50%, -50%)',
                    width: '40rem', // 고정 너비
                    height: '45rem', // 고정 높이
                    margin: '0 auto', // 중앙 정렬
                    padding: '30px',
                    overflowY: 'auto', // 수직 스크롤 가능
                }}>
                    {/* 회의록 목록을 데이터 배열을 통해 생성 */}
                    {meetingMinutes.map((meeting, index) => (
                        <div key={index} style={{
                            backgroundColor: 'rgba(255, 182, 193, 0.6)', // 핑크색 배경
                            borderRadius: '10px',
                            padding: '15px',
                            marginBottom: '20px', // 박스 간 간격
                            cursor: 'pointer' // 클릭할 수 있게 커서 변경
                        }}
                        onClick={() => setSelectedMeeting(meeting)} // 클릭 시 해당 회의록을 선택
                        >
                            <h5 style={{ margin: '0' }}>{meeting.title}</h5> {/* 회의 제목 */}

                            <p style={{
                                margin: '0',
                                fontSize: '0.9rem',
                                overflow: 'hidden', // 넘치는 내용 숨기기
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 2, // 2줄로 제한
                                color: 'gray',
                                marginTop: '5px'
                            }}>
                                {meeting.content} {/* 회의 내용 */}
                            </p>
                        </div>
                    ))}
                </div>

                {/* 오른쪽 선택된 회의록의 상세 내용 표시 */}
                <div className="custom-scrollbar" style={{
                    position: 'absolute',
                    top: '60%',
                    left: '68%', // 오른쪽에 위치
                    transform: 'translate(-50%, -50%)',
                    width: '40rem',
                    height: '45rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.4)',
                    borderRadius: '15px',
                    padding: '20px',
                    overflowY: 'auto',
                    textAlign: 'left'
                }}>
                    {selectedMeeting ? (
                        <>
                            <h5 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{selectedMeeting.title}</h5>
                            <p style={{ fontWeight: 'normal', lineHeight:'1.5' }}>{selectedMeeting.content}</p>

                             {/* 다운로드 PDF 버튼을 아이콘과 텍스트 링크로 변경 */}
                             <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginTop: '0px',
                                position: 'absolute',  // 버튼을 절대 위치로 배치
                                bottom: '20px',  // 하단에서 20px 띄우기
                                right: '20px'  // 오른쪽에서 20px 띄우기
                            }}>
                                <FaFilePdf />
                                <a href="#" onClick={handleDownloadPDF} style={{
                                    fontSize: '1rem',
                                    color: '#007bff',
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                    fontWeight: 'bold'
                                }}>
                                    {`${selectedMeeting.title}.pdf`}
                                </a>
                            </div>
                        </>
                    ) : (
                        <p>회의록을 선택하세요</p> // 선택된 회의록이 없을 때 표시되는 메시지
                    )}
                </div>
            </div>
        </div>
    );
}
