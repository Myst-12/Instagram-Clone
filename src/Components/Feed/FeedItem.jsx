import { useState } from "react";

function FeedItem({ post }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="post-card">
      
      {/* Header */}
      <div className="post-header">
        <div className="post-user">
          <img src={post.avatar} alt="avatar" />
          <span>{post.username}</span>
        </div>
        <span className="more">•••</span>
      </div>

      {/* Image */}
      <div className="post-image">
        <img
          src={post.image}
          alt="post"
          onDoubleClick={() => setLiked(true)}
        />
      </div>

      {/* Actions */}
      <div className="post-actions">
        <div className="left-actions">
          <span onClick={() => setLiked(!liked)}>
            {liked ? "❤️" : "🤍"}
          </span>
          <span>💬</span>
          <span>📤</span>
        </div>
        <span>🔖</span>
      </div>

      {/* Caption */}
      <div className="post-caption">
        <span className="username">{post.username}</span>
        <span className="caption">{post.caption}</span>
      </div>
    </div>
  );
}

export default FeedItem;