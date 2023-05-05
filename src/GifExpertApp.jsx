import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Nezuko']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory))return;

        //AGREGAR ELEMENTOS A UN ARREGLO CON ESTADO
        //setCategories(['One Punch', 'Dragon ball', 'Valorant])
        //setCategories(cat => [...cat, 'Valorant'])
        //setCategories([...categories,'Valorant']);
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            //setCategories={setCategories}
            onNewCategory={value => onAddCategory(value)}
            />

            {
                categories.map(category => {
                    return(
                        <GifGrid key={category} category={category}/>
                    )
                })
            }

        </>
    )
}