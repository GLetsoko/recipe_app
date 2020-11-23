import React,{useState, useContext} from 'react';
import {RecipesContext} from '../contexts/RecipesContext'
import {Form, Button} from 'react-bootstrap';
const FormSearch = () =>{
    const [search, setSearch] = useState('');
    const {searchRecipes} = useContext(RecipesContext);

    const handleChange = e =>{
        setSearch(e.target.value);
    }
    const handleSubmit = e =>{
        e.preventDefault();
        if(search){
            searchRecipes(search);
            setSearch('');
        }
    }
    return(
        <header>
        <h2>Recipe App</h2>
        <div className="form">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                <Form.Control 
                    type="text" 
                    value={search} 
                    onChange={handleChange} 
                    placeholder="Search your favourite recipe" />
                </Form.Group>
                <Button variant="success" type="submit">
                Search
                </Button>
            </Form>
      </div>
    </header>
    )
}

export default FormSearch;