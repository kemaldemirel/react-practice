import React, {useState} from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'JavaScript the best'},
    {id: 2, title: 'JavaScript 2', body: 'JavaScript the best'},
    {id: 3, title: 'Java', body: 'JavaScript the best'},
    {id: 3, title: 'JavaScript 3', body: 'JavaScript the best'}
  ])

  const createPost = (newPost) =>{
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }
  
  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title={'Список постов 1'}/>
        : <h1 style={{textAlign: 'center'}}>Записей не найдено</h1>
      }
      
    </div>
  );
}

export default App;
