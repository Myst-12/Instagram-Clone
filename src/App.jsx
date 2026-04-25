import Sidebar from "./Components/layout/Sidebar";
import RightSidebar from "./Components/layout/RightSidebar";
import FeedLayout from "./Components/layout/FeedLayout";
import Inbox from "./Components/Inbox/Inbox";
import Chat from "./Components/Inbox/Chat";
import Messages from "./Components/Inbox/Messages";
import { Routes, Route } from "react-router-dom";
import MessagesPage from "./Components/Inbox/MessagesPage";

function App() {
  return (
    <div className="Home">
      <Sidebar />

      <div className="MainSection">
        <Routes>
          <Route path="/" element={<FeedLayout />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/messages" element={<MessagesPage />} />
        </Routes>

        <RightSidebar />
      </div>
    </div>
  );
}

export default App;