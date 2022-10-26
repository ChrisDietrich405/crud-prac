import axios from "axios"
import "bootstrap/dist/css/bootstrap.css"
import { useState, useEffect } from 'react'

export const App = () => {
  const [posts, setPosts] = useState([])
  const apiEndPoint = "https://jsonplaceholder.typicode.com/posts"

  useEffect(() => {
    const getPosts = async () => {
      const { data: res }= await axios.get(apiEndPoint)
      setPosts(res)
    }
    getPosts()
  }, [])

  const addPost = async () => {
    const post = {title: "new post", body: "new"}
    await axios.post(apiEndPoint, post)
    setPosts([post, ...posts])
  }

  const handleUpdate = async (post) => {
    post.title = "updated title"
    await axios.put(`${apiEndPoint}/${post.id}`)
    const postsClone = [...posts]
    const index = postsClone.indexOf(post)
    postsClone[index] = {...post}
    setPosts(postsClone)
  }

  const handleDelete = async (post) => {
    await axios.delete(`${apiEndPoint}/${post.id}${post}`)
    setPosts(posts.filter(postItem => postItem.id !== post.id ))
  }
  return (
    <div>
      <div className="container">
        <h2>There are {posts.length} posts</h2>
        <button onClick={addPost} className="btn btn-primary">Add</button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => 
              <tr key={post.id}>
                <td>{post.title}</td>
                <td><button onClick={() => handleUpdate(post)}className="btn btn-info btn-sm">update</button></td>
                <td><button onClick={() => handleDelete(post)}className="btn btn-danger btn-sm">delete</button></td>
              </tr>
              )}
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default App