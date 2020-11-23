import './App.css';
import FormSearch from './components/FormSearch';
import RecipesList from './components/RecipesList';
import RecipesContextProvider from './contexts/RecipesContext';

function App() {
  return (
    <div className="App">
      <RecipesContextProvider>
        <FormSearch />
        <RecipesList />
      </RecipesContextProvider>
    </div>
  );
}

export default App;
