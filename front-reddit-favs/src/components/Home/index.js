/** @jsx jsx */
import { jsx } from "theme-ui";
import Card from "../Card";

const Home = ({ posts }) => {
  return (
    <div
      sx={{
        color: "text",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        mt: "2rem",
        px: "1rem",
        pb: "2rem",
      }}
    >
      {posts.map(({ author, title, url, created, thumbnail }) => {
        return (
          <Card
            author={author}
            title={title}
            url={url}
            created={created}
            thumbnail={thumbnail}
          />
        );
      })}
    </div>
  );
};

export default Home;
