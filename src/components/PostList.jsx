import React from 'react'
import PostItem from './PostItem'

function PostList({posts, title, remove}) {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        {title}
      </h1>
      {posts.map((post, index) =>
        <PostItem remove={remove} post={post} number={index + 1} key={index}/>
      )}
    </div>
  )
}

export default PostList
