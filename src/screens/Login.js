import { useState } from "react";
import styled, { css } from "styled-components";
import { darkModeVar } from "../apollo";
import {
  faFacebookSquare,
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
import { useMutation } from "@tanstack/react-query";
import { login } from "../api";
import { useForm } from "react-hook-form";
const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

function Login() {
  const [username, onChangeUsername] = useState("");
  const [password, onChangePassword] = useState("");

  const { register, handleSubmit } = useForm();

  const mutation = useMutation(login, {
    onSuccess: (data, variables, context) => {
      console.log("mutation data", data);
      // alert("로그인에 성공했습니다.");
      // const { data } = useQuery(["userInfo"], getUserInfo);
      // console.log("data", data);
      isLoggedInVar(true);
      console.log("success");
      console.log("mutation3", mutation);
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
    console.log("mutation1", mutation);
    mutation.mutate({ username, password });
    console.log("mutation2", mutation);
  };

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
          {mutation.error && (
            <h5 onClick={() => mutation.reset()}>{mutation.error}</h5>
          )}
          {mutation.isError ? <div>Username or Password are wrong</div> : null}
        </form>

        <Seperator />
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in with Facebook</span>
        </FacebookLogin>
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
