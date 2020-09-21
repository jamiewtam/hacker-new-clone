import React from "react";
import PropTypes from "prop-types";
import { fetchMainPosts } from "../utils/api";
import Loading from "./Loading";
import Post from "./Post";

export default function Top({ type }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [posts, setPosts] = React.useState([]);

  const postType = type;
  React.useEffect(() => {
    fetchMainPosts(postType).then((posts) => {
      setPosts(posts);
      setIsLoading(false);
    });
  }, [postType]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <ul className="main__post-block ">
        <Post posts={posts} />
      </ul>
    </div>
  );
}

Top.propTypes = {
  type: PropTypes.string.isRequired,
};
