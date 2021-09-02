import React from 'react';
import CondimentList from './CondimentList';

export default function Menu({condiments, setCondiments}) {

    return (
        <div className="menu">
            <ul className="menu__list">
                {
                    condiments.map(function(condiment, index) {
                        return (
                            <CondimentList 
                                key={index} 
                                text={condiment.text} 
                                condiment={condiment} 
                                condiments={condiments} 
                                setCondiments={setCondiments} 
                            />
                        );
                    })
                }
            </ul>
        </div>
    )
}
