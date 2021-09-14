import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)

  const dicrement = () => setCount(count - 1)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Likes</button>
      <button onClick={dicrement}>Dislikes</button>
    </div>
  )
}
