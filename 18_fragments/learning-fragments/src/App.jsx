/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import FoodItems from './components/FoodItems';
import ErrorMassage from './components/ErrorMassage';
import './App.css'
import Container from './components/Container';
import FoodInput from './components/FoodInput';
const App = () => {

  
  
  // let foodItems = [];

    
    let [foodItems,setFoodItems] = useState([])

  


  const onKeyDown = (event) => { 
    if(event.key === "Enter"){
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems,newFoodItem]
      setFoodItems(newItems);
     
    }

  }


  return (
<>
  <Container>
  <h1 className='food-heading'>Healthy Food</h1>
  <ErrorMassage items={foodItems}></ErrorMassage>
  <FoodInput handleKeDown={onKeyDown}></FoodInput>

   <FoodItems items={foodItems}></FoodItems>
   </Container>

   </>
 
   
  )
}

export default App
