import React from 'react'

const Filter = ({ sfilter, handleSfilterChange }) => {
    return (
        <div>
            Filter shown with: <input value={sfilter} onChange={handleSfilterChange} />
        </div>

    )
}

export default Filter