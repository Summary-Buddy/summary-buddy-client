import { client } from "./client";
import Cookies from 'js-cookie';

export async function loginCheck() {
  try {
    console.log(Cookies.get('memberId'));
    const res = await client.get(`/member/${Cookies.get('memberId')}`);
    if(res.status === 200) return true;
  } catch(err) {
    return false;
  }
}