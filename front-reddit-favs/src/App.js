/** @jsx jsx */
import { jsx } from "theme-ui";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FavoritePosts from "./components/FavoritePosts";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import ToggleMode from "./components/ToggleMode";
import { useState } from "react";
import { useEffect } from "react";

// const BASE_URL = `http://localhost:4000/posts`;
const BASE_URL = `https://www.reddit.com/r/redditdev/top.json`;

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then(({ data }) => data.children)
      .then((posts) => {
        const topPosts = posts.map(({ data }) => ({
          author: data.author,
          title: data.title,
          url: data.url,
          created_utc: data.created_utc,
          thumbnail: data.thumbnail,
        }));
        setPosts(topPosts);
      });
    return () => {};
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Navbar />
          <ToggleMode />
          <Switch>
            <Route path="/favorites">
              <FavoritePosts />
            </Route>
            <Route path="/">
              <Home posts={posts} />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
