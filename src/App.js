import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import foods from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Card, Col, Divider, Button } from "antd";

const foodsJson = foods.slice();

function App(){
 
  const [foodData, setFoodData] = useState(foodsJson);
  const [foods, setFoods] = useState(foodsJson);
  

  function addFood(newFood){
    setFoods([...foods, newFood])
  }

  function checkFood(searchedFood){
    const searchResults = foodData.filter((food)=>{
    return food.name.toLowerCase().includes(searchedFood.toLowerCase())});

    setFoods(searchResults)
  }

  function deleteFood(foodDeleted){
    const newFoodData = foods.filter((food)=>food !== foodDeleted)
    setFoodData(newFoodData);
    setFoods(newFoodData);
  }

  function toggleForm(){
    document.getElementById("formSection").classList.toggle("hidden")
    document.getElementById("openFormBtn").classList.toggle("hidden")
  }

  return (
    <div className="App">
    <h1>Search</h1>
     <Search checkFood={checkFood}/>
    
    <button id="openFormBtn" onClick={()=>toggleForm()}>Add New Food</button>
    <section id="formSection" className="hidden">
     <h1>Add food entry</h1>
     <AddFoodForm addFood={addFood}/>
     <Button onClick={()=>toggleForm()}>Hide Form</Button>
     </section>

     <h1>Food List</h1>
      {foods.map((foodItem)=>(
        <FoodBox food={foodItem} deleteFood={deleteFood}/>
      ))}
    </div>
  );
}

export default App;
