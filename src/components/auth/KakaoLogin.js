import { kakaoLogin } from "api";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function KakaoLogin() {
  //   const urlParams = useLocation();
  //   console.log(urlParams);

  const { search } = useLocation();
  console.log(search);

  const params = new URLSearchParams(search);
  const code = params.get("code");
  console.log("code", code);

  //   const KakaoLoginAPI = async () => {
  //     const params = new URLSearchParams(search);
  //     const code = params.get("code");
  //     console.log("code", code);

  //     const res = await kakaoLogin(code);
  //     console.log("res", res);
  //   };
  //   useEffect(() => {
  //     KakaoLoginAPI();
  //   }, []);

  const { data } = useQuery(["kakao", code], kakaoLogin);
  console.log("data2", data);

  return (
    <div>
      <h1>kakao login</h1>
    </div>
  );
}

export default KakaoLogin;
