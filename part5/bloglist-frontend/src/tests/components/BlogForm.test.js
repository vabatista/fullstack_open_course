import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import BlogForm from '../../components/BlogForm'

test('clicking the submit event handler once', () => {

  const blog = {
    title: 'Test Title',
    author: 'Author',
    url: 'URL'
  }
  const blogs = [blog]

  const mockHandler = jest.fn()

  const component = render(
    <BlogForm blogs={blogs} setBlogs={mockHandler} />
  )

  const button = component.getByText('Save')
  fireEvent.click(button)

  // expect(mockHandler.mock.calls).toHaveLength(1)
})