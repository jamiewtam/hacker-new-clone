import React from "react";
import PropTypes from "prop-types";
import queryString from "query-string";
import Loading from "./Loading";
import { fetchUser, fetchPosts } from "../utils/api";
import Post from "./Post";

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

RenderUserInfo.propTypes = {
  userInfo: PropTypes.object.isRequired,
};

const useReducer = (state, action) => {
  switch (action.type) {
    case "LOAD":
      return {
        userInfo: action.userInfo,
        userPosts: action.userPosts,
        loading: false,
      };
    default:
      return state;
  }
};

const User = (props) => {
  const [state, dispatch] = React.useReducer(useReducer, {
    userInfo: {},
    userPosts: [],
    loading: true,
  });

  const searchLocation = props.location.search;

  React.useEffect(() => {
    (async () => {
      const query = queryString.parse(searchLocation);
      const user = query.id;
      const userInfo = await fetchUser(user);
      const userPosts = await fetchPosts(userInfo.submitted);
      console.log(userPosts);
      dispatch({ type: "LOAD", userInfo, userPosts });
    })();
  }, [searchLocation]);

  if (state.loading) {
    return <Loading />;
  }
  return (
    <div>
      <RenderUserInfo userInfo={state.userInfo} />
      <h2>Posts</h2>
      <Post posts={state.userPosts} />
    </div>
  );
};

export default User;
