const BASE_URL = "http://localhost:8080";
const MEMBER_URL = "/api/member";

export const ENDPOINTS = {
    LOGIN: `${BASE_URL}/login`,
    JOIN: `${BASE_URL}${MEMBER_URL}/join`,
    UPDATE: `${BASE_URL}${MEMBER_URL}/update`,
    CHECK_USERNAME: `${BASE_URL}${MEMBER_URL}/check-username`
};