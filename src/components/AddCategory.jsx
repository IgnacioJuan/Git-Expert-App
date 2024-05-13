import { useState } from "react"

export const AddCategory = ( {onNewCategory} ) => {
    const [inputValue, setInputValue] = useState('One puch');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // console.log(inputValue);
        onNewCategory( inputValue.trim() );
        setInputValue("");
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar"
                value={inputValue}
                // onChange={(event) => onInputChange(event)}/>
                onChange={onInputChange} />
        </form>
    )
}
