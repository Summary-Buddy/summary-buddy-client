import '../background.scss';
import'./SmPage.css';
// import React, { useEffect, useState } from 'react';



export default function SmPage() {

    // 나중에 백엔드랑 합칠 때 참고할 코드 입니다.
    // const [meetingMinutes, setMeetingMinutes] = useState([]);

    // useEffect(() => {
    //     // 백엔드에서 회의록 데이터를 가져옴
    //     fetch('/get-meeting-minutes')
    //     .then((response) => response.json())
    //     .then((data) => setMeetingMinutes(data))
    //     .catch((error) => console.error('Error fetching meeting minutes:', error));
    // }, []);

    const meetingMinutes = [
        {
          title: '회의록 1',
          content: '여기는 첫 번째 회의 내용입니다. 중요한 논의가 진행되었습니다. 바로 오늘의 점심 메뉴는 무엇인가 인데요. 사람이 살아가는데 영양소 섭취는 매우 필수적인 만큼 중요한 내용이 되겠습니다.',
        },
        {
          title: '회의록 2',
          content: '두 번째 회의에서는 여러 안건들이 논의되었습니다. 주된 주제는 저번 회의 내용을 이은 점심 메뉴 카테고리 정하기였는데요. 한식은 물론이고 중식, 일식, 양식뿐만 아니라 쌀국수 등과 같은 음식들도 나왔습니다.',
        },
        {
          title: '회의록 3',
          content: '세 번째 회의는 팀 빌딩과 관련된 논의가 있었고, 먹고싶은 카테고리로 팀을 정하기로 했습니다.',
        },
        {
          title: '회의록 4',
          content: '네 번째 회의는 뭘까요? 이제 뭐라고 써야할 지 모르겠습니다.',
        },
        {
          title: '회의록 5',
          content: '다섯 번째 회의는 집인데 집에 가고 싶다 입니다. 어떻게 생각하시나요? 저는 매우 공감을 하는 상태입니다.',
        },
        {
          title: '회의록 6',
          content: '여섯 번째 회의는 사실 이거 그냥 다 테스트용으로 적고 있는거 아세요? 입니다. 물론 아시겠죠. 그래도 그냥 말해보고 싶었습니다.',
        },
        {
          title: '회의록 7',
          content: '일곱 번째 회의는 더 이상 회의록 테스트를 하지 않아도 돼서 기쁘다 입니다. 제 머리로는 이게 한계거든요. 프로젝트가 무사히 잘 마무리 됐으면 좋겠습니다.',
        },
      ];


  return (
    <div className='app-container'>
        <div className="Summary">             
            <h1 style={{
            textAlign: 'left',
            color: '#FC819E', // 핑크색
            fontWeight: 'bold', // 볼드체
            position: 'absolute',
            top: '15%', // 원하는 위치에 맞게 조정
            left: '7%', // 왼쪽으로 조정
            }}>회의록 목록</h1>

            {/* 흰색 배경 박스 */}
            <div className="custom-scrollbar" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.4)', // 흰색에 40% 투명도
            borderRadius: '15px',
            position: 'absolute',
            top: '65%', // 위에서 떨어진 위치 조정
            left: '30%',
            transform: 'translate(-50%, -50%)',
            width: '30rem', // 고정 너비
            height: '40rem', // 고정 높이
            margin: '0 auto', // 중앙 정렬
            padding: '20px',
            overflowY: 'auto', // 수직 스크롤 가능
            }}>

            {/* 회의록 목록을 데이터 배열을 통해 생성 */}
            {meetingMinutes.map((meeting, index) => (
                <div key={index} style={{
                backgroundColor: 'rgba(255, 182, 193, 0.6)', // 핑크색 배경
                borderRadius: '10px',
                padding: '10px',
                marginBottom: '20px', // 박스 간 간격
                }}>

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
      </div>
    </div>
  );
}