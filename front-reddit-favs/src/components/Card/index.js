/** @jsx jsx */
import { jsx } from "theme-ui";
import { timeSince } from "../../utils";
import { MdFavoriteBorder } from "react-icons/md";

const Card = ({
  author,
  title,
  url,
  created_utc,
  thumbnail,
  toggleSplitMode,
}) => {
  const toggleFavorite = () => {
    console.log("Make me a favorite");
  };

  return (
    <div
      key={`${author}${created_utc}`}
      sx={{
        variant: "containers.card",
        mt: "1rem",
        p: "0",
        position: "relative",
        cursor: "pointer",
      }}
      onClick={() => toggleSplitMode(url)}
    >
      <h2 sx={{ bg: "primary", m: "0", p: "1rem" }}>{title}</h2>
      <div sx={{ p: "1rem" }}>
        <h3 sx={{ m: "0" }}>{author}</h3>
        <img src={thumbnail} />
        <p sx={{ m: "0" }}>{timeSince(created_utc)}</p>
      </div>
      <MdFavoriteBorder
        onClick={toggleFavorite}
        sx={{
          fontSize: "2rem",
          position: "absolute",
          right: "10px",
          bottom: "10px",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default Card;
