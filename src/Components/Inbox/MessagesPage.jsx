import React from "react";

const chats = [
  {
    name: "Dakshraj",
    message: "Hi how are you doing?",
    time: "2h",
    img: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Kushal",
    message: "Congratulations on winning the Hackathon",
    time: "1h",
    img: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Sourav",
    message: "Leesssgoooo we got an internship",
    time: "5m",
    img: "https://i.pravatar.cc/150?img=3",
  },
];

const MessagesPage = () => {
  return (
    <div
      style={{
        background: "#000",
        height: "100vh",
        color: "white",
        padding: "20px",
        maxWidth: "400px",
      }}
    >
      {/* Header */}
      <h2 style={{ marginBottom: "20px" }}>username ✏️</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search"
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "10px",
          border: "none",
          background: "#262626",
          color: "white",
          marginBottom: "20px",
        }}
      />

      {/* Chat List */}
      {chats.map((chat, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 0",
            borderBottom: "1px solid #222",
            cursor: "pointer",
          }}
        >
          {/* Left side */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={chat.img}
              alt=""
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginRight: "12px",
              }}
            />

            <div>
              <div style={{ fontWeight: "bold" }}>{chat.name}</div>
              <div style={{ color: "#aaa", fontSize: "14px" }}>
                {chat.message}
              </div>
            </div>
          </div>

          {/* Time */}
          <div style={{ color: "#aaa", fontSize: "12px" }}>
            {chat.time}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessagesPage;