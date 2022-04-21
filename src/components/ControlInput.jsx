import React, { useState } from 'react'

const ControlInput = () => {
    const [name, setName] = useState('');
    const handleChange = (e) => setName(e.target.value.toString().toUpperCase())
    return (
        <div>
            <input type="text" value={name} onChange={handleChange} />
        </div>
    )
}

export default ControlInput