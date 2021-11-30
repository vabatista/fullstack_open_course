import React from 'react'

const Notification = ({ message }) => {
  if (message === null || message === '') {
    return null
  }
  console.log('Notification', message)
  return (
    <div className="error">
      {message}
    </div>
  )
}

export default Notification