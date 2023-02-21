import Feed from "components/Feed";

function Home() {
  const data = [
    {
      id: 1,
      file: "https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTBfMjQ4/MDAxNTg2NDgyNTMyMTQ1.dtZ7rR07L9U8giv9ea4juxflcnz18ZoF17_CnW6NHVsg.uPXYgoyZyQCrdSRsGNJYyMSQbhnK0Nh1BN4xUfOq_E4g.PNG.zencstory/0.png?type=w800",
      caption: "내용입니다",
      user: {
        username: "development",
        profileImg:
          "https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTBfMjQ4/MDAxNTg2NDgyNTMyMTQ1.dtZ7rR07L9U8giv9ea4juxflcnz18ZoF17_CnW6NHVsg.uPXYgoyZyQCrdSRsGNJYyMSQbhnK0Nh1BN4xUfOq_E4g.PNG.zencstory/0.png?type=w800",
      },
      likes: 100,
      commentNumber: 33,
      isLiked: false,
      comments: [
        {
          id: 1,
          payload: "첫 번째 댓글",
          user: {
            username: "nickname2",
            profileImg: "https://en.pimg.jp/081/949/515/1/81949515.jpg",
          },
        },
        {
          id: 2,
          payload: "두 번째 댓글",
          user: {
            username: "korean_tiger",
            profileImg: "https://en.pimg.jp/081/949/515/1/81949515.jpg",
          },
        },
      ],
    },
    {
      id: 2,
      file: "https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTBfMjQ4/MDAxNTg2NDgyNTMyMTQ1.dtZ7rR07L9U8giv9ea4juxflcnz18ZoF17_CnW6NHVsg.uPXYgoyZyQCrdSRsGNJYyMSQbhnK0Nh1BN4xUfOq_E4g.PNG.zencstory/0.png?type=w800",
      caption: "내용입니다",
      user: {
        username: "development",
        profileImg:
          "https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTBfMjQ4/MDAxNTg2NDgyNTMyMTQ1.dtZ7rR07L9U8giv9ea4juxflcnz18ZoF17_CnW6NHVsg.uPXYgoyZyQCrdSRsGNJYyMSQbhnK0Nh1BN4xUfOq_E4g.PNG.zencstory/0.png?type=w800",
      },
      likes: 123,
      commentNumber: 33,
      isLiked: true,
    },
    {
      id: 3,
      file: "https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTBfMjQ4/MDAxNTg2NDgyNTMyMTQ1.dtZ7rR07L9U8giv9ea4juxflcnz18ZoF17_CnW6NHVsg.uPXYgoyZyQCrdSRsGNJYyMSQbhnK0Nh1BN4xUfOq_E4g.PNG.zencstory/0.png?type=w800",
      caption: "내용입니다",
      user: {
        username: "development",
        profileImg:
          "https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTBfMjQ4/MDAxNTg2NDgyNTMyMTQ1.dtZ7rR07L9U8giv9ea4juxflcnz18ZoF17_CnW6NHVsg.uPXYgoyZyQCrdSRsGNJYyMSQbhnK0Nh1BN4xUfOq_E4g.PNG.zencstory/0.png?type=w800",
      },
      likes: 93,
      commentNumber: 33,
      isLiked: false,
    },
  ];
  return (
    <div>
      {data?.map((feed) => (
        <Feed key={feed.id} {...feed} />
      ))}
    </div>
  );
}

export default Home;
