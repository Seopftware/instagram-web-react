import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faUser } from "@fortawesome/free-regular-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "api";
import { isLoggedInVar } from "../apollo";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 18px 0;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.bgColor};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: cetner;
  width: 100%;
  max-width: 630px;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Column = styled.div``;

const Icon = styled.span`
  margin-left: 5px;
`;
const Button = styled.button`
  background-color: ${(props) => props.theme.accent};
  border-radius: 4px;
  padding: 4px 15px;
  color: white;
  font-weight: 600;
`;

function Header() {
  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
  };

  const onLogout = async () => {
    const res = await userLogout();
    isLoggedInVar(false);
    refreshPage();
  };

  return (
    <HeaderContainer>
      <Wrapper>
        <Column>
          <Link to={`/`}>
            <FontAwesomeIcon size="2x" icon={faInstagram} />
          </Link>
        </Column>

        <Column>
          <IconsContainer>
            <Icon>
              <FontAwesomeIcon size="lg" icon={faHome} />
            </Icon>
            <Icon>
              <FontAwesomeIcon size="lg" icon={faPaperPlane} />
            </Icon>
            <Icon>
              <Link to={"/profile/inseop"}>
                <FontAwesomeIcon size="lg" icon={faUser} />
              </Link>
            </Icon>
            <Button onClick={onLogout}>Logout</Button>
          </IconsContainer>
        </Column>
      </Wrapper>
    </HeaderContainer>
  );
}

export default Header;
