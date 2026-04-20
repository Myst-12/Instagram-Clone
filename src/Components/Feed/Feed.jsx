import FeedItem from "./Feeditem";

const posts = [
  {
    id: 1,
    username: "sourav",
    avatar: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/37/aa/3d/caption.jpg?w=800&h=800&s=1",
    image: "https://picsum.photos/id/1011/600/500",
    caption: "Grind never stops 💪"
  },
  {
    id: 2,
    username: "daksh",
    avatar: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/37/aa/3d/caption.jpg?w=800&h=800&s=1",
    image: "https://picsum.photos/id/1015/600/500",
    caption: "Chilling vibes 🌴"
  },
  {
    id: 3,
    username: "kushal",
    avatar: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/37/aa/3d/caption.jpg?w=800&h=800&s=1",
    image: "https://picsum.photos/id/1016/600/500",
    caption: "Early Rides 🌙"
  }
];

function Feed() {
  return (
    <div className="feed-container">
      {posts.map((post) => (
        <FeedItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;