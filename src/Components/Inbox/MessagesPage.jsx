import React from "react";

const chats = [
  {
    name: "Dakshraj",
    message: "Hi how are you doing?",
    time: "2h",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/37/aa/3d/caption.jpg?w=800&h=800&s=1",
  },
  
  {
    name: "Kushal",
    message: "Congratulations on winning the Hackathon",
    time: "1h",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/37/aa/3d/caption.jpg?w=800&h=800&s=1",
  },
  {
    name: "Sourav",
    message: "Leesssgoooo we got an internship",
    time: "5m",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/37/aa/3d/caption.jpg?w=800&h=800&s=1",
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
   
      <h2 style={{ marginBottom: "20px" }}>username ✏️</h2>

     
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

    
          <div style={{ color: "#aaa", fontSize: "12px" }}>
            {chat.time}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessagesPage;