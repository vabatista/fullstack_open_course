import React from 'react'

const NewPerson = ({addPerson, newName, newPhone, handleNameChange, handlePhoneChange}) => {
    
    return (
        <form onSubmit={addPerson}>
            <div>
                Name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                Phone: <input value={newPhone} onChange={handlePhoneChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default NewPerson