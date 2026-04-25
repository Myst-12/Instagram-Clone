import React from "react";
import { useNavigate } from "react-router-dom";

const chats = [
  {
    name: "Dakshraj",
    message: "Hi how are you doing?",
    img: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Kushal",
    message: "Congratulations on winning the Hackathon",
    img: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Sourav",
    message: "Leesssgoooo we got an internship",
    img: "https://i.pravatar.cc/150?img=3",
  },
];

const MessagesPage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "#121212",
        height: "100vh",
        color: "white",
        padding: "20px",
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        style={{
          marginBottom: "20px",
          padding: "8px 12px",
          cursor: "pointer",
        }}
      >
        ⬅ Back
      </button>

      <h2>Messages</h2>

      {chats.map((chat, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "12px",
            borderBottom: "1px solid #333",
            cursor: "pointer",
          }}
        >
          <img
            src={chat.img}
            alt=""
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              marginRight: "12px",
            }}
          />

          <div>
            <div style={{ fontWeight: "bold" }}>{chat.name}</div>
            <div style={{ fontSize: "13px", color: "#aaa" }}>
              {chat.message}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessagesPage;