/** @jsx jsx */
import { jsx } from "theme-ui";
import { timeSince } from "../../utils";

const Card = ({ author, title, url, created_utc, thumbnail }) => {
  return (
    <div
      key={`${author}${created_utc}`}
      sx={{ variant: "containers.card", mt: "1rem", p: "0" }}
    >
      <h2 sx={{ bg: "primary", m: "0", p: "1rem" }}>
        <a href={url} sx={{ color: "text" }}>
          {title}
        </a>
      </h2>
      <div sx={{ p: "1rem" }}>
        <h3 sx={{ m: "0" }}>{author}</h3>
        <img src={thumbnail} />
        <p sx={{ m: "0" }}>{timeSince(created_utc)}</p>
      </div>
    </div>
  );
};

export default Card;
