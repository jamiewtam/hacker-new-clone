import React from "react";
import queryString from "query-string";
import Loading from "./Loading";
import { fetchUser, fetchPosts } from "../utils/api";
import Posts from "./Posts";

const RenderUserInfo = (userInfo) => {
  const { created, id, karma } = userInfo.userInfo;
  const formattedDate = new Date(created).toLocaleDateString();
  return (
    <div>
      <h1>The name {id}</h1>
      <p>{formattedDate}</p>
      <p>{karma}</p>
    </div>
  );
};

class User extends React.Component {
  state = {
    userInfo: {},
    userPosts: [],
    loading: true,
  };

  async componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    const user = query.id;
    const userInfo = await fetchUser(user);
    const userPosts = await fetchPosts(userInfo.submitted);

    this.setState({
      userInfo,
      userPosts,
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <div>
        <RenderUserInfo userInfo={this.state.userInfo} />
        <h2>Posts</h2>
        <Posts posts={this.state.userPosts} />
      </div>
    );
  }
}

export default User;
