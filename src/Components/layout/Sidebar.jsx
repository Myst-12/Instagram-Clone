import React from 'react'
import logo from "../../Images/logo.png";
import { Home, Search, Compass, Heart, PlusSquare, Clapperboard, Send } from "lucide-react"
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

  const navigate = useNavigate();

  const menu = [
    { name: "Home", icon: <Home size={22} />, path: "/" },
    { name: "Reels", icon: <Clapperboard size={22} /> },
    { name: "Messages", icon: <Send size={22} />, path: "/inbox" },
    { name: "Search", icon: <Search size={22} /> },
    { name: "Explore", icon: <Compass size={22} /> },
    { name: "Notifications", icon: <Heart size={22} /> },
    { name: "Create", icon: <PlusSquare size={22} /> }
  ]

  return (
    <div className="SidebarBox">

      <div className='LogoBox'>
        <img src={logo} className="logo"/>
      </div>

      <div className='SideBox'>
        {menu.map((item, index) => (
          <div 
            key={index} 
            className="menuItem"
            onClick={() => item.path && navigate(item.path)}
            style={{ cursor: item.path ? "pointer" : "default" }}
          >
            <span className="icon">{item.icon}</span>
            <span className="text">{item.name}</span>
          </div>
        ))}
      </div>

      <div className='BottomBox'>
        <div className="menuItem">
          <span className="text">More</span>
        </div>
        <div className="menuItem">
          <span className="text">Also From Meta</span>
        </div>
      </div>

    </div>
  )
}

export default Sidebar