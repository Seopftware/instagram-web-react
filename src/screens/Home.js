import { useEffect } from "react";
import Photo from "components/Photo";
import { getAllFeeds } from "../api";
import { useQuery } from "@tanstack/react-query";

function Home() {
  const { data } = useQuery(["feeds"], getAllFeeds);
  console.log("data2", data);
  return (
    <div>
      {data?.map((photo) => (
        <Photo key={photo.id} {...photo} />
      ))}
    </div>
  );
}
export default Home;
