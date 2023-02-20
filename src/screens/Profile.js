import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
`;

const ProfileImg = styled.img`
  margin-left: 50px;
  height: 160px;
  width: 160px;
  border-radius: 50%;
  margin-right: 80px;
  background-color: #2c2c2c;
`;

const ProfileInfo = styled.div``;

const Username = styled.h3`
  font-size: 28px;
  font-weight: 600;
`;

const FollowBtn = styled.span`
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  algin-items: center;
  margin-top: 25px;
`;

const Contents = styled.div`
  display: grid;
  grid-auto-rows: 290px;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
`;

const Feed = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  position: relative;
`;

const Icons = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

const Icon = styled.span`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin: 0 5px;
  svg {
    font-size: 14px;
    margin-right: 5px;
  }
`;

function Profile() {
  return (
    <>
      <Header>
        <ProfileImg
          src={
            "https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTBfMjQ4/MDAxNTg2NDgyNTMyMTQ1.dtZ7rR07L9U8giv9ea4juxflcnz18ZoF17_CnW6NHVsg.uPXYgoyZyQCrdSRsGNJYyMSQbhnK0Nh1BN4xUfOq_E4g.PNG.zencstory/0.png?type=w800"
          }
        />
        <ProfileInfo>
          <Row>
            <Username>닉네임</Username>
            <FollowBtn>팔로우버튼</FollowBtn>
          </Row>
          <Row>
            <div>3</div>
            <div>followers</div>
            <div>10</div>
            <div>following</div>
          </Row>
          <Row>
            <div>소개글</div>
          </Row>
        </ProfileInfo>
      </Header>

      <Contents>
        <Feed bg="http://image.yes24.com/goods/103308060/XL">
          <Icons>
            <Icon>
              <FontAwesomeIcon icon={faHeart} />
              123
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faComment} />
              100
            </Icon>
          </Icons>
        </Feed>
        <Feed bg="http://image.yes24.com/goods/103308060/XL">
          <Icons>
            <Icon>
              <FontAwesomeIcon icon={faHeart} />
              123
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faComment} />
              100
            </Icon>
          </Icons>
        </Feed>
        <Feed bg="http://image.yes24.com/goods/103308060/XL">
          <Icons>
            <Icon>
              <FontAwesomeIcon icon={faHeart} />
              123
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faComment} />
              100
            </Icon>
          </Icons>
        </Feed>
      </Contents>
    </>
  );
}

export default Profile;
