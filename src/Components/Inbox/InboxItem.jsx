import { useNavigate } from "react-router-dom";

export default function InboxItem({ name, message, time, unread }) {
  const navigate = useNavigate();

  return (
    <div
      className="inbox-item"
      onClick={() => navigate(`/chat/${name}`)}
      style={{ cursor: "pointer" }}
    >
      <img src="https://via.placeholder.com/50" />

      <div>
        <h4>{name}</h4>
        <p>{message}</p>
      </div>

      <div>
        <span>{time}</span>
        {unread && <div className="dot"></div>}
      </div>
    </div>
  );
}