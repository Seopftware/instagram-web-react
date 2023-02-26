import Feed from "components/Feed";
import { getAllFeeds } from "../api";
import { useQuery } from "@tanstack/react-query";

function Home() {
  const { data } = useQuery(["feeds"], getAllFeeds);
  console.log("data", data);

  return (
    <div>
      {data?.map((feed) => (
        <Feed key={feed.id} {...feed} />
      ))}
    </div>
  );
}

export default Home;
