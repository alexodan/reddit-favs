/** @jsx jsx */
import { jsx } from "theme-ui";

const FavoritePosts = ({ posts }) => {
  return (
    <div sx={{}}>
      {posts.map((post) => (
        <div
          key={post.id}
          sx={{
            color: "primary",
            border: "2px solid",
            borderColor: "primary",
            padding: "15px",
            cursor: "pointer",
            pt: "5px",
            m: "20px",
          }}
        >
          <h2 sx={{ my: "5px" }}>{post.title}</h2>
          <h3 sx={{ my: "5px" }}>Author: {post.author}</h3>
          <p>{post.url}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritePosts;
