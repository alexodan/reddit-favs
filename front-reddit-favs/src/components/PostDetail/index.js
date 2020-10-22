/** @jsx jsx */
import { jsx } from "theme-ui";

const htmlDecode = (content) => {
  let e = document.createElement("div");
  e.innerHTML = content;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
};

const PostDetail = ({ post }) => {
  const { title, thumbnail, selftext_html } = post;
  return (
    <div sx={{ padding: "2rem" }}>
      <h2>{title}</h2>
      {thumbnail && <img src={thumbnail} alt={title} />}
      <div
        dangerouslySetInnerHTML={{
          __html: htmlDecode(selftext_html),
        }}
      ></div>
    </div>
  );
};

export default PostDetail;
