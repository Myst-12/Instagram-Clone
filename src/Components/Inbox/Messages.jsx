import React from "react";
import { useNavigate } from "react-router-dom";

const Messages = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        onClick={() => navigate("/messages")}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#262626",
          padding: "12px 18px",
          borderRadius: "30px",
          color: "white",
          cursor: "pointer",
        }}
      >
        💬 Messages
      </div>
    </div>
  );
};

export default Messages;