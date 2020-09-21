import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ThemeContext from "./Context/Context";

import Loading from "./components/Loading";
import Nav from "./components/Nav";

const Posts = React.lazy(() => import("./components/Posts"));
const User = React.lazy(() => import("./components/User"));
const Comments = React.lazy(() => import("./components/Comments"));

function App() {
  const [theme, setTheme] = React.useState("light");

  const changeTheme = React.useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [theme]);

  const classes = `App background__${theme}`;

  const Top = React.useCallback(() => <Posts type="top" />, []);
  const New = React.useCallback(() => <Posts type="new" />, []);

  return (
    <Router>
      <div className={classes}>
        <ThemeContext.Provider value={theme}>
          <React.Suspense fallback={<Loading />}>
            <Nav toggleTheme={changeTheme} />
            <Switch>
              <Route exact path="/" component={Top} />
              <Route path="/new" component={New} />
              <Route path="/users" component={User} />
              <Route path="/posts/comments" component={Comments} />
              <Route
                render={() => {
                  return <h1>Route Not Found</h1>;
                }}
              />
            </Switch>
          </React.Suspense>
        </ThemeContext.Provider>
      </div>
    </Router>
  );
}

export default App;
