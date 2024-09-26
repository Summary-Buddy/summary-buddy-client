import '../background.scss';
import './SmPage.css';
import React, { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import { FaFilePdf } from "react-icons/fa6";
import { client } from '../utils/client';
import { marked } from 'marked';

export default function SmPage() {
    const [selectedMeeting, setSelectedMeeting] = useState(null); // 선택된 회의록을 저장하는 상태
    const [meetingMinutes, setMeetingMinutes] = useState([]);

    // PDF 파일 다운로드
    const handleDownloadPDF = () => {
      if (!selectedMeeting) return;

      const blob = new Blob([selectedMeeting.content], { type: 'application/pdf' });
      saveAs(blob, `${selectedMeeting.title}.pdf`);
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  const fetchDocs = async() => {
    const res = await client.get('/report', {
        headers: {Authorization: process.env.REACT_APP_TEMP_AUTH_HEADER} // 로그인 구현되면 수정 필요
    });
    setMeetingMinutes(res);
    console.log(res);
  }

  const fetchDetail = async(reportId) => {
    const res = await client.get(`/report/${reportId}`, {
        headers: {Authorization: process.env.REACT_APP_TEMP_AUTH_HEADER} // 로그인 구현되면 수정 필요
    });
    setSelectedMeeting(res);
  }

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
            <div className="custom-scrollbar left">
                {meetingMinutes.map((meeting, index) => (
                    <div key={index} style={{
                        backgroundColor: 'rgba(255, 182, 193, 0.6)', // 핑크색 배경
                        borderRadius: '10px',
                        padding: '15px',
                        marginBottom: '20px', // 박스 간 간격
                        cursor: 'pointer' // 클릭할 수 있게 커서 변경
                    }}
                    onClick={() => fetchDetail(meeting.id)} // 클릭 시 해당 회의록을 선택
                    >
                        <h5 style={{ margin: '0' }}>{meeting.previewTitle}</h5> {/* 회의 제목 */}
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
                            {meeting.previewContent} {/* 회의 내용 */}
                        </p>
                    </div>
                ))}
            </div>

            {/* 오른쪽 선택된 회의록의 상세 내용 표시 */}
            <div className="custom-scrollbar right">
                {selectedMeeting ? (
                    <>
                        <h5 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{selectedMeeting.title}</h5>
                        <p
                            style={{ fontWeight: 'normal', lineHeight:'1.5', whiteSpace: 'pre-line' }}
                            dangerouslySetInnerHTML={{__html: marked.parse(selectedMeeting.content)}}
                        />

                         {/* 다운로드 PDF 버튼을 아이콘과 텍스트 링크로 변경 */}
                         <div className="download-btn">
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