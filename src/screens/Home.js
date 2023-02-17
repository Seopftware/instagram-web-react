import styled from "styled-components";

import Avatar from "components/Avartar";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Comments from "../components/Comments";

import {
  faBookmark,
  faComment,
  faPaperPlane,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.borderColor};
  margin-bottom: 60px;
  max-width: 650px;
`;

const FeedHeader = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  border-bottom: 1px solid rgb(239, 239, 239);
`;

const Nickname = styled.div`
  margin-left: 10px;
  font-weight: 600;
`;

const FeedPhoto = styled.img`
  width: 100%;
  max-width: 100%;
`;

const FeedActions = styled.div`
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

const FeedAction = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

const FeedActionContainer = styled.div`
  padding: 12px 15px;
`;

const Likes = styled.span`
  font-weight: 600;
  margin-top: 15px;
  display: block;
`;

function Home() {
  return (
    <FeedContainer>
      <FeedHeader>
        <Avatar
          lg
          url="https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTBfMjQ4/MDAxNTg2NDgyNTMyMTQ1.dtZ7rR07L9U8giv9ea4juxflcnz18ZoF17_CnW6NHVsg.uPXYgoyZyQCrdSRsGNJYyMSQbhnK0Nh1BN4xUfOq_E4g.PNG.zencstory/0.png?type=w800"
        />
        <Nickname>Nickname</Nickname>
      </FeedHeader>
      <FeedPhoto src="https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTBfMjQ4/MDAxNTg2NDgyNTMyMTQ1.dtZ7rR07L9U8giv9ea4juxflcnz18ZoF17_CnW6NHVsg.uPXYgoyZyQCrdSRsGNJYyMSQbhnK0Nh1BN4xUfOq_E4g.PNG.zencstory/0.png?type=w800" />

      <FeedActionContainer>
        <FeedActions>
          <div>
            <FeedAction>
              <FontAwesomeIcon
                style={{ color: true ? "tomato" : "inherit" }}
                icon={true ? SolidHeart : faHeart}
              />
            </FeedAction>
            <FeedAction>
              <FontAwesomeIcon icon={faComment} />
            </FeedAction>
            <FeedAction>
              <FontAwesomeIcon icon={faPaperPlane} />
            </FeedAction>
          </div>
          <div>
            <FontAwesomeIcon icon={faBookmark} />
          </div>
        </FeedActions>

        <Likes>1 likes</Likes>

        <Comments />
      </FeedActionContainer>
    </FeedContainer>
  );
}

export default Home;
