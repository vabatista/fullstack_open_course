import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from '../../components/Blog'
// import { prettyDOM } from '@testing-library/dom'

test('renders blog content', () => {
  const blog = {
    title: 'Test Title',
    author: 'Author',
    url: 'URL',
    likes: 0
  }

  const component = render(
    <Blog blog={blog} />
  )

  expect(component.container).toHaveTextContent(
    'Test Title'
  )

  // console.log(prettyDOM(component.container.querySelector('div')))
})

test('Blog component show correct fields', () => {
  const blog = {
    title: 'Test Title',
    author: 'Author',
    url: 'URL',
    likes: 1
  }

  const component = render(
    <Blog blog={blog} />
  )

  expect(component.container).toHaveTextContent(
    'Test Title'
  )
  expect(component.container).toHaveTextContent('Author')
  expect(component.container).not.toHaveTextContent('URL')
  expect(component.container).not.toHaveTextContent('1')


})