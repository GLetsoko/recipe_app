import React, {useContext} from 'react'
import { RecipesContext } from '../contexts/RecipesContext'
import Recipe from './Recipe'

const RecipesList = () => {
    const {recipes} = useContext(RecipesContext);

    return <div className="content">
        {recipes.map((recipe, index) => {
            return <Recipe recipes={recipe.recipe} key={index}/>
        })}
    </div>
}

export default RecipesList
