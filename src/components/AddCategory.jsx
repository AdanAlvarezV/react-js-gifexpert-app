import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState()

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        //MANEJAR FUNCION RECIBIDA DEL PADRE, CON PARAMETRO QUE VIENE DEL PADRE, RECIBIENDO EL SETSTATE
        //setCategories(categories => [...categories, inputValue]);

        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return(
        <>
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}/>
        </form>
        </>
    )
}