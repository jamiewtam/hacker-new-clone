import React from "react";
import Loading from "./Loading";
import queryString from "query-string";
import { fetchComments } from "../utils/api";

const DisplayComments = ({ comments }) => {
  console.log("comments:", comments);
  const userComments = comments || [];
  console.log("userComments:", userComments);
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

class Comments extends React.Component {
  state = {
    loading: true,
    userComments: null,
  };

  async componentDidMount() {
    const IDs = queryString
      .parse(this.props.location.search)
      .postIds.split(",");
    const postComments = await fetchComments(IDs);
    console.log("postComments:", postComments);
    this.setState({
      loading: false,
      userComments: postComments,
    });
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <div>
        <DisplayComments comments={this.state.userComments} />
      </div>
    );
  }
}

export default Comments;
