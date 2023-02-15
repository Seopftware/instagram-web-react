import { gql, useQuery } from "@apollo/client";
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { logUserOut } from "../apollo";
import Avatar from "../components/Avatar";
import { FatText } from "../components/shared";

const PhotoContainer = styled.div`
  background-color: white;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.borderColor};
  margin-bottom: 20px;
  max-width: 615px;
`;
const PhotoHeader = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(239, 239, 239);
`;

const Username = styled(FatText)`
  margin-left: 15px;
`;

const PhotoFile = styled.img`
  width: 100%;
  max-width: 100%;
`;

const PhotoData = styled.div`
  padding: 12px 15px;
`;

const PhotoActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
  svg {
    font-size: 20px;
  }
`;

const PhotoAction = styled.div`
  margin-right: 10px;
`;

const Likes = styled(FatText)`
  margin-top: 15px;
  display: block;
`;

function Home() {
  const data = [
    {
      id: 1,
      file: "https://image.yes24.com/goods/113751739/XL",
      likes: 0,
      user: {
        name: "inseop",
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/0/08/Won_Bin_LG.jpg",
      },
    },
    {
      id: 2,
      file: "http://image.yes24.com/goods/103308060/XL",
      likes: 0,
      user: {
        name: "inseop",
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/0/08/Won_Bin_LG.jpg",
      },
    },
    {
      id: 3,
      file: "http://image.yes24.com/momo/TopCate203/MidCate008/20272469.jpg",
      likes: 0,
      user: {
        name: "inseop",
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/0/08/Won_Bin_LG.jpg",
      },
    },
  ];
  return (
    <div>
      {data?.map((photo) => (
        <PhotoContainer key={photo.id}>
          <PhotoHeader>
            <Avatar lg url={photo.user.avatar} />
            <Username>{photo.user.username}</Username>
          </PhotoHeader>
          <PhotoFile src={photo.file} />
          <PhotoData>
            <PhotoActions>
              <div>
                <PhotoAction>
                  <FontAwesomeIcon
                    style={{ color: photo.isLiked ? "tomato" : "inherit" }}
                    icon={photo.isLiked ? SolidHeart : faHeart}
                  />
                </PhotoAction>
                <PhotoAction>
                  <FontAwesomeIcon size={"2x"} icon={faComment} />
                </PhotoAction>
                <PhotoAction>
                  <FontAwesomeIcon size={"2x"} icon={faPaperPlane} />
                </PhotoAction>
              </div>
              <div>
                <FontAwesomeIcon size={"2x"} icon={faBookmark} />
              </div>
            </PhotoActions>
            <Likes>
              {photo.likes === 1 ? "1 like" : `${photo.likes} likes`}
            </Likes>
          </PhotoData>
        </PhotoContainer>
      ))}
    </div>
  );
}
export default Home;
