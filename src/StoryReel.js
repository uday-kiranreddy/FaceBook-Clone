import React from 'react'
import './StoryReel.css'
import Story from './Story'
function StoryReel() {
  return (
    <div className='storyReel'>
        {/* story  */}
        <Story image="https://cdn.pixabay.com/photo/2016/11/29/09/41/bag-1868758__340.jpg" profileSrc="https://cdn.pixabay.com/photo/2015/08/05/04/25/people-875617__340.jpg" title="uday"/>
        <Story image="https://cdn.pixabay.com/photo/2015/07/20/13/01/man-852770__340.jpg" profileSrc="https://cdn.pixabay.com/photo/2015/07/20/13/01/man-852770__340.jpg" title="rafeh qazi"/>
        <Story image="https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574__340.jpg" profileSrc="https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574__340.jpg" title="sony sanga"/>
        <Story image="https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721__340.jpg" profileSrc="https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721__340.jpg" title="frankie"/>
        <Story image="https://cdn.pixabay.com/photo/2015/09/08/17/35/man-930397__340.jpg" profileSrc="https://cdn.pixabay.com/photo/2015/09/08/17/35/man-930397__340.jpg" title="aaron badrinath"/>

    </div>
  )
}

export default StoryReel