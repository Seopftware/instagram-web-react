import styled from "styled-components";

const CommentsContainer = styled.div`
  margin-top: 20px;
`;
const CommentContainer = styled.div``;
const CommentCount = styled.span`
  display: block;
  opacity: 0.7;
  font-weight: 600;
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const CommentAuthor = styled.span`
  font-weight: 600;
  margin-right: 10px;
`;
const CommentContent = styled.span``;

function Comments() {
  return (
    <CommentsContainer>
      <CommentContainer>
        <CommentAuthor>작성자</CommentAuthor>
        <CommentContent>올해는 검은 토끼의 해 입니당~~!! :) </CommentContent>
      </CommentContainer>

      <CommentCount>댓글 2개 모두 보기</CommentCount>

      <CommentContainer>
        <CommentAuthor>댓글작성자1</CommentAuthor>
        <CommentContent>댓글 1 </CommentContent>
      </CommentContainer>
    </CommentsContainer>
  );
}

export default Comments;
