import React from 'react'
import StoryBar from '../stories/StoryBar'
import Feed from '../Feed/Feed'

const FeedLayout = () => {
  return (
    <div className='FeedLayoutBox'>
      <StoryBar />
      <Feed />
    </div>
  )
}

export default FeedLayout