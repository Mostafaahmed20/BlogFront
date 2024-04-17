import Post from "../POST/Post";
import "./Posts.css";

export default function Posts({ posts }) {
  {console.log(posts)}
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} key={p._id} />
      ))}
    </div>
  );
}