import React from "react";
import { fetchMainPosts } from "../utils/api";
import Loading from "./Loading";
import Posts from "./Posts";

export default class Top extends React.Component {
  state = {
    loading: true,
    posts: [],
  };

  async componentDidMount() {
    const posts = await fetchMainPosts("show");

    this.setState({
      posts,
      loading: false,
    });
  }

  componentWillUnmount() {}

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <div>
        <ul className="main__post-block ">
          <Posts posts={this.state.posts} />
        </ul>
      </div>
    );
  }
}
