import { useParams } from "react-router-dom";

export default function Chat() {
  const { id } = useParams();

  return (
    <div style={{ color: "white", padding: "20px" }}>
      <h2>Chat with {id}</h2>
    </div>
  );
}