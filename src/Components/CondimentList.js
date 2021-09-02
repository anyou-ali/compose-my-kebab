import React from 'react'

export default function CondimentList({text, condiments, setCondiments}) {
    // function deleteCondiment(condiments) {
        
    // }

    return (
        <div className="condiment">
            <li className="condiment__list">
                {text}
            </li>
            <button className="condiment__trash-btn">
                X
            </button>
        </div>
    )
}
