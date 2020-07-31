//Code copied from example https://github.com/fullstack-hy2020/part2-notes/blob/part2-7/src/components/Notification.js
import React from 'react'

const Notification = ({ message, isError }) => {
    console.log(message)
    console.log(isError)
    if (message === null) {
        return null
    }
    if (isError) {
        return (
            <div className="error">
                {message}
            </div>
        )
    } else {
        return (
            <div className="notification">
                {message}
            </div>
        )
    }

}

export default Notification