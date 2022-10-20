import img from './IMG_20180126_174229.jpg'
import './post.css'
import React from 'react'

const Post = () => {
  return (
    <div>
        <div className='newsfeed'>
          <div className='post'>
            <img src= {img} alt='m' style={{width: "80%"}}/>
          </div>
          <div className='post'>
            <img src= {img} alt='m' style={{width: "80%"}}/>
          </div>
          <div className='post'>
            <img src= {img} alt='m' style={{width: "80%"}}/>
          </div>
        </div>
    </div>
  )
}

export default Post;