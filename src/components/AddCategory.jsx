import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmitPress = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;
            /*
            con esta validacion nos aseguramos que siempre el campo del input tenga minimo un caracter
            */
        // setCategories(categories => [inputValue, ...categories]);
            /*
            este setCategories lo estamos enviando por medio de props desde el componente padre 
            hasta aca y lo que hace es imprimir el nuevo valor en el <li></li> pero tomando el valor
            del inputValue del formulario y lo hace cuando presionamos enter despue sde escribir
            en el formulario.

            tambien toma la variable "categories" para poder conservar el estado de la lista 
            en su ultimo state
            */
        onNewCategory(inputValue.trim());
        setInputValue(''); // reinicia el valor del input despues de presionar enter
    };

    return (

        <form onSubmit={ onSubmitPress }>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                // onChange={(e) => onInputChange(e)} // forma larga.
                onChange={ onInputChange }
            />
        </form>
    );
};
