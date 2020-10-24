/** @jsx jsx */
import { jsx } from "theme-ui";
import { timeSince } from "../../utils";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { BiEnvelopeOpen } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";

const Card = ({
  id,
  author,
  title,
  url,
  created_utc,
  thumbnail,
  faved,
  read,
  toggleSplitMode,
  toggleFavorite,
  toggleRead,
}) => {
  const onToggleFavorite = (evt, postId) => {
    evt.stopPropagation();
    toggleFavorite(postId);
  };

  const onToggleRead = (evt, postId) => {
    evt.stopPropagation();
    toggleRead(postId);
  };

  return (
    <div
      role="presentation"
      key={`${id}`}
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
        {thumbnail && (
          <img src={thumbnail} sx={{ width: "100%" }} alt={title} />
        )}
        <p sx={{ m: "0" }}>{timeSince(created_utc)}</p>
      </div>
      <div sx={{ position: "absolute", right: "10px", bottom: "10px" }}>
        {faved ? (
          <MdFavorite
            onClick={(evt) => onToggleFavorite(evt, id)}
            sx={{
              fontSize: "2rem",
              cursor: "pointer",
            }}
          />
        ) : (
          <MdFavoriteBorder
            onClick={(evt) => onToggleFavorite(evt, id)}
            sx={{
              fontSize: "2rem",
              cursor: "pointer",
            }}
          />
        )}
        {read ? (
          <BiEnvelopeOpen
            onClick={(evt) => onToggleRead(evt, id)}
            sx={{
              fontSize: "2rem",
              cursor: "pointer",
            }}
          />
        ) : (
          <BiEnvelope
            onClick={(evt) => onToggleRead(evt, id)}
            sx={{
              fontSize: "2rem",
              cursor: "pointer",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
