/** @jsx jsx */
import { jsx } from "theme-ui";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FavoritePosts from "./components/FavoritePosts";
import Posts from "./components/Posts";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import ToggleMode from "./components/ToggleMode";
import { useState } from "react";
import { useEffect } from "react";
import SplitPane from "react-split-pane";
import PostDetail from "./components/PostDetail";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

// const BASE_URL = `http://localhost:4000/posts`;
const BASE_URL = `https://www.reddit.com/r/redditdev/top.json`;

function App() {
  const [posts, setPosts] = useState([]);
  const [favoritePosts, setFavoritePosts] = useState([]); // localstorage
  const [splitMode, setSplitMode] = useState(false);
  const [postDetail, setPostDetail] = useState(null);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then(({ data }) => data.children)
      .then((posts) => {
        const topPosts = posts.map(({ data }) => ({
          id: data.id,
          author: data.author,
          title: data.title,
          url: data.url,
          created_utc: data.created_utc,
          thumbnail: data.thumbnail,
          selftext_html: data.selftext_html,
          faved: false,
          read: false,
        }));
        setPosts(topPosts);
      });
    return () => {};
  }, []);

  const toggleSplitMode = (postId) => {
    const postToRender = posts.find((p) => p.id === postId);
    setSplitMode(true);
    setPostDetail(postToRender);
  };

  const toggleFavorite = (postId) => {
    const updatedPosts = posts.map((p) =>
      p.id === postId ? { ...p, faved: !p.faved } : p
    );
    setPosts(updatedPosts);
    // optimistic post
    // fetch("", { method: "POST", body: {} })
    //   .then((response) => {
    //     console.log(response);
    //     return response;
    //   })
    //   .then((response) => {
    //     setPosts(updatedPosts);
    //   });
  };

  const toggleRead = (postId) => {
    const updatedPosts = posts.map((p) =>
      p.id === postId ? { ...p, read: !p.read } : p
    );
    setPosts(updatedPosts);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Navbar />
          <ToggleMode />
          {splitMode && (
            <BsFillGrid3X3GapFill
              onClick={() => setSplitMode(false)}
              sx={{
                position: "absolute",
                top: "4.5rem",
                right: "1.5rem",
                fontSize: "3rem",
                borderRadius: "50%",
                boxShadow: "2px 2px 10px 2px rgba(0,0,0,0.5)",
                p: ".5rem",
                cursor: "pointer",
                zIndex: "2",
              }}
            />
          )}
          <Switch>
            <Route path="/favorites">
              <FavoritePosts />
            </Route>
            <Route path="/">
              <div sx={{ px: "1rem", pb: "2rem" }}>
                {splitMode ? (
                  <SplitPane
                    split="vertical"
                    defaultSize={400}
                    pane1Style={{ overflow: "scroll", paddingBottom: "2rem" }}
                  >
                    <Posts
                      posts={posts}
                      splitMode={splitMode}
                      toggleSplitMode={toggleSplitMode}
                    />
                    <PostDetail post={postDetail} />
                  </SplitPane>
                ) : (
                  <Posts
                    posts={posts}
                    splitMode={splitMode}
                    toggleSplitMode={toggleSplitMode}
                    toggleFavorite={toggleFavorite}
                    toggleRead={toggleRead}
                  />
                )}
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
