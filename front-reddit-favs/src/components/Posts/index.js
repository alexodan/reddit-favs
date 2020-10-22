/** @jsx jsx */
import { jsx } from "theme-ui";
import Card from "../Card";

const Posts = ({
  posts,
  splitMode,
  toggleSplitMode,
  toggleFavorite,
  toggleRead,
}) => {
  return (
    <div
      sx={{
        color: "text",
        display: "flex",
        justifyContent: splitMode ? "center" : "space-between",
        flexWrap: "wrap",
      }}
    >
      {posts.map(
        ({ id, author, title, url, created_utc, thumbnail, faved, read }) => {
          return (
            <Card
              key={id}
              id={id}
              author={author}
              title={title}
              url={url}
              created_utc={created_utc}
              thumbnail={thumbnail}
              faved={faved}
              read={read}
              toggleSplitMode={() => toggleSplitMode(id)}
              toggleFavorite={() => toggleFavorite(id)}
              toggleRead={() => toggleRead(id)}
            />
          );
        }
      )}
    </div>
  );
};

export default Posts;
