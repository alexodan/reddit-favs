/** @jsx jsx */
import { jsx } from "theme-ui";
import Card from "../Card";

const Posts = ({ posts, splitMode, toggleSplitMode }) => {
  return (
    <div
      sx={{
        color: "text",
        display: "flex",
        justifyContent: splitMode ? "center" : "space-between",
        flexWrap: "wrap",
      }}
    >
      {posts.map(({ id, author, title, url, created_utc, thumbnail }) => {
        return (
          <Card
            key={id}
            author={author}
            title={title}
            url={url}
            created_utc={created_utc}
            thumbnail={thumbnail}
            toggleSplitMode={() => toggleSplitMode(id)}
          />
        );
      })}
    </div>
  );
};

export default Posts;
