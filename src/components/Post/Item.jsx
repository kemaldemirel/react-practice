import { Button } from '../Common/Button/Button'

export const Item = ({ post, number, remove }) => (
  <div className='post'>
    <div className='post__sontent'>
      <strong>
        {number}. {post.title}
      </strong>

      <div>{post.body}</div>
    </div>

    <div className='post__btns'>
      <Button onClick={() => remove(post)}>Удалить</Button>
    </div>
  </div>
)
