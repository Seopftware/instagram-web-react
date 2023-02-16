import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/auth/Button";
import { FatText } from "../components/shared";

const Header = styled.div`
  display: flex;
`;
const Avatar = styled.img`
  margin-left: 50px;
  height: 160px;
  width: 160px;
  border-radius: 50%;
  margin-right: 80px;
  background-color: #2c2c2c;
`;
const Column = styled.div``;
const Username = styled.h3`
  font-size: 28px;
  font-weight: 400;
`;
const Row = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  display: flex;
  align-items: center;
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  margin-right: 20px;
`;
const Value = styled.span`
  font-weight: 600;
  font-size: 18px;
  padding: 0 10px;
`;
const Name = styled.span`
  font-weight: 600;
  font-size: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-auto-rows: 290px;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
`;

const Photo = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  position: relative;
`;

const Icons = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
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
  margin: 0px 5px;
  svg {
    font-size: 14px;
    margin-right: 5px;
  }
`;

const ProfileBtn = styled.span`
  border: none;
  border-radius: 3px;
  margin-top: 12px;
  margin-left: 15px;
  background-color: ${(props) => props.theme.accent};
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
`;

function Profile() {
  const data = {
    id: 1,
    file: "https://image.yes24.com/goods/113751739/XL",
    likes: 0,
    user: {
      username: "inseop",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Won_Bin_LG.jpg",
      totalFollowing: 10,
      totalFollowers: 3,
      bio: "연봉 1억 개발자",
    },
    feeds: [
      {
        id: 1,
        file: "http://image.yes24.com/goods/103308060/XL",
        likes: 0,
        commentNumber: 3,
      },
      {
        id: 2,
        file: "http://image.yes24.com/goods/103308060/XL",
        likes: 0,
        commentNumber: 3,
      },
      {
        id: 3,
        file: "http://image.yes24.com/goods/103308060/XL",
        likes: 0,
        commentNumber: 3,
      },
      {
        id: 4,
        file: "http://image.yes24.com/goods/103308060/XL",
        likes: 0,
        commentNumber: 3,
      },
      {
        id: 4,
        file: "http://image.yes24.com/goods/103308060/XL",
        likes: 0,
        commentNumber: 3,
      },
      {
        id: 4,
        file: "http://image.yes24.com/goods/103308060/XL",
        likes: 0,
        commentNumber: 3,
      },
    ],
    caption: "오늘의 첫 번째 책 입니다.",
    isLiked: true,
  };

  const getButton = () => {
    const { isMe, isFollowing } = true;
    if (isMe) {
      return <ProfileBtn>Edit Profile</ProfileBtn>;
    }
    if (isFollowing) {
      return <ProfileBtn>Unfollow</ProfileBtn>;
    } else {
      return <ProfileBtn>Follow</ProfileBtn>;
    }
  };

  return (
    <>
      <Header>
        <Avatar src={data?.user?.avatar} />
        <Column>
          <Row>
            <Username>{data?.user?.username}</Username>
            {getButton(data.seeProfile)}
          </Row>
          <Row>
            <List>
              <Value>{data?.user?.totalFollowers}</Value> followers
              <Value>{data?.user?.totalFollowing}</Value> following
            </List>
          </Row>
          <Row>
            <Name>{data?.user?.username}</Name>
          </Row>
          <Row>{data?.user?.bio}</Row>
        </Column>
      </Header>
      <Grid>
        {data?.feeds?.map((feed) => (
          <Photo key={feed.id} bg={feed.file}>
            <Icons>
              <Icon>
                <FontAwesomeIcon icon={faHeart} />
                {feed.likes}
              </Icon>
              <Icon>
                <FontAwesomeIcon icon={faComment} />
                {feed.commentNumber}
              </Icon>
            </Icons>
          </Photo>
        ))}
      </Grid>
    </>
  );
}
export default Profile;
