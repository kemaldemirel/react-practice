import React from 'react';
import MyButton from './UI/buttons/MyButton';

const PostItem = ({post, number, remove}) => {

  return (
    <div className="post">
      <div className="post__sontent">
        <strong>{number}. {post.title}</strong>
        <div>
          {post.body}
        </div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
      </div>
    </div>
  )
}

export default PostItem;

