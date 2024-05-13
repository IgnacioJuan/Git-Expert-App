import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    //useStatesnipped
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        // Usando el array
        // setCategories([...categories, 'valorant']);
        // Usando el callback
        setCategories(prevValue => [...prevValue, newCategory]);
        // console.log(newCategory);
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifEspertApp</h1>
            {/* Input */}
            <AddCategory
                // setCategories = {setCategories}
                onNewCategory={value => onAddCategory(value)}
            />
            <button onClick={onAddCategory}>Add</button>
            {/* Listado de valores */}
            {/* {categories.map(categorie => {
                    return (
                        <li key={categorie}>{categorie}</li>
                    )
                })} */}
            {categories.map((categorie) =>
                <GifGrid key={categorie} category={categorie} />
            )}
        </>
    )
}
