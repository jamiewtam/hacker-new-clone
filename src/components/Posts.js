import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((story) => {
        //console.log("COMMENTS", story.kids);
        // let commentsArrToString = "";
        // console.log(story.kids);
        // if (story.kids) {
        //   story.kids.forEach(
        //     (story) =>
        //       (commentsArrToString = commentsArrToString.concat(
        //         `${story.toString()},`
        //       ))
        //   );
        // }
        // console.log(commentsArrToString);

        const descriptionString = `on ${new Date(
          story.time
        ).toLocaleDateString()}`;

        return (
          <li key={story.id} className="main__post-item">
            <Link
              className="main__post-item"
              to={story.url ? story.url : "hackernew.com"}
            >
              <p className="main__post-item-link">
                {story.title.split(":")[1]}
              </p>
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

export default Posts;
