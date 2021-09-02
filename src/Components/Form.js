import React from 'react'

export default function Form({inputText, setInputText, condiments, setCondiments}) {
    
    function inputTextValue(e) {
        setInputText(e.target.value);
    }

    function addCondiment(e) {
        e.preventDefault();
        setCondiments([
            ...condiments,
            {text : inputText}
        ]);
        setInputText("");
    }

    return (
        <div>
            <form className="form">
                <input value={inputText} onChange={inputTextValue} className="form__input" type="text" />
                <button onClick={addCondiment} className="form__btn" type="submit">
                    +
                </button>
            </form>
        </div>
    )
}
