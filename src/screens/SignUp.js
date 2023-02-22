import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import { FatLink } from "../components/shared";
import routes from "../routes";
import { useForm } from "react-hook-form"; // npm i react-hook-form --save
import { useMutation } from "@tanstack/react-query";
import { signup } from "../api";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled(FatLink)`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 3px;
  padding: 7px;
  background-color: #fafafa;
  border: 0.5px solid ${(props) => props.theme.borderColor};
  margin-top: 5px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
`;

function SignUp() {
  const { register, watch, handleSubmit } = useForm();

  const mutation = useMutation(signup, {
    onSuccess: () => {
      console.log("success");
    },
    onError: () => {
      console.log("error");
    },
  });

  const onSubmit = ({ username, password, email }) => {
    mutation.mutate({ username, password, email });
  };

  return (
    <AuthLayout>
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
          <Subtitle>
            Sign up to see photos and videos from your friends.
          </Subtitle>
        </HeaderContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <form> */}
          <Input
            type="text"
            placeholder="Email"
            {...register("email", { required: "Input your Email" })}
          />
          <Input
            type="text"
            placeholder="Username"
            {...register("username", { required: "Input your Username" })}
          />
          <Input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <Button type="submit" value="Sign up" />
        </form>
      </FormBox>
      <BottomBox cta="Have an account?" linkText="Log in" link={routes.home} />
    </AuthLayout>
  );
}
export default SignUp;
