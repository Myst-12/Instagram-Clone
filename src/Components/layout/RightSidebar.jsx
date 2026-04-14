import React from 'react'

const RightSidebar = () => {

  const suggestions = [
    { name: "Daksh", info: "Follows you" },
    { name: "Sourav", info: "New to Instagram" },
    { name: "Tawde", info: "Suggested for you" },
    { name: "Desai", info: "Popular" }
  ]

  return (
    <div className="RightSidebar">

      <div className="userProfile">
        <div className="left">
          <div className="avatar"></div>
          <div>
            <p className="username">Kushal</p>
            <p className="subText">...</p>
          </div>
        </div>
        <p className="Switch">Switch</p>
      </div>

      <div className="SuggestionsHeader">
        <p>Suggested for you</p>
        <p className="seeAll">See All</p>
      </div>

      <div className="SuggestionsBox">
        {suggestions.map((user, index) => (
          <div key={index} className="suggestionItem">
            <div className="left">
              <div className="avatar small"></div>
              <div>
                <p className="Username">{user.name}</p>
                <p className="Info">{user.info}</p>
              </div>
            </div>
            <p className="Follow">Follow</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default RightSidebar