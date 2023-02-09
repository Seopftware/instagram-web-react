import { isLoggedInVar } from "../apollo";
import { useState } from "react";
import styled, { css } from "styled-components";
import { darkModeVar } from "../apollo";

const Container = styled.div``;

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

function Login() {
  return (
    <Container>
      <Title>Login</Title>
      <button onClick={() => darkModeVar(true)}>DarkMode</button>
      <button onClick={() => darkModeVar(false)}>LightMode</button>
    </Container>
  );
}
export default Login;
