import { useState } from 'react'

import { Input } from '../Common/Input/Input'
import { Button } from '../Common/Button/Button'

const initial = {
  post: { title: '', body: '' },
}

export const Form = ({ add }) => {
  const [post, setPost] = useState(initial.post)

  const createPost = (e) => {
    e.preventDefault()

    add({ ...post, id: Date.now() })

    setPost(initial.post)
  }

  const handleTitle = (event) => setPost({ ...post, title: event.target.value })

  const handleBody = (event) => setPost({ ...post, body: event.target.value })

  return (
    <form className='form' onSubmit={createPost}>
      <Input
        value={post.title}
        type='text'
        placeholder='Название поста'
        onChange={handleTitle}
      />

      <Input
        value={post.body}
        type='text'
        placeholder='Описание поста'
        onChange={handleBody}
      />

      <Button type='submit'>Создать пост</Button>
    </form>
  )
}
