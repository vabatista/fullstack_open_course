import React, { useState } from 'react'
import blogService from '../services/blogs'


const BlogForm = ({ blogs, setBlogs }) => {
  const [newBlog, setNewBlog] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')


  const handleAddBlogEntry = (event) => {
    event.preventDefault()
    const blog = {
      title: newBlog,
      likes: 0,
      url: url,
      author: author
    }

    blogService
      .create(blog)
      .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
        setNewBlog('')
        setAuthor('')
        setUrl('')
      })
  }

  return (
    <div>
      <form onSubmit={handleAddBlogEntry}>
				Text: <input
          value={newBlog}
          onChange={({ target }) => setNewBlog(target.value)}
        />
		Author: <input
          value={author}
          onChange={({ target }) => setAuthor(target.value)}
        />
			URL:<input
          value={url}
          onChange={({ target }) => setUrl(target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default BlogForm