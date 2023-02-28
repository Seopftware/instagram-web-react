import axios from "axios";
import Cookie from "js-cookie";

// export async function getAllFeeds = () => {
//     const res = await instance.get(`feeds`)
//     return res.data;
// };

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  headers: {
    "X-CSRFToken": Cookie.get("csrftoken") || "",
  },
  // 서로 다른 도메인 요청일 때도 credential 데이터를 담아보내겠다
  // + 쿠키 데이터 담아서 보내겠다.
  withCredentials: true,
});

export const login = ({ username, password }) => {
  return instance.post("users/login", { username, password }).then((res) => {
    console.log("res", res);
    return res.status;
  });
};

export const getMyInfo = () => {
  return instance.get(`users/myinfo`).then((res) => res.data);
};

export const signup = ({ username, password, email }) => {
  instance
    .post("users/signup", { username, password, email })
    .then((response) => response.data);
};

export const logout = () => {
  return instance.post("users/logout", "").then((response) => response.data);
};

// 전체 피드
export const getAllFeeds = () =>
  instance.get(`feeds/`).then((response) => response.data);

// 유저 프로필 피드
// /users/:username

// export async function getAllFeeds() {
//     const res = await fetch(`${BASE_URL}/feeds`)
//     const json = await res.json();
//     return json;
// }

// export async function getAllFeeds = () => {
//     const res = await instance.get(`feeds`)
//     return res.data;
// };

// 유저 프로필 화면
export const getUserProfileFeeds = () => {};

// 카카오 로그인
export const kakaoLogin = ({ queryKey }) => {
  let code = queryKey[1];
  return instance.post("users/kakao", { code }).then((res) => res.data);
};
