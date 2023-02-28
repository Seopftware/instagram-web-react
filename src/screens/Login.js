import { darkModeVar } from "apollo";
import styled from "styled-components";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { isLoggedInVar } from "../apollo";
import { useState } from "react";
import { userNameLogin } from "../api";
import { useMutation } from "@tanstack/react-query";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

const WhiteBox = styled.div`
  background-color: white;
  border: 1px solid rgb(219, 219, 219);
  boder: 1px solid ${(props) => props.theme.borderColor};
  width: 100%;
`;

const TopBox = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px 40px 25px 40px;
  margin-bottom: 10px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 35px;
    width: 100%;
    justify-items: center;
    align-items: center;
  }
`;

const BottomBox = styled(WhiteBox)`
  padding: 20px 0px;
  text-align: center;

  a {
    font-weight: 600;
    margin-left: 5px;
  }
`;

const Input = styled.input`
  width: 100%;
  border-radius: 3px;
  padding: 7px;
  background-color: #fafafa;
  border: 0.5px solid rgb(219, 219, 219);
  margin-top: 5px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
`;

const Button = styled.input`
  width: 100%;
  border: none;
  border-radius: 3px;
  margin-top: 12px;
  background-color: #0095f6;
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
`;

const Separator = styled.div`
  width: 100%;
  margin: 20px 0px 30px 0px;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }

  span {
    margin: 0px 10px;
    font-weight: 600;
    font-size: 12px;
    color: #8e8e8e;
  }
`;

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation(userNameLogin, {
    onMutate: () => {
      console.log("mutation start...");
    },
    onSuccess: () => {
      console.log("API CALL SUCCESS");
      isLoggedInVar(true);
    },
    onError: () => {
      console.log("API CALL ERROR");
    },
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("login click");
    mutation.mutate({ username, password }); // mutation 호출 | API call할 때의 매개변수
  };

  const onChange = (event) => {
    const { name, value } = event.currentTarget;
    console.log(name, value);

    if (name === "username") {
      setUserName(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <Container>
      <Wrapper>
        <TopBox>
          <div>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </div>

          <form onSubmit={onSubmit}>
            <Input
              type="text"
              name="username"
              onChange={onChange}
              value={username}
              placeholder="유저네임"
              required
            />
            <Input
              type="password"
              name="password"
              onChange={onChange}
              value={password}
              placeholder="비밀번호"
              required
            />
            <Button type="submit" value="로그인" />
          </form>

          <Separator>
            <div></div>
            <span>OR</span>
            <div></div>
          </Separator>

          <FacebookLogin>
            <FontAwesomeIcon icon={faFacebookSquare} />
            <span>Facebook으로 로그인</span>
          </FacebookLogin>
        </TopBox>

        <BottomBox>
          <span>계정이 없으신가요?</span>
          <Link to="/signup">가입하기</Link>
        </BottomBox>
      </Wrapper>
    </Container>
  );
}

export default Login;
