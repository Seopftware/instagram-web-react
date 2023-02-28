import { useState } from "react";
import styled, { css } from "styled-components";
import { darkModeVar } from "../apollo";
import {
  faFacebookSquare,
  faFacebookMessenger,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import Seperator from "../components/auth/Seperator";
import routes from "../routes";
import { isLoggedInVar } from "../apollo";
import { Query, useMutation } from "@tanstack/react-query";
import { getMyInfo, login } from "../api";
import { useForm } from "react-hook-form";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const KakaoLogin = styled.a`
  color: yellow;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

function Login() {
  const [username, onChangeUsername] = useState("");
  const [password, onChangePassword] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation(login, {
    onMutate: () => {
      console.log("mutation start");
    },
    onSuccess: (data, variables, context) => {
      console.log("success");
      console.log("mutation data", data);
      alert("로그인에 성공했습니다.");
      queryClient.refetchQueries(["myinfo"]);
      isLoggedInVar(true);
      window.location.reload();
    },
    onError: () => {
      console.log("error occurred");
    },
  });

  const onChange = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "username") {
      onChangeUsername(value);
    } else if (name === "password") {
      onChangePassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    mutation.mutate({ username, password });
  };

  const kakaoParams = {
    client_id: "ac69abb9d6cab7a865c937ca01c2edb7", // rest api key
    redirect_uri: "http://127.0.0.1:3000/oauth/kakao",
    response_type: "code",
  };

  const params = new URLSearchParams(kakaoParams).toString();

  return (
    <AuthLayout>
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <form onSubmit={onSubmit}>
          <Input
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={onChange}
            required
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
            required
          />
          <Button type="submit" value="Login" />
          {mutation.isError ? <div>Username or Password are wrong</div> : null}
        </form>

        <Seperator />
        <KakaoLogin href={`https://kauth.kakao.com/oauth/authorize?${params}`}>
          <FontAwesomeIcon icon={faFacebookMessenger} />
          <span>Log in with Kakao</span>
        </KakaoLogin>
      </FormBox>
      <BottomBox
        cta="Don't have an account?"
        linkText="Sign up"
        link={routes.signUp}
      />
    </AuthLayout>
  );
}
export default Login;
