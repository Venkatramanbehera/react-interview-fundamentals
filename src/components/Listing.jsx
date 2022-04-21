import React, { useState } from 'react'

const Listing = () => {
    console.log('Initial Rendering.............');
    const [fruits, setFruits] = useState([
        {
            id: 1,
            name: 'Apple'
        },
        {
            id: 2,
            name: 'Berry'
        },
        {
            id: 3,
            name: 'Orange'
        },
        {
            id: 4,
            name: 'Mango'
        }
    ])

    const handleChangeDelete = (id) => {
        const res = fruits.filter((fruit, index) => {
            return fruit.id !== id
        })
        setFruits(res);
    }

    return (
        <div>
            {
                fruits.map((fruit, index) => {
                    return (
                        <div key={index}>
                            <li>
                                {fruit.name}
                                <button
                                    onClick={() => {
                                        handleChangeDelete(fruit.id)
                                    }}>
                                    Delete
                                </button>
                            </li>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Listing