import { client } from "./client";

export async function loginCheck(token, memberId) {
  try {
    const res = await client.get(`/member/${memberId}`, { headers: { Authorization: token } });
    if(res.status === 200) return true;
  } catch(err) {
    return false;
  }
}