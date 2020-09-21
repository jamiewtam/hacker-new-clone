import React from "react";
import PropTypes from "prop-types";
import Loading from "./Loading";
import queryString from "query-string";
import { fetchComments } from "../utils/api";

const DisplayComments = ({ comments }) => {
  const userComments = comments || [];
  return userComments.map((comment) => {
    return (
      <div key={comment.id}>
        by <span>{comment.by}</span>
        on
        <span>{comment.time}</span>
        <span>{comment.text}</span>
      </div>
    );
  });
};

DisplayComments.propTypes = {
  comments: PropTypes.array,
};

const Comments = (props) => {
  const [loading, setLoading] = React.useState(true);
  const [userComments, setUserComments] = React.useState();

  const searchLocation = props.location.search;

  React.useEffect(() => {
    const IDs = queryString.parse(searchLocation).postIds.split(",");
    fetchComments(IDs).then((postComments) => {
      setUserComments(postComments);
      setLoading(false);
    });
  }, [searchLocation]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <DisplayComments comments={userComments} />
    </div>
  );
};

export default Comments;
