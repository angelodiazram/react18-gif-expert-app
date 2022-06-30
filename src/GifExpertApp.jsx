import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto']);

    const onAddCategory = (newCategory) => {

        // console.log(newCategory);

        if (categories.includes(newCategory)) return;

        setCategories([
            newCategory,
            ...categories
        ]);
    }

    return (
        <>
            <h1> GifExpertApp </h1>
            <hr/>

            <AddCategory
                // setCategories={setCategories}
                onNewCategory = { onAddCategory }
                /*
                    el evento que recibe esta propiedad es el inputValue que proviene
                    desde el componente hijo <AddCategory /> esto lo hacemos para que podamos usar
                    ese InputValue aqui que contiene el valor ingresado por
                    en el input
                */ 
            />

            
            {
                // siempre que barremos elementos con un map y creamos algo debemos ponerle un key    
                categories.map( (category) => (
                    // <div key={category}>
                    //     <h3>{category}</h3>
                    //     <li>{category}</li> 
                    // </div>))
                    <GifGrid 
                        key = {category} 
                        category = {category}/>
                ))
            }

            
        </>
    );
};
