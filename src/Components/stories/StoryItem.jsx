import React from 'react'

const StoryItem = ({ img, name }) => {
  return (
    <div className='StoryItemBox'>
        <div className='StoryRing'>
            <div className='StoryItemImg'>
                <img src={img} alt="story" />
            </div>
        </div>
        <p className='StoryName'>{name}</p>
    </div>
  )
}

export default StoryItem