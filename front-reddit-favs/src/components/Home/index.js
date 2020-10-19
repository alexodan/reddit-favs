/** @jsx jsx */
import { jsx } from "theme-ui";

const Home = ({ posts }) => {
  return (
    <div sx={{ color: "text" }}>
      {posts.map(({ author, title, url, created, thumbnail }) => {
        console.log(`${author}${created}`);
        return (
          <a href={url} key={`${author}${created}`}>
            <div sx={{ variant: "containers.card" }}>
              <h2>{title}</h2>
              <h3>{author}</h3>
              <img src={thumbnail} />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Home;
