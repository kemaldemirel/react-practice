import { useState } from 'react'

import { Form } from './components/Post/Form'
import { List } from './components/Post/List'

import './styles/App.css'

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JavaScript the best' },
    { id: 2, title: 'JavaScript 2', body: 'JavaScript the best' },
    { id: 3, title: 'Java', body: 'JavaScript the best' },
    { id: 3, title: 'JavaScript 3', body: 'JavaScript the best' },
  ])

  const addPost = (post) => setPosts((posts) => posts.concat(post))

  const removePost = (post) =>
    setPosts((posts) => posts.filter((p) => p.id !== post.id))

  return (
    <div className='App'>
      <Form add={addPost} />

      {posts.length !== 0 ? (
        <List title='Список постов 1' posts={posts} remove={removePost} />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Записей не найдено</h1>
      )}
    </div>
  )
}
