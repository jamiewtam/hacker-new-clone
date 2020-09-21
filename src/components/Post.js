import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ThemeContext from "../Context/Context";

const Post = ({ posts }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      {posts.map((story) => {
        const descriptionString = `on ${new Date(
          story.time
        ).toLocaleDateString()}`;

        return (
          <li key={story.id} className="main__post-item">
            <Link
              className="main__post-item"
              to={story.url ? story.url : "hackernew.com"}
            >
              <p className="main__post-item-link">{story.title}</p>
            </Link>
            <div className="main__post-item--description">
              By &nbsp;
              <Link
                className="main__post-item-description--link-item"
                to={{ pathname: `/users/`, search: `?id=${story.by}` }}
              >
                {story.by}
              </Link>
              &nbsp;
              {descriptionString}
              &nbsp; with &nbsp;
              <Link
                className="main__post-item-description--link-item"
                to={{
                  pathname: "posts/comments/",
                  search: `?postIds=${story.kids}`,
                }}
              >
                {story.descendants}
              </Link>
              &nbsp; comments
            </div>
          </li>
        );
      })}
    </div>
  );
};

Post.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Post;
