import PropTypes from "prop-types";
import styled from "styled-components";
import { FatText } from "../shared";

const CommentContainer = styled.div`
  margin-bottom: 6px;
`;
const CommentCaption = styled.span`
  margin-left: 10px;
`;

function Comment({ owner, content }) {
  return (
    <CommentContainer>
      <FatText>{owner}</FatText>
      <CommentCaption>{content}</CommentCaption>
    </CommentContainer>
  );
}

// Comment.propTypes = {
//   author: PropTypes.string.isRequired,
//   payload: PropTypes.string.isRequired,
// };

export default Comment;
