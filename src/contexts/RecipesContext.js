import React, { useState, useEffect, createContext } from 'react';

export const RecipesContext = createContext();
const APP_ID = '00fbe22a';
const APP_KEY = '4a56a9f2c1da40b4cdd3c767f1c76817'
const RecipesContextProvider = (props) =>{
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('chicken');
    const getRecipes = async () => {
        const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
        const response = await fetch(url);
        const jsonData = await response.json();

        setRecipes(jsonData.hits);
    }

    const searchRecipes = search =>{
        setQuery(search);
    }

    useEffect(()=>{
        getRecipes();
    },[query])
    return <>
        <RecipesContext.Provider value={{recipes, searchRecipes}}>
            {props.children}
        </RecipesContext.Provider>
    </>
}

export default RecipesContextProvider;