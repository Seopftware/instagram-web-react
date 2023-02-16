import Photo from "components/Photo";

function Home() {
  const data = [
    {
      id: 1,
      file: "https://image.yes24.com/goods/113751739/XL",
      likes: 0,
      user: {
        username: "inseop",
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/0/08/Won_Bin_LG.jpg",
      },
      caption: "오늘의 첫 번째 책 입니다.",
      commentNumber: 3,
      isLiked: true,
    },
    {
      id: 2,
      file: "http://image.yes24.com/goods/103308060/XL",
      likes: 0,
      user: {
        username: "inseop",
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/0/08/Won_Bin_LG.jpg",
      },
      caption: "오늘의 두 번째 책 입니다.",
      commentNumber: 0,
      isLiked: false,
    },
    {
      id: 3,
      file: "http://image.yes24.com/momo/TopCate203/MidCate008/20272469.jpg",
      likes: 0,
      user: {
        username: "inseop",
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/0/08/Won_Bin_LG.jpg",
      },
      caption: "오늘의 세 번째 책 입니다.",
      commentNumber: 1,
      comments: [
        {
          id: 1,
          payload: "재밌어보입니다",
          user: {
            username: "inseop",
            avatar:
              "https://upload.wikimedia.org/wikipedia/commons/0/08/Won_Bin_LG.jpg",
          },
        },
        {
          id: 2,
          payload: "재밌어보입니다2",
          user: {
            username: "inseop",
            avatar:
              "https://upload.wikimedia.org/wikipedia/commons/0/08/Won_Bin_LG.jpg",
          },
        },
        {
          id: 3,
          payload: "재밌어보입니다3",
          user: {
            username: "inseop",
            avatar:
              "https://upload.wikimedia.org/wikipedia/commons/0/08/Won_Bin_LG.jpg",
          },
        },
      ],
      isLiked: true,
    },
  ];
  return (
    <div>
      {data?.map((photo) => (
        <Photo key={photo.id} {...photo} />
      ))}
    </div>
  );
}
export default Home;
