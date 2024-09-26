
// 특정 키의 값을 localstorage에 저장 (로그인 시 jwt 토큰 저장 용도)
export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

// 특정 키에 대한 값을 localstorage에서 가져옴 (서버에 요청할 때, jwt 토큰 전달 용도)
export const getItem = (key) => {
    const item = localStorage.getItem(key);
    // 특정 키에 대한 값이 없으면 null 반환
    return item ? JSON.parse(item) : null;
};

// 특정 키에 대한 값을 localstorage에서 삭제 (로그아웃 할 때?) ->> 이건 논의가 필요해보임
export const removeItem = (key) => {
    localStorage.removeItem(key);
};
  