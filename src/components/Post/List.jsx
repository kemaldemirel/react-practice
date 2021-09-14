import { Item } from './Item'

export const List = ({ posts, title, remove }) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>{title}</h1>

    {posts.map((post, index) => (
      <Item remove={remove} post={post} number={index + 1} key={index} />
    ))}
  </div>
)
