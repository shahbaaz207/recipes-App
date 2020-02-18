import React, { useEffect, useState } from 'react'
import Recipe from './Components/Recipe';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Components/Header';

export default function App() {

  const APP_ID='56a21e4e';
  const APP_KEY='10e039a9170a8456a492556e9dfbb4ab	';

const [recipes, setRecipes]=useState([]);
const [search,setSearch]=useState("")
const [query,setQuery]=useState('chicken')
  useEffect(()=>{
    getRecipes();
    
  },[query])

    const getRecipes=async()=>{
    const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data= await response.json();
    setRecipes(data.hits)
    console.log(data.hits);
    
  }
 
 const updateSearch=e=>{
    setSearch(e.target.value)
    // console.log(search);
    
 };

 const getSearch=e=>{
   e.preventDefault();
   setQuery(search);
   setSearch('')
 }

  return (
    <div className="App">
    <Header/>
      <form className="search_form" onSubmit={getSearch}>
        <input type="text" className="form-control" placeholder="enter recipes.." value={search}
         onChange={updateSearch} required/>
        <button className="search_button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe=>(
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
      
    </div>
  )
}
