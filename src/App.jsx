import Sidebar from "./Components/layout/Sidebar"
import RightSidebar from "./Components/layout/RightSidebar"
import FeedLayout from "./Components/layout/FeedLayout"


function App() {
  return (
    <div className="Home">
      <Sidebar />

      <div className="MainSection">
        <FeedLayout />
        <RightSidebar />
      </div>
      
    </div>
  )
}

export default App
