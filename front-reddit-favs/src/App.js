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

const FAV_POSTS_URL = `http://localhost:8080/posts`;
const BASE_URL = `https://www.reddit.com/r/askreddit/top.json`;

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
    fetch(FAV_POSTS_URL)
      .then((res) => res.json())
      .then((favPosts) => setFavoritePosts(favPosts));
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
    const favedPost = posts.find((p) => p.id === postId);
    setPosts(updatedPosts);
    fetch(FAV_POSTS_URL, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author: favedPost.author,
        title: favedPost.title,
        url: favedPost.url,
      }),
    })
      .then((response) => response.json())
      .then((newPost) => {
        console.log(newPost);
        setFavoritePosts([newPost, ...favoritePosts]);
      });
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
              sx={{ variant: "containers.gridIcon" }}
            />
          )}
          <Switch>
            <Route path="/favorites">
              <FavoritePosts posts={favoritePosts} />
            </Route>
            <Route path="/">
              <div sx={{ px: "1rem", pb: "2rem" }}>
                {splitMode ? (
                  <SplitPane
                    split="vertical"
                    defaultSize={400}
                    pane1Style={{ overflow: "scroll", paddingBottom: "2rem" }}
                    pane2Style={{ overflow: "scroll", paddingBottom: "2rem" }}
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
