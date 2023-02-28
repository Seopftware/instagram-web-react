import { gql, useMutation } from "@apollo/client";
import {
  faBookmark,
  faComment,
  faPaperPlane,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FatText } from "./shared";
import Avatar from "./Avatar";
import Comments from "./feeds/Comments";

const PhotoContainer = styled.div`
  background-color: white;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.borderColor};
  margin-bottom: 60px;
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
  min-width: 100%;
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
  cursor: pointer;
`;

const Likes = styled(FatText)`
  margin-top: 15px;
  display: block;
`;

const Comment = styled.div``;
const CommentCaption = styled.span`
  margin-left: 10px;
`;

const CommentCount = styled.span`
  opacity: 0.7;
  margin: 10px 0px;
  display: block;
  font-weight: 600;
  font-size: 10px;
`;

function Photo({
  id,
  owner,
  img,
  isLiked,
  likes,
  content,
  reviews,
  commentNumber,
}) {
  console.log("reviews1", reviews);
  return (
    <PhotoContainer key={id}>
      <PhotoHeader>
        <Link to={`/users/${owner.username}`}>
          <Avatar lg url={owner.avatar} />
        </Link>
        <Link to={`/users/${owner.username}`}>
          <Username>{owner.username}</Username>
        </Link>
      </PhotoHeader>
      <PhotoFile src={img} />
      <PhotoData>
        <PhotoActions>
          <div>
            <PhotoAction>
              <FontAwesomeIcon
                style={{ color: isLiked ? "tomato" : "inherit" }}
                icon={isLiked ? SolidHeart : faHeart}
              />
            </PhotoAction>
            <PhotoAction>
              <FontAwesomeIcon icon={faComment} />
            </PhotoAction>
            <PhotoAction>
              <FontAwesomeIcon icon={faPaperPlane} />
            </PhotoAction>
          </div>
          <div>
            <FontAwesomeIcon icon={faBookmark} />
          </div>
        </PhotoActions>
        <Likes>{likes === 1 ? "1 like" : `${likes} likes`}</Likes>

        <Comments
          photoId={id}
          author={owner.username}
          caption={content}
          commentNumber={1}
          comments={reviews}
        />
      </PhotoData>
    </PhotoContainer>
  );
}

// Photo.propTypes = {
//   id: PropTypes.number.isRequired,
//   user: PropTypes.shape({
//     avatar: PropTypes.string,
//     username: PropTypes.string.isRequired,
//   }),
//   file: PropTypes.string.isRequired,
//   likes: PropTypes.number.isRequired,
//   caption: PropTypes.string,
//   // commentNumber: PropTypes.number.isRequired,
//   // isLiked: PropTypes.bool.isRequired,
//   comments: PropTypes.arrayOf(PropTypes.shape({})), // arrayType, shape() -> 객체검증
// };
export default Photo;